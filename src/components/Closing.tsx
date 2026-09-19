import { Slide, Eyebrow, Chain, Folio } from "./Frame";
import { Mark, Wordmark } from "./Logo";

const P = "Synthesis";

export function Closing() {
  return (
    <>
      {/* 60 — COMPLETE BRAND MODEL */}
      <Slide n="60" part={P} title="The complete brand model" grid>
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>The complete brand model</Eyebrow>
            <h3 className="display mt-4 text-4xl md:text-6xl">Mpho Madikwane on one page.</h3>
          </div>
          <Mark className="hidden h-16 w-auto md:block" />
        </div>
        <div className="mt-8 grid flex-1 grid-cols-12 gap-px bg-line">
          {[
            ["Purpose", "Understand communities and create pathways to opportunity.", "md:col-span-4"],
            ["Mission", "Design and deliver evidence-informed social-impact programmes.", "md:col-span-4"],
            ["Vision", "Communities capable of participating in and shaping their own development.", "md:col-span-4"],
            ["Position", "Social-impact connector and implementation partner.", "md:col-span-6"],
            ["Pillars", "Youth · Skills · Community · Partnerships", "md:col-span-6"],
          ].map(([k, v, span]) => (
            <div key={k} className={`col-span-12 flex min-h-[150px] flex-col justify-between bg-paper p-5 ${span}`}>
              <span className="eyebrow opacity-60">{k}</span>
              <p className="serif mt-4 text-xl md:text-2xl">{v}</p>
            </div>
          ))}
          <div className="col-span-12 bg-paper p-5">
            <span className="eyebrow opacity-60">Method</span>
            <Chain className="mt-4" items={["Understand", "Design", "Connect", "Deliver", "Measure", "Scale"]} />
          </div>
          <div className="col-span-12 flex flex-col justify-between bg-ink p-5 text-paper md:flex-row md:items-end">
            <span className="eyebrow opacity-60">Brand idea</span>
            <p className="display mt-4 text-3xl md:mt-0 md:text-5xl">
              From social insight to opportunity<span className="text-earth">.</span>
            </p>
          </div>
        </div>
      </Slide>

      {/* 61/62 — BIG IDEA + WHAT WE ARE BUILDING */}
      <Slide n="61" part={P} title="What we are building" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>The big idea — we sit at the intersection of</Eyebrow>
            <div className="mt-6">
              {["People", "Knowledge", "Resources", "Institutions", "Opportunity"].map((t, i) => (
                <p key={t} className="display border-t border-line-light py-2 text-4xl md:text-6xl" style={{ paddingLeft: `${i * 6}%` }}>
                  {t}
                </p>
              ))}
              <div className="border-t border-line-light" />
            </div>
            <p className="serif-i mt-6 text-2xl opacity-70">Our role is to connect them.</p>
          </div>
          <div className="col-span-12 md:col-span-7 md:border-l md:border-line-light md:pl-10">
            <Eyebrow>What we are building</Eyebrow>
            <p className="serif-i mt-6 text-2xl opacity-40 md:text-3xl">
              Not simply an NPO. Not a logo. Not a website. Not a collection of programmes.
            </p>
            <p className="display mt-6 text-6xl md:text-[7vw]">An institution</p>
            <p className="mt-4 max-w-xl text-lg leading-snug opacity-80 md:text-xl">
              capable of bringing together communities, social research, government, education, training, private
              investment, philanthropy, employers and NPOs —
            </p>
            <p className="display mt-6 text-3xl text-earth md:text-5xl">to create measurable social impact.</p>
          </div>
        </div>
      </Slide>

      {/* 63 — PHILOSOPHY */}
      <Slide n="63" part={P} title="The philosophy">
        <Eyebrow>The Mpho Madikwane philosophy</Eyebrow>
        <div className="mt-8 flex-1">
          {[
            ["Don’t start with the funding.", "Start with the problem."],
            ["Don’t start with the programme.", "Start with understanding."],
            ["Don’t work in isolation.", "Build the ecosystem."],
            ["Don’t measure activity alone.", "Measure outcomes."],
            ["Don’t build for one intervention.", "Build what can learn, improve and scale."],
          ].map(([a, b]) => (
            <div key={a} className="grid grid-cols-12 items-baseline gap-4 border-t border-line py-5 md:py-7">
              <p className="serif-i col-span-12 text-2xl opacity-40 md:col-span-5 md:text-4xl">{a}</p>
              <p className="display col-span-12 text-3xl md:col-span-7 md:text-5xl">{b}</p>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
      </Slide>

      {/* 64 — ONE FRAME */}
      <Slide n="64" part={P} title="The brand in one frame" dark grid>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <Wordmark className="text-base md:text-xl" />
              <p className="eyebrow mt-2 opacity-60">Social impact &amp; community development</p>
            </div>
            <Mark className="h-16 w-auto md:h-24" />
          </div>
          <div className="my-12 grid grid-cols-2 gap-px bg-line-light md:grid-cols-4">
            {[
              ["Understand", "Communities and context."],
              ["Connect", "People, institutions and resources."],
              ["Develop", "Skills, capabilities and opportunity."],
              ["Measure", "Outcomes and impact."],
            ].map(([k, v]) => (
              <div key={k} className="flex min-h-[200px] flex-col justify-between bg-ink p-5">
                <Mark className="h-5 w-auto opacity-40" stroke={16} />
                <div>
                  <p className="display text-3xl md:text-5xl">{k}</p>
                  <p className="serif-i mt-2 text-lg opacity-70 md:text-xl">{v}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="display text-4xl md:text-7xl">
            From social insight to opportunity<span className="text-earth">.</span>
          </p>
        </div>
      </Slide>

      {/* 65 — ROAD AHEAD */}
      <Slide n="65" part={P} title="The road ahead">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>The road ahead — next steps</Eyebrow>
            <div className="mt-6">
              {[
                ["01", "Foundation", "Who are we?"],
                ["02", "Positioning", "Why Mpho Madikwane?"],
                ["03", "Brand Strategy", "What do we stand for?"],
                ["04", "Corporate Identity", "How do we look?"],
                ["05", "Brand Experience", "How do people experience us?"],
                ["06", "Partnership & Funding", "How do we build sustainable impact?"],
              ].map(([n, k, v]) => (
                <div key={n} className="grid grid-cols-12 items-baseline gap-4 border-t border-line py-3">
                  <span className="mono-num col-span-2 text-xs opacity-50 md:col-span-1">Phase {n}</span>
                  <span className="display col-span-10 text-2xl md:col-span-5 md:text-4xl">{k}</span>
                  <span className="serif-i col-span-10 col-start-3 text-lg opacity-70 md:col-span-6 md:col-start-auto md:text-2xl">{v}</span>
                </div>
              ))}
              <div className="border-t border-line" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l md:border-line md:pl-8">
            <Eyebrow className="text-earth !opacity-100">One strategic change</Eyebrow>
            <p className="serif mt-4 text-2xl md:text-3xl">
              Treat this as two layers rather than six disconnected phases.
            </p>
            <div className="mt-8 border border-ink">
              <div className="border-b border-ink p-5">
                <p className="eyebrow opacity-60">The brand layer</p>
                <p className="mt-2 text-base font-medium md:text-lg">01 Foundation · 02 Positioning · 03 Brand Strategy · 04 Corporate Identity · 05 Brand Experience</p>
                <p className="serif-i mt-2 text-lg opacity-70">Who we are and how we show up.</p>
              </div>
              <div className="bg-ink p-5 text-paper">
                <p className="eyebrow opacity-60">The operating layer</p>
                <p className="mt-2 text-base font-medium md:text-lg">06 Partnership &amp; Funding · Impact measurement · Long-term model</p>
                <p className="serif-i mt-2 text-lg opacity-70">How the brand sustains itself and proves its worth.</p>
              </div>
            </div>
            <p className="mt-6 text-sm opacity-60">The brand layer earns attention. The operating layer earns trust. They must be built together.</p>
          </div>
        </div>
        <Folio>End of strategy document.</Folio>
      </Slide>

      {/* FINAL */}
      <section className="relative flex min-h-screen flex-col bg-ink text-paper">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <Mark className="h-32 w-auto md:h-48" stroke={12} />
          <Wordmark className="mt-10 text-lg md:text-2xl" />
          <p className="display mt-16 text-4xl md:text-7xl">
            From social insight
            <br />
            to opportunity<span className="text-earth">.</span>
          </p>
          <p className="serif-i mt-8 text-2xl opacity-80 md:text-4xl">Understand. Connect. Develop. Transform.</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line-light px-6 py-6 md:flex-row md:px-12">
          <p className="eyebrow flex flex-wrap justify-center gap-x-3 opacity-70">
            <span>Social Impact</span>
            <span>•</span>
            <span>Community Development</span>
            <span>•</span>
            <span>Skills</span>
            <span>•</span>
            <span>Partnerships</span>
          </p>
          <p className="eyebrow opacity-50">Brand Development Strategy — 2026</p>
        </div>
      </section>
    </>
  );
}
