# 09 — SETUP & OPERATIONS MANUAL FOR MACBOOK NEO

## Quick Start: From Zero to Generation in 5 Steps

---

### Step 1: Run the Hardware Audit
Verify your system environment and unified memory headroom:
```bash
python3 AI/scripts/hardware_audit_mac.py
```
This confirms that the Apple A18 Pro 8GB memory budget is respected and saves the report to `AI/test_results/hardware_audit.json`.

---

### Step 2: Download the Verified Foundation Model Bundle
Download the core photorealism models (Realistic Vision v6.0 B1 + FT-MSE VAE + 4x-UltraSharp):
```bash
./AI/scripts/download_verified_models.sh 1
```
*(Total download: ~2.5 GB. Places models into their designated directories).*

---

### Step 3: Launch ComfyUI with Memory Protection
Launch ComfyUI using the dedicated Apple Silicon memory launcher:
```bash
./AI/scripts/mac_launcher.sh low-memory
```
This sets `PYTORCH_ENABLE_MPS_FALLBACK=1` and `PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.70`, keeping peak memory under 2.4 GB.

ComfyUI will start at:
`http://127.0.0.1:8188` (or `http://0.0.0.0:8188`)

---

### Step 4: Load a Workflow
1. Open the ComfyUI web interface in your browser.
2. Drag and drop any workflow from `AI/workflows/` directly onto the canvas:
   - For fast daily generation: `01_simple_generation_sd15_photo.json`
   - For full decoupled control: `02_pro_generation_modular_sd15.json`
   - For face identity preservation: `04_mode_a_face_identity_reference.json`
   - For lighting/style matching: `05_mode_b_style_reference.json`
   - For camera angle/depth: `07_mode_d_composition_reference.json`
   - For personal LoRA: `08_personal_lora_workflow.json`
   - For 2x non-destructive upscale: `09_non_destructive_upscale_refinement.json`

3. Click **Queue Prompt**. Your image will generate in 12–16 seconds.

---

### Step 5: Curate Dataset & Train Your Personal LoRA
1. Place 15 to 30 high-resolution raw portraits into `AI/datasets/raw/`.
2. Run the non-destructive dataset preparation tool:
   ```bash
   python3 AI/scripts/dataset_prep.py
   ```
   This automatically filters blurry or duplicate images, smart-crops into 512×768 aspect ratio buckets, downsamples with anti-aliasing, and writes paired `.txt` captions.
3. Start training your LoRA:
   ```bash
   python3 AI/training/configs/train_lora_mps.py
   ```
   *(Or use `./AI/training/export_cloud_fallback.sh` for an 8-minute run on a cloud GPU).*
4. Move the finished `.safetensors` file into `AI/models/loras/`.
5. Open `08_personal_lora_workflow.json` in ComfyUI, type your trigger word (`mpho_m`), and generate consistent imagery featuring your likeness!

---

## Minimal Audited Custom Nodes (Section 20)

| Custom Node | Repository | Mandatory Justification |
|---|---|---|
| **ComfyUI-Manager** | `ltdrdata/ComfyUI-Manager` | Safe dependency and node management. |
| **ComfyUI_IPAdapter_plus** | `cubiq/ComfyUI_IPAdapter_plus` | Powers Reference Modes A (FaceID), B (Style), and C (Subject). |
| **ComfyUI-ControlNet-Aux** | `Fannovel16/comfyui_controlnet_aux` | Generates depth and edge maps for Reference Mode D. |
| **ComfyUI-GGUF** | `city96/ComfyUI-GGUF` | Enables running quantized 4-bit SDXL models on 8GB RAM. |
| **UltimateSDUpscale** | `ssitu/ComfyUI_UltimateSDUpscale` | Executes tiled high-resolution non-destructive upscales. |
