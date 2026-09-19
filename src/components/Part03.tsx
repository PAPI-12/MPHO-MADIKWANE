import { Slide, PartDivider, Eyebrow, Folio, Chain, NumRow } from "./Frame";

const P = "Part 03 — Brand Strategy";

export function Part03() {
  return (
    <>
      <PartDivider
        id="part-03"
        n="03"
        title="Brand Strategy"
        sub="Defining what Mpho Madikwane believes, sounds like and stands for."
        image="/images/enterprise.jpg"
      />

      {/* 19 — BRAND IDEA */}
      <Slide n="19" part={P} title="Our brand idea">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>Our brand idea</Eyebrow>
            <div className="serif mt-6 text-3xl leading-[1.15] md:text-5xl">
              <p>There are resources.</p>
              <p>There are people.</p>
              <p>There are institutions.</p>
              <p>There are communities.</p>
              <p>There are opportunities.</p>
              <p className="serif-i mt-6 opacity-60">The missing piece is often connection.</p>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-7 md:pl-8">
            <p className="display text-[16vw] leading-[0.8] md:text-[8.5vw]">
              Connecting
              <br />
              <span className="text-earth">possibility</span>
            </p>
            <p className="eyebrow mt-8 opacity-60">Mpho Madikwane connects them.</p>
          </div>
        </div>
      </Slide>

      {/* 20 — PROMISE */}
      <Slide n="20" part={P} title="Our brand promise" earth>
        <Eyebrow className="!opacity-80">Our brand promise</Eyebrow>
        <div className="flex flex-1 flex-col justify-center">
          <p className="display text-5xl md:text-[7vw]">
            We turn understanding into action
            <span className="serif-i block normal-case tracking-normal opacity-90">and partnerships into opportunity.</span>
          </p>
        </div>
      </Slide>

      {/* 21 — VALUES */}
      <Slide n="21" part={P} title="Our brand values">
        <Eyebrow>Our brand values</Eyebrow>
        <h3 className="display mt-6 text-4xl md:text-6xl">Five things we will not trade.</h3>
        <div className="mt-10">
          <NumRow n="01" title="Human" body="People come before programmes." />
          <NumRow n="02" title="Evidence-led" body="We seek to understand before acting." />
          <NumRow n="03" title="Collaborative" body="Meaningful development requires multiple perspectives." />
          <NumRow n="04" title="Accountable" body="Resources and relationships must produce responsible outcomes." />
          <NumRow n="05" title="Progressive" body="We continuously learn, adapt and improve." />
          <div className="border-t border-line" />
        </div>
      </Slide>

      {/* 22 — PERSONALITY */}
      <Slide n="22" part={P} title="Our personality" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <Eyebrow>Our personality — if Mpho Madikwane were a person</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Intelligent", "Human", "Purposeful", "Grounded", "Ambitious", "Collaborative", "Credible", "Contemporary"].map(
                (t, i) => (
                  <span key={t} className={i % 2 === 0 ? "display text-5xl md:text-8xl" : "serif-i text-5xl md:text-8xl"}>
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:border-l md:border-line-light md:pl-8">
            <Eyebrow>Not</Eyebrow>
            <ul className="mt-6 space-y-3 text-xl opacity-70 md:text-2xl">
              <li>Overly bureaucratic.</li>
              <li>Overly corporate.</li>
              <li>Overly charitable.</li>
              <li>Overly academic.</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 23 — TONE */}
      <Slide n="23" part={P} title="Our tone of voice">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Our tone of voice — we speak with</Eyebrow>
            <ul className="display mt-6 text-4xl md:text-6xl">
              {["Clarity", "Confidence", "Humanity", "Evidence", "Purpose"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
          <div className="col-span-12 grid content-center gap-10 md:col-span-8 md:pl-12">
            <div>
              <Eyebrow>Instead of</Eyebrow>
              <p className="serif-i mt-3 text-3xl opacity-40 md:text-5xl">
                “We are passionate about changing disadvantaged communities.”
              </p>
            </div>
            <div className="border-t border-line pt-10">
              <Eyebrow className="text-earth !opacity-100">We say</Eyebrow>
              <p className="serif mt-3 text-3xl md:text-6xl">
                “We work with communities to understand local challenges and build practical pathways to
                opportunity.”
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 24 — LANGUAGE */}
      <Slide n="24" part={P} title="Our language" dark className="overflow-hidden">
        <Eyebrow>Our language — words we should own</Eyebrow>
        <div className="mt-8 flex flex-1 flex-col justify-center">
          {[
            ["Understand", "Connect", "Develop", "Participate", "Opportunity"],
            ["Capability", "Partnership", "Impact", "Progress", "Community"],
          ].map((row, r) => (
            <div key={r} className="overflow-hidden border-t border-line-light py-2 last:border-b">
              <div className={r === 1 ? "marquee flex whitespace-nowrap [animation-direction:reverse]" : "marquee flex whitespace-nowrap"}>
                {[...row, ...row].map((w, i) => (
                  <span key={i} className="display px-6 text-[12vw] leading-[0.9] md:text-[9vw]">
                    {w}
                    <span className="text-earth">.</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Folio>Ten words. Used consistently, they become recognisable as ours.</Folio>
      </Slide>

      {/* 25 — NARRATIVE */}
      <Slide n="25" part={P} title="Our brand narrative" grid>
        <Eyebrow>Our brand narrative</Eyebrow>
        <div className="mt-8 grid flex-1 grid-cols-1 gap-px bg-line md:grid-cols-5">
          {[
            ["The problem", "Communities have needs."],
            ["The gap", "Resources and opportunities often exist elsewhere in the ecosystem."],
            ["The opportunity", "Connect the two."],
            ["Our role", "Understand → Design → Connect → Deliver → Measure."],
            ["The result", "More meaningful pathways to development and opportunity."],
          ].map(([k, v], i) => (
            <div key={k} className={`flex min-h-[220px] flex-col justify-between p-6 ${i === 3 ? "bg-ink text-paper" : "bg-paper"}`}>
              <span className="mono-num text-xs opacity-50">0{i + 1}</span>
              <div>
                <p className="eyebrow opacity-60">{k}</p>
                <p className="serif mt-3 text-2xl md:text-3xl">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 26 — TAGLINE TERRITORY */}
      <Slide n="26" part={P} title="Tagline territory">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>Tagline territory — the strongest</Eyebrow>
            <p className="display mt-6 text-5xl md:text-8xl">
              From social insight to opportunity<span className="text-earth">.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l md:border-line md:pl-8">
            <Eyebrow>Territories to keep exploring</Eyebrow>
            <ul className="serif-i mt-6 space-y-3 text-2xl md:text-4xl">
              <li>Connecting People. Building Opportunity.</li>
              <li>Insight Into Action.</li>
              <li>Connecting Possibility.</li>
              <li>Understand. Connect. Develop.</li>
            </ul>
            <p className="mt-10 max-w-sm text-base opacity-70">
              These remain creative territories rather than a finalised tagline. Test them in the world before committing.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <Chain items={["Understand", "Connect", "Develop"]} />
        </div>
      </Slide>
    </>
  );
}
