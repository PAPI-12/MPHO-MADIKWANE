export default function Contact() {
  return (
    <>
      {/* CONTACT HERO */}
      <section className="relative min-h-[60vh] border-t border-ink/20">
        <img src="/images/hero.jpg" alt="Collaboration and connection" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
        <div className="relative z-10 flex min-h-[60vh] flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-[1600px] w-full">
            <p className="eyebrow text-paper/60">Contact</p>
            <h1 className="display mt-4 text-6xl text-paper md:text-[10vw] md:leading-[0.85]">Let's build something together.</h1>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="grid grid-cols-12 border-t border-ink/20">
        <div className="col-span-12 bg-ink px-6 py-16 text-paper md:col-span-5 md:px-12 md:py-24">
          <p className="eyebrow opacity-60">How to reach us</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">Connect.</h2>
          <div className="mt-10 space-y-6">
            <div>
              <p className="eyebrow opacity-50">Location</p>
              <p className="text-xl md:text-2xl">Johannesburg, South Africa</p>
            </div>
            <div>
              <p className="eyebrow opacity-50">Email</p>
              <p className="text-xl md:text-2xl">hello@mphomadikwane.org</p>
            </div>
            <div>
              <p className="eyebrow opacity-50">Phone</p>
              <p className="text-xl md:text-2xl">+27 11 123 4567</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 bg-paper px-6 py-12 md:col-span-7 md:px-12 md:py-16">
          <p className="serif text-3xl leading-[1.1] md:text-4xl">
            Whether you are a community leader, a government stakeholder, a corporate partner, an education institution, an NPO or a potential employer — the conversation begins with understanding.
          </p>
          <p className="serif-i mt-6 text-xl opacity-60 md:text-2xl">Don't start with the funding. Start with the problem.</p>
          <a href="mailto:hello@mphomadikwane.org" className="mt-10 inline-block border border-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] hover:bg-ink hover:text-paper transition-colors">
            Send a message
          </a>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="border-t border-ink/20 bg-paper px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display text-5xl md:text-8xl">Build with us.</h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <p className="serif-i text-2xl md:text-3xl">We don't just seek funding. We seek partners who want to create outcomes.</p>
            <p className="mt-6 text-lg md:text-xl">If you have resources, expertise, networks or opportunity to share — start the conversation. We bring insight, people, programme capability and community access. Together, we build pathways.</p>
          </div>
        </div>
      </section>
    </>
  );
}
