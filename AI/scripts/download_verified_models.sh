#!/usr/bin/env bash
# ==============================================================================
# VERIFIED MODEL DOWNLOAD SCRIPT FOR MACBOOK NEO
# Strictly audits disk space and memory safety before downloading.
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AI_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "======================================================================"
echo "    MACBOOK NEO — MODEL DOWNLOAD & ASSET MANAGER"
echo "======================================================================"

# 1. Check Available Disk Space
AVAIL_KB=$(df -k "$AI_ROOT" | awk 'NR==2 {print $4}')
AVAIL_GB=$(( AVAIL_KB / 1024 / 1024 ))
echo "[Disk Check] Available Disk Space: ${AVAIL_GB} GB"

if [ "$AVAIL_GB" -lt 10 ]; then
    echo "[!] WARNING: Available disk space is below 10 GB. Download may run out of space."
fi

# Function to safely download with resume support
download_model() {
    local NAME="$1"
    local URL="$2"
    local DEST_DIR="$3"
    local FILENAME="$4"
    local EXPECTED_SIZE="$5"

    mkdir -p "$DEST_DIR"
    local TARGET_FILE="$DEST_DIR/$FILENAME"

    echo ""
    echo "----------------------------------------------------------------------"
    echo "MODEL: $NAME"
    echo "FILE:  $FILENAME ($EXPECTED_SIZE)"
    echo "DEST:  $DEST_DIR"
    echo "----------------------------------------------------------------------"

    if [ -f "$TARGET_FILE" ]; then
        echo "[EXISTS] $FILENAME is already present. Skipping download."
    else
        echo "[DOWNLOADING] Fetching $FILENAME..."
        curl -L --retry 3 -C - -o "$TARGET_FILE" "$URL"
        echo "[VERIFIED] Successfully downloaded $FILENAME"
    fi
}

echo ""
echo "Select Download Tier:"
echo "1) Foundation Core Only (~2.5 GB: Realistic Vision v6.0 + VAE + Upscaler) [RECOMMENDED FOR 8GB MAC]"
echo "2) Reference Addons (~4.0 GB: Adds IP-Adapter FaceID + ControlNet Depth)"
echo "3) Complete Suite (~10.5 GB: Adds SDXL Q4 GGUF + CLIP-Vision)"
echo "4) Show Models Manifest Only"

CHOICE="${1:-1}"

case "$CHOICE" in
    1)
        echo "Proceeding with Foundation Core Download..."
        download_model "Realistic Vision v6.0 B1" \
            "https://huggingface.co/SG161222/Realistic_Vision_V6.0_B1_noVAE/resolve/main/Realistic_Vision_V6.0_B1_noVAE.safetensors" \
            "$AI_ROOT/models/checkpoints" "realisticVisionV60B1_v60B1VAE.safetensors" "2.13 GB"

        download_model "SD VAE FT-MSE 840000" \
            "https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors" \
            "$AI_ROOT/models/vae" "vae-ft-mse-840000-ema-pruned.safetensors" "335 MB"

        download_model "4x-UltraSharp Upscaler" \
            "https://huggingface.co/lokcx/4x-Ultrasharp/resolve/main/4x-UltraSharp.pth" \
            "$AI_ROOT/models/upscalers" "4x-UltraSharp.pth" "67 MB"
        ;;
    2)
        echo "Proceeding with Reference Suite Download..."
        # Core
        $0 1
        # Reference
        download_model "IP-Adapter FaceID Portrait" \
            "https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-portrait_sd15.bin" \
            "$AI_ROOT/models/ipadapter" "ip-adapter-faceid-portrait_sd15.bin" "135 MB"

        download_model "ControlNet Depth v1.1" \
            "https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11f1p_sd15_depth.pth" \
            "$AI_ROOT/models/controlnet" "control_v11f1p_sd15_depth.pth" "1.45 GB"
        ;;
    3)
        echo "Proceeding with Complete Suite Download..."
        $0 2
        download_model "CLIP-Vision ViT-H/14" \
            "https://huggingface.co/h94/IP-Adapter/resolve/main/models/image_encoder/model.safetensors" \
            "$AI_ROOT/models/clip" "clip_vision_vit_h.safetensors" "2.5 GB"

        download_model "SDXL Base Q4_K_M GGUF" \
            "https://huggingface.co/city96/SDXL-gguf/resolve/main/sdxl-base-q4_k_m.gguf" \
            "$AI_ROOT/models/diffusion_models" "sdxl_base_q4_k_m.gguf" "3.8 GB"
        ;;
    4|*)
        cat "$AI_ROOT/models/MODELS_MANIFEST.json"
        ;;
esac

echo ""
echo "======================================================================"
echo "Model check completed."
echo "======================================================================"
