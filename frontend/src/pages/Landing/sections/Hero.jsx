import { Flame, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const CHAIN = [true, true, true, true, true, true, false];

function CheckInChain({ size = "md" }) {
  const dot = size === "sm" ? "h-2.5 w-2.5" : "h-3.5 w-3.5";
  return (
    <div className="flex items-center gap-1.5">
      {CHAIN.map((done, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`${dot} rounded-full ${
              done ? "bg-[#84CC16]" : "border-2 border-[#0B1F17]/15 bg-transparent"
            }`}
          />
          {i < CHAIN.length - 1 && (
            <span
              className={`h-[2px] w-3 ${done ? "bg-[#84CC16]/50" : "bg-[#0B1F17]/10"}`}
            />
          )}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] px-6 pt-16 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F17]/10 bg-white px-4 py-1.5">
            <CheckInChain size="sm" />
            <span className="font-mono text-xs text-[#0B1F17]/60">
              6-day chains average 3x higher goal completion
            </span>
          </div>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-[#0B1F17] sm:text-6xl">
            Achieve your fitness goals{" "}
            <span className="text-[#059669]">together</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0B1F17]/65">
            Join accountability groups, track daily progress, build streaks,
            compete with friends, and stay motivated with AI-powered coaching.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/signup"
              className="rounded-full bg-[#059669] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#059669]/20 transition-transform hover:scale-[1.03]"
            >
              Start Free
            </a>
            <a
              href="#features"
              className="rounded-full border border-[#0B1F17]/15 px-7 py-3.5 text-sm font-semibold text-[#0B1F17] transition-colors hover:bg-[#0B1F17]/5"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-[#0B1F17]/50">
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> 12,400+ members
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> 380K+ check-ins logged
            </span>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#059669]/10 blur-2xl" />
          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-5 shadow-2xl shadow-[#0B1F17]/10">
            <div className="flex items-center justify-between border-b border-[#0B1F17]/8 pb-4">
              <div>
                <p className="text-xs text-[#0B1F17]/45">Today's check-in</p>
                <p className="font-serif text-lg font-semibold text-[#0B1F17]">
                  Morning Runners Crew
                </p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-[#F59E0B]/10 px-3 py-1 font-mono text-sm font-semibold text-[#F59E0B]">
                <Flame className="h-4 w-4" /> 12
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#FAF9F6] p-4">
              <div>
                <p className="text-xs text-[#0B1F17]/45">This week's chain</p>
                <div className="mt-2">
                  <CheckInChain />
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-[#059669]" />
            </div>

            <div className="mt-4 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#0B1F17]/40">
                Group leaderboard
              </p>
              {[
                { name: "Aisha K.", pts: 1240, rank: 1 },
                { name: "You", pts: 1180, rank: 2 },
                { name: "Marco R.", pts: 1050, rank: 3 },
              ].map((u) => (
                <div
                  key={u.rank}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    u.name === "You" ? "bg-[#059669]/8" : ""
                  }`}
                >
                  <span className="flex items-center gap-2 text-[#0B1F17]/80">
                    <span className="font-mono text-xs text-[#0B1F17]/40">
                      #{u.rank}
                    </span>
                    {u.name}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#059669]">
                    {u.pts} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
