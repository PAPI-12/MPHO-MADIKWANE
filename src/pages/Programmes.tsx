export default function Programmes() {
  return (
    <>
      {/* PROGRAMMES HERO */}
      <section className="relative min-h-[70vh] border-t border-ink/20">
        <img src="/images/graduates.jpg" alt="Graduates representing opportunity" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-ink/30" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-[1600px] w-full">
            <p className="eyebrow text-paper/60">Programmes</p>
            <h1 className="display mt-4 text-6xl text-paper md:text-[10vw] md:leading-[0.85]">Four pillars. One system.</h1>
          </div>
        </div>
      </section>

      {/* PILLAR 01 */}
      <section className="border-t border-ink/20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative min-h-[50vh] md:col-span-6 md:min-h-[80vh]">
            <img src="/images/skills.jpg" alt="Youth skills development" className="img-mono absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="col-span-12 bg-paper px-6 py-12 md:col-span-6 md:px-12 md:py-16">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow">Pillar 01</span>
              <h2 className="display mt-4 text-4xl md:text-6xl">Youth & Human Development</h2>
              <p className="serif-i mt-4 text-xl opacity-70">Developing people and capabilities.</p>
              <p className="mt-6 text-lg leading-relaxed md:text-xl">
                We work with unemployed youth, students, graduates, under-skilled young people and aspiring entrepreneurs. Our programmes begin with understanding their lived realities — then design pathways that build real capability, not temporary activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 02 */}
      <section className="border-t border-ink/20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 order-2 bg-paper px-6 py-12 md:order-1 md:col-span-6 md:px-12 md:py-16">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow">Pillar 02</span>
              <h2 className="display mt-4 text-4xl md:text-6xl">Skills & Economic Opportunity</h2>
              <p className="serif-i mt-4 text-xl opacity-70">Creating pathways into economic participation.</p>
              <p className="mt-6 text-lg leading-relaxed md:text-xl">
                Training alone is not enough. We design pathways that connect skills development to workplace exposure, experience, employment, enterprise or further education. Employers are part of the ecosystem — not an afterthought.
              </p>
            </div>
          </div>
          <div className="col-span-12 relative order-1 min-h-[50vh] md:order-2 md:col-span-6 md:min-h-[80vh]">
            <img src="/images/enterprise.jpg" alt="Young entrepreneur at work" className="img-mono absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* PILLAR 03 */}
      <section className="border-t border-ink/20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative min-h-[50vh] md:col-span-6 md:min-h-[80vh]">
            <img src="/images/community.jpg" alt="Community meeting" className="img-mono absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="col-span-12 bg-paper px-6 py-12 md:col-span-6 md:px-12 md:py-16">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow">Pillar 03</span>
              <h2 className="display mt-4 text-4xl md:text-6xl">Community Development</h2>
              <p className="serif-i mt-4 text-xl opacity-70">Supporting communities to shape their own future.</p>
              <p className="mt-6 text-lg leading-relaxed md:text-xl">
                Communities are not objects of development — they are participants in it. We work with NPOs, CBOs, youth organisations and grassroots groups to build capability, coordination and access — from within, not above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 04 */}
      <section className="border-t border-ink/20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 order-2 bg-ink px-6 py-12 text-paper md:order-1 md:col-span-6 md:px-12 md:py-16">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow opacity-60">Pillar 04</span>
              <h2 className="display mt-4 text-4xl md:text-6xl">Partnerships & Social Investment</h2>
              <p className="serif-i mt-4 text-xl opacity-70">Connecting resources to measurable outcomes.</p>
              <p className="mt-6 text-lg leading-relaxed opacity-90 md:text-xl">
                We seek partners who want to create outcomes — not simply fund activities. Corporate, government, education, philanthropic and programme partnerships all feed into a single model: insight, design, connection, delivery, measurement, scale.
              </p>
            </div>
          </div>
          <div className="col-span-12 relative order-1 min-h-[50vh] md:order-2 md:col-span-6 md:min-h-[80vh]">
            <img src="/images/graduates.jpg" alt="Graduates — opportunity realised" className="img-mono absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
