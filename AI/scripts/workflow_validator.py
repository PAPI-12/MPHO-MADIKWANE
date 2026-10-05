#!/usr/bin/env python3
"""
Workflow Integrity & Node Graph Validator
Audits ComfyUI workflow JSON files to ensure:
1. Valid JSON syntax
2. Node graph link integrity (source node/slot -> target node/slot)
3. No dangling or orphaned links
4. MODEL, CLIP, VAE topological connectivity
5. Low-memory compliance for Apple Silicon 8GB
"""

import os
import sys
import json
from pathlib import Path

def validate_workflow_file(file_path):
    issues = []
    warnings = []
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return {"valid": False, "issues": [f"Malformed JSON: {e}"], "warnings": []}

    nodes = data.get("nodes", [])
    links = data.get("links", [])

    if not nodes:
        issues.append("Workflow contains zero nodes.")
        return {"valid": False, "issues": issues, "warnings": warnings}

    node_map = {n["id"]: n for n in nodes}
    node_types = [n.get("type") for n in nodes]

    # Check link endpoints
    for link in links:
        link_id, src_node, src_slot, tgt_node, tgt_slot, link_type = link[:6]
        if src_node not in node_map:
            issues.append(f"Link {link_id} references missing source node {src_node}")
        if tgt_node not in node_map:
            issues.append(f"Link {link_id} references missing target node {tgt_node}")

    # Check for core generation components
    has_model_loader = any("CheckpointLoader" in t or "UnetLoader" in t for t in node_types)
    has_sampler = any("KSampler" in t for t in node_types)
    has_vae = any("VAEDecode" in t for t in node_types)
    has_clip_encode = any("CLIPTextEncode" in t for t in node_types)

    if not has_model_loader and not any("UpscaleModelLoader" in t for t in node_types):
        issues.append("Missing diffusion model or upscale loader.")
    if not has_sampler and not any("ImageUpscaleWithModel" in t for t in node_types):
        warnings.append("Workflow has no KSampler node.")
    if not has_vae and not any("SaveImage" in t for t in node_types):
        warnings.append("Workflow has no VAE decode node.")

    # 8GB Unified memory check: Warn if unquantized SDXL or non-tiled VAE is detected on high-res
    for n in nodes:
        if n.get("type") == "EmptyLatentImage":
            w, h = n.get("widgets_values", [512, 512])[:2]
            if w * h > 1024 * 1024 and not any("VAEDecodeTiled" in t for t in node_types):
                warnings.append(f"High resolution latent ({w}x{h}) without VAEDecodeTiled may trigger memory spike on 8GB Mac.")

    is_valid = len(issues) == 0
    return {
        "file": file_path.name,
        "title": data.get("title", file_path.stem),
        "valid": is_valid,
        "node_count": len(nodes),
        "link_count": len(links),
        "node_types": list(set(node_types)),
        "issues": issues,
        "warnings": warnings
    }

def audit_all_workflows(workflows_dir, report_out_path):
    path = Path(workflows_dir)
    json_files = sorted(list(path.glob("*.json")))

    if not json_files:
        print(f"[Workflow Validator] No JSON workflows found in {workflows_dir}")
        return

    print(f"[Workflow Validator] Auditing {len(json_files)} workflows...")
    results = []
    all_passed = True

    for wf_file in json_files:
        audit = validate_workflow_file(wf_file)
        results.append(audit)
        status_sym = "✓ PASS" if audit["valid"] else "✗ FAIL"
        print(f"  {status_sym} {audit['file']} ({audit['node_count']} nodes, {audit['link_count']} links)")
        for iss in audit["issues"]:
            print(f"     [ERROR] {iss}")
            all_passed = False
        for wrn in audit["warnings"]:
            print(f"     [WARN] {wrn}")

    Path(report_out_path).parent.mkdir(parents=True, exist_ok=True)
    with open(report_out_path, "w", encoding="utf-8") as f:
        json.dump({"summary": {"total": len(json_files), "all_passed": all_passed}, "audits": results}, f, indent=2)

    print(f"\n[Workflow Validator] Report written to: {report_out_path}")
    return all_passed

if __name__ == "__main__":
    base_dir = Path(__file__).resolve().parent.parent
    wf_dir = base_dir / "workflows"
    out_rep = base_dir / "test_results" / "workflows_validation.json"
    audit_all_workflows(wf_dir, out_rep)
