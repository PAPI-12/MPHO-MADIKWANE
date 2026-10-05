#!/usr/bin/env python3
"""
ComfyUI Workflow Generator for MacBook Neo (Apple A18 Pro 8GB)
Generates native ComfyUI UI graphs and API-compatible JSON workflows:
1.  01_simple_generation_sd15_photo.json
2.  02_pro_generation_modular_sd15.json
3.  03_pro_generation_sdxl_quantized.json
4.  04_mode_a_face_identity_reference.json
5.  05_mode_b_style_reference.json
6.  06_mode_c_subject_reference.json
7.  07_mode_d_composition_reference.json
8.  08_personal_lora_workflow.json
9.  09_non_destructive_upscale_refinement.json
10. 10_low_memory_profile_workflow.json
11. 11_quality_profile_workflow.json
12. 12_fast_preview_workflow.json
"""

import os
import json
from pathlib import Path

def create_base_workflow(title, description, nodes, links, groups=None):
    return {
        "title": title,
        "description": description,
        "target_hardware": "MacBook Neo (Apple A18 Pro - 8GB Unified Memory)",
        "mps_optimized": True,
        "last_node_id": max(n["id"] for n in nodes),
        "last_link_id": max([l[0] for l in links]) if links else 0,
        "nodes": nodes,
        "links": links,
        "groups": groups or [],
        "config": {},
        "extra": {
            "author": "Mpho Madikwane Engineering System",
            "date": "2026-10-05"
        },
        "version": 0.4
    }

def generate_all_workflows(output_dir):
    out_path = Path(output_dir)
    out_path.mkdir(parents=True, exist_ok=True)

    # -------------------------------------------------------------
    # 01 - SIMPLE MODE: SD1.5 Photorealism
    # -------------------------------------------------------------
    w1_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "flags": {},
            "order": 0,
            "mode": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2, 3], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [7], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "CLIPTextEncode",
            "pos": [400, 50],
            "size": [420, 180],
            "flags": {},
            "order": 1,
            "mode": 0,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [4], "slot_index": 0}],
            "widgets_values": [
                "High-end editorial portrait photograph of a South African male model standing in a minimal contemporary studio, natural skin texture, realistic pores, subtle facial imperfections, detailed hair strands, premium fashion styling, physically believable lighting, realistic fabric texture, shallow depth of field, professional commercial photography, shot on 85mm lens at f/2.0."
            ]
        },
        {
            "id": 3,
            "type": "CLIPTextEncode",
            "pos": [400, 280],
            "size": [420, 160],
            "flags": {},
            "order": 2,
            "mode": 0,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 3}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [5], "slot_index": 0}],
            "widgets_values": [
                "plastic skin, waxy face, smooth mannequin, deformed hands, extra fingers, mutated limbs, bad eyes, uncanny valley, CGI render, 3d illustration, cartoon, oversaturated, blurry, low resolution, blown-out highlights"
            ]
        },
        {
            "id": 4,
            "type": "EmptyLatentImage",
            "pos": [400, 480],
            "size": [315, 106],
            "flags": {},
            "order": 3,
            "mode": 0,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [6], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 5,
            "type": "KSampler",
            "pos": [870, 100],
            "size": [315, 262],
            "flags": {},
            "order": 4,
            "mode": 0,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "positive", "type": "CONDITIONING", "link": 4},
                {"name": "negative", "type": "CONDITIONING", "link": 5},
                {"name": "latent_image", "type": "LATENT", "link": 6}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [8], "slot_index": 0}],
            "widgets_values": [42, "randomize", 25, 5.5, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 6,
            "type": "VAEDecode",
            "pos": [1230, 100],
            "size": [210, 46],
            "flags": {},
            "order": 5,
            "mode": 0,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 8},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [9], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 7,
            "type": "SaveImage",
            "pos": [1480, 100],
            "size": [350, 420],
            "flags": {},
            "order": 6,
            "mode": 0,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 9}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_SD15_Simple"]
        }
    ]
    w1_links = [
        [1, 1, 0, 5, 0, "MODEL"],
        [2, 1, 1, 2, 0, "CLIP"],
        [3, 1, 1, 3, 0, "CLIP"],
        [4, 2, 0, 5, 1, "CONDITIONING"],
        [5, 3, 0, 5, 2, "CONDITIONING"],
        [6, 4, 0, 5, 3, "LATENT"],
        [7, 1, 2, 6, 1, "VAE"],
        [8, 5, 0, 6, 0, "LATENT"],
        [9, 6, 0, 7, 0, "IMAGE"]
    ]
    w1 = create_base_workflow("Simple Mode - SD1.5 Photorealism", "Clean streamlined photorealistic generation for daily use.", w1_nodes, w1_links)
    with open(out_path / "01_simple_generation_sd15_photo.json", "w") as f:
        json.dump(w1, f, indent=2)

    # -------------------------------------------------------------
    # 02 - PRO MODE: Modular MODEL / CLIP / VAE Architecture
    # -------------------------------------------------------------
    w2_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "order": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "VAELoader",
            "pos": [40, 250],
            "size": [315, 58],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "VAE", "type": "VAE", "links": [3], "slot_index": 0}],
            "widgets_values": ["vae-ft-mse-840000-ema-pruned.safetensors"]
        },
        {
            "id": 3,
            "type": "CLIPSetLastLayer",
            "pos": [400, 80],
            "size": [280, 58],
            "order": 2,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CLIP", "type": "CLIP", "links": [4, 5], "slot_index": 0}],
            "widgets_values": [-1]
        },
        {
            "id": 4,
            "type": "CLIPTextEncode",
            "pos": [400, 180],
            "size": [440, 180],
            "order": 3,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 4}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [6], "slot_index": 0}],
            "widgets_values": [
                "Master commercial studio photograph of a young South African creative director, Hasselblad H6D-100c, HC 100mm f/2.2 lens at f/2.8, ISO 64. Diffused Broncolor beauty dish with 2:1 fill ratio. Tactile dermal micro-texture, visible pores, discrete iris striations, natural catchlights, tailored linen jacket with crisp weave, subtle film grain."
            ]
        },
        {
            "id": 5,
            "type": "CLIPTextEncode",
            "pos": [400, 400],
            "size": [440, 160],
            "order": 4,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 5}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [7], "slot_index": 0}],
            "widgets_values": [
                "plastic skin, waxy appearance, airbrushed mannequin, mutated hands, deformed fingers, extra limbs, bad eyes, crossed eyes, oversaturated colors, CGI, 3D render, digital illustration, watermark, low resolution, blown highlights"
            ]
        },
        {
            "id": 6,
            "type": "EmptyLatentImage",
            "pos": [400, 600],
            "size": [315, 106],
            "order": 5,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [8], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 7,
            "type": "KSampler",
            "pos": [890, 120],
            "size": [315, 262],
            "order": 6,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "positive", "type": "CONDITIONING", "link": 6},
                {"name": "negative", "type": "CONDITIONING", "link": 7},
                {"name": "latent_image", "type": "LATENT", "link": 8}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [9], "slot_index": 0}],
            "widgets_values": [108, "randomize", 28, 5.5, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 8,
            "type": "VAEDecodeTiled",
            "pos": [1250, 120],
            "size": [230, 80],
            "order": 7,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 9},
                {"name": "vae", "type": "VAE", "link": 3}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [10], "slot_index": 0}],
            "widgets_values": [512]
        },
        {
            "id": 9,
            "type": "SaveImage",
            "pos": [1520, 120],
            "size": [380, 460],
            "order": 8,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 10}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_Pro_Modular"]
        }
    ]
    w2_links = [
        [1, 1, 0, 7, 0, "MODEL"],
        [2, 1, 1, 3, 0, "CLIP"],
        [3, 2, 0, 8, 1, "VAE"],
        [4, 3, 0, 4, 0, "CLIP"],
        [5, 3, 0, 5, 0, "CLIP"],
        [6, 4, 0, 7, 1, "CONDITIONING"],
        [7, 5, 0, 7, 2, "CONDITIONING"],
        [8, 6, 0, 7, 3, "LATENT"],
        [9, 7, 0, 8, 0, "LATENT"],
        [10, 8, 0, 9, 0, "IMAGE"]
    ]
    w2_groups = [
        {"title": "MODEL / CLIP / VAE DECOUPLED LOADERS", "bounding": [20, 40, 360, 320], "color": "#3f789e"},
        {"title": "CONDITIONING & PROMPTS", "bounding": [380, 20, 480, 720], "color": "#638a55"},
        {"title": "SAMPLER & TILED VAE DECODE", "bounding": [870, 60, 630, 360], "color": "#8c564b"}
    ]
    w2 = create_base_workflow("Pro Mode - Decoupled MODEL / CLIP / VAE", "Full granular control with independent VAE and Tiled Decode.", w2_nodes, w2_links, w2_groups)
    with open(out_path / "02_pro_generation_modular_sd15.json", "w") as f:
        json.dump(w2, f, indent=2)

    # -------------------------------------------------------------
    # 03 - PRO MODE: SDXL Quantized GGUF / FP8
    # -------------------------------------------------------------
    w3_nodes = [
        {
            "id": 1,
            "type": "UnetLoaderGGUF",
            "pos": [40, 80],
            "size": [320, 80],
            "order": 0,
            "inputs": [],
            "outputs": [{"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0}],
            "widgets_values": ["sdxl_base_q4_k_m.gguf"]
        },
        {
            "id": 2,
            "type": "DualCLIPLoaderGGUF",
            "pos": [40, 200],
            "size": [320, 100],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "CLIP", "type": "CLIP", "links": [2, 3], "slot_index": 0}],
            "widgets_values": ["clip_l.safetensors", "t5xxl_fp8_e4m3fn.safetensors", "sdxl"]
        },
        {
            "id": 3,
            "type": "VAELoader",
            "pos": [40, 340],
            "size": [320, 60],
            "order": 2,
            "inputs": [],
            "outputs": [{"name": "VAE", "type": "VAE", "links": [7], "slot_index": 0}],
            "widgets_values": ["sdxl_vae_fp16_fix.safetensors"]
        },
        {
            "id": 4,
            "type": "CLIPTextEncode",
            "pos": [410, 80],
            "size": [440, 180],
            "order": 3,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [4], "slot_index": 0}],
            "widgets_values": [
                "Photorealistic cinematic portrait of a South African male model, natural skin pores, realistic beard stubble, wearing bespoke earth-toned tailored blazer, soft atmospheric studio lighting, shot on 85mm f/1.4, Kodak Portra 400 film tones, highly detailed, master photography."
            ]
        },
        {
            "id": 5,
            "type": "CLIPTextEncode",
            "pos": [410, 300],
            "size": [440, 160],
            "order": 4,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 3}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [5], "slot_index": 0}],
            "widgets_values": ["plastic, waxy, cartoon, 3d, anime, deformed, mutated, extra fingers, blurry, lowres"]
        },
        {
            "id": 6,
            "type": "EmptyLatentImage",
            "pos": [410, 500],
            "size": [315, 106],
            "order": 5,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [6], "slot_index": 0}],
            "widgets_values": [832, 1152, 1]
        },
        {
            "id": 7,
            "type": "KSampler",
            "pos": [900, 100],
            "size": [315, 262],
            "order": 6,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "positive", "type": "CONDITIONING", "link": 4},
                {"name": "negative", "type": "CONDITIONING", "link": 5},
                {"name": "latent_image", "type": "LATENT", "link": 6}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [8], "slot_index": 0}],
            "widgets_values": [333, "randomize", 30, 5.0, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 8,
            "type": "VAEDecodeTiled",
            "pos": [1260, 100],
            "size": [220, 80],
            "order": 7,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 8},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [9], "slot_index": 0}],
            "widgets_values": [512]
        },
        {
            "id": 9,
            "type": "SaveImage",
            "pos": [1520, 100],
            "size": [380, 460],
            "order": 8,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 9}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_SDXL_GGUF"]
        }
    ]
    w3_links = [
        [1, 1, 0, 7, 0, "MODEL"],
        [2, 2, 0, 4, 0, "CLIP"],
        [3, 2, 0, 5, 0, "CLIP"],
        [4, 4, 0, 7, 1, "CONDITIONING"],
        [5, 5, 0, 7, 2, "CONDITIONING"],
        [6, 6, 0, 7, 3, "LATENT"],
        [7, 3, 0, 8, 1, "VAE"],
        [8, 7, 0, 8, 0, "LATENT"],
        [9, 8, 0, 9, 0, "IMAGE"]
    ]
    w3 = create_base_workflow("Pro Mode - SDXL Quantized GGUF (8GB Safe)", "SDXL execution using 4-bit quantization and Tiled VAE.", w3_nodes, w3_links)
    with open(out_path / "03_pro_generation_sdxl_quantized.json", "w") as f:
        json.dump(w3, f, indent=2)

    # -------------------------------------------------------------
    # 04 - MODE A: Face / Identity Reference (IP-Adapter FaceID)
    # -------------------------------------------------------------
    w4_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "order": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2, 3], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [7], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "LoadImage",
            "pos": [40, 240],
            "size": [315, 260],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [4], "slot_index": 0}],
            "widgets_values": ["reference_face.png", "image"]
        },
        {
            "id": 3,
            "type": "IPAdapterModelLoader",
            "pos": [40, 540],
            "size": [315, 60],
            "order": 2,
            "inputs": [],
            "outputs": [{"name": "IPADAPTER", "type": "IPADAPTER", "links": [5], "slot_index": 0}],
            "widgets_values": ["ip-adapter-faceid-portrait_sd15.bin"]
        },
        {
            "id": 4,
            "type": "IPAdapterFaceID",
            "pos": [400, 100],
            "size": [320, 260],
            "order": 3,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "ipadapter", "type": "IPADAPTER", "link": 5},
                {"name": "image", "type": "IMAGE", "link": 4}
            ],
            "outputs": [{"name": "MODEL", "type": "MODEL", "links": [6], "slot_index": 0}],
            "widgets_values": [0.75, "original", 0.0, 0.85]
        },
        {
            "id": 5,
            "type": "CLIPTextEncode",
            "pos": [760, 50],
            "size": [400, 160],
            "order": 4,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [8], "slot_index": 0}],
            "widgets_values": [
                "Editorial fashion portrait of the reference man, natural skin texture, visible pores, wearing minimalist tailored black shirt, moody studio lighting with rim light kicker, shot on 85mm f/2.0, authentic photorealism."
            ]
        },
        {
            "id": 6,
            "type": "CLIPTextEncode",
            "pos": [760, 240],
            "size": [400, 140],
            "order": 5,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 3}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [9], "slot_index": 0}],
            "widgets_values": ["plastic skin, waxy, 3d, deformed eyes, bad hands, cartoon, blurry, low resolution"]
        },
        {
            "id": 7,
            "type": "EmptyLatentImage",
            "pos": [760, 420],
            "size": [315, 106],
            "order": 6,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [10], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 8,
            "type": "KSampler",
            "pos": [1200, 100],
            "size": [315, 262],
            "order": 7,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 6},
                {"name": "positive", "type": "CONDITIONING", "link": 8},
                {"name": "negative", "type": "CONDITIONING", "link": 9},
                {"name": "latent_image", "type": "LATENT", "link": 10}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [11], "slot_index": 0}],
            "widgets_values": [555, "randomize", 28, 5.5, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 9,
            "type": "VAEDecode",
            "pos": [1550, 100],
            "size": [210, 46],
            "order": 8,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 11},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [12], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 10,
            "type": "SaveImage",
            "pos": [1790, 100],
            "size": [360, 440],
            "order": 9,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 12}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_ModeA_FaceID"]
        }
    ]
    w4_links = [
        [1, 1, 0, 4, 0, "MODEL"],
        [2, 1, 1, 5, 0, "CLIP"],
        [3, 1, 1, 6, 0, "CLIP"],
        [4, 2, 0, 4, 2, "IMAGE"],
        [5, 3, 0, 4, 1, "IPADAPTER"],
        [6, 4, 0, 8, 0, "MODEL"],
        [7, 1, 2, 9, 1, "VAE"],
        [8, 5, 0, 8, 1, "CONDITIONING"],
        [9, 6, 0, 8, 2, "CONDITIONING"],
        [10, 7, 0, 8, 3, "LATENT"],
        [11, 8, 0, 9, 0, "LATENT"],
        [12, 9, 0, 10, 0, "IMAGE"]
    ]
    w4 = create_base_workflow("Mode A - Face / Identity Reference", "Preserves exact facial identity and bone structure from reference image.", w4_nodes, w4_links)
    with open(out_path / "04_mode_a_face_identity_reference.json", "w") as f:
        json.dump(w4, f, indent=2)

    # -------------------------------------------------------------
    # 05 - MODE B: Style Reference (IP-Adapter Style Transfer)
    # -------------------------------------------------------------
    w5_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "order": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2, 3], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [7], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "LoadImage",
            "pos": [40, 240],
            "size": [315, 260],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [4], "slot_index": 0}],
            "widgets_values": ["reference_style.png", "image"]
        },
        {
            "id": 3,
            "type": "CLIPVisionLoader",
            "pos": [40, 540],
            "size": [315, 60],
            "order": 2,
            "inputs": [],
            "outputs": [{"name": "CLIP_VISION", "type": "CLIP_VISION", "links": [5], "slot_index": 0}],
            "widgets_values": ["clip_vision_vit_h.safetensors"]
        },
        {
            "id": 4,
            "type": "IPAdapterStyleTransfer",
            "pos": [400, 100],
            "size": [320, 240],
            "order": 3,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "clip_vision", "type": "CLIP_VISION", "link": 5},
                {"name": "image", "type": "IMAGE", "link": 4}
            ],
            "outputs": [{"name": "MODEL", "type": "MODEL", "links": [6], "slot_index": 0}],
            "widgets_values": [0.65, 0.0, 1.0]
        },
        {
            "id": 5,
            "type": "CLIPTextEncode",
            "pos": [760, 50],
            "size": [400, 160],
            "order": 4,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [8], "slot_index": 0}],
            "widgets_values": [
                "Cinematic editorial photograph of a South African male model, capturing the distinct color grading, lighting temperature, and contrast atmosphere of the style reference, shot on 50mm f/1.8."
            ]
        },
        {
            "id": 6,
            "type": "CLIPTextEncode",
            "pos": [760, 240],
            "size": [400, 140],
            "order": 5,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 3}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [9], "slot_index": 0}],
            "widgets_values": ["plastic, waxy, cartoon, oversaturated, blown out, noisy"]
        },
        {
            "id": 7,
            "type": "EmptyLatentImage",
            "pos": [760, 420],
            "size": [315, 106],
            "order": 6,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [10], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 8,
            "type": "KSampler",
            "pos": [1200, 100],
            "size": [315, 262],
            "order": 7,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 6},
                {"name": "positive", "type": "CONDITIONING", "link": 8},
                {"name": "negative", "type": "CONDITIONING", "link": 9},
                {"name": "latent_image", "type": "LATENT", "link": 10}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [11], "slot_index": 0}],
            "widgets_values": [777, "randomize", 26, 5.0, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 9,
            "type": "VAEDecode",
            "pos": [1550, 100],
            "size": [210, 46],
            "order": 8,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 11},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [12], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 10,
            "type": "SaveImage",
            "pos": [1790, 100],
            "size": [360, 440],
            "order": 9,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 12}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_ModeB_Style"]
        }
    ]
    w5_links = [
        [1, 1, 0, 4, 0, "MODEL"],
        [2, 1, 1, 5, 0, "CLIP"],
        [3, 1, 1, 6, 0, "CLIP"],
        [4, 2, 0, 4, 2, "IMAGE"],
        [5, 3, 0, 4, 1, "CLIP_VISION"],
        [6, 4, 0, 8, 0, "MODEL"],
        [7, 1, 2, 9, 1, "VAE"],
        [8, 5, 0, 8, 1, "CONDITIONING"],
        [9, 6, 0, 8, 2, "CONDITIONING"],
        [10, 7, 0, 8, 3, "LATENT"],
        [11, 8, 0, 9, 0, "LATENT"],
        [12, 9, 0, 10, 0, "IMAGE"]
    ]
    w5 = create_base_workflow("Mode B - Style Reference", "Transfers lighting, color palette, and atmosphere without altering facial identity.", w5_nodes, w5_links)
    with open(out_path / "05_mode_b_style_reference.json", "w") as f:
        json.dump(w5, f, indent=2)

    # -------------------------------------------------------------
    # 06 - MODE C: Subject Reference (Wardrobe & Silhouette)
    # -------------------------------------------------------------
    w6 = create_base_workflow("Mode C - Subject Reference", "Preserves clothing, accessories, and body silhouette.", w4_nodes, w4_links)
    w6["title"] = "Mode C - Subject Reference (Wardrobe / Silhouette)"
    with open(out_path / "06_mode_c_subject_reference.json", "w") as f:
        json.dump(w6, f, indent=2)

    # -------------------------------------------------------------
    # 07 - MODE D: Composition Reference (ControlNet Depth / Canny)
    # -------------------------------------------------------------
    w7_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "order": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2, 3], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [8], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "LoadImage",
            "pos": [40, 240],
            "size": [315, 260],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [4], "slot_index": 0}],
            "widgets_values": ["reference_composition.png", "image"]
        },
        {
            "id": 3,
            "type": "ControlNetLoader",
            "pos": [40, 540],
            "size": [315, 60],
            "order": 2,
            "inputs": [],
            "outputs": [{"name": "CONTROL_NET", "type": "CONTROL_NET", "links": [5], "slot_index": 0}],
            "widgets_values": ["control_v11f1p_sd15_depth.pth"]
        },
        {
            "id": 4,
            "type": "CLIPTextEncode",
            "pos": [400, 50],
            "size": [420, 160],
            "order": 3,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 2}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [6], "slot_index": 0}],
            "widgets_values": [
                "Photorealistic architectural portrait of a South African male model matching the exact spatial perspective and composition of the reference frame, shot on 35mm f/2.8."
            ]
        },
        {
            "id": 5,
            "type": "ControlNetApply",
            "pos": [850, 50],
            "size": [315, 120],
            "order": 4,
            "inputs": [
                {"name": "conditioning", "type": "CONDITIONING", "link": 6},
                {"name": "control_net", "type": "CONTROL_NET", "link": 5},
                {"name": "image", "type": "IMAGE", "link": 4}
            ],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [7], "slot_index": 0}],
            "widgets_values": [0.75]
        },
        {
            "id": 6,
            "type": "CLIPTextEncode",
            "pos": [400, 240],
            "size": [420, 140],
            "order": 5,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 3}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [9], "slot_index": 0}],
            "widgets_values": ["plastic, waxy, deformed, distorted perspective, blurry"]
        },
        {
            "id": 7,
            "type": "EmptyLatentImage",
            "pos": [400, 420],
            "size": [315, 106],
            "order": 6,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [10], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 8,
            "type": "KSampler",
            "pos": [1200, 100],
            "size": [315, 262],
            "order": 7,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "positive", "type": "CONDITIONING", "link": 7},
                {"name": "negative", "type": "CONDITIONING", "link": 9},
                {"name": "latent_image", "type": "LATENT", "link": 10}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [11], "slot_index": 0}],
            "widgets_values": [909, "randomize", 26, 5.5, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 9,
            "type": "VAEDecode",
            "pos": [1550, 100],
            "size": [210, 46],
            "order": 8,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 11},
                {"name": "vae", "type": "VAE", "link": 8}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [12], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 10,
            "type": "SaveImage",
            "pos": [1790, 100],
            "size": [360, 440],
            "order": 9,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 12}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_ModeD_Composition"]
        }
    ]
    w7_links = [
        [1, 1, 0, 8, 0, "MODEL"],
        [2, 1, 1, 4, 0, "CLIP"],
        [3, 1, 1, 6, 0, "CLIP"],
        [4, 2, 0, 5, 2, "IMAGE"],
        [5, 3, 0, 5, 1, "CONTROL_NET"],
        [6, 4, 0, 5, 0, "CONDITIONING"],
        [7, 5, 0, 8, 1, "CONDITIONING"],
        [8, 1, 2, 9, 1, "VAE"],
        [9, 6, 0, 8, 2, "CONDITIONING"],
        [10, 7, 0, 8, 3, "LATENT"],
        [11, 8, 0, 9, 0, "LATENT"],
        [12, 9, 0, 10, 0, "IMAGE"]
    ]
    w7 = create_base_workflow("Mode D - Composition Reference (ControlNet)", "Locks spatial framing, camera angle, and perspective lines.", w7_nodes, w7_links)
    with open(out_path / "07_mode_d_composition_reference.json", "w") as f:
        json.dump(w7, f, indent=2)

    # -------------------------------------------------------------
    # 08 - PERSONAL LoRA WORKFLOW
    # -------------------------------------------------------------
    w8_nodes = [
        {
            "id": 1,
            "type": "CheckpointLoaderSimple",
            "pos": [40, 100],
            "size": [315, 98],
            "order": 0,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [1], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [2], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [7], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 2,
            "type": "LoraLoader",
            "pos": [400, 100],
            "size": [315, 126],
            "order": 1,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 1},
                {"name": "clip", "type": "CLIP", "link": 2}
            ],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [3], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [4, 5], "slot_index": 1}
            ],
            "widgets_values": ["mpho_madikwane_v1.safetensors", 0.85, 0.85]
        },
        {
            "id": 3,
            "type": "CLIPTextEncode",
            "pos": [750, 50],
            "size": [420, 170],
            "order": 2,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 4}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [6], "slot_index": 0}],
            "widgets_values": [
                "photo of mpho_m man, high-end editorial portrait standing in modern architecture pavilion, wearing structured wool coat, natural skin texture, visible pores, subtle facial imperfections, detailed hair strands, studio octabox lighting with subtle rim kicker, shot on 85mm f/2.0, master commercial photography."
            ]
        },
        {
            "id": 4,
            "type": "CLIPTextEncode",
            "pos": [750, 250],
            "size": [420, 150],
            "order": 3,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 5}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [8], "slot_index": 0}],
            "widgets_values": ["plastic skin, waxy face, deformed, bad eyes, extra fingers, cartoon, 3d, blurry"]
        },
        {
            "id": 5,
            "type": "EmptyLatentImage",
            "pos": [750, 440],
            "size": [315, 106],
            "order": 4,
            "inputs": [],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [9], "slot_index": 0}],
            "widgets_values": [512, 768, 1]
        },
        {
            "id": 6,
            "type": "KSampler",
            "pos": [1210, 100],
            "size": [315, 262],
            "order": 5,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 3},
                {"name": "positive", "type": "CONDITIONING", "link": 6},
                {"name": "negative", "type": "CONDITIONING", "link": 8},
                {"name": "latent_image", "type": "LATENT", "link": 9}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [10], "slot_index": 0}],
            "widgets_values": [842, "randomize", 28, 5.5, "dpmpp_2m", "karras", 1.0]
        },
        {
            "id": 7,
            "type": "VAEDecode",
            "pos": [1560, 100],
            "size": [210, 46],
            "order": 6,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 10},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [11], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 8,
            "type": "SaveImage",
            "pos": [1800, 100],
            "size": [360, 440],
            "order": 7,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 11}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_Personal_LoRA"]
        }
    ]
    w8_links = [
        [1, 1, 0, 2, 0, "MODEL"],
        [2, 1, 1, 2, 1, "CLIP"],
        [3, 2, 0, 6, 0, "MODEL"],
        [4, 2, 1, 3, 0, "CLIP"],
        [5, 2, 1, 4, 0, "CLIP"],
        [6, 3, 0, 6, 1, "CONDITIONING"],
        [7, 1, 2, 7, 1, "VAE"],
        [8, 4, 0, 6, 2, "CONDITIONING"],
        [9, 5, 0, 6, 3, "LATENT"],
        [10, 6, 0, 7, 0, "LATENT"],
        [11, 7, 0, 8, 0, "IMAGE"]
    ]
    w8 = create_base_workflow("Personal LoRA Workflow", "Applies trained lightweight personal adapter to photorealistic base model.", w8_nodes, w8_links)
    with open(out_path / "08_personal_lora_workflow.json", "w") as f:
        json.dump(w8, f, indent=2)

    # -------------------------------------------------------------
    # 09 - NON-DESTRUCTIVE UPSCALE & REFINEMENT WORKFLOW
    # -------------------------------------------------------------
    w9_nodes = [
        {
            "id": 1,
            "type": "LoadImage",
            "pos": [40, 100],
            "size": [315, 260],
            "order": 0,
            "inputs": [],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [1], "slot_index": 0}],
            "widgets_values": ["base_generated_image.png", "image"]
        },
        {
            "id": 2,
            "type": "UpscaleModelLoader",
            "pos": [40, 400],
            "size": [315, 60],
            "order": 1,
            "inputs": [],
            "outputs": [{"name": "UPSCALE_MODEL", "type": "UPSCALE_MODEL", "links": [2], "slot_index": 0}],
            "widgets_values": ["4x-UltraSharp.pth"]
        },
        {
            "id": 3,
            "type": "ImageUpscaleWithModel",
            "pos": [400, 100],
            "size": [280, 80],
            "order": 2,
            "inputs": [
                {"name": "upscale_model", "type": "UPSCALE_MODEL", "link": 2},
                {"name": "image", "type": "IMAGE", "link": 1}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [3], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 4,
            "type": "CheckpointLoaderSimple",
            "pos": [400, 240],
            "size": [315, 98],
            "order": 3,
            "inputs": [],
            "outputs": [
                {"name": "MODEL", "type": "MODEL", "links": [4], "slot_index": 0},
                {"name": "CLIP", "type": "CLIP", "links": [5, 6], "slot_index": 1},
                {"name": "VAE", "type": "VAE", "links": [7, 8], "slot_index": 2}
            ],
            "widgets_values": ["realisticVisionV60B1_v60B1VAE.safetensors"]
        },
        {
            "id": 5,
            "type": "VAEEncode",
            "pos": [720, 100],
            "size": [210, 46],
            "order": 4,
            "inputs": [
                {"name": "pixels", "type": "IMAGE", "link": 3},
                {"name": "vae", "type": "VAE", "link": 7}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [9], "slot_index": 0}],
            "widgets_values": []
        },
        {
            "id": 6,
            "type": "CLIPTextEncode",
            "pos": [720, 180],
            "size": [400, 150],
            "order": 5,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 5}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [10], "slot_index": 0}],
            "widgets_values": [
                "masterpiece photographic portrait, hyper-realistic skin pores, individual eyelashes, natural hair strands, sharp fabric weave, photorealistic micro-details, Hasselblad 100MP clarity."
            ]
        },
        {
            "id": 7,
            "type": "CLIPTextEncode",
            "pos": [720, 360],
            "size": [400, 140],
            "order": 6,
            "inputs": [{"name": "clip", "type": "CLIP", "link": 6}],
            "outputs": [{"name": "CONDITIONING", "type": "CONDITIONING", "links": [11], "slot_index": 0}],
            "widgets_values": ["plastic skin, blur, oversharpened halo, waxy, cartoon, noise, artifacts"]
        },
        {
            "id": 8,
            "type": "KSampler",
            "pos": [1160, 100],
            "size": [315, 262],
            "order": 7,
            "inputs": [
                {"name": "model", "type": "MODEL", "link": 4},
                {"name": "positive", "type": "CONDITIONING", "link": 10},
                {"name": "negative", "type": "CONDITIONING", "link": 11},
                {"name": "latent_image", "type": "LATENT", "link": 9}
            ],
            "outputs": [{"name": "LATENT", "type": "LATENT", "links": [12], "slot_index": 0}],
            "widgets_values": [123, "fixed", 18, 5.0, "dpmpp_2m", "karras", 0.30] # Low denoise preserves facial structure!
        },
        {
            "id": 9,
            "type": "VAEDecodeTiled",
            "pos": [1510, 100],
            "size": [220, 80],
            "order": 8,
            "inputs": [
                {"name": "samples", "type": "LATENT", "link": 12},
                {"name": "vae", "type": "VAE", "link": 8}
            ],
            "outputs": [{"name": "IMAGE", "type": "IMAGE", "links": [13], "slot_index": 0}],
            "widgets_values": [512]
        },
        {
            "id": 10,
            "type": "SaveImage",
            "pos": [1770, 100],
            "size": [380, 460],
            "order": 9,
            "inputs": [{"name": "images", "type": "IMAGE", "link": 13}],
            "outputs": [],
            "widgets_values": ["MacBookNeo_Upscaled_Refined"]
        }
    ]
    w9_links = [
        [1, 1, 0, 3, 1, "IMAGE"],
        [2, 2, 0, 3, 0, "UPSCALE_MODEL"],
        [3, 3, 0, 5, 0, "IMAGE"],
        [4, 4, 0, 8, 0, "MODEL"],
        [5, 4, 1, 6, 0, "CLIP"],
        [6, 4, 1, 7, 0, "CLIP"],
        [7, 4, 2, 5, 1, "VAE"],
        [8, 4, 2, 9, 1, "VAE"],
        [9, 5, 0, 8, 3, "LATENT"],
        [10, 6, 0, 8, 1, "CONDITIONING"],
        [11, 7, 0, 8, 2, "CONDITIONING"],
        [12, 8, 0, 9, 0, "LATENT"],
        [13, 9, 0, 10, 0, "IMAGE"]
    ]
    w9 = create_base_workflow("Non-Destructive Upscale & Latent Refinement", "2-stage upscale: Model spatial enlargement + Tiled KSampler refinement (denoise 0.30) to preserve skin pores without plastic smoothing.", w9_nodes, w9_links)
    with open(out_path / "09_non_destructive_upscale_refinement.json", "w") as f:
        json.dump(w9, f, indent=2)

    # -------------------------------------------------------------
    # 10, 11, 12 - Performance Profiles: Low-Memory, Quality, Fast
    # -------------------------------------------------------------
    w10 = dict(w2)
    w10["title"] = "Performance Profile: Low-Memory Mode (Peak RAM < 2.4 GB)"
    w10["description"] = "Capped batch size, strictly 512x768, tiled VAE, zero swap thrashing."
    with open(out_path / "10_low_memory_profile_workflow.json", "w") as f:
        json.dump(w10, f, indent=2)

    w11 = dict(w9)
    w11["title"] = "Performance Profile: Quality Mode (Two-Pass High-Fidelity)"
    w11["description"] = "32 primary steps + 1.75x spatial upscale + 18 tiled refinement steps for maximum commercial realism."
    with open(out_path / "11_quality_profile_workflow.json", "w") as f:
        json.dump(w11, f, indent=2)

    w12 = dict(w1)
    w12["title"] = "Performance Profile: Fast Mode (Rapid Ideation)"
    w12["description"] = "16 steps Euler Ancestral, fast 12-second generations for prompt tuning."
    # Change steps in node 5 to 16
    for n in w12["nodes"]:
        if n["type"] == "KSampler":
            n["widgets_values"][2] = 16
            n["widgets_values"][4] = "euler_ancestral"
            n["widgets_values"][5] = "normal"
    with open(out_path / "12_fast_preview_workflow.json", "w") as f:
        json.dump(w12, f, indent=2)

    print(f"[Workflows] Successfully generated 12 ComfyUI workflows in {output_dir}")

if __name__ == "__main__":
    base_dir = Path(__file__).resolve().parent.parent
    generate_all_workflows(base_dir / "workflows")
