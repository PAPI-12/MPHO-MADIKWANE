import { Slide, PartDivider, Eyebrow, Arrow, Folio } from "./Frame";
import { Mark } from "./Logo";

const P = "Part 01 — Foundation";

export function Part01() {
  return (
    <>
      <PartDivider
        id="part-01"
        n="01"
        title="Foundation"
        sub="Establishing who we are, why we exist and the ecosystem we operate within."
        image="/images/city.jpg"
      />

      {/* 01 — WHY */}
      <Slide n="01" part={P} title="Why Mpho Madikwane?">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow>The starting point</Eyebrow>
            <h3 className="display mt-6 text-5xl md:text-8xl">
              Communities carry complex challenges.
            </h3>
            <p className="serif-i mt-8 max-w-xl text-3xl md:text-4xl">
              At the same time, the resources to meet them already exist — scattered across an ecosystem
              that rarely meets.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <Eyebrow>Where the capability sits</Eyebrow>
            <ul className="mt-6 grid grid-cols-2 gap-px bg-line">
              {[
                "Government",
                "Corporates",
                "NPOs",
                "Education institutions",
                "Training institutions",
                "Employers",
                "Community organisations",
              ].map((t) => (
                <li key={t} className="display flex min-h-[88px] items-end bg-paper p-4 text-lg md:text-xl">
                  {t}
                </li>
              ))}
              <li className="flex min-h-[88px] items-center justify-center bg-ink text-paper">
                <Mark className="h-10 w-auto" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-12 items-end gap-8 border-t border-line pt-8">
          <p className="col-span-12 text-lg leading-snug md:col-span-6 md:text-xl">
            The opportunity is to connect these resources with real community needs.
          </p>
          <p className="display col-span-12 text-3xl md:col-span-6 md:text-right md:text-5xl">
            Mpho Madikwane exists to make that connection.
          </p>
        </div>
      </Slide>

      {/* 02 — WHAT */}
      <Slide n="02" part={P} title="What is Mpho Madikwane?" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>What is Mpho Madikwane?</Eyebrow>
            <p className="serif mt-6 text-3xl md:text-4xl">
              A social-impact and community-development organisation that connects —
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            {[
              ["People", "Communities and individuals."],
              ["Knowledge", "Research and social insight."],
              ["Resources", "Funding, expertise and infrastructure."],
              ["Institutions", "Government, education, NPOs and business."],
              ["Opportunity", "Skills, employment, enterprise and development."],
            ].map(([k, v], i) => (
              <div
                key={k}
                className="group grid grid-cols-12 items-baseline gap-4 border-t border-line-light py-4 md:py-5"
              >
                <span className="mono-num col-span-1 text-xs opacity-50">0{i + 1}</span>
                <span className="display col-span-11 text-4xl md:col-span-6 md:text-7xl">{k}</span>
                <span className="serif-i col-span-11 col-start-2 text-xl opacity-70 md:col-span-5 md:col-start-auto md:text-2xl">
                  {v}
                </span>
              </div>
            ))}
            <div className="border-t border-line-light" />
          </div>
        </div>
      </Slide>

      {/* 03 — PURPOSE */}
      <Slide n="03" part={P} title="Our purpose" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <Eyebrow>Our purpose</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="serif text-4xl leading-[1.02] md:text-7xl">
              To understand the social and economic realities affecting communities — and turn that understanding
              into practical opportunities for development, skills, participation and sustainable change.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-12 gap-8 border-t border-line pt-8">
          <div className="col-span-12 md:col-span-2">
            <Eyebrow>Our belief</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="display text-3xl md:text-5xl">
              Communities should not simply receive solutions.{" "}
              <span className="text-earth">They should participate in creating them.</span>
            </p>
          </div>
        </div>
      </Slide>

      {/* 04 — MISSION */}
      <Slide n="04" part={P} title="Our mission">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>Our mission</Eyebrow>
            <p className="mt-6 text-xl leading-snug md:text-2xl">
              Mpho Madikwane designs and delivers evidence-informed social-impact programmes by connecting communities
              with government, education and training institutions, non-profit organisations and the private sector —
              expanding access to skills, opportunity and sustainable development.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-12">
            <Eyebrow>We</Eyebrow>
            <div className="mt-4">
              {["Understand.", "Design.", "Connect.", "Deliver.", "Measure."].map((w, i) => (
                <div key={w} className="flex items-baseline gap-6 border-b border-line py-2">
                  <span className="mono-num w-8 text-xs opacity-40">0{i + 1}</span>
                  <span className="display text-6xl md:text-[7.5rem]" style={{ paddingLeft: `${i * 4}%` }}>
                    {w}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 05 — VISION */}
      <Slide n="05" part={P} title="Our vision" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>Our vision</Eyebrow>
            <p className="serif mt-6 text-3xl leading-[1.05] md:text-5xl">
              A society where communities have meaningful access to the knowledge, skills, networks and opportunities
              required to participate in — and shape — their own social and economic development.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Eyebrow>The shift</Eyebrow>
            <div className="mt-6 flex flex-col">
              {["Dependency", "Capability", "Participation", "Opportunity"].map((w, i) => (
                <div
                  key={w}
                  className="flex items-center gap-4 border-t border-line-light py-4"
                  style={{ marginLeft: `${i * 10}%` }}
                >
                  <span className="eyebrow w-12 opacity-50">{i === 0 ? "From" : "To"}</span>
                  <span
                    className="display text-4xl md:text-6xl"
                    style={{ opacity: 0.45 + i * 0.18 }}
                  >
                    {w}
                  </span>
                </div>
              ))}
              <div className="border-t border-line-light" style={{ marginLeft: "30%" }} />
            </div>
          </div>
        </div>
      </Slide>

      {/* 06 — OPERATING PHILOSOPHY */}
      <Slide n="06" part={P} title="Our operating philosophy">
        <Eyebrow>Our operating philosophy</Eyebrow>
        <h3 className="display mt-6 text-4xl md:text-6xl">Six moves. One loop.</h3>
        <div className="relative mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-6">
          {[
            ["Understand", "Research the context."],
            ["Design", "Build the appropriate response."],
            ["Connect", "Bring the right ecosystem together."],
            ["Deliver", "Turn resources into action."],
            ["Measure", "Understand outcomes."],
            ["Scale", "Replicate what creates value."],
          ].map(([k, v], i) => (
            <div key={k} className="flex min-h-[260px] flex-col justify-between bg-paper p-5 md:min-h-[46vh]">
              <div className="flex items-center justify-between">
                <span className="mono-num text-xs opacity-50">0{i + 1}</span>
                {i < 5 ? <Arrow className="h-4 w-4 opacity-40" /> : <span className="h-3 w-3 bg-earth" />}
              </div>
              <div>
                <p className="display-narrow text-4xl md:text-5xl">{k}</p>
                <p className="serif-i mt-3 text-lg opacity-70 md:text-xl">{v}</p>
              </div>
            </div>
          ))}
        </div>
        <Folio>Measurement feeds back into understanding. The loop, not the line, is the model.</Folio>
      </Slide>

      {/* 07 — PILLARS */}
      <Slide n="07" part={P} title="Our impact pillars" className="!pb-0">
        <Eyebrow>Our impact pillars</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 grid content-start gap-0 md:col-span-7">
            {[
              ["01", "Youth & Human Development", "Developing people and capabilities."],
              ["02", "Skills & Economic Opportunity", "Creating pathways into skills and economic participation."],
              ["03", "Community Development", "Supporting communities to participate in their development."],
              ["04", "Partnerships & Social Investment", "Connecting institutional and private-sector resources to social outcomes."],
            ].map(([n, k, v]) => (
              <div key={n} className="grid grid-cols-12 gap-4 border-t border-line py-6">
                <span className="mono-num col-span-1 text-sm opacity-50">{n}</span>
                <h4 className="display col-span-11 text-3xl md:col-span-6 md:text-5xl">{k}</h4>
                <p className="serif col-span-11 col-start-2 text-xl opacity-80 md:col-span-5 md:col-start-auto md:text-2xl">
                  {v}
                </p>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
          <div className="relative col-span-12 -mx-6 min-h-[50vh] md:col-span-5 md:-mr-12 md:mx-0">
            <img
              src="/images/skills.jpg"
              alt="Young woman training in a TVET welding workshop"
              className="img-mono absolute inset-0 h-full w-full object-cover"
            />
            <p className="eyebrow absolute bottom-6 left-6 text-paper">Pillar 02 — Skills. TVET workshop, Gauteng.</p>
          </div>
        </div>
      </Slide>

      {/* 08 — FOUNDER */}
      <Slide n="08" part={P} title="Our founder" dark className="!pb-0">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="relative col-span-12 -mx-6 order-2 min-h-[50vh] md:order-1 md:col-span-5 md:-ml-12 md:mx-0">
            <img
              src="/images/research.jpg"
              alt="Field notes during a community interview"
              className="img-mono absolute inset-0 h-full w-full object-cover"
            />
            <p className="eyebrow absolute bottom-6 left-6 text-paper md:left-12">Fieldwork first. Always.</p>
          </div>
          <div className="order-1 col-span-12 flex flex-col md:order-2 md:col-span-7 md:pl-8">
            <Eyebrow>Our founder</Eyebrow>
            <h3 className="display mt-6 text-6xl md:text-[7vw]">
              Mpho
              <br />
              Madikwane
            </h3>
            <p className="eyebrow mt-6 flex flex-wrap gap-x-3 opacity-80">
              <span>Social Scientist</span>
              <span>•</span>
              <span>Social Impact Practitioner</span>
              <span>•</span>
              <span>Philanthropist</span>
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
              {["Social science", "Community experience", "Programme thinking", "Partnership development", "Philanthropic intent"].map(
                (t, i) => (
                  <div key={t} className="border-t border-line-light pt-3">
                    <span className="mono-num block text-xs opacity-50">0{i + 1}</span>
                    <span className="mt-2 block text-sm font-medium leading-tight md:text-base">{t}</span>
                  </div>
                )
              )}
            </div>
            <div className="mt-auto border-t border-line-light pt-8 pb-16">
              <Eyebrow>Founder philosophy</Eyebrow>
              <p className="serif-i mt-3 text-3xl md:text-5xl">
                Understand people. Build systems. Connect opportunity.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 09 — WHO WE SERVE */}
      <Slide n="09" part={P} title="Who we serve">
        <Eyebrow>Who we serve</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-12 gap-px bg-line">
          <div className="col-span-12 bg-paper p-6 md:col-span-5 md:p-8">
            <span className="eyebrow text-earth">Primary</span>
            <h4 className="display mt-4 text-5xl md:text-7xl">Young people</h4>
            <ul className="mt-8 columns-2 gap-8 text-lg md:text-xl">
              {["Unemployed youth", "Students", "Graduates", "Under-skilled youth", "Aspiring entrepreneurs"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-paper p-6 md:col-span-4 md:p-8">
            <span className="eyebrow opacity-60">Secondary</span>
            <h4 className="display mt-4 text-4xl md:text-5xl">Community organisations</h4>
            <ul className="mt-8 text-lg md:text-xl">
              {["NPOs", "CBOs", "Youth organisations", "Grassroots organisations"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-ink p-6 text-paper md:col-span-3 md:p-8">
            <span className="eyebrow opacity-60">Development ecosystem</span>
            <ul className="display mt-4 space-y-1 text-3xl md:text-4xl">
              <li>Learners</li>
              <li>Entrepreneurs</li>
              <li>SMMEs</li>
              <li>Community enterprises</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* 10 — ECOSYSTEM */}
      <Slide n="10" part={P} title="Our partner ecosystem" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Our partner ecosystem</Eyebrow>
            <h3 className="display mt-6 text-5xl md:text-7xl">
              We connect the ecosystem.
            </h3>
            <p className="serif-i mt-6 max-w-sm text-2xl opacity-80">
              Not above it. Not beside it. In the middle of it — where the lines cross.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <EcosystemDiagram />
          </div>
        </div>
      </Slide>

      {/* 11 — ONE SENTENCE */}
      <Slide n="11" part={P} title="The foundation in one sentence" earth>
        <div className="flex flex-1 flex-col justify-center">
          <Eyebrow className="!opacity-80">The foundation in one sentence</Eyebrow>
          <p className="serif mt-8 max-w-6xl text-4xl leading-[1.02] md:text-7xl">
            Mpho Madikwane connects social insight, community participation and strategic partnerships to create
            practical pathways to skills, opportunity and sustainable development.
          </p>
        </div>
      </Slide>
    </>
  );
}

function EcosystemDiagram() {
  const nodes = [
    { x: 300, y: 40, t: "Government" },
    { x: 60, y: 200, t: "Private sector" },
    { x: 540, y: 200, t: "Education" },
    { x: 300, y: 360, t: "NPOs" },
    { x: 300, y: 470, t: "Communities" },
    { x: 300, y: 580, t: "Participants" },
  ];
  return (
    <svg viewBox="0 0 600 640" className="h-auto w-full text-ink" fill="none">
      {/* connections */}
      <g stroke="currentColor" strokeWidth={1} opacity={0.5}>
        <line x1="300" y1="70" x2="300" y2="170" />
        <line x1="130" y1="200" x2="240" y2="200" />
        <line x1="470" y1="200" x2="360" y2="200" />
        <line x1="300" y1="230" x2="300" y2="340" />
        <line x1="300" y1="380" x2="300" y2="450" />
        <line x1="300" y1="490" x2="300" y2="560" />
      </g>
      {/* centre block */}
      <rect x="240" y="170" width="120" height="60" fill="currentColor" />
      <g transform="translate(287 178) scale(0.28)" className="text-paper">
        <path d="M7 80 V7 L50 52 L93 7 V80 M7 80 V153 L50 108 L93 153 V80" stroke="#f2eee6" strokeWidth={16} />
      </g>
      {nodes.map((n) => (
        <g key={n.t}>
          <rect x={n.x - 70} y={n.y - 20} width="140" height="40" stroke="currentColor" strokeWidth={1} fill="#f2eee6" />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontFamily="Archivo"
            fontSize="12"
            fontWeight="600"
            letterSpacing="2"
            fill="currentColor"
          >
            {n.t.toUpperCase()}
          </text>
        </g>
      ))}
      <text x="300" y="250" textAnchor="middle" fontFamily="Archivo" fontSize="9" letterSpacing="3" fill="currentColor" opacity={0.6}>
        MPHO MADIKWANE
      </text>
    </svg>
  );
}
