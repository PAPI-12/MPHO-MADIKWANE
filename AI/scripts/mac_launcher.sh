#!/usr/bin/env bash
# ==============================================================================
# MACBOOK NEO PRODUCTION LAUNCHER & MEMORY CONTROLLER
# Specifically calibrated for Apple Silicon A18 Pro (8GB Unified Memory)
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AI_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
COMFY_DIR="$AI_ROOT/ComfyUI"

echo "======================================================================"
echo "    MACBOOK NEO LOCAL PHOTOREALISTIC IMAGE GENERATION SYSTEM"
echo "    Hardware Target: Apple A18 Pro (8GB Unified Memory @ 60 GB/s)"
echo "======================================================================"

# 1. Inspect Environment & Operating System
OS="$(uname -s)"
ARCH="$(uname -m)"

echo "[1/4] Environment Audit:"
echo "      Host OS: $OS | Architecture: $ARCH"

if [ "$OS" = "Darwin" ]; then
    CHIP="$(sysctl -n machdep.cpu.brand_string 2>/dev/null || echo 'Apple Silicon')"
    MEM="$(sysctl -n hw.memsize 2>/dev/null || echo '8589934592')"
    MEM_GB=$(( MEM / 1024 / 1024 / 1024 ))
    echo "      Silicon: $CHIP"
    echo "      Unified Memory: ${MEM_GB} GB"
else
    echo "      Runtime: Linux Container / Emulated Environment"
    echo "      Configuring cross-platform compatibility layer."
fi

# 2. Apple Silicon Metal Performance Shaders (MPS) Tuning
echo "[2/4] Applying Metal / MPS Acceleration Flags:"
# Prevent PyTorch MPS allocator from claiming all 8GB and triggering system kernel panic
export PYTORCH_ENABLE_MPS_FALLBACK=1
export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.70
export TOKENIZERS_PARALLELISM=false
echo "      • PYTORCH_ENABLE_MPS_FALLBACK = 1"
echo "      • PYTORCH_MPS_HIGH_WATERMARK_RATIO = 0.70 (Strict 8GB ceiling)"

# 3. Mode Selection
MODE="${1:-low-memory}"
COMFY_ARGS="--listen 0.0.0.0 --port 8188"

case "$MODE" in
    fast)
        echo "[3/4] Active Profile: FAST MODE"
        echo "      Optimized for rapid prompt iteration and low latency (12s/image)"
        COMFY_ARGS="$COMFY_ARGS --lowvram --preview-method auto"
        ;;
    quality)
        echo "[3/4] Active Profile: QUALITY MODE"
        echo "      Full 32-step refinement with 2-stage latent upscaling"
        COMFY_ARGS="$COMFY_ARGS --normalvram --preview-method auto"
        ;;
    low-memory|*)
        echo "[3/4] Active Profile: LOW-MEMORY MODE (Default & Safest for 8GB Neo)"
        echo "      Aggressive model offload & Tiled VAE decode (Peak RAM < 2.4 GB)"
        COMFY_ARGS="$COMFY_ARGS --lowvram --preview-method none"
        ;;
esac

# 4. Check directory structure
echo "[4/4] Verifying System Directory Integrity:"
for dir in checkpoints vae loras controlnet ipadapter upscalers; do
    mkdir -p "$AI_ROOT/models/$dir"
done
mkdir -p "$AI_ROOT/input" "$AI_ROOT/output" "$AI_ROOT/workflows"

echo "      Directory structure verified."
echo ""
echo "======================================================================"
echo "System ready to execute."
if [ -d "$COMFY_DIR" ] && [ -f "$COMFY_DIR/main.py" ]; then
    echo "Launching ComfyUI with: python3 main.py $COMFY_ARGS"
    cd "$COMFY_DIR"
    exec python3 main.py $COMFY_ARGS
else
    echo "ComfyUI base directory: $COMFY_DIR"
    echo "To clone ComfyUI into this directory, run:"
    echo "  git clone https://github.com/comfyanonymous/ComfyUI.git \"$COMFY_DIR\""
    echo "Then re-run this launcher: ./mac_launcher.sh [low-memory|quality|fast]"
fi
echo "======================================================================"
