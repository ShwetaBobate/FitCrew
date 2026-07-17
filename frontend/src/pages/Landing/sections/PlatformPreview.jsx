import { Flame, Target, CheckCircle2, Sparkles, Users } from "lucide-react";

const WEEK = [40, 65, 50, 80, 60, 90, 70];

export default function PlatformPreview() {
  return (
    <section className="bg-[#FAF9F6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Inside the app
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            A dashboard built around today, not just history
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6 md:col-span-1">
            <div className="flex items-center gap-2 text-[#F59E0B]">
              <Flame className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wide">Current streak</span>
            </div>
            <p className="mt-2 font-mono text-4xl font-semibold text-[#0B1F17]">18 days</p>
            <p className="mt-1 text-sm text-[#0B1F17]/50">Personal best: 24 days</p>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6 md:col-span-1">
            <div className="flex items-center gap-2 text-[#059669]">
              <Target className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wide">Goal progress</span>
            </div>
            <p className="mt-2 font-mono text-4xl font-semibold text-[#0B1F17]">68%</p>
            <div className="mt-3 h-2 w-full rounded-full bg-[#0B1F17]/8">
              <div className="h-2 w-[68%] rounded-full bg-[#059669]" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6 md:col-span-1">
            <div className="flex items-center gap-2 text-[#0B1F17]">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wide">Today's check-in</span>
            </div>
            <p className="mt-2 font-serif text-2xl font-semibold text-[#0B1F17]">Completed</p>
            <p className="mt-1 text-sm text-[#0B1F17]/50">Logged at 7:12 AM</p>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6 md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-wide text-[#0B1F17]/45">
              Weekly activity
            </span>
            <div className="mt-4 flex h-32 items-end gap-3">
              {WEEK.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bg-[#059669]/80"
                    style={{ height: `${v}%` }}
                  />
                  <span className="text-[10px] text-[#0B1F17]/35">
                    {"MTWTFSS"[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-[#0B1F17] p-6 text-[#FAF9F6] md:col-span-1">
            <div className="flex items-center gap-2 text-[#84CC16]">
              <Sparkles className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wide">AI motivation</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#FAF9F6]/80">
              "You're 6 days from your longest streak yet. Today's check-in
              keeps the chain alive."
            </p>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6 md:col-span-3">
            <div className="flex items-center gap-2 text-[#0B1F17]/70">
              <Users className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wide">Group activity feed</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#0B1F17]/70">
              <li><strong className="text-[#0B1F17]">Aisha K.</strong> checked in — 14 day streak</li>
              <li><strong className="text-[#0B1F17]">Marco R.</strong> hit a new personal record</li>
              <li><strong className="text-[#0B1F17]">You</strong> earned the "Consistency" badge</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
