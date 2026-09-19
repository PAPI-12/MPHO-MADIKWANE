import { Mark, Wordmark } from "./Logo";

export function Cover() {
  return (
    <section id="cover" className="relative min-h-screen bg-paper text-ink">
      <div className="grid min-h-screen grid-cols-12">
        {/* Left: type */}
        <div className="col-span-12 flex flex-col justify-between px-6 py-6 md:col-span-7 md:px-12 md:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Mark className="h-14 w-auto md:h-20" />
              <Wordmark stacked className="text-[0.75rem] md:text-sm" />
            </div>
            <p className="eyebrow hidden opacity-60 md:block">Johannesburg · South Africa · 2026</p>
          </div>

          <div className="mt-20 md:mt-0">
            <p className="eyebrow mb-8 opacity-60">Brand Development Strategy</p>
            <h1 className="display text-[15vw] md:text-[8.2vw]">
              From
              <br />
              social
              <br />
              insight
              <br />
              <span className="serif-i normal-case tracking-normal">to</span> opportunity
              <span className="text-earth">.</span>
            </h1>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6">
            <p className="eyebrow flex flex-wrap gap-x-3 opacity-70">
              <span>Social Impact</span>
              <span>•</span>
              <span>Community Development</span>
              <span>•</span>
              <span>Skills</span>
              <span>•</span>
              <span>Partnerships</span>
            </p>
            <p className="eyebrow mono-num opacity-50">Vol. 01 — 06 Parts</p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative col-span-12 min-h-[60vh] md:col-span-5 md:min-h-0">
          <img
            src="/images/hero.jpg"
            alt="Young South Africans collaborating in a training workshop"
            className="img-mono absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-paper mix-blend-difference">
            <p className="eyebrow">People in action — not portraits.</p>
            <Mark className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
