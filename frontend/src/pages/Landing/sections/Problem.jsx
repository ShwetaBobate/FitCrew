const STATS = [
  { value: "92%", label: "of solo fitness goals are abandoned within 60 days" },
  { value: "3x", label: "higher consistency when checking in with a group" },
  { value: "80%", label: "of app users say motivation fades without accountability" },
];

export default function Problem() {
  return (
    <section className="bg-[#0B1F17] px-6 py-24 text-[#FAF9F6]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#84CC16]">
            The problem
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight">
            Tracking a workout isn't the hard part. Showing up again tomorrow is.
          </h2>
          <p className="mt-4 text-[#FAF9F6]/60">
            Most fitness apps count reps and calories, but they don't fight
            the real reason goals fail: motivation fades and nobody notices
            when you stop. Community and accountability are what keep people
            consistent long after willpower runs out.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#FAF9F6]/10 bg-[#FAF9F6]/[0.03] p-6"
            >
              <p className="font-mono text-4xl font-semibold text-[#84CC16]">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF9F6]/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
