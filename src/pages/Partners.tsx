export default function Partners() {
  return (
    <>
      {/* PARTNERS HERO */}
      <section className="relative min-h-[70vh] border-t border-ink/20">
        <img src="/images/city.jpg" alt="South African urban landscape" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-[1600px] w-full">
            <p className="eyebrow text-paper/60">Partners</p>
            <h1 className="display mt-4 text-6xl text-paper md:text-[10vw] md:leading-[0.85]">The ecosystem. Not the island.</h1>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <h2 className="display text-5xl md:text-7xl">Our partner ecosystem</h2>
            <p className="serif-i mt-6 text-2xl opacity-70 md:text-3xl">We connect government, private sector, education, NPOs and communities — not above them, but between them.</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <svg viewBox="0 0 600 540" className="w-full text-ink" fill="none">
              {/* Connection lines */}
              <line x1="300" y1="60" x2="300" y2="160" stroke="currentColor" strokeWidth={1} opacity={0.4} />
              <line x1="300" y1="220" x2="300" y2="340" stroke="currentColor" strokeWidth={1} opacity={0.4} />
              <line x1="300" y1="400" x2="300" y2="500" stroke="currentColor" strokeWidth={1} opacity={0.4} />
              <line x1="120" y1="220" x2="300" y2="220" stroke="currentColor" strokeWidth={1} opacity={0.4} />
              <line x1="480" y1="220" x2="300" y2="220" stroke="currentColor" strokeWidth={1} opacity={0.4} />

              {/* Nodes */}
              <rect x="230" y="30" width="140" height="44" fill="#0a0a0a" />
              <text x="300" y="56" textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2" fill="#f2eee6">GOVERNMENT</text>

              <rect x="50" y="190" width="140" height="44" stroke="#0a0a0a" strokeWidth="1" fill="#f2eee6" />
              <text x="120" y="216" textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2">PRIVATE SECTOR</text>

              <rect x="410" y="190" width="140" height="44" stroke="#0a0a0a" strokeWidth="1" fill="#f2eee6" />
              <text x="480" y="216" textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2">EDUCATION</text>

              <rect x="230" y="340" width="140" height="44" stroke="#0a0a0a" strokeWidth="1" fill="#f2eee6" />
              <text x="300" y="366" textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2">NPOs</text>

              <rect x="230" y="470" width="140" height="44" stroke="#0a0a0a" strokeWidth="1" fill="#f2eee6" />
              <text x="300" y="496" textAnchor="middle" fontFamily="Archivo" fontSize="11" fontWeight="600" letterSpacing="2">COMMUNITIES</text>

              {/* Centre block */}
              <rect x="240" y="160" width="120" height="56" fill="#b8461d" />
              <text x="300" y="189" textAnchor="middle" fontFamily="Archivo" fontSize="9" fontWeight="600" letterSpacing="2" fill="#f2eee6">MPHO MADIKWANE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* PARTNER CATEGORIES */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-4xl md:text-6xl">Who we work with</h2>
          <div className="mt-10 grid grid-cols-1 gap-px bg-ink md:grid-cols-4">
            {[
              { title: "Government", desc: "Community-connected partner for programme implementation, stakeholder coordination, and alignment with development objectives.", img: "/images/city.jpg" },
              { title: "Private Sector", desc: "Social investment to measurable community outcomes — from funding and expertise to employment pathways and mentorship.", img: "/images/enterprise.jpg" },
              { title: "Education & Training", desc: "A pathway to community participants — connecting institutions with the people and programmes they serve.", img: "/images/skills.jpg" },
              { title: "NPOs & CBOs", desc: "Not competitors. Implementation partners, community partners, specialist partners, knowledge partners and referral partners.", img: "/images/community.jpg" },
            ].map((p) => (
              <a key={p.title} href="#" className="group relative overflow-hidden bg-paper min-h-[380px] md:min-h-[520px]">
                <img src={p.img} alt={p.title} className="img-mono absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-10 group-hover:scale-[1.02]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                  <span className="eyebrow opacity-40">Partner</span>
                  <div>
                    <h3 className="display text-3xl md:text-5xl">{p.title}</h3>
                    <p className="serif-i mt-4 text-lg md:text-xl opacity-70">{p.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
