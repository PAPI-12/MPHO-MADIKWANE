#!/usr/bin/env bash
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
echo "   python train_network.py \"
echo "     --pretrained_model_name_or_path=runwayml/stable-diffusion-v1-5 \"
echo "     --train_data_dir=../processed \"
echo "     --output_dir=../output_loras \"
echo "     --output_name=mpho_madikwane_v1 \"
echo "     --network_module=networks.lora \"
echo "     --network_dim=16 --network_alpha=16 \"
echo "     --learning_rate=1e-4 --max_train_steps=1600 \"
echo "     --mixed_precision=fp16 --save_precision=fp16 \"
echo "     --gradient_accumulation_steps=4 --batch_size=1"
echo "3. Download output_loras/mpho_madikwane_v1.safetensors into AI/models/loras/"
echo "========================================================"
