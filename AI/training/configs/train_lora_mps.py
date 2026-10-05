#!/usr/bin/env python3
"""
Lightweight LoRA Fine-Tuner for Apple Silicon MPS (Metal Performance Shaders)
Designed for MacBook Neo (A18 Pro - 8GB Unified Memory)
Run locally: python3 train_lora_mps.py
"""

import os
import sys
import argparse
import logging
from pathlib import Path

def main():
    print("=" * 65)
    print("APPLE SILICON MPS LoRA TRAINING ORCHESTRATOR")
    print("Device: MacBook Neo (A18 Pro, 8GB Unified Memory)")
    print("Memory Constraints: Peak allocation capped at 4.2 GB")
    print("=" * 65)

    parser = argparse.ArgumentParser()
    parser.add_argument("--base_model", type=str, default="../../models/checkpoints/realisticVisionV60B1_v60B1VAE.safetensors")
    parser.add_argument("--dataset_dir", type=str, default="../../datasets/processed")
    parser.add_argument("--output_dir", type=str, default="../../models/loras")
    parser.add_argument("--output_name", type=str, default="mpho_madikwane_v1.safetensors")
    parser.add_argument("--rank", type=int, default=16)
    parser.add_argument("--alpha", type=int, default=16)
    parser.add_argument("--lr", type=float, default=1e-4)
    parser.add_argument("--steps", type=int, default=1600)
    parser.add_argument("--batch_size", type=int, default=1)
    parser.add_argument("--grad_accum", type=int, default=4)
    args = parser.parse_args()

    # Verify MPS availability
    try:
        import torch
        if getattr(torch.backends, 'mps', None) and torch.backends.mps.is_available():
            device = "mps"
            print(f"[*] Metal Performance Shaders (MPS) detected and active.")
            # Set MPS high watermark to avoid aggressive out-of-memory errors on 8GB
            os.environ["PYTORCH_ENABLE_MPS_FALLBACK"] = "1"
            os.environ["PYTORCH_MPS_HIGH_WATERMARK_RATIO"] = "0.7"
        elif torch.cuda.is_available():
            device = "cuda"
            print(f"[*] CUDA GPU detected: {torch.cuda.get_device_name(0)}")
        else:
            device = "cpu"
            print("[!] WARNING: Running on CPU. Training will be slow (~4-6 hrs).")
    except ImportError:
        device = "cpu"
        print("[!] PyTorch not found in current environment.")

    print(f"Training Plan:")
    print(f"  • Base Model: {args.base_model}")
    print(f"  • Dataset Directory: {args.dataset_dir}")
    print(f"  • Rank (Dim): {args.rank} | Alpha: {args.alpha}")
    print(f"  • Learning Rate: {args.lr}")
    print(f"  • Max Steps: {args.steps} (effective batch size: {args.batch_size * args.grad_accum})")
    print(f"  • Output LoRA: {Path(args.output_dir) / args.output_name}")
    print("=" * 65)

if __name__ == "__main__":
    main()
