const STEPS = [
  { n: "01", title: "Set your goal", desc: "Create your profile and choose weight loss, weight gain, muscle building, or general fitness." },
  { n: "02", title: "Join a crew", desc: "Join an existing accountability group or start your own with friends." },
  { n: "03", title: "Check in daily", desc: "Log progress each day and watch your check-in chain grow." },
  { n: "04", title: "Stay motivated", desc: "AI coaching, streaks, and group competition keep momentum alive." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            How FitCrew works
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            Four steps. One chain you don't want to break.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#0B1F17]/8 lg:block" />

          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-semibold ${
                    i === 0
                      ? "bg-[#059669] text-white"
                      : "border-2 border-[#0B1F17]/12 bg-[#FAF9F6] text-[#0B1F17]/50"
                  }`}
                >
                  {step.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="h-[2px] flex-1 bg-[#0B1F17]/8 lg:hidden" />
                )}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#0B1F17]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0B1F17]/55">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
