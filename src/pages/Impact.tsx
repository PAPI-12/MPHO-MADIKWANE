export default function Impact() {
  return (
    <>
      {/* IMPACT HERO */}
      <section className="relative min-h-[70vh] border-t border-ink/20">
        <img src="/images/research.jpg" alt="Field research and evidence" className="img-mono absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-[1600px] w-full">
            <p className="eyebrow text-paper/60">Impact</p>
            <h1 className="display mt-4 text-6xl text-paper md:text-[10vw] md:leading-[0.85]">From output to impact.</h1>
          </div>
        </div>
      </section>

      {/* IMPACT FRAMEWORK */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-4xl md:text-7xl">The impact framework</h2>
          <p className="serif-i mt-4 max-w-2xl text-xl opacity-60 md:text-2xl">Every programme defines inputs, activities, outputs, outcomes and impact — in that order, without skipping steps.</p>

          <div className="mt-12 grid grid-cols-1 gap-px bg-ink md:grid-cols-5">
            {[
              ["Input", "What resources were invested?"],
              ["Activity", "What did we do?"],
              ["Output", "What was delivered?"],
              ["Outcome", "What changed for participants?"],
              ["Impact", "What longer-term difference?"],
            ].map(([k, v], i) => (
              <div key={k} className={`flex min-h-[220px] flex-col justify-between p-6 md:p-8 ${i === 4 ? "bg-ink text-paper" : "bg-paper"}`}>
                <span className={`mono-num text-xs opacity-40 ${i === 4 ? "text-paper/40" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-2xl md:text-3xl">{k}</h3>
                  <p className={`serif-i mt-2 text-base ${i === 4 ? "text-paper/70" : "opacity-60"}`}>{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTPUT TO IMPACT — worked example */}
      <section className="border-t border-ink/20 bg-paper px-6 py-16 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-4xl md:text-6xl">A worked example</h2>
          <p className="serif-i mt-4 max-w-xl text-xl opacity-60">Not activity alone. Not outcomes without evidence. Everything leads to impact.</p>
          <div className="mt-10 grid grid-cols-1 gap-px bg-ink md:grid-cols-2">
            {[
              { label: "Output", value: "500", desc: "young people attended training.", note: "That alone is not enough.", dark: false },
              { label: "Outcome", value: "400", desc: "completed the programme.", note: "Better.", dark: false },
              { label: "Further outcome", value: "250", desc: "progressed into employment, further education or enterprise.", note: "More meaningful.", dark: false },
              { label: "Impact", value: "↑", desc: "Evidence shows sustained improvement in participants’ economic participation.", note: "That is the distinction we build into our reporting culture.", dark: true },
            ].map((item) => (
              <div key={item.label} className={`flex min-h-[260px] flex-col justify-between p-6 md:p-10 ${item.dark ? "bg-ink text-paper" : "bg-paper"}`}>
                <span className="eyebrow opacity-60">{item.label}</span>
                <div>
                  <span className={`display mono-num text-7xl md:text-[8rem] ${item.dark ? "text-paper" : "text-ink"}`}>{item.value}</span>
                  <p className={`mt-3 text-lg md:text-xl ${item.dark ? "text-paper/90" : ""}`}>{item.desc}</p>
                  <p className={`serif-i mt-3 text-lg ${item.dark ? "text-ochre" : "text-earth"}`}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEASURE — blank dashes */}
      <section className="border-t border-ink/20 bg-ink px-6 py-16 text-paper md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="display text-5xl md:text-7xl">Only publish supported figures.</h2>
          <p className="serif-i mt-6 max-w-2xl text-2xl opacity-70 md:text-3xl">Figures are deliberately left blank. Only publish numbers supported by actual organisational data. Outcomes, not activity.</p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {[
              "People reached",
              "Programmes delivered",
              "Training completed",
              "Partners engaged",
              "Opportunities created",
              "Communities reached",
            ].map((label) => (
              <div key={label} className="border border-paper/20 p-6 md:p-8">
                <span className="display mono-num text-6xl text-paper/20">—</span>
                <p className="eyebrow mt-4 opacity-50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
