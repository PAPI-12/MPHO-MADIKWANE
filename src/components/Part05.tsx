import { Slide, PartDivider, Eyebrow, Flow, Folio, Arrow } from "./Frame";
import { Mark } from "./Logo";

const P = "Part 05 — Brand Experience";

export function Part05() {
  return (
    <>
      <PartDivider
        id="part-05"
        n="05"
        title="Brand Experience"
        sub="Defining how people experience Mpho Madikwane beyond the logo."
        image="/images/graduates.jpg"
      />

      {/* 36 — THE EXPERIENCE */}
      <Slide n="36" part={P} title="The brand experience">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>The brand experience</Eyebrow>
            <p className="display mt-6 text-5xl md:text-8xl">
              A brand is not only what people see.
            </p>
            <p className="serif-i mt-6 max-w-xl text-3xl md:text-4xl">
              It is what people experience every time they interact with the organisation.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <Eyebrow>Every interaction should communicate</Eyebrow>
            <ul className="display mt-6 text-3xl md:text-5xl">
              {["Credibility", "Respect", "Clarity", "Efficiency", "Humanity", "Accountability"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
        </div>
      </Slide>

      {/* 37 — COMMUNITY EXPERIENCE */}
      <Slide n="37" part={P} title="The community experience" dark className="!pb-0">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>The community experience — a participant should experience</Eyebrow>
            <Flow
              big
              dark
              className="mt-8"
              steps={[
                { k: "Being heard" },
                { k: "Being understood" },
                { k: "Being included" },
                { k: "Being developed" },
                { k: "Being connected" },
                { k: "Having a pathway forward" },
              ]}
            />
          </div>
          <div className="relative col-span-12 -mx-6 min-h-[50vh] md:col-span-6 md:-mr-12 md:mx-0">
            <img src="/images/graduates.jpg" alt="Graduates walking together" className="img-mono absolute inset-0 h-full w-full object-cover" />
            <p className="eyebrow absolute bottom-6 left-6 text-paper">Step 06 — a pathway forward.</p>
          </div>
        </div>
      </Slide>

      {/* 38/39 — CORPORATE + GOVERNMENT */}
      <Slide n="38" part={P} title="The corporate & government experience">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>The corporate experience — a CSI partner should experience</Eyebrow>
            <div className="mt-6 grid grid-cols-2 gap-px bg-line md:grid-cols-3">
              {[
                ["Discovery", "Understand the social challenge."],
                ["Strategy", "Understand the proposed intervention."],
                ["Investment", "Understand what resources are required."],
                ["Implementation", "See where the investment goes."],
                ["Reporting", "See measurable outcomes."],
                ["Long-term partnership", "Understand what can happen next."],
              ].map(([k, v], i) => (
                <div key={k} className="flex min-h-[170px] flex-col justify-between bg-paper p-4">
                  <div className="flex items-center justify-between">
                    <span className="mono-num text-xs opacity-50">0{i + 1}</span>
                    {i < 5 && <Arrow className="h-3 w-3 opacity-40" />}
                  </div>
                  <div>
                    <p className="display text-xl md:text-2xl">{k}</p>
                    <p className="serif-i mt-1 text-base opacity-70 md:text-lg">{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l md:border-line md:pl-8">
            <Eyebrow>The government experience — stakeholders should see</Eyebrow>
            <ul className="mt-6">
              {[
                "Community understanding",
                "Programme capability",
                "Stakeholder coordination",
                "Alignment with development objectives",
                "Accountability",
                "Evidence of outcomes",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 border-t border-line py-3 text-lg md:text-xl">
                  <span className="block h-2 w-2 bg-ink" />
                  {t}
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
        </div>
      </Slide>

      {/* 40 — PARTNER JOURNEY */}
      <Slide n="40" part={P} title="The partner journey" dark grid>
        <Eyebrow>The partner journey</Eyebrow>
        <h3 className="display mt-6 text-4xl md:text-6xl">Eight questions, in order.</h3>
        <div className="mt-10 grid flex-1 grid-cols-2 gap-px bg-line-light md:grid-cols-4">
          {[
            ["Discover", "Who are we?"],
            ["Understand", "What problem are we addressing?"],
            ["Align", "What are the shared objectives?"],
            ["Design", "What should we build?"],
            ["Partner", "Who contributes what?"],
            ["Implement", "How will it happen?"],
            ["Measure", "What changed?"],
            ["Grow", "What happens next?"],
          ].map(([k, v], i) => (
            <div key={k} className="flex min-h-[180px] flex-col justify-between bg-ink p-5">
              <span className="mono-num text-xs opacity-40">0{i + 1}</span>
              <div>
                <p className="display text-2xl md:text-4xl">{k}</p>
                <p className="serif-i mt-2 text-lg opacity-70 md:text-xl">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 41/42 — DIGITAL */}
      <Slide n="41" part={P} title="Digital experience">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Digital experience</Eyebrow>
            <p className="serif mt-6 text-2xl md:text-3xl">
              The website should not feel like a static NPO brochure. It should function as an
            </p>
            <p className="display mt-3 text-5xl md:text-7xl">Impact platform</p>
            <Eyebrow className="mt-10">Primary navigation</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium tracking-widest uppercase">
              {["About", "What we do", "Programmes", "Partnerships", "Impact", "Insights", "Contact"].map((t) => (
                <li key={t} className="border-b border-ink pb-0.5">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {/* wireframe */}
          <div className="col-span-12 md:col-span-8">
            <div className="border border-ink bg-paper">
              <div className="flex items-center justify-between border-b border-ink px-4 py-3">
                <div className="flex items-center gap-2">
                  <Mark className="h-4 w-auto" stroke={18} />
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase">Mpho Madikwane</span>
                </div>
                <div className="hidden gap-4 text-[9px] tracking-[0.18em] uppercase md:flex">
                  {["About", "What we do", "Programmes", "Partnerships", "Impact", "Insights", "Contact"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-12 border-b border-ink">
                <div className="col-span-7 p-6">
                  <p className="eyebrow opacity-50">Hero</p>
                  <p className="display mt-6 text-3xl md:text-5xl">
                    From social insight to opportunity<span className="text-earth">.</span>
                  </p>
                  <p className="mt-4 max-w-sm text-xs leading-snug opacity-70 md:text-sm">
                    Mpho Madikwane connects communities, institutions and resources to develop practical pathways toward
                    skills, opportunity and sustainable social impact.
                  </p>
                  <span className="mt-6 inline-block border border-ink px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase">
                    Partner with us
                  </span>
                </div>
                <div className="col-span-5 border-l border-ink">
                  <img src="/images/skills.jpg" alt="" className="img-mono h-full w-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-5 divide-x divide-ink text-[9px] tracking-[0.18em] uppercase">
                {["What we do", "Our programmes", "Our ecosystem", "Our impact", "Partner with us"].map((t) => (
                  <div key={t} className="flex min-h-[70px] items-end p-3">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs opacity-50">Homepage — immediately show what we do, programmes, ecosystem, impact and partnership.</p>
          </div>
        </div>
      </Slide>

      {/* 43 — IMPACT EXPERIENCE */}
      <Slide n="43" part={P} title="Impact experience" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Impact experience</Eyebrow>
            <p className="serif-i mt-6 text-2xl opacity-40 line-through md:text-3xl">“We have helped many people.”</p>
            <p className="display mt-6 text-4xl md:text-6xl">Make impact visible.</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-2 gap-px bg-line-light md:grid-cols-3">
              {[
                "People reached",
                "Programmes delivered",
                "Training completed",
                "Partners engaged",
                "Opportunities created",
                "Communities reached",
              ].map((t) => (
                <div key={t} className="flex min-h-[160px] flex-col justify-between bg-ink p-5 md:min-h-[24vh]">
                  <span className="display mono-num text-5xl opacity-30 md:text-7xl">—</span>
                  <span className="eyebrow">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-4 border-l-2 border-earth pl-5">
              <p className="text-base opacity-80 md:text-lg">
                Figures are deliberately left blank. Only publish numbers supported by actual organisational data.
                Outcomes, not activity.
              </p>
            </div>
          </div>
        </div>
        <Folio>Empty dashes are a promise, not a gap.</Folio>
      </Slide>
    </>
  );
}
