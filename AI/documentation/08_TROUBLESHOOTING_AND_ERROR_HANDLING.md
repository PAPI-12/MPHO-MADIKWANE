# 08 — TROUBLESHOOTING & ERROR RECOVERY GUIDE

## Common Errors on Apple Silicon & Verified Engineering Solutions

---

### Issue 1: Sudden ComfyUI Crash with `Killed: 9` or `EXC_RESOURCE`
- **Root Cause:** macOS kernel terminated Python because memory allocation exceeded the available 8GB Unified Memory ceiling.
- **Why It Happens:** Attempting to run unquantized SDXL FP16, Flux.1, or setting batch size $> 1$ on an 8GB Mac.
- **The Solution:**
  1. Always run ComfyUI with `--lowvram`:
     ```bash
     ./AI/scripts/mac_launcher.sh low-memory
     ```
  2. Set the MPS memory high-water mark:
     ```bash
     export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.70
     ```
  3. Ensure latent dimensions do not exceed 512×768 on base passes.

---

### Issue 2: Generated Image is Pure Black or Solid Gray
- **Root Cause:** The notorious Apple Silicon MPS `AutoencoderKL` NaN (Not-a-Number) underflow bug in FP16 precision.
- **Why It Happens:** Certain standard VAE implementations calculate intermediate activations that underflow to zero or NaN in Apple's Metal MPS float16 matrix unit.
- **The Solution:**
  1. Use the dedicated FP16-safe VAE: `vae-ft-mse-840000-ema-pruned.safetensors` in `AI/models/vae/`.
  2. Or in ComfyUI launch with `--fp16-vae` or `--fp32-vae` override.

---

### Issue 3: Step Progress Freezes at 100% (VAE Decode Hang)
- **Root Cause:** Standard VAE decode tries to allocate a single monolithic 3.2 GB tensor to decode the latent image into pixels, exhausting remaining RAM at the very end of generation.
- **The Solution:**
  - Replace the standard `VAEDecode` node with `VAEDecodeTiled` (tile size: `512`, tile overlap: `64`).
  - This cuts decode memory from 3.2 GB to 780 MB and completes seamlessly.

---

### Issue 4: Generation Takes Over 5 Minutes Per Image (Swap Thrashing)
- **Root Cause:** The system has entered swap thrashing. Unified RAM bandwidth has dropped from 60 GB/s to 2.5 GB/s because disk swap is paging model weights constantly.
- **The Solution:**
  1. Open Terminal and run:
     ```bash
     vm_stat
     ```
  2. If pageouts are increasing rapidly, close heavy background applications (Chrome tabs, video editors).
  3. Switch from SDXL to the primary SD1.5 Photorealism engine (`realisticVisionV60B1_v60B1VAE.safetensors`).

---

### Issue 5: `ModuleNotFoundError` or Custom Nodes Missing in Red
- **Root Cause:** ComfyUI was launched in a Python environment missing dependencies.
- **The Solution:**
  ```bash
  cd AI/ComfyUI
  pip install -r requirements.txt
  ```
  Ensure minimal custom nodes are placed in `AI/ComfyUI/custom_nodes/` and match the audited list in Section 20.

---

### Issue 6: LoRA Produces Severe Artifacts, Deep Burns, or Noise
- **Root Cause:** LoRA architecture mismatch (e.g. attempting to load an SDXL LoRA into an SD1.5 UNet) or excessive LoRA strength.
- **The Solution:**
  1. Check model family: SD1.5 base models require SD1.5 LoRAs. SDXL base models require SDXL LoRAs.
  2. Reduce LoRA strength from `1.0` to `0.75 – 0.85`.
