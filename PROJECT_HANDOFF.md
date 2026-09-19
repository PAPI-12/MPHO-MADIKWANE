# MPHO MADIKWANE — Project Handoff

Use this document to continue the project in a new chat. It records the brand, design system, file structure, all decisions made so far, known limitations, and the exact state of the code.

---

## 1. What has been built

Two deliverables live in one React + Vite + Tailwind v4 project:

1. **Brand Development Strategy document** (65 slides rebuilt as a long-scroll editorial publication) — components in `src/components/Part01.tsx` … `Part06.tsx`, `Cover.tsx`, `Closing.tsx`, `Nav.tsx`. **Currently not routed** (App.tsx was replaced by the website router). To view it again, render `<Cover/> <Contents/> <Part01/> … <Closing/>` — see §9.
2. **Brand website** (current `src/App.tsx`) — 6 pages using `react-router-dom`: Home, About, Programmes, Impact, Partners, Contact.

Build passes with `npm run build` (Vite single-file output to `dist/index.html`).

---

## 2. Critical naming rule

The organisation name is **MPHO MADIKWANE** everywhere. The source copy used "Mpomadigwane" — every instance was replaced. Never reintroduce "Mpomadigwane". Slide 29 ("naming conflict") was rewritten as a confirmation: *one name, one mark, no variants.*

---

## 3. Design system (must stay consistent)

Reference look & feel: Redscout-style editorial — stark ink-on-warm-paper, oversized grotesque type contrasted with an editorial serif italic, hairline rules, numbered chapters, generous negative space, monochrome documentary photography. Authentically South African. **Not corporate, not generic NGO.**

### Colours (Tailwind v4 `@theme` tokens in `src/index.css`)
| Token | Hex | Use |
|---|---|---|
| `paper` | `#F2EEE6` | Primary background |
| `paper-2` | `#E9E3D8` | Warm neutral |
| `ink` | `#0A0A0A` | Text / dark sections |
| `ink-2` | `#2A2A2A` | |
| `mute` | `#6F6A62` | |
| `earth` | `#B8461D` | Emphasis / accent (≤5% of surface) |
| `growth` | `#4F5D3A` | Outcomes |
| `ochre` | `#C9962B` | Energy / accent dot on headlines |
| `line` | `rgba(10,10,10,.16)` | Hairlines on light |
| `line-light` | `rgba(242,238,230,.18)` | Hairlines on dark |

### Typography (Google Fonts loaded in `index.html`)
- **Archivo** (variable width/weight) — primary sans. Utility classes: `.display` (uppercase, tight, 0.88 lh), `.display-wide` (wdth 112), `.display-narrow` (wdth 72), `.eyebrow` (0.68rem, 0.22em tracking, uppercase).
- **Instrument Serif** — secondary serif. `.serif`, `.serif-i` (italic) for belief statements, captions, human moments.
- `.mono-num` tabular numerals. `.strike` angled strike-through. `.img-mono` grayscale+contrast filter for all photography. `.grid-bg` / `.grid-bg-dark` faint 12-col grid backgrounds. `.marquee` keyframe.

### Layout rules
- 12-column grids, hairline `border-t border-line` rows, `gap-px bg-line` tile grids.
- Each strategy Part opens with a full-bleed monochrome photo + screen-height numeral.
- Alternate paper / ink / one `earth` "punch" page per part.
- Photography: **people in action, dignity and agency**, black-and-white, natural light, candid. Never pity imagery.
- Impact metrics are shown as deliberate blank dashes ("—") — only publish real data.

### Logo
Geometric **M / inverted M** SVG in `src/components/Logo.tsx` — exports `Mark` (props: `className`, `stroke`, `style`), `Wordmark` (`stacked?`), `Lockup` (`dark?`). The user's actual logo file "MPHO MADIKWANE LOGO" was **never present in the filesystem**; the SVG is a reconstruction. Swap it in `Logo.tsx` if the real file is uploaded.

---

## 4. Images (all in `public/images/`)

10 images were AI-generated (session limit of 10 is **exhausted** — no further generation possible this project; new images must be uploaded by the user).

| File | Content | Used in |
|---|---|---|
| `hero.jpg` | Young South Africans collaborating in a Joburg training workshop (B&W) | Strategy cover; Contact hero; Home hero slide 2; Photography grid |
| `website-hero.jpg` | Young woman leading a township workshop under corrugated roof, light beams | Home hero slide 1 |
| `city.jpg` | Soweto street at dawn, minibus taxi, cooling towers | Part 01 divider; Partners hero; logo scale test |
| `skills.jpg` | Young woman in TVET welding workshop | Pillar 02; Programmes; Part 06 divider; Home programmes panel 02 |
| `community.jpg` | Township community hall meeting, elder woman speaking | Part 02 divider; Home "What we are" left; Home programmes panel 03; Programmes pillar 03 |
| `research.jpg` | Hands writing field notes, interviewee in background | Founder slide; Home "What we are" right; Impact hero; Home impact teaser |
| `enterprise.jpg` | Young man at laptop in Khayelitsha container tech hub | Part 03 divider; Programmes pillar 02; Partners |
| `land.jpg` | Highveld grassland, ochre dirt road (COLOUR — palette source) | Colour system slide |
| `graduates.jpg` | Three graduates under jacarandas, Pretoria | Part 05 divider; Programmes hero + pillar 04; Home programmes panel 01 |
| `about-founder.jpg` | Generic male social scientist in library (NOT Mpho) | Was About hero — now replaced (see §6) |

### Founder portrait (IMPORTANT)
The user supplied a real B&W portrait of **Mpho Madikwane** (young Black South African man, black bucket hat, oversized light hoodie, hands in pockets, dark studio backdrop). It was shown in chat but **never written to the project filesystem**. The user asked for AI images featuring his likeness — this was **declined/impossible**: the generator has no reference-image conditioning and the quota is exhausted. Do not generate a different person and label him Mpho.

The About hero `<img>` now points to `/images/wan2.7-image-pro_a_create_an_accurate_i.jpg` (the user's stated filename). **That file does not exist in `public/images/` yet** — the user must upload it there (or rename to something simpler like `mpho-portrait.jpg` and update `src/pages/About.tsx` line 8).

---

## 5. File structure

```
index.html                     title: "Mpho Madikwane — Brand Development Strategy"; Google Fonts link
src/
  main.tsx                     renders <App/>
  App.tsx                      BrowserRouter + WebsiteNav + Routes + Footer  (WEBSITE)
  index.css                    Tailwind v4 @theme tokens + editorial utility classes + print styles
  utils/cn.ts                  clsx + tailwind-merge
  components/
    Logo.tsx                   Mark / Wordmark / Lockup (SVG M + inverted M)
    Frame.tsx                  Slide, PartDivider, Eyebrow, Arrow, Flow(dark?), Chain, NumRow, Folio
    Nav.tsx                    Strategy-doc chapter rail + progress hairline (unused by website)
    Cover.tsx                  Strategy cover
    Part01.tsx … Part06.tsx    Strategy slides 01–59 (+ EcosystemDiagram, CycleRing, EngineDiagram SVGs)
    Closing.tsx                Slides 60–65 + final slide
    WebsiteNav.tsx             exports WebsiteNav (fixed, blur) and Footer
  pages/
    Home.tsx
    About.tsx
    Programmes.tsx
    Impact.tsx
    Partners.tsx
    Contact.tsx
public/images/                 10 jpgs listed above
PROJECT_HANDOFF.md             this file
```

Dependencies added: `react-router-dom`. (clsx, tailwind-merge already present.) Never edit package.json / vite.config.ts directly.

---

## 6. Website — page-by-page current state

### Nav / Footer (`WebsiteNav.tsx`)
Fixed top bar, `bg-paper/80 backdrop-blur`, Mark + "MPHO MADIKWANE" wordmark, links: Home, About, Programmes, Impact, Partners, Contact (hidden on mobile — no hamburger yet). `<main className="pt-[72px]">`. Footer: lockup, Explore / Connect columns, "hello@mphomadikwane.org", "Johannesburg, South Africa", tagline.

### Home (`pages/Home.tsx`)
1. **Hero** — full-screen, **two images crossfading in a loop** (`useState`/`useEffect`, 5.5 s interval, 1.5 s opacity transition): `website-hero.jpg` → `hero.jpg`. Gradient overlays. Headline "From social insight *to* opportunity." (ochre full stop). Eyebrow "Social Impact · Community Development · Skills · Partnerships". Sub-copy + "Our programmes" outlined button.
2. **What we are** — per user's screenshot reference (Salad Project split): full-bleed **50/50 image split** (`community.jpg` | `research.jpg`), `bg-ink/35` overlay, 1px centre divider, **centred overlay copy**: eyebrow "What we are", H2 "A connector. Not a charity.", serif-i paragraph "We sit between community need and institutional opportunity — connecting people, knowledge, resources and institutions into practical pathways for development." Bottom captions "01 Community participation" / "02 Social insight".
3. **Programmes** — per user's screenshot reference (SPAPP+ three panels): paper bg, small header row "Practical pathways from insight to opportunity." + outlined "Explore programmes" button; **three equal 4:5 image panels** with `gap-px` (graduates / skills / community); numbered uppercase captions beneath: 01 Youth & Human Development, 02 Skills & Economic Opportunity, 03 Community Development. Mobile CTA below.
4. **Impact teaser** — `research.jpg` full-bleed, "Evidence before action.", link to /impact.
5. **Partners strip** — 4 columns Government / Private Sector / Education / NPOs with hairline tops, hover → earth.

### About (`pages/About.tsx`)
1. Hero (80vh) — `<img src="/images/wan2.7-image-pro_a_create_an_accurate_i.jpg" alt="Mpho Madikwane">` (**file must be uploaded**), headline "Social-science rooted. Community-connected. Evidence-led."
2. Founder split — ink block "Mpho Madikwane / Social Scientist · Social Impact Practitioner · Philanthropist" + serif bio ("understand people, build systems, connect opportunity").
3. Our purpose — large serif statement + belief paragraph.
4. Operating philosophy — ink 3×2 grid: Understand / Design / Connect / Deliver / Measure / Scale.
5. What we are not (strike-through list) | What we are.

### Programmes (`pages/Programmes.tsx`)
Hero (`graduates.jpg`) "Four pillars. One system." Then four alternating 50/50 image/text sections: 01 Youth & Human Development (skills.jpg), 02 Skills & Economic Opportunity (enterprise.jpg), 03 Community Development (community.jpg), 04 Partnerships & Social Investment (graduates.jpg, ink bg).

### Impact (`pages/Impact.tsx`)
Hero (`research.jpg`) "From output to impact." → 5-col framework (Input/Activity/Output/Outcome/Impact) → worked example tiles 500 / 400 / 250 / ↑ → ink section "Only publish supported figures." with six blank-dash metric boxes.

### Partners (`pages/Partners.tsx`)
Hero (`city.jpg`) "The ecosystem. Not the island." → inline SVG ecosystem diagram (Government top, Private Sector / Education sides, NPOs, Communities below, earth-coloured MPHO MADIKWANE centre) → 4 image-backed partner cards (Government, Private Sector, Education & Training, NPOs & CBOs).

### Contact (`pages/Contact.tsx`)
Hero (`hero.jpg`) "Let's build something together." → ink contact block (Johannesburg · hello@mphomadikwane.org · +27 11 123 4567 — placeholder) | serif invitation + mailto button → "Build with us." closing.

---

## 7. Brand strategy content (condensed source of truth)

- **Tagline / brand idea:** FROM SOCIAL INSIGHT TO OPPORTUNITY.
- **Descriptor line:** Social Impact • Community Development • Skills • Partnerships
- **Positioning:** A social-impact connector & implementation partner — sits between community need and institutional opportunity.
- **Purpose:** Understand social/economic realities and turn understanding into practical opportunities for development, skills, participation and sustainable change. Belief: communities should participate in creating solutions, not just receive them.
- **Mission:** Design and deliver evidence-informed social-impact programmes by connecting communities with government, education/training institutions, NPOs and the private sector. We: Understand. Design. Connect. Deliver. Measure.
- **Vision:** Communities with meaningful access to knowledge, skills, networks and opportunities to shape their own development. Dependency → Capability → Participation → Opportunity.
- **Method loop:** Understand → Design → Connect → Deliver → Measure → Scale.
- **Pillars:** 01 Youth & Human Development · 02 Skills & Economic Opportunity · 03 Community Development · 04 Partnerships & Social Investment.
- **Founder:** Mpho Madikwane — Social Scientist • Social Impact Practitioner • Philanthropist. Philosophy: "Understand people. Build systems. Connect opportunity."
- **Who we serve:** Primary — young people (unemployed youth, students, graduates, under-skilled youth, aspiring entrepreneurs). Secondary — NPOs, CBOs, youth & grassroots orgs. Ecosystem — learners, entrepreneurs, SMMEs, community enterprises.
- **Connects:** People · Knowledge · Resources · Institutions · Opportunity.
- **Values:** Human · Evidence-led · Collaborative · Accountable · Progressive.
- **Personality:** Intelligent, Human, Purposeful, Grounded, Ambitious, Collaborative, Credible, Contemporary. Not bureaucratic/corporate/charitable/academic.
- **Tone:** Clarity, Confidence, Humanity, Evidence, Purpose. Say "We work with communities to understand local challenges and build practical pathways to opportunity." not "We are passionate about changing disadvantaged communities."
- **Words we own:** Understand, Connect, Develop, Participate, Opportunity, Capability, Partnership, Impact, Progress, Community.
- **What we are not:** a charity, grant-seeker, detached consultancy, training provider alone, government programme, corporate foundation.
- **Value prop:** communities → access; government → community-connected implementation partner; education → pathway to participants; corporates → structured route from CSI to measurable outcomes; NPOs → collaboration platform.
- **Funding principle:** not "who will donate?" but "what outcomes can we create with the right partner?" Partners bring resources/expertise/infrastructure/networks/opportunity; we bring insight/people/programme capability/community access/coordination/measurement.
- **Impact chain:** Input → Activity → Output → Outcome → Impact → Learning → Scale. Example: 500 attended → 400 completed → 250 progressed → sustained economic participation.
- **Long-term:** Y1 credibility → Y2 repeatable programmes → Y3 institutional partnerships → Y4 expand portfolio → Y5+ replicate.
- **Two-layer structure:** Brand layer (01–05) earns attention; Operating layer (06 Partnership & Funding + impact + long-term model) earns trust.
- **Website nav (from strategy):** About · What we do · Programmes · Partnerships · Impact · Insights · Contact. (Insights page not yet built.)
- **Visual direction:** "Contemporary African Institution" — modern, intelligent, human, grounded, institutional, forward-looking. Avoid generic NGO imagery, decorative African motifs, stock photography, excessive colour, government aesthetics.

---

## 8. Known gaps / TODO candidates

- [ ] Upload the real Mpho portrait to `public/images/` (filename in About.tsx or rename + update).
- [ ] Upload the real logo file and replace the SVG reconstruction in `Logo.tsx`.
- [ ] Mobile hamburger menu for `WebsiteNav` (links currently hidden below `md`).
- [ ] `Insights` page (from strategy nav) not built.
- [ ] Contact form (currently mailto only); real phone number.
- [ ] More founder imagery once reference-conditioned generation or real photos are available.
- [ ] Strategy document is no longer routed — consider adding it at `/strategy` (see §9).
- [ ] BrowserRouter on a single-file static host: deep links may 404 on refresh; switch to `HashRouter` if needed.

---

## 9. Re-enabling the strategy document

Add a route in `App.tsx`:

```tsx
import { Cover } from "./components/Cover";
import { Part01 } from "./components/Part01"; // …Part06, Closing, Nav
<Route path="/strategy" element={<><Nav/><Cover/><Part01/><Part02/><Part03/><Part04/><Part05/><Part06/><Closing/></>} />
```

(The `Contents` table-of-contents component lived inline in the earlier `App.tsx` and was removed — recreate if needed: six rows 01–06 linking to `#part-01…#part-06`, labelled Brand / Operating.)

---

## 10. Working conventions used so far

- All edits via tools; never output code in chat.
- Only make the change requested; keep everything else identical ("keep everything the same").
- Preserve monochrome treatment (`img-mono`) on every photo.
- Run `npm run build` (build_project) after every change.
- Live preview URLs the user referenced: `https://01a0b74b-03e2-71f3-b71c-500abc9ba807.arena.site/` and `https://01a0b785-2749-7426-9ea1-292ae602bf26.arena.site/` (each deploy gets a new URL).
