# 03 — WORKFLOW ARCHITECTURE & MODULAR PIPELINE SPECIFICATION

## Modular Pipeline Architecture

In this system, generation is never treated as a "black box" where parameters are hidden. The pipeline enforces a clean, decoupled modular structure separating the three core sub-networks:

```
                  ┌──────────────────────────────────────────────┐
                  │          CHECKPOINT / BASE LOADER            │
                  └──────┬─────────────────┬──────────────┬──────┘
                         │ MODEL           │ CLIP         │ VAE
                         ▼                 ▼              │
                  ┌──────────────┐   ┌──────────────┐     │
                  │   DIFFUSION  │   │ CLIP TEXT    │     │
                  │     UNET     │   │ ENCODER      │     │
                  └──────┬───────┘   └──────┬───────┘     │
                         │                  │             │
                         │           ┌──────┴──────┐      │
                         │           │             │      │
                         │        Positive      Negative  │
                         │        Prompt        Prompt    │
                         │           │             │      │
                         │           ▼             ▼      │
                         │      [Positive]    [Negative]  │
                         │      Conditioning  Conditioning│
                         │           │             │      │
                         │           └──────┬──────┘      │
                         ▼                  ▼             │
                  ┌─────────────────────────────────┐     │
                  │            KSAMPLER             │     │
                  │  (DPM++ 2M Karras / Euler a)    │     │
                  └────────────────┬────────────────┘     │
                                   │                      │
                                   │ LATENT               │
                                   ▼                      ▼
                  ┌──────────────────────────────────────────────┐
                  │              TILED VAE DECODE                │
                  │         (AutoencoderKL FT-MSE)               │
                  └───────────────────────┬──────────────────────┘
                                          │
                                          ▼
                                   FINAL IMAGE (sRGB)
```

---

## 1. Deep Technical Explanation of Components

### A. The MODEL (Diffusion UNet)
- **Role:** The noise prediction engine.
- **Mechanism:** Takes a noisy latent representation $z_t$ at timestep $t$ along with conditioning vectors from CLIP, and predicts the exact noise component $\epsilon_\theta(z_t, t, c)$.
- **Mathematical Form:** 
  $$\hat{z}_0 = \frac{z_t - \sigma_t \epsilon_\theta(z_t, t, c)}{\alpha_t}$$
- **Hardware Optimization:** Kept strictly in FP16 precision. When using `--lowvram`, ComfyUI streams the UNet to the MPS GPU during sampling and unloads it to system RAM during VAE decode.

### B. The CLIP (Contrastive Language-Image Pre-Training Text Encoder)
- **Role:** Translates natural language prompts into high-dimensional semantic guidance vectors.
- **Mechanism:** Tokenizes positive and negative text strings, projects them through a 12-layer Vision-Language Transformer (ViT-L/14), and produces a $77 \times 768$ tensor.
- **Negative Conditioning:** Provides guidance away from specific latent regions (e.g. waxy skin, distorted hands, oversaturated colors).

### C. The VAE (Variational Autoencoder)
- **Role:** Bridges continuous pixel space ($H \times W \times 3$) and compressed latent space ($h \times w \times 4$), providing an $8\times$ spatial compression factor ($64 \times 64 \times 4$ latent represents a $512 \times 512 \times 3$ image).
- **Independent Control:** Decoupling the VAE allows substituting the default base VAE with `vae-ft-mse-840000-ema-pruned.safetensors`, which significantly improves fine skin pores, reduces color banding, and prevents black image output on Apple Silicon.

---

## 2. Two Workflow Levels

### LEVEL 1: SIMPLE MODE (`01_simple_generation_sd15_photo.json`)
Designed for daily creative production by designers.
- **Exposed Controls:**
  - Positive Prompt
  - Negative Prompt
  - Aspect Ratio (512×512, 512×768, 768×512)
  - Seed (Random / Fixed)
  - Generate Button
- **Hidden Internal Logic:** Sampler (`dpmpp_2m`), Scheduler (`karras`), CFG (`5.5`), Steps (`25`), and VAE decode are pre-calibrated to optimal photorealism defaults.

### LEVEL 2: PRO MODE (`02_pro_generation_modular_sd15.json` & `03_pro_generation_sdxl_quantized.json`)
Exposes all internal neural architecture parameters:
- **Independent VAE Loader:** Choose between Base, FT-MSE, or Color-graded VAEs.
- **CLIP Last Layer Skip:** Set to `-1` (default) or `-2` (higher conceptual flexibility).
- **CFG Scale Tuning:** 4.0 to 6.5 (calibrated to prevent high-contrast burning).
- **Sampler / Scheduler Selection:** DPM++ 2M Karras, DPM++ SDE Karras, Euler Ancestral, UniPC.
- **Tiled VAE Controls:** Configurable tile size (512px) and overlap (64px) for extreme memory stability.
- **FreeU / Model Sampling (Optional):** Balances backbone stages to boost high-frequency texture.
