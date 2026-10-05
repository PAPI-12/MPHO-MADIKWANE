# 04 — IMAGE REFERENCE SYSTEMS & THE FOUR CONDITIONING MODES

To maintain stability on the 8GB MacBook Neo, the system intentionally avoids a single monolithic "all-in-one" workflow. Instead, it provides **four dedicated, lightweight reference modes**, each isolating specific visual channels.

---

## The Four Reference Modes

```
REFERENCE IMAGE
       │
       ├─► [MODE A: FACE / IDENTITY] ──► IP-Adapter FaceID ──► Face Geometry & Likeness
       │
       ├─► [MODE B: STYLE TRANSFER]   ──► CLIP-Vision ViT-H ─► Lighting, Palette & Mood
       │
       ├─► [MODE C: SUBJECT REFERENCE]──► IP-Adapter Plus ───► Wardrobe & Silhouette
       │
       └─► [MODE D: COMPOSITION]      ──► ControlNet Depth ──► Camera Angle & Vanishing Lines
```

---

## MODE A — FACE / IDENTITY REFERENCE
**Workflow File:** `AI/workflows/04_mode_a_face_identity_reference.json`  
**Core Technologies:** IP-Adapter FaceID (`ip-adapter-faceid-portrait_sd15.bin`) + InsightFace Antelopev2

### How It Operates:
1. Detects facial bounding box and extracts a 512-dimensional facial recognition embedding vector.
2. Injects identity features into the cross-attention layers of the Diffusion UNet via decoupled cross-attention keys and values.
3. Completely decouples identity from clothing, lighting, and camera angle.

### Calibrated Settings:
- **IP-Adapter Weight:** `0.70 – 0.80` (0.75 recommended)
- **Start Step:** `0.0` (from beginning)
- **End Step:** `0.85` (allows last 15% of steps to naturally integrate skin pores into scene lighting)
- **Prompt Formula:** Focus prompt on the environment, wardrobe, and lighting, allowing the adapter to carry the identity.

---

## MODE B — STYLE REFERENCE
**Workflow File:** `AI/workflows/05_mode_b_style_reference.json`  
**Core Technologies:** CLIP-Vision ViT-H/14 Image Encoder (`clip_vision_vit_h.safetensors`) + IP-Adapter Style Transfer

### How It Operates:
1. Passes the reference image through an unconditioned visual transformer (CLIP-Vision).
2. Extracts high-level style representations: color palette, contrast ratio, light falloff, and film emulsion character.
3. Excludes semantic face tokens, ensuring the reference person is **not** copied into the output.

### Calibrated Settings:
- **Style Weight:** `0.55 – 0.65`
- **End Step:** `1.0`
- **Ideal For:** Copying high-end editorial lighting (e.g. moody chiaroscuro, warm golden hour, muted earth palettes).

---

## MODE C — SUBJECT REFERENCE (WARDROBE & SILHOUETTE)
**Workflow File:** `AI/workflows/06_mode_c_subject_reference.json`  
**Core Technologies:** IP-Adapter Plus (Full Body Feature Extraction)

### How It Operates:
1. Embeds full-frame visual features (garment textures, color blocking, silhouettes, accessories).
2. Maintains consistent clothing across multiple scenes or shots in a brand lookbook campaign.

### Calibrated Settings:
- **Subject Weight:** `0.60 – 0.75`
- **Start Step:** `0.0`
- **End Step:** `0.80`

---

## MODE D — COMPOSITION REFERENCE
**Workflow File:** `AI/workflows/07_mode_d_composition_reference.json`  
**Core Technologies:** ControlNet v1.1 Depth (`control_v11f1p_sd15_depth.pth`) / ControlNet Canny

### How It Operates:
1. Computes a 16-bit depth map or edge map of the reference image.
2. Rigidly constrains the 3D spatial layout: horizon line, subject scale, camera elevation, perspective vanishing lines, and distance falloff.
3. Completely ignores colors, textures, and identities in the reference image.

### Calibrated Settings:
- **ControlNet Strength:** `0.70 – 0.85`
- **Starting Step:** `0.0`
- **Ending Step:** `0.75` (ending early allows natural organic clothing folds and hair flyaways).
