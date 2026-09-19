import { Slide, PartDivider, Eyebrow, Flow, Folio, Arrow } from "./Frame";

const P = "Part 06 — Partnership & Funding";

export function Part06() {
  return (
    <>
      <PartDivider
        id="part-06"
        n="06"
        title="Partnership & Funding"
        sub="Turning the brand into a sustainable operating model."
        image="/images/skills.jpg"
      />

      {/* 44 — FUNDING PRINCIPLE */}
      <Slide n="44" part={P} title="The funding principle">
        <Eyebrow>The funding principle</Eyebrow>
        <div className="grid flex-1 grid-cols-12 items-center gap-8 py-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow opacity-50">Not</p>
            <p className="serif-i mt-3 text-4xl opacity-40 md:text-6xl">“Who will donate to us?”</p>
          </div>
          <div className="col-span-12 flex justify-center md:col-span-2">
            <Arrow className="h-10 w-10 rotate-90 md:rotate-0 md:h-16 md:w-16" />
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-earth">Instead</p>
            <p className="serif mt-3 text-4xl md:text-6xl">
              “What social outcomes can we create with the right partner?”
            </p>
          </div>
        </div>
        <Folio>That single reframing changes every conversation.</Folio>
      </Slide>

      {/* 45 — CSI PROPOSITION */}
      <Slide n="45" part={P} title="Corporate CSI proposition" dark>
        <Eyebrow>Corporate CSI proposition</Eyebrow>
        <h3 className="display mt-6 flex flex-wrap items-center gap-4 text-4xl md:text-7xl">
          Social investment <Arrow className="h-8 w-8 md:h-14 md:w-14" /> Social outcome
        </h3>
        <div className="mt-12 grid flex-1 grid-cols-12 gap-px bg-line-light">
          <div className="col-span-12 bg-ink p-6 md:col-span-6 md:p-8">
            <Eyebrow>A corporate partner contributes</Eyebrow>
            <ul className="mt-4 columns-2 text-xl md:text-2xl">
              {["Funding", "Expertise", "Technology", "Infrastructure", "Mentorship", "Networks", "Employment pathways"].map((t) => (
                <li key={t} className="border-t border-line-light py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-paper p-6 text-ink md:col-span-6 md:p-8">
            <Eyebrow>Mpho Madikwane contributes</Eyebrow>
            <ul className="mt-4 columns-2 text-xl md:text-2xl">
              {["Community insight", "Programme design", "Implementation", "Coordination", "Measurement", "Reporting"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 46 — PARTNERSHIP MODEL */}
      <Slide n="46" part={P} title="The partnership model" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>The partnership model</Eyebrow>
            <p className="serif mt-6 text-2xl md:text-3xl">
              Resources flow one way. Evidence flows back. Both partners can see the whole chain.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="mx-auto max-w-2xl">
              {[
                ["Corporate", "Resources"],
                ["Mpho Madikwane", "Programme"],
                ["Community", "Participation"],
                ["Development", "Outcome"],
                ["Measurable impact", ""],
                ["Corporate impact report", null],
              ].map(([k, flow], i) => (
                <div key={k} className="flex flex-col items-center">
                  <div
                    className={`w-full border border-ink px-6 py-4 text-center ${
                      i === 1 ? "bg-ink text-paper" : i === 5 ? "bg-earth text-paper border-earth" : "bg-paper"
                    }`}
                  >
                    <span className="display text-2xl md:text-4xl">{k}</span>
                  </div>
                  {flow !== null && (
                    <div className="flex h-14 items-center gap-3">
                      <span className="block h-full w-px bg-ink" />
                      {flow && <span className="eyebrow opacity-60">{flow}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 47/48 — GOVERNMENT + TVET */}
      <Slide n="47" part={P} title="Government & the SETA / TVET ecosystem" dark>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow>Government partnerships — areas of relationship</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Youth development",
                "Skills development",
                "Education",
                "Employment",
                "Entrepreneurship",
                "Community development",
                "Local economic development",
              ].map((t) => (
                <span key={t} className="border border-line-light px-3 py-1.5 text-sm md:text-base">
                  {t}
                </span>
              ))}
            </div>
            <p className="serif-i mt-8 text-2xl opacity-80 md:text-3xl">
              Our role: understand community-level needs and connect them with appropriate institutional programmes
              and opportunities.
            </p>
            <div className="mt-10 border-t border-line-light pt-6">
              <Eyebrow>The objective</Eyebrow>
              <p className="display mt-2 text-3xl md:text-5xl">
                Pathways — not isolated interventions.
              </p>
              <p className="mt-3 text-base opacity-70">Training should connect to opportunity.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 md:border-l md:border-line-light md:pl-12">
            <Eyebrow>CETA / SETA / TVET ecosystem</Eyebrow>
            <Flow
              dark
              className="mt-6"
              steps={[
                { k: "Community" },
                { k: "Needs / aspirations" },
                { k: "Mpho Madikwane" },
                { k: "Programme design" },
                { k: "Relevant institution", v: "SETA · CETA · Department" },
                { k: "TVET / training" },
                { k: "Workplace" },
                { k: "Employment / enterprise" },
              ]}
            />
          </div>
        </div>
      </Slide>

      {/* 49/50/51 — NPO / UNIVERSITY / EMPLOYER */}
      <Slide n="49" part={P} title="NPO, research & employer partnerships">
        <Eyebrow>Collaboration across the ecosystem</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-12 gap-px bg-line">
          <div className="col-span-12 bg-paper p-6 md:col-span-4 md:p-8">
            <span className="mono-num text-xs opacity-50">49</span>
            <h4 className="display mt-3 text-3xl md:text-5xl">NPOs</h4>
            <p className="serif-i mt-3 text-xl opacity-70">Not competitors. They can become:</p>
            <ul className="mt-5 text-lg">
              {["Implementation partners", "Community partners", "Specialist partners", "Knowledge partners", "Referral partners"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm opacity-60">Collaborate where collaboration produces better outcomes for communities.</p>
          </div>
          <div className="col-span-12 bg-paper p-6 md:col-span-4 md:p-8">
            <span className="mono-num text-xs opacity-50">50</span>
            <h4 className="display mt-3 text-3xl md:text-5xl">Universities &amp; research</h4>
            <p className="serif-i mt-3 text-xl opacity-70">Reinforcing the social-science foundation.</p>
            <ul className="mt-5 text-lg">
              {["Social research", "Community research", "Monitoring & evaluation", "Data", "Student programmes", "Knowledge development", "Impact studies"].map((t) => (
                <li key={t} className="border-t border-line py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-ink p-6 text-paper md:col-span-4 md:p-8">
            <span className="mono-num text-xs opacity-50">51</span>
            <h4 className="display mt-3 text-3xl md:text-5xl">Employers</h4>
            <p className="serif-i mt-3 text-xl opacity-70">The journey shouldn’t end at training.</p>
            <Flow
              dark
              className="mt-6"
              steps={[
                { k: "Training" },
                { k: "Workplace exposure" },
                { k: "Experience" },
                { k: "Employment / enterprise / further development" },
              ]}
            />
          </div>
        </div>
      </Slide>

      {/* 52 — PROPOSITION */}
      <Slide n="52" part={P} title="The partnership proposition" earth>
        <Eyebrow className="!opacity-80">The Mpho Madikwane partnership proposition</Eyebrow>
        <div className="flex flex-1 flex-col justify-center py-10">
          <p className="display text-6xl md:text-[8vw]">We don’t just seek funding.</p>
          <p className="serif-i mt-4 text-3xl md:text-5xl">We seek partners who want to create outcomes.</p>
        </div>
        <div className="grid grid-cols-12 gap-8 border-t border-paper/30 pt-8">
          <div className="col-span-12 md:col-span-6">
            <Eyebrow className="!opacity-80">We bring</Eyebrow>
            <p className="mt-3 text-xl md:text-2xl">Insight · People · Programme capability · Community access · Coordination · Measurement</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Eyebrow className="!opacity-80">Partners bring</Eyebrow>
            <p className="mt-3 text-xl md:text-2xl">Resources · Expertise · Infrastructure · Networks · Opportunity</p>
          </div>
        </div>
      </Slide>

      {/* 53 — IMPACT CYCLE */}
      <Slide n="53" part={P} title="The impact cycle" dark grid>
        <div className="grid flex-1 grid-cols-12 items-center gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>The impact cycle</Eyebrow>
            <h3 className="display mt-6 text-5xl md:text-7xl">Ten steps. No end.</h3>
            <p className="serif-i mt-6 text-2xl opacity-70">Scale feeds understanding. The cycle begins again, wiser.</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <CycleRing />
          </div>
        </div>
      </Slide>

      {/* 54/55 — MEASURING IMPACT */}
      <Slide n="54" part={P} title="From output to impact">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>Measuring impact — every programme defines</Eyebrow>
            <div className="mt-6">
              {[
                ["Inputs", "What resources were invested?"],
                ["Activities", "What did we do?"],
                ["Outputs", "What was delivered?"],
                ["Outcomes", "What changed for participants?"],
                ["Impact", "What longer-term difference can be demonstrated?"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-line py-3">
                  <p className="display text-2xl md:text-3xl">{k}</p>
                  <p className="serif-i text-lg opacity-70">{v}</p>
                </div>
              ))}
              <div className="border-t border-line" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8">
            <Eyebrow>From output to impact — a worked example</Eyebrow>
            <div className="mt-6 grid grid-cols-1 gap-px bg-line md:grid-cols-2">
              {[
                ["Output", "500", "young people attended training.", "That alone is not enough.", "opacity-30"],
                ["Outcome", "400", "completed the programme.", "Better.", "opacity-55"],
                ["Further outcome", "250", "progressed into employment, further education or enterprise.", "More meaningful.", "opacity-80"],
                ["Impact", "↑", "Evidence shows sustained improvement in participants’ economic participation.", "That is the distinction we build into our reporting culture.", "opacity-100"],
              ].map(([k, n, v, note, op], i) => (
                <div key={k} className={`flex min-h-[240px] flex-col justify-between p-6 ${i === 3 ? "bg-ink text-paper" : "bg-paper"}`}>
                  <span className="eyebrow opacity-60">{k}</span>
                  <div>
                    <p className={`display mono-num text-7xl md:text-[7rem] ${op}`}>{n}</p>
                    <p className="mt-2 text-lg leading-snug md:text-xl">{v}</p>
                    <p className={`serif-i mt-3 text-lg ${i === 3 ? "text-ochre" : "text-earth"}`}>{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 56 — IMPACT FRAMEWORK */}
      <Slide n="56" part={P} title="The impact framework" dark>
        <Eyebrow>The Mpho Madikwane impact framework</Eyebrow>
        <div className="mt-8 flex flex-1 flex-wrap items-center gap-x-3 gap-y-4">
          {["Community need", "Intervention", "Input", "Activity", "Output", "Outcome", "Impact", "Learning", "Scale"].map(
            (t, i, arr) => (
              <span key={t} className="flex items-center gap-3">
                <span className={`display text-3xl md:text-6xl ${i >= 5 ? "text-paper" : "text-paper/50"}`}>{t}</span>
                {i < arr.length - 1 && <Arrow className="h-6 w-6 opacity-40 md:h-10 md:w-10" />}
              </span>
            )
          )}
        </div>
        <Folio>Everything left of “Outcome” is effort. Everything from “Outcome” onward is evidence.</Folio>
      </Slide>

      {/* 57 — SUSTAINABILITY */}
      <Slide n="57" part={P} title="Sustainability">
        <Eyebrow>Sustainability — never one source of funding</Eyebrow>
        <div className="mt-6 grid flex-1 grid-cols-2 gap-px bg-line md:grid-cols-3">
          {[
            ["Corporate", "CSI / social investment"],
            ["Government", "Programme opportunities / partnerships"],
            ["Development funders", "Grants / development funding"],
            ["Institutions", "Strategic partnerships"],
            ["Philanthropy", "Donations / philanthropic capital"],
            ["Programme partnerships", "Co-funded initiatives"],
          ].map(([k, v], i) => (
            <div key={k} className="flex min-h-[200px] flex-col justify-between bg-paper p-5 md:min-h-[30vh] md:p-7">
              <span className="mono-num text-xs opacity-50">0{i + 1}</span>
              <div>
                <p className="display text-2xl md:text-4xl">{k}</p>
                <p className="serif-i mt-2 text-lg opacity-70 md:text-xl">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 58 — LONG-TERM MODEL */}
      <Slide n="58" part={P} title="The long-term model" dark>
        <Eyebrow>The long-term model</Eyebrow>
        <div className="mt-8 grid flex-1 grid-cols-1 md:grid-cols-5">
          {[
            ["Year 01", "Establish credibility."],
            ["Year 02", "Develop repeatable programmes."],
            ["Year 03", "Build institutional partnerships."],
            ["Year 04", "Expand programme portfolio."],
            ["Year 05+", "Replicate successful models across communities."],
          ].map(([k, v], i) => (
            <div key={k} className="flex flex-col border-t border-line-light py-6 md:border-l md:border-t-0 md:px-5 md:pt-0" style={{ marginTop: `${i * 6}vh` }}>
              <span className="mono-num text-xs opacity-50">Phase</span>
              <p className="display mt-2 text-4xl md:text-6xl">{k}</p>
              <p className="serif-i mt-4 text-xl opacity-80 md:text-2xl">{v}</p>
            </div>
          ))}
        </div>
        <Folio>Timing is determined by capacity and evidence — never arbitrary growth targets.</Folio>
      </Slide>

      {/* 59 — THE ENGINE */}
      <Slide n="59" part={P} title="The engine" grid>
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow>The Mpho Madikwane engine</Eyebrow>
            <h3 className="display mt-6 text-5xl md:text-7xl">Everything comes together here.</h3>
            <p className="serif-i mt-6 text-2xl opacity-70">
              Social science at the top. Scale at the bottom. Three streams of partnership feeding one organisation.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <EngineDiagram />
          </div>
        </div>
      </Slide>
    </>
  );
}

function CycleRing() {
  const words = ["Understand", "Invest", "Develop", "Connect", "Participate", "Create opportunity", "Measure", "Learn", "Improve", "Scale"];
  const cx = 300,
    cy = 300,
    r = 215;
  return (
    <svg viewBox="0 0 600 600" className="mx-auto h-auto w-full max-w-[600px] text-paper" fill="none">
      <circle cx={cx} cy={cy} r={r} stroke="currentColor" strokeWidth={1} opacity={0.4} />
      <circle cx={cx} cy={cy} r={r - 40} stroke="currentColor" strokeWidth={1} strokeDasharray="2 6" opacity={0.3} />
      {words.map((w, i) => {
        const a = (i / words.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        const tx = cx + Math.cos(a) * (r + 34);
        const ty = cy + Math.sin(a) * (r + 34);
        const anchor = Math.cos(a) > 0.2 ? "start" : Math.cos(a) < -0.2 ? "end" : "middle";
        return (
          <g key={w}>
            <rect x={x - 5} y={y - 5} width="10" height="10" fill={i === 9 ? "#b8461d" : "currentColor"} />
            <text x={tx} y={ty + 4} textAnchor={anchor} fontFamily="Archivo" fontSize="12" fontWeight="600" letterSpacing="1.5" fill="currentColor">
              {String(i + 1).padStart(2, "0")} {w.toUpperCase()}
            </text>
          </g>
        );
      })}
      <g transform={`translate(${cx - 22} ${cy - 36}) scale(0.45)`}>
        <path d="M7 80 V7 L50 52 L93 7 V80 M7 80 V153 L50 108 L93 153 V80" stroke="currentColor" strokeWidth={14} />
      </g>
      {/* arrow head on ring */}
      <path d={`M${cx + 12} ${cy - r - 6} l10 6 -10 6`} stroke="currentColor" strokeWidth={1.2} />
    </svg>
  );
}

function EngineDiagram() {
  const box = (x: number, y: number, w: number, t: string, fill = false, key?: string) => (
    <g key={key ?? t}>
      <rect x={x - w / 2} y={y - 18} width={w} height="36" fill={fill ? "#0a0a0a" : "#f2eee6"} stroke="#0a0a0a" strokeWidth={1} />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontFamily="Archivo"
        fontSize="11"
        fontWeight="600"
        letterSpacing="2"
        fill={fill ? "#f2eee6" : "#0a0a0a"}
      >
        {t.toUpperCase()}
      </text>
    </g>
  );
  const v = (x: number, y1: number, y2: number, k: string) => <line key={k} x1={x} y1={y1} x2={x} y2={y2} stroke="#0a0a0a" strokeWidth={1} />;
  const cx = 300;
  return (
    <svg viewBox="0 0 600 760" className="h-auto w-full">
      {v(cx, 58, 82, "a")}
      {box(cx, 40, 180, "Social science")}
      {box(cx, 100, 200, "Community insight")}
      {v(cx, 118, 142, "b")}
      {box(cx, 160, 200, "Programme design")}
      {v(cx, 178, 200, "c")}
      {/* split */}
      <line x1="120" y1="200" x2="480" y2="200" stroke="#0a0a0a" strokeWidth={1} />
      {v(120, 200, 222, "d1")}
      {v(cx, 200, 222, "d2")}
      {v(480, 200, 222, "d3")}
      {box(120, 240, 150, "Government")}
      {box(cx, 240, 150, "Corporates")}
      {box(480, 240, 150, "NPOs")}
      {v(120, 258, 280, "e1")}
      {v(cx, 258, 280, "e2")}
      {v(480, 258, 280, "e3")}
      <line x1="120" y1="280" x2="480" y2="280" stroke="#0a0a0a" strokeWidth={1} />
      {v(cx, 280, 302, "f")}
      <rect x={cx - 120} y={302} width="240" height="56" fill="#0a0a0a" />
      <g transform={`translate(${cx - 108} 312) scale(0.23)`}>
        <path d="M7 80 V7 L50 52 L93 7 V80 M7 80 V153 L50 108 L93 153 V80" stroke="#f2eee6" strokeWidth={16} fill="none" />
      </g>
      <text x={cx + 10} y={334} textAnchor="middle" fontFamily="Archivo" fontSize="12" fontWeight="600" letterSpacing="3" fill="#f2eee6">
        MPHO MADIKWANE
      </text>
      {[
        ["Programmes", 400],
        ["Communities", 460],
        ["Outcomes", 520],
        ["Impact", 580],
      ].map(([t, y]) => (
        <g key={String(t)}>
          {v(cx, Number(y) - 42, Number(y) - 18, `g${y}`)}
          {box(cx, Number(y), 180, String(t))}
        </g>
      ))}
      {v(cx, 598, 622, "h")}
      <rect x={cx - 90} y={622} width="180" height="36" fill="#b8461d" />
      <text x={cx} y={644} textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2" fill="#f2eee6">
        SCALE
      </text>
      {/* feedback loop */}
      <path d="M390 640 H520 V100 H400" stroke="#0a0a0a" strokeWidth={1} strokeDasharray="3 5" fill="none" />
      <path d="M408 94 l-8 6 8 6" stroke="#0a0a0a" strokeWidth={1} fill="none" />
      <text x="530" y="380" fontFamily="Archivo" fontSize="9" letterSpacing="2" fill="#0a0a0a" opacity={0.6} transform="rotate(90 530 380)">
        LEARNING LOOP
      </text>
    </svg>
  );
}
