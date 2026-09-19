import { Slide, PartDivider, Eyebrow, Folio, Arrow } from "./Frame";
import { Mark } from "./Logo";

const P = "Part 02 — Positioning";

export function Part02() {
  return (
    <>
      <PartDivider
        id="part-02"
        n="02"
        title="Positioning"
        sub="Defining how Mpho Madikwane should be understood in the minds of communities, partners and funders."
        image="/images/community.jpg"
      />

      {/* 12 — CHALLENGE */}
      <Slide n="12" part={P} title="The positioning challenge">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>The positioning challenge</Eyebrow>
            <p className="mt-6 text-xl leading-snug md:text-2xl">
              The social-impact sector is crowded with organisations saying the same things. Positive — but
              indistinct.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="serif-i text-5xl leading-[1.05] opacity-40 md:text-8xl">
              {["Empowering communities.", "Changing lives.", "Making a difference.", "Giving back."].map((t) => (
                <p key={t}>
                  <span className="strike">{t}</span>
                </p>
              ))}
            </div>
            <p className="display mt-12 max-w-2xl text-2xl md:text-4xl">
              None of these explain what makes Mpho Madikwane distinct.
            </p>
          </div>
        </div>
      </Slide>

      {/* 13 — POSITIONING */}
      <Slide n="13" part={P} title="Our positioning" dark grid>
        <Eyebrow>Our positioning</Eyebrow>
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <p className="display text-4xl md:text-[5.5vw]">
            A social-impact connector
            <br />
            <span className="serif-i normal-case tracking-normal opacity-70">&amp;</span> implementation partner
          </p>
        </div>
        <div className="grid grid-cols-12 items-center gap-6 border-t border-line-light pt-8">
          <div className="col-span-5">
            <Eyebrow>We sit between</Eyebrow>
            <p className="display mt-2 text-2xl md:text-5xl">Community need</p>
          </div>
          <div className="col-span-2 flex flex-col items-center gap-2">
            <Mark className="h-12 w-auto md:h-20" />
          </div>
          <div className="col-span-5 text-right">
            <Eyebrow>and</Eyebrow>
            <p className="display mt-2 text-2xl md:text-5xl">Institutional opportunity</p>
          </div>
        </div>
      </Slide>

      {/* 14 — UNIQUE SPACE */}
      <Slide n="14" part={P} title="Our unique space">
        <Eyebrow>Our unique space</Eyebrow>
        <h3 className="display mt-6 max-w-3xl text-4xl md:text-6xl">
          Six capabilities, held together. That is the space no one else occupies.
        </h3>
        <div className="mt-10 grid flex-1 grid-cols-2 gap-px bg-line md:grid-cols-3">
          {[
            ["Community", "We understand lived realities."],
            ["Social science", "We investigate and interpret those realities."],
            ["Programme design", "We translate insight into interventions."],
            ["Partnerships", "We connect the necessary ecosystem."],
            ["Implementation", "We turn plans into programmes."],
            ["Measurement", "We determine what changed."],
          ].map(([k, v], i) => (
            <div key={k} className="flex min-h-[200px] flex-col justify-between bg-paper p-5 md:p-7">
              <span className="mono-num text-xs opacity-50">0{i + 1}</span>
              <div>
                <p className="display text-2xl md:text-4xl">{k}</p>
                <p className="serif-i mt-2 text-lg opacity-70 md:text-xl">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 15 — WHAT WE ARE NOT */}
      <Slide n="15" part={P} title="What we are not">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>What we are not</Eyebrow>
            <ul className="mt-6">
              {[
                "A charity",
                "A grant-seeking organisation",
                "A consultancy detached from communities",
                "A training provider alone",
                "A government programme",
                "A corporate foundation",
              ].map((t) => (
                <li key={t} className="flex items-center gap-6 border-t border-line py-4">
                  <span className="text-earth text-2xl leading-none">×</span>
                  <span className="display text-2xl opacity-60 md:text-4xl">{t}</span>
                </li>
              ))}
              <li className="border-t border-line" />
            </ul>
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-5 md:pl-8">
            <Eyebrow>Instead</Eyebrow>
            <p className="display mt-4 text-5xl md:text-7xl">
              We operate across the ecosystem.
            </p>
          </div>
        </div>
      </Slide>

      {/* 16 — VALUE PROPOSITION */}
      <Slide n="16" part={P} title="Our value proposition" dark>
        <Eyebrow>Our value proposition</Eyebrow>
        <h3 className="display mt-6 text-4xl md:text-6xl">One organisation. Five kinds of value.</h3>
        <div className="mt-10">
          {[
            ["Communities", "Access to knowledge, networks, programmes and opportunities."],
            ["Government", "A community-connected partner capable of supporting programme implementation and engagement."],
            ["Education & training", "A pathway to community participants and development programmes."],
            ["Corporates", "A structured route from social investment to measurable community outcomes."],
            ["NPOs", "A platform for collaboration, resources and programme development."],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-12 items-baseline gap-4 border-t border-line-light py-5">
              <span className="eyebrow col-span-12 opacity-50 md:col-span-1">For</span>
              <span className="display col-span-12 text-3xl md:col-span-4 md:text-5xl">{k}</span>
              <span className="serif col-span-12 text-xl opacity-80 md:col-span-7 md:text-2xl">{v}</span>
            </div>
          ))}
          <div className="border-t border-line-light" />
        </div>
      </Slide>

      {/* 17 — STATEMENT */}
      <Slide n="17" part={P} title="The positioning statement" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>The positioning statement</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="serif text-3xl leading-[1.05] md:text-6xl">
              <span className="opacity-50">For communities and organisations seeking practical pathways to social and economic development,</span>{" "}
              Mpho Madikwane is a social-impact organisation that connects community insight with institutional resources,
              strategic partnerships and programme implementation —{" "}
              <span className="serif-i">creating measurable opportunities for people and communities.</span>
            </p>
          </div>
        </div>
      </Slide>

      {/* 18 — TERRITORY */}
      <Slide n="18" part={P} title="The central brand territory" dark>
        <Eyebrow>The central brand territory</Eyebrow>
        <div className="flex flex-1 flex-col justify-center">
          <p className="display text-[13vw] leading-[0.82] md:text-[10vw]">
            From
            <br />
            social
            <br />
            insight
          </p>
          <div className="my-4 flex items-center gap-6">
            <Arrow className="h-10 w-10 md:h-20 md:w-20" />
            <span className="h-px flex-1 bg-line-light" />
          </div>
          <p className="display text-[13vw] leading-[0.82] md:text-[10vw]">
            To opportunity<span className="text-earth">.</span>
          </p>
        </div>
        <Folio>This is the strategic territory around which the entire brand is built.</Folio>
      </Slide>
    </>
  );
}
