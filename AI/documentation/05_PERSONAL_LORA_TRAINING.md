# 05 — PERSONAL LoRA TRAINING & DATASET CURATION PIPELINE

## The Foundational Truth: Custom Model vs Checkpoint

> **Critical Distinction:**  
> Assembling a base `MODEL` + `CLIP` + `VAE` in ComfyUI does **not** create a new trained AI model. It merely executes an existing foundation checkpoint.
>
> To build your **true personal model**, you must establish a strong photorealistic base foundation and train a lightweight **Low-Rank Adaptation (LoRA)** adapter on your own curated dataset.

### The Long-Term Architecture

```
BASE PHOTOREALISTIC FOUNDATION MODEL (Realistic Vision v6.0 B1)
               +
CURATED HIGH-RESOLUTION PERSONAL DATASET (15-30 authentic raw photos)
               +
TRAINED LoRA ADAPTER (Rank 16, Alpha 16 @ 1e-4 lr)
               +
IMAGE REFERENCE CONDITIONING (IP-Adapter FaceID / Style)
               +
COMPOSITION GUIDANCE (ControlNet Depth / Pose)
========================================================================
YOUR PERSONAL PHOTOREALISTIC MODEL SYSTEM
```

---

## 1. Dataset Preparation Pipeline (Non-Destructive)

The dataset preparation tool (`AI/scripts/dataset_prep.py`) strictly enforces non-destructive processing:

```
RAW PHOTOS (AI/datasets/raw/)
       │
       ▼
[Image Integrity Check] ──► Discard corrupted / truncated files
       │
       ▼
[Color Space Normalization] ──► Convert RGBA / CMYK to standard sRGB
       │
       ▼
[Perceptual Deduplication] ──► Compute dHash; reject images with Hamming distance ≤ 3
       │
       ▼
[Sharpness / Blur Detection] ──► Measure Laplacian variance; reject blurry shots (< 15.0)
       │
       ▼
[Multi-Aspect Ratio Bucketing] ──► Smart center crop to 512x512, 512x768, 768x512
       │
       ▼
[Anti-Aliased Downsampling] ──► Lanczos resampling to prevent high-frequency aliasing
       │
       ▼
[Automated Captioning] ──► Generate paired .txt captions with trigger token (mpho_m)
       │
       ▼
PROCESSED DATASET (AI/datasets/processed/)
```

### Running the Dataset Pipeline
```bash
python3 AI/scripts/dataset_prep.py
```
This reads your raw photos in `AI/datasets/raw/` and outputs clean, paired training pairs (`.png` and `.txt`) in `AI/datasets/processed/` along with a full audit in `AI/datasets/validation/dataset_validation_report.json`.

---

## 2. LoRA Training Strategy for MacBook Neo (Apple A18 Pro 8GB)

Training a massive foundation model (billions of parameters) on an 8GB laptop is physically impossible and thermally reckless. However, **Low-Rank Adaptation (LoRA)** freezes the foundation model and trains small low-rank decomposition matrices ($W = W_0 + \Delta W$, where $\Delta W = B \cdot A$ with rank $r \ll d$).

### Calibrated Hyperparameters for 8GB Mac Stability

| Parameter | Calibrated Value | Engineering Rationale |
|---|---|---|
| **Network Dimension (Rank $r$)** | **16** | Captures fine facial topology without ballooning memory. (Rank 8 for ultra-lightweight). |
| **Network Alpha ($\alpha$)** | **16** | $1:1$ ratio with rank ensures stable gradient scaling ($\Delta W = \frac{\alpha}{r} B A$). |
| **UNet Learning Rate** | **$1 \times 10^{-4}$** | Standard stable convergence rate for AdamW. |
| **Text Encoder Learning Rate** | **$5 \times 10^{-5}$** | Prevents catastrophic forgetting of general language concepts. |
| **Batch Size** | **1** | Strictly 1 on 8GB Unified RAM to avoid out-of-memory errors. |
| **Gradient Accumulation** | **4** | Simulates effective batch size of 4 without increasing VRAM! |
| **Gradient Checkpointing** | **TRUE** | Recomputes activations during backward pass, saving ~45% VRAM. |
| **Mixed Precision** | **FP16** | Native Metal Performance Shaders (MPS) float16 acceleration. |
| **Resolution** | **512×512 / 512×768** | Bucketed training for variable aspect ratios. |
| **Total Steps** | **1,500 – 1,800 steps** | Optimal point for identity convergence without overfitting. |
| **Checkpoint Interval** | **Every 250 steps** | Allows picking the best intermediate epoch. |

### Running Local Training on Mac
```bash
cd AI/training/configs
python3 train_lora_mps.py
```

---

## 3. Cloud GPU Fallback Option (RunPod / Vast.ai / Colab)

If you need your MacBook Neo free for other tasks or want your LoRA trained in **8 minutes** instead of 45 minutes, use the automated export bundle:

```bash
cd AI/training
./export_cloud_fallback.sh
```
This packages your processed dataset into `AI/training/mpho_lora_dataset_bundle.tar.gz` and outputs ready-to-run commands for any cloud GPU instance (e.g. RTX 4090 @ $0.34/hr).
