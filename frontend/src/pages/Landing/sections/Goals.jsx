import { Scale, TrendingUp, Dumbbell, Target, HeartPulse } from "lucide-react";

const GOALS = [
  { icon: Scale, title: "Weight Loss", audience: "For steady, sustainable cutting", benefit: "Daily check-ins keep you honest on hard weeks." },
  { icon: TrendingUp, title: "Weight Gain", audience: "For lean bulking and recomposition", benefit: "Track surplus consistency, not just the scale." },
  { icon: Dumbbell, title: "Muscle Building", audience: "For structured strength progression", benefit: "Log sessions and see streaks tied to lifts." },
  { icon: Target, title: "General Fitness", audience: "For staying active without a strict plan", benefit: "Flexible check-ins that still build a habit." },
  { icon: HeartPulse, title: "Healthy Lifestyle", audience: "For long-term habit over short-term goals", benefit: "Crews that keep showing up, indefinitely." },
];

export default function Goals() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Whatever your goal
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            FitCrew adapts to your goal, not the other way around
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {GOALS.map(({ icon: Icon, title, audience, benefit }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#0B1F17]/8 bg-[#FAF9F6] p-6"
            >
              <Icon className="h-6 w-6 text-[#059669]" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#0B1F17]">
                {title}
              </h3>
              <p className="mt-1 text-xs text-[#0B1F17]/45">{audience}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#0B1F17]/60">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
