import { Slide, PartDivider, Eyebrow, Folio } from "./Frame";
import { Mark, Wordmark } from "./Logo";

const P = "Part 04 — Corporate Identity";

export function Part04() {
  return (
    <>
      <PartDivider
        id="part-04"
        n="04"
        title="Corporate Identity"
        sub="Translating the strategy into a recognisable visual system."
      />

      {/* 27 — THE LOGO */}
      <Slide n="27" part={P} title="The logo" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 flex items-center justify-center border border-line bg-paper py-16 md:col-span-7">
            <div className="flex flex-col items-center gap-8">
              <Mark className="h-[38vh] w-auto" stroke={13} />
              <Wordmark className="text-base md:text-xl" />
            </div>
          </div>
          <div className="col-span-12 flex flex-col md:col-span-5 md:pl-8">
            <Eyebrow>The logo</Eyebrow>
            <p className="serif mt-6 text-2xl md:text-3xl">
              The identity is built on a geometric M and its inversion. Two forms, one horizon. It is a strong
              foundation because the symbol already contains:
            </p>
            <ul className="mt-8">
              {["Symmetry", "Connection", "Movement", "Duality", "Structure"].map((t, i) => (
                <li key={t} className="flex items-baseline gap-6 border-t border-line py-3">
                  <span className="mono-num text-xs opacity-50">0{i + 1}</span>
                  <span className="display text-3xl md:text-5xl">{t}</span>
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
        </div>
      </Slide>

      {/* 28 — SYMBOL STORY */}
      <Slide n="28" part={P} title="The symbol story" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>The symbol story</Eyebrow>
            <p className="serif mt-6 text-2xl md:text-3xl">The two forms can represent any of the meetings we exist to make:</p>
            <div className="mt-8">
              {[
                ["Community", "Institution"],
                ["Need", "Resource"],
                ["Knowledge", "Action"],
                ["People", "Opportunity"],
                ["Present", "Future"],
              ].map(([a, b]) => (
                <div key={a} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-line-light py-3">
                  <span className="display text-2xl md:text-4xl">{a}</span>
                  <Mark className="h-6 w-auto opacity-70" stroke={16} />
                  <span className="display text-right text-2xl md:text-4xl">{b}</span>
                </div>
              ))}
              <div className="border-t border-line-light" />
            </div>
          </div>
          <div className="col-span-12 flex flex-col items-start justify-end md:col-span-7 md:pl-12">
            <div className="relative mb-10 h-[30vh] w-full">
              <Mark className="absolute left-0 top-0 h-full w-auto text-paper" stroke={10} />
              <Mark className="absolute left-[18%] top-0 h-full w-auto text-paper opacity-30" stroke={10} />
              <Mark className="absolute left-[36%] top-0 h-full w-auto text-paper opacity-10" stroke={10} />
            </div>
            <p className="display text-4xl md:text-7xl">
              The logo represents <span className="text-earth">connection</span> — not simply the initials of a name.
            </p>
          </div>
        </div>
      </Slide>

      {/* 29 — LOGO DEVELOPMENT */}
      <Slide n="29" part={P} title="Logo development">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>Logo development — resolve before final CI</Eyebrow>
            <ul className="mt-6 grid grid-cols-1 gap-0">
              {[
                "Exact organisation name",
                "Exact logo lettering",
                "Symbol proportions",
                "Typography",
                "Spacing & clear zone",
                "Registered / trademark usage",
                "Small-scale performance",
                "Digital performance",
                "Print performance",
              ].map((t, i) => (
                <li key={t} className="flex items-center gap-5 border-t border-line py-3 text-lg md:text-xl">
                  <span className="block h-3 w-3 border border-ink" />
                  <span className="mono-num w-6 text-xs opacity-40">0{i + 1}</span>
                  {t}
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <Eyebrow>Scale test</Eyebrow>
            <div className="mt-6 flex flex-wrap items-end gap-10 border border-line p-8">
              {[16, 24, 40, 72, 120].map((h) => (
                <div key={h} className="flex flex-col items-center gap-3">
                  <Mark style={{ height: h }} className="w-auto" stroke={h < 30 ? 18 : 14} />
                  <span className="mono-num text-[10px] opacity-50">{h}px</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-px bg-line">
              <div className="flex items-center justify-center bg-ink p-10 text-paper">
                <Mark className="h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center bg-paper p-10">
                <Mark className="h-16 w-auto" />
              </div>
              <div className="flex items-center justify-center bg-earth p-10 text-paper">
                <Mark className="h-16 w-auto" />
              </div>
              <div className="relative flex items-center justify-center overflow-hidden p-10 text-paper">
                <img src="/images/city.jpg" alt="" className="img-mono absolute inset-0 h-full w-full object-cover" />
                <Mark className="relative h-16 w-auto" />
              </div>
            </div>
            <div className="mt-8 border-l-2 border-earth pl-5">
              <Eyebrow>Confirmed</Eyebrow>
              <p className="mt-2 text-lg md:text-xl">
                The organisation name and wordmark are <strong className="font-semibold">MPHO MADIKWANE</strong> across
                all applications. One name. One mark. No variants.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 30 — VISUAL DIRECTION */}
      <Slide n="30" part={P} title="Visual direction" dark>
        <Eyebrow>Visual direction</Eyebrow>
        <h3 className="display mt-6 text-6xl md:text-[7vw]">
          Contemporary
          <br />
          African
          <br />
          institution<span className="text-earth">.</span>
        </h3>
        <div className="mt-12 grid grid-cols-12 gap-8 border-t border-line-light pt-8">
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>Should feel</Eyebrow>
            <p className="serif mt-4 text-2xl md:text-4xl">
              Modern. Intelligent. Human. Grounded. Institutional. Forward-looking.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>Avoid</Eyebrow>
            <ul className="mt-4 space-y-1 text-lg opacity-60 md:text-xl">
              <li>Generic NGO imagery.</li>
              <li>Overly decorative African motifs.</li>
              <li>Corporate stock photography.</li>
              <li>Excessive colour.</li>
              <li>Government-department aesthetics.</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 31 — COLOUR */}
      <Slide n="31" part={P} title="Colour system" className="!pb-0">
        <Eyebrow>Colour system</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <p className="serif text-2xl md:text-3xl">
              The monochrome logo gives us an institutional foundation. Colour is borrowed from the land, not the
              brand book — and used sparingly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-line">
              {[
                ["Ink", "#0A0A0A", "bg-ink text-paper"],
                ["Paper", "#F2EEE6", "bg-paper text-ink"],
                ["Warm neutral", "#E9E3D8", "bg-paper-2 text-ink"],
              ].map(([n, h, c]) => (
                <div key={n} className={`flex aspect-square flex-col justify-between p-4 ${c}`}>
                  <span className="eyebrow opacity-70">Core</span>
                  <div>
                    <p className="display text-xl md:text-2xl">{n}</p>
                    <p className="mono-num text-xs opacity-60">{h}</p>
                  </div>
                </div>
              ))}
              {[
                ["Earth", "#B8461D", "bg-earth text-paper"],
                ["Growth", "#4F5D3A", "bg-growth text-paper"],
                ["Ochre", "#C9962B", "bg-ochre text-ink"],
              ].map(([n, h, c]) => (
                <div key={n} className={`flex aspect-[2/1] flex-col justify-between p-4 ${c}`}>
                  <span className="eyebrow opacity-70">Supporting</span>
                  <div>
                    <p className="display text-xl md:text-2xl">{n}</p>
                    <p className="mono-num text-xs opacity-60">{h}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-lg text-sm opacity-60">
              Supporting palette ratio: no more than 5% of any surface. Earth for emphasis, Growth for outcomes, Ochre
              for energy.
            </p>
          </div>
          <div className="relative col-span-12 -mx-6 min-h-[45vh] md:col-span-5 md:-mr-12 md:mx-0">
            <img src="/images/land.jpg" alt="Highveld grassland, South Africa" className="absolute inset-0 h-full w-full object-cover" />
            <p className="eyebrow absolute bottom-6 left-6 text-paper">Source palette — the Highveld in late winter.</p>
          </div>
        </div>
      </Slide>

      {/* 32 — TYPOGRAPHY */}
      <Slide n="32" part={P} title="Typography" grid>
        <Eyebrow>Typography</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 flex flex-col border border-line bg-paper p-6 md:col-span-7 md:p-10">
            <div className="flex items-baseline justify-between">
              <span className="eyebrow opacity-60">Primary — Archivo</span>
              <span className="mono-num text-xs opacity-40">Sans · Variable width</span>
            </div>
            <p className="display mt-6 text-[14vw] leading-[0.82] md:text-[8vw]">
              Aa
              <span className="display-wide">Bb</span>
              <span className="display-narrow">Cc</span>
            </p>
            <p className="mt-6 text-lg leading-snug md:text-xl">
              Strong. Modern. Clear. Editorial. Accessible. Used for statements, headlines, navigation and data.
            </p>
            <p className="mt-auto pt-6 text-xs tracking-widest opacity-50">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
            </p>
          </div>
          <div className="col-span-12 flex flex-col border border-line bg-ink p-6 text-paper md:col-span-5 md:p-10">
            <div className="flex items-baseline justify-between">
              <span className="eyebrow opacity-60">Secondary — Instrument Serif</span>
              <span className="mono-num text-xs opacity-40">Serif · Italic</span>
            </div>
            <p className="serif mt-6 text-[14vw] leading-[0.9] md:text-[7vw]">
              Aa<span className="serif-i">Bb</span>
            </p>
            <p className="serif-i mt-6 text-2xl leading-snug opacity-80 md:text-3xl">
              A contrasting serif for research, reports, thought leadership and long-form editorial content.
            </p>
            <p className="serif mt-auto pt-6 text-sm opacity-50">
              abcdefghijklmnopqrstuvwxyz &amp; 0123456789
            </p>
          </div>
        </div>
      </Slide>

      {/* 33 — PHOTOGRAPHY */}
      <Slide n="33" part={P} title="Photography" dark className="!pb-0">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Photography</Eyebrow>
            <h3 className="display mt-6 text-5xl md:text-7xl">
              People in action.
            </h3>
            <p className="serif-i mt-4 text-2xl opacity-70">Not simply smiling portraits.</p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-lg md:text-xl">
              {["Learning", "Building", "Working", "Collaborating", "Training", "Creating", "Leading", "Participating"].map(
                (w) => (
                  <span key={w} className="border-b border-line-light pb-0.5">
                    {w}
                  </span>
                )
              )}
            </div>
            <p className="mt-10 border-l-2 border-earth pl-5 text-lg opacity-80">
              The community is shown with dignity and agency. Never as objects of pity. Always black-and-white,
              natural light, candid.
            </p>
          </div>
          <div className="col-span-12 -mx-6 grid grid-cols-2 gap-px bg-ink md:col-span-8 md:-mr-12 md:mx-0">
            <img src="/images/community.jpg" alt="Community meeting" className="img-mono aspect-[4/3] h-full w-full object-cover" />
            <img src="/images/enterprise.jpg" alt="Young entrepreneur at work" className="img-mono aspect-[4/3] h-full w-full object-cover" />
            <img src="/images/graduates.jpg" alt="Graduates on campus" className="img-mono aspect-[4/3] h-full w-full object-cover" />
            <img src="/images/hero.jpg" alt="Workshop collaboration" className="img-mono aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </Slide>

      {/* 34 — GRAPHIC LANGUAGE */}
      <Slide n="34" part={P} title="Graphic language">
        <Eyebrow>Graphic language</Eyebrow>
        <h3 className="display mt-6 max-w-3xl text-4xl md:text-6xl">
          The geometry of the logo becomes the logic of the system.
        </h3>
        <div className="mt-10 grid flex-1 grid-cols-2 gap-px bg-line md:grid-cols-6">
          {[
            ["Lines", "Connection", <line key="l" x1="10" y1="90" x2="90" y2="10" />],
            ["Grids", "Systems", <g key="g"><path d="M10 35H90M10 65H90M35 10V90M65 10V90" /></g>],
            ["Intersections", "Partnerships", <g key="i"><path d="M10 10L90 90M90 10L10 90" /></g>],
            ["Blocks", "Institutions", <g key="b"><rect x="15" y="15" width="30" height="30" fill="currentColor" /><rect x="55" y="55" width="30" height="30" fill="currentColor" /></g>],
            ["Movement", "Development", <g key="m"><path d="M10 80L35 40L60 65L90 20" /><path d="M75 20H90V35" /></g>],
            ["Open space", "Possibility", <rect key="o" x="10" y="10" width="80" height="80" />],
          ].map(([k, v, glyph], i) => (
            <div key={String(k)} className="flex min-h-[260px] flex-col justify-between bg-paper p-5">
              <span className="mono-num text-xs opacity-50">0{i + 1}</span>
              <svg viewBox="0 0 100 100" className="my-6 h-20 w-20 text-ink" fill="none" stroke="currentColor" strokeWidth={2}>
                {glyph}
              </svg>
              <div>
                <p className="display text-2xl md:text-3xl">{k}</p>
                <p className="serif-i mt-1 text-lg opacity-70">→ {v}</p>
              </div>
            </div>
          ))}
        </div>
        <Folio>A visual logic — not decoration.</Folio>
      </Slide>

      {/* 35 — CI SYSTEM */}
      <Slide n="35" part={P} title="The CI system" dark>
        <Eyebrow>The CI system — where the identity will live</Eyebrow>
        <div className="mt-8 grid flex-1 grid-cols-2 gap-px bg-line-light md:grid-cols-4">
          {[
            "Corporate profile",
            "Proposal documents",
            "CSI presentations",
            "Government proposals",
            "Programme reports",
            "Impact reports",
            "Website",
            "Social media",
            "Email",
            "Stationery",
            "Event materials",
            "Programme merchandise",
          ].map((t, i) => (
            <div key={t} className="flex min-h-[120px] flex-col justify-between bg-ink p-4 md:min-h-[22vh]">
              <span className="mono-num text-xs opacity-40">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-xl md:text-3xl">{t}</span>
            </div>
          ))}
        </div>
      </Slide>
    </>
  );
}
