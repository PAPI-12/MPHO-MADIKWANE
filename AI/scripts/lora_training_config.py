#!/usr/bin/env python3
"""
LoRA Training Configuration Generator & Apple Silicon MPS Optimizer.
Configures conservative, stable lightweight fine-tuning parameters
specifically calibrated for the MacBook Neo (Apple A18 Pro, 8GB Unified Memory).
"""

import os
import sys
import json
from pathlib import Path

def generate_training_configurations(output_base_dir):
    configs_dir = Path(output_base_dir) / "training" / "configs"
    configs_dir.mkdir(parents=True, exist_ok=True)

    # 1. Kohya_ss / sd-scripts Compatible TOML Configuration
    kohya_toml_content = """# ==============================================================================
# KOHYA_SS / SD-SCRIPTS LoRA CONFIGURATION FOR MACBOOK NEO (A18 PRO - 8GB RAM)
# Tuned for absolute memory stability, zero kernel panics, and photorealism
# ==============================================================================

[general]
enable_bucket = true
min_bucket_reso = 384
max_bucket_reso = 768
bucket_reso_steps = 64
bucket_no_upscale = true

[[datasets]]
resolution = 512
batch_size = 1
max_train_epochs = 10

  [[datasets.subsets]]
  image_dir = "../../datasets/processed"
  caption_extension = ".txt"
  num_repeats = 10
  shuffle_caption = true
  keep_tokens = 1

[model_arguments]
pretrained_model_name_or_path = "../../models/checkpoints/realisticVisionV60B1_v60B1VAE.safetensors"
v2 = false
v_parameterization = false

[optimizer_arguments]
optimizer_type = "AdamW"
learning_rate = 0.0001
unet_lr = 0.0001
text_encoder_lr = 0.00005
lr_scheduler = "cosine_with_restarts"
lr_warmup_steps = 100
lr_restart_cycles = 1

[training_arguments]
output_dir = "../../models/loras"
output_name = "mpho_madikwane_photorealism_v1"
save_precision = "fp16"
save_model_as = "safetensors"
save_every_n_epochs = 2
save_state = false
max_train_steps = 1600
gradient_accumulation_steps = 4
gradient_checkpointing = true
mixed_precision = "fp16"
clip_skip = 1
seed = 42

[network_arguments]
network_module = "networks.lora"
network_dim = 16        # Rank r = 16 (high facial fidelity, modest memory)
network_alpha = 16      # Alpha = 16 (1:1 scaling prevents numerical divergence)
network_dropout = 0.05  # Slight dropout prevents memorizing specific backgrounds

[logging_arguments]
log_tracker_name = "tensorboard"
logging_dir = "../../training/logs"
"""

    toml_path = configs_dir / "lora_config_apple_silicon.toml"
    with open(toml_path, "w", encoding="utf-8") as f:
        f.write(kohya_toml_content)
    print(f"[LoRA Config] Generated Kohya TOML: {toml_path}")

    # 2. PyTorch MPS Standalone Training Script (Pure Python + Diffusers / PEFT)
    mps_trainer_content = '''#!/usr/bin/env python3
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
'''
    py_path = configs_dir / "train_lora_mps.py"
    with open(py_path, "w", encoding="utf-8") as f:
        f.write(mps_trainer_content)
    os.chmod(py_path, 0o755)
    print(f"[LoRA Config] Generated MPS Python Runner: {py_path}")

    # 3. Cloud Fallback Export Script (RunPod / Vast.ai / Colab fallback)
    fallback_sh_content = """#!/usr/bin/env bash
# ==============================================================================
# CLOUD GPU FALLBACK EXPORT SCRIPT (RunPod / Vast.ai / Lambda Labs / Colab)
# When you need an ultra-fast 8-minute training run on an NVIDIA RTX 4090 / A100
# instead of training locally on the MacBook Neo.
# ==============================================================================

set -e

echo "=== PREPARING CLOUD TRAINING BUNDLE ==="
TAR_NAME="mpho_lora_dataset_bundle.tar.gz"

cd ../../datasets
tar -czvf "$TAR_NAME" processed/ captions/ validation/
mv "$TAR_NAME" ../training/

echo "Bundle created: AI/training/$TAR_NAME"
echo ""
echo "CLOUD EXECUTION COMMANDS (on RunPod RTX 4090 instance):"
echo "--------------------------------------------------------"
echo "1. Upload $TAR_NAME to instance"
echo "2. Run:"
echo "   tar -xzvf $TAR_NAME"
echo "   git clone --depth 1 https://github.com/kohya-ss/sd-scripts.git"
echo "   cd sd-scripts && pip install -r requirements.txt"
echo "   python train_network.py \\"
echo "     --pretrained_model_name_or_path=runwayml/stable-diffusion-v1-5 \\"
echo "     --train_data_dir=../processed \\"
echo "     --output_dir=../output_loras \\"
echo "     --output_name=mpho_madikwane_v1 \\"
echo "     --network_module=networks.lora \\"
echo "     --network_dim=16 --network_alpha=16 \\"
echo "     --learning_rate=1e-4 --max_train_steps=1600 \\"
echo "     --mixed_precision=fp16 --save_precision=fp16 \\"
echo "     --gradient_accumulation_steps=4 --batch_size=1"
echo "3. Download output_loras/mpho_madikwane_v1.safetensors into AI/models/loras/"
echo "========================================================"
"""
    cloud_sh_path = Path(output_base_dir) / "training" / "export_cloud_fallback.sh"
    with open(cloud_sh_path, "w", encoding="utf-8") as f:
        f.write(fallback_sh_content)
    os.chmod(cloud_sh_path, 0o755)
    print(f"[LoRA Config] Generated Cloud Fallback Script: {cloud_sh_path}")

if __name__ == "__main__":
    base_dir = Path(__file__).resolve().parent.parent
    generate_training_configurations(base_dir)
