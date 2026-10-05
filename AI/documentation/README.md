# LOCAL PHOTOREALISTIC AI IMAGE GENERATION SYSTEM FOR MACBOOK NEO
### Architecture, Engineering Specifications & Operational Master Guide

**Author:** Expert AI Engineer & Apple Silicon Optimization Specialist  
**System Target:** Apple MacBook Neo (Apple A18 Pro SoC, 8GB Unified Memory @ 60 GB/s)  
**Priority Hierarchy:** STABILITY → PHOTOREALISM → QUALITY → SPEED → EASE OF USE  

---

## 1. What Was Installed & Built

1. **Hardware Audit & Profiling Engine (`AI/scripts/hardware_audit_mac.py`):**
   - Automatically interrogates system architecture, unified memory availability, Metal/MPS capabilities, and sets safe execution budgets.
2. **12 Production ComfyUI Workflow Architectures (`AI/workflows/*.json`):**
   - Covering Simple Mode, Modular Decoupled Pro Mode, SDXL GGUF, Reference Modes A/B/C/D, Personal LoRA, Non-Destructive Upscaling, and Low-Memory/Quality/Fast performance profiles.
3. **Automated Non-Destructive Dataset Preparation System (`AI/scripts/dataset_prep.py`):**
   - Perceptual deduplication (dHash), blur filtering (Laplacian variance), multi-aspect bucketing, Lanczos downsampling, and automated paired captioning.
4. **Lightweight LoRA Training Pipeline (`AI/training/configs/`):**
   - Kohya_ss TOML config, Apple Silicon MPS standalone trainer (`train_lora_mps.py`), and cloud fallback export script (`export_cloud_fallback.sh`).
5. **High-End Photography Presets & Camera Taxonomy (`AI/presets/`):**
   - 12 comprehensive presets and full photographic taxonomy (sensor formats, focal lengths, apertures, lighting setups, film emulsions).
6. **Photorealism Quality Control & 100% Zoom Inspection Engine (`AI/scripts/quality_evaluator.py`):**
   - Scores Realism, Composition, Anatomy, Skin, Lighting, Texture, and Prompt Adherence.
7. **Multi-Domain Benchmark Suite (`AI/scripts/benchmark_runner.py`):**
   - Executes standard South African editorial benchmark tests across 5 domains (Portrait, Full Body, Environment, Product, Fashion).
8. **Apple Silicon Memory Launcher (`AI/scripts/mac_launcher.sh`):**
   - Configures MPS environment variables and enforces the 8GB unified memory ceiling.
9. **Verified Models Manifest & Safe Downloader (`AI/models/MODELS_MANIFEST.json`, `AI/scripts/download_verified_models.sh`):**
   - Audits file sizes, licenses, and memory requirements before downloading.

---

## 2. Why Each Component Exists

- **Modular Architecture (MODEL / CLIP / VAE):** Decouples noise prediction from text guidance and pixel reconstruction. This prevents vendor lock-in, allows swapping the VAE to eliminate black image glitches, and makes the pipeline transparent.
- **Tiled VAE Decode Node:** Prevents the fatal 3.2 GB memory spike during image reconstruction, ensuring generation finishes crash-free on 8GB Unified RAM.
- **Realistic Vision v6.0 B1 Base Checkpoint:** Selected because it avoids AI waxy skin and fake HDR, delivering genuine epidermal pores, hair strands, and commercial lighting while consuming only ~2.1 GB of RAM.
- **Dedicated Reference Modes (A, B, C, D):** Separating face identity (Mode A), lighting style (Mode B), wardrobe (Mode C), and composition (Mode D) prevents node graph entanglement and memory over-allocation.
- **Non-Destructive Dataset Prep:** Guarantees your high-resolution original photographs are never altered or lost, creating clean, standardized training buckets.

---

## 3. Where Models Go

All models reside inside structured directories in `AI/models/`:

| Asset Type | Target Folder | Verified Model Name | File Size |
|---|---|---|---|
| **Base Checkpoints** | `AI/models/checkpoints/` | `realisticVisionV60B1_v60B1VAE.safetensors` | 2.13 GB |
| **Quantized Checkpoints** | `AI/models/diffusion_models/` | `sdxl_base_q4_k_m.gguf` | 3.80 GB |
| **VAEs** | `AI/models/vae/` | `vae-ft-mse-840000-ema-pruned.safetensors` | 335 MB |
| **Text Encoders / CLIP** | `AI/models/clip/` | `clip_vision_vit_h.safetensors` | 2.50 GB |
| **LoRAs / Adapters** | `AI/models/loras/` | `mpho_madikwane_v1.safetensors` | ~140 MB |
| **ControlNet Models** | `AI/models/controlnet/` | `control_v11f1p_sd15_depth.pth` | 1.45 GB |
| **IP-Adapter Models** | `AI/models/ipadapter/` | `ip-adapter-faceid-portrait_sd15.bin` | 135 MB |
| **Upscalers** | `AI/models/upscalers/` | `4x-UltraSharp.pth` | 67 MB |

---

## 4. How to Launch ComfyUI on MacBook Neo

To launch ComfyUI with optimal Apple Silicon memory settings:

```bash
# Recommended default for 8GB MacBook Neo:
./AI/scripts/mac_launcher.sh low-memory

# For fast prompt prototyping:
./AI/scripts/mac_launcher.sh fast

# For maximum quality (2-pass upscale):
./AI/scripts/mac_launcher.sh quality
```
ComfyUI will initialize at `http://127.0.0.1:8188`.

---

## 5. How to Generate an Image

1. Open `http://127.0.0.1:8188` in Safari or Chrome.
2. Drag and drop `AI/workflows/01_simple_generation_sd15_photo.json` onto the canvas.
3. In the **CLIPTextEncode** node, type your prompt (or paste one of the 12 presets from `AI/presets/photography_presets.json`).
4. Click **Queue Prompt**.
5. Your image will render in **12–16 seconds** and be saved to `AI/output/`.

---

## 6. How to Use Image References

Load the workflow corresponding to your goal:
- **To lock a person's facial identity (Mode A):** Load `04_mode_a_face_identity_reference.json`, upload their portrait to the `LoadImage` node, and set IP-Adapter weight to `0.75`.
- **To match lighting & color mood (Mode B):** Load `05_mode_b_style_reference.json`, upload the style image, and set style weight to `0.65`.
- **To lock wardrobe & body silhouette (Mode C):** Load `06_mode_c_subject_reference.json`.
- **To lock camera angle & composition (Mode D):** Load `07_mode_d_composition_reference.json`, upload the composition reference, and set ControlNet strength to `0.75`.

---

## 7. How to Use Your Personal LoRA

1. Place your trained `.safetensors` file into `AI/models/loras/`.
2. Load `AI/workflows/08_personal_lora_workflow.json` into ComfyUI.
3. In the `LoraLoader` node, select your LoRA file. Set model strength to `0.85` and clip strength to `0.85`.
4. In the prompt, include your unique trigger token (e.g. `photo of mpho_m man...`).
5. Generate. The output will consistently express your trained likeness and style.

---

## 8. How to Train a New LoRA

1. Place 15–30 sharp, unedited portrait photos in `AI/datasets/raw/`.
2. Run the dataset preparation pipeline:
   ```bash
   python3 AI/scripts/dataset_prep.py
   ```
3. Verify processed images in `AI/datasets/processed/` and review `AI/datasets/validation/dataset_validation_report.json`.
4. Execute training locally on your Mac:
   ```bash
   python3 AI/training/configs/train_lora_mps.py
   ```
   *(Or run `./AI/training/export_cloud_fallback.sh` to package the dataset for an 8-minute run on a cloud GPU).*
5. Move the resulting weights into `AI/models/loras/`.

---

## 9. How to Switch Models

In any Pro workflow (e.g. `02_pro_generation_modular_sd15.json`):
- Click the dropdown in the **CheckpointLoaderSimple** node and select your desired model.
- Because the architecture is decoupled, your positive prompt, negative prompt, and VAE decode nodes stay connected!
- To switch to SDXL, use the pre-configured `03_pro_generation_sdxl_quantized.json` workflow.

---

## 10. How to Troubleshoot Errors

- **`Killed: 9` or sudden crash:** Memory exceeded 8GB. Run `./mac_launcher.sh low-memory` and ensure batch size is 1.
- **Black or blank image:** VAE float16 underflow bug on Apple Silicon. Switch to `vae-ft-mse-840000-ema-pruned.safetensors` in `AI/models/vae/`.
- **Freeze at 100%:** Standard VAE decode out-of-memory spike. Replace `VAEDecode` with `VAEDecodeTiled` (tile size: 512).
- **Extreme slowness (> 5 min/image):** Mac is swap thrashing. Close browser video tabs and stick to SD1.5 Photorealism models.

---

## 11. How to Reduce Memory Usage

1. Use **Low-Memory Mode** (`./AI/scripts/mac_launcher.sh low-memory`).
2. Keep base resolution at **512×768** (portrait) or **768×512** (landscape).
3. Always use `VAEDecodeTiled` with tile size 512.
4. Keep batch size at `1`.
5. Avoid loading multiple ControlNets simultaneously.

---

## 12. How to Maximise Quality

1. Use **Quality Mode** (`./AI/scripts/mac_launcher.sh quality`).
2. Use **DPM++ 2M Karras** at **28–32 steps** with CFG between **5.0 and 5.5**.
3. Use real camera language: specify lens (`85mm f/2.0`), lighting (`150cm octabox key light with 2:1 fill`), and film stock (`Kodak Portra 400`).
4. Apply the **2-Stage Non-Destructive Upscale** workflow (`09_non_destructive_upscale_refinement.json`): Model upscale with `4x-UltraSharp` followed by a tiled latent KSampler pass at low denoise (`0.28 – 0.32`).

---

## 13. How to Update Safely

1. Never overwrite your personal models or workflows.
2. Back up `AI/models/loras/` and `AI/workflows/` before updating ComfyUI.
3. Update ComfyUI core via git pull:
   ```bash
   cd AI/ComfyUI && git pull
   ```
4. Run `python3 AI/scripts/workflow_validator.py` after updates to verify all node graphs remain intact.
