

export default function About() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="relative min-h-[80vh] border-t border-ink/20">
        <img src="/images/wan2.7-image-pro_a_create_an_accurate_i.jpg" alt="Mpho Madikwane" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-end px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-[1600px] w-full">
            <p className="eyebrow text-paper/70">About Mpho Madikwane</p>
            <h1 className="display mt-4 text-6xl text-paper md:text-[10vw] md:leading-[0.85]">Social-science rooted. Community-connected. Evidence-led.</h1>
          </div>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section className="grid grid-cols-12 border-t border-ink/20">
        <div className="col-span-12 bg-ink px-6 py-16 text-paper md:col-span-6 md:py-24 md:px-12">
          <p className="eyebrow opacity-60">The founder</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">Mpho Madikwane</h2>
          <p className="eyebrow mt-6 opacity-80">Social Scientist · Social Impact Practitioner · Philanthropist</p>
        </div>
        <div className="col-span-12 bg-paper px-6 py-12 md:col-span-6 md:px-12 md:py-16">
          <p className="serif text-2xl leading-[1.1] md:text-3xl">
            Mpho Madikwane brings together social science, community experience, programme thinking, partnership development and philanthropic intent — with a simple philosophy: <span className="serif-i">understand people, build systems, connect opportunity.</span>
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <h2 className="display text-5xl md:text-7xl">Our purpose</h2>
              <p className="serif-i mt-4 text-xl opacity-60">Not charity. Connection.</p>
            </div>
            <div className="col-span-12 md:col-span-8 md:pl-8">
              <p className="serif text-3xl leading-[1.05] md:text-5xl">
                To understand the social and economic realities affecting communities — and turn that understanding into practical opportunities for development, skills, participation and sustainable change.
              </p>
              <p className="mt-8 text-xl leading-snug md:text-2xl">
                We believe communities should not simply receive solutions. They should participate in creating them. That belief shapes every programme we design, every partnership we build, and every measurement we publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING PHILOSOPHY — six-block grid */}
      <section className="border-t border-ink/20 bg-ink px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-5xl text-paper md:text-7xl">Operating philosophy</h2>
          <p className="serif-i mt-4 max-w-xl text-xl text-paper/70">Six moves. One loop. Everything feeds back into understanding.</p>
          <div className="mt-10 grid grid-cols-1 gap-px bg-paper/20 md:grid-cols-3 md:grid-rows-2">
            {[
              ["Understand", "Research the context. Know the people before designing anything."],
              ["Design", "Build the appropriate response — not a generic template."],
              ["Connect", "Bring government, business, education and communities together."],
              ["Deliver", "Turn resources into action — with clarity and accountability."],
              ["Measure", "Determine what changed — for participants, communities, partners."],
              ["Scale", "Replicate what creates value. Leave what doesn't."],
            ].map(([k, v], i) => (
              <div key={k} className="flex min-h-[220px] flex-col justify-between bg-ink p-6 md:p-8">
                <span className="block text-xs font-medium tracking-[0.2em] text-paper/30">STEP 0{i + 1}</span>
                <h3 className="display text-3xl text-paper md:text-4xl">{k}</h3>
                <p className="serif-i text-base text-paper/70">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ARE NOT — editorial strike-through */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display text-4xl md:text-6xl">What we are not</h2>
            <div className="mt-8">
              {[
                "A charity that asks without offering.",
                "A consultancy detached from communities.",
                "A training provider acting alone.",
                "A government programme with no independence.",
                "A grant-seeking organisation.",
              ].map((t) => (
                <p key={t} className="border-t border-ink/20 py-3 text-xl opacity-30 line-through md:text-2xl md:py-4 md:line-through">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-ink/10">
            <h2 className="display text-4xl md:text-6xl">What we are</h2>
            <p className="serif-i mt-6 text-2xl md:text-3xl">A social-impact connector and implementation partner.</p>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">We sit between community need and institutional opportunity — connecting people, knowledge, resources and institutions into practical pathways for development.</p>
          </div>
        </div>
      </section>
    </>
  );
}
