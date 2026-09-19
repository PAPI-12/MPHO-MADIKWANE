import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../components/Frame";

const heroImages = [
  {
    src: "/images/website-hero.jpg",
    alt: "A South African community development workshop",
  },
  {
    src: "/images/hero.jpg",
    alt: "Young South Africans collaborating in a training workshop",
  },
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO — full editorial bleed with transitioning images in loop */}
      <section className="relative min-h-screen overflow-hidden">
        {heroImages.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`img-mono absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ease-in-out ${
              currentHeroIndex === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20 pointer-events-none" />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-28 md:justify-between md:px-12 md:pb-20 md:pt-36">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow mb-6 text-paper/70">Social Impact · Community Development · Skills · Partnerships</p>
                <h1 className="display text-[13vw] leading-[0.82] text-paper md:text-[9.5vw]">
                  From social
                  <br />
                  insight <span className="serif-i font-normal tracking-normal text-paper/80">to</span> opportunity
                  <span className="text-ochre">.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="max-w-[1600px] mx-auto w-full mt-auto pt-16 md:pt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-paper/20">
            <p className="serif-i max-w-lg text-xl text-paper/80 md:text-2xl">
              Mpho Madikwane connects communities, institutions and resources to develop practical pathways toward skills, opportunity and sustainable social impact.
            </p>
            <Link
              to="/programmes"
              className="group inline-flex items-center gap-3 border border-paper/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-paper transition-all hover:bg-paper hover:text-ink"
            >
              Our programmes <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE — exact split-screen structure from the supplied reference */}
      <section className="relative min-h-[76vh] overflow-hidden border-t border-ink/20 bg-ink md:min-h-[88vh]">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden border-r border-paper/20">
            <img
              src="/images/community.jpg"
              alt="South African residents participating in a community meeting"
              className="img-mono h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/images/research.jpg"
              alt="Field research and social insight in a South African community"
              className="img-mono h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-paper/20" />

        <div className="relative z-10 flex min-h-[76vh] items-center justify-center px-6 py-20 text-center md:min-h-[88vh] md:px-12">
          <div className="max-w-4xl text-paper">
            <p className="eyebrow mb-6 text-paper/65">What we are</p>
            <h2 className="display text-5xl md:text-8xl">A connector. Not a charity.</h2>
            <p className="serif-i mx-auto mt-7 max-w-3xl text-2xl leading-[1.08] text-paper/90 md:text-4xl">
              We sit between community need and institutional opportunity — connecting people, knowledge, resources
              and institutions into practical pathways for development.
            </p>
          </div>
        </div>

        <div className="eyebrow absolute bottom-5 left-0 right-0 z-10 grid grid-cols-2 text-paper/70">
          <span className="px-5 md:px-8">01&nbsp;&nbsp;Community participation</span>
          <span className="px-5 md:px-8">02&nbsp;&nbsp;Social insight</span>
        </div>
      </section>

      {/* PROGRAMMES — three-panel sequence from the supplied reference */}
      <section className="border-t border-ink/20 bg-paper px-2 py-5 md:px-3 md:py-7">
        <div className="mx-auto max-w-[1800px]">
          <div className="flex items-center justify-between gap-6 pb-5 md:pb-7">
            <h2 className="font-sans text-2xl font-medium tracking-[-0.04em] md:text-4xl">
              Practical pathways from insight to opportunity.
            </h2>
            <Link
              to="/programmes"
              className="hidden shrink-0 border border-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-ink hover:text-paper sm:inline-block"
            >
              Explore programmes
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-ink/20 md:grid-cols-3">
            {[
              {
                n: "01",
                img: "/images/graduates.jpg",
                title: "Youth & Human Development",
                alt: "Young South African graduates moving into opportunity",
              },
              {
                n: "02",
                img: "/images/skills.jpg",
                title: "Skills & Economic Opportunity",
                alt: "A young South African woman developing technical skills",
              },
              {
                n: "03",
                img: "/images/community.jpg",
                title: "Community Development",
                alt: "Residents participating in community development",
              },
            ].map((item) => (
              <Link key={item.n} to="/programmes" className="group block bg-paper">
                <div className="aspect-[4/5] overflow-hidden bg-ink md:aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="img-mono h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex min-h-16 items-start gap-4 bg-paper py-4 pr-4 md:min-h-20">
                  <span className="mono-num text-xs font-medium opacity-55">{item.n}</span>
                  <h3 className="text-xs font-semibold uppercase leading-tight tracking-[0.08em] transition-colors group-hover:text-earth md:text-sm">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/programmes"
            className="mt-5 block border border-ink px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-ink hover:text-paper sm:hidden"
          >
            Explore programmes
          </Link>
        </div>
      </section>

      {/* IMPACT TEASER — large image with text overlay */}
      <section className="relative border-t border-ink/20">
        <img src="/images/research.jpg" alt="Social research and impact measurement" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-ink/20" />
        <div className="relative z-10 px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 md:col-start-7 md:pl-8">
              <p className="eyebrow text-paper/60">Impact</p>
              <h2 className="display mt-6 text-5xl text-paper md:text-7xl">Evidence before action.</h2>
              <p className="serif-i mt-6 text-xl text-paper/80 md:text-2xl">Every programme begins with understanding — and ends with measurement of real outcomes.</p>
              <Link to="/impact" className="mt-8 inline-block border border-paper/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-paper hover:bg-paper hover:text-ink transition-all">Explore impact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP — horizontal scroll feel */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-12">
            <h2 className="display text-5xl md:text-7xl">Partners</h2>
            <Link to="/partners" className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] md:inline-flex hover:opacity-60 transition-opacity">
              The ecosystem <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {[
              { label: "Government", desc: "Programme implementation & engagement." },
              { label: "Private Sector", desc: "Social investment & employment pathways." },
              { label: "Education", desc: "Access to participants & development." },
              { label: "NPOs", desc: "Collaboration, resources & co-funding." },
            ].map((p) => (
              <Link key={p.label} to="/partners" className="col-span-6 md:col-span-3 border-t border-ink pt-4 group">
                <h4 className="display text-2xl md:text-4xl group-hover:text-earth transition-colors">{p.label}</h4>
                <p className="serif-i mt-2 text-base opacity-60">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
