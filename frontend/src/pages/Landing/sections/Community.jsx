import { Medal } from "lucide-react";

const COMMUNITY_STATS = [
  { value: "1,840", label: "Active groups" },
  { value: "3,200", label: "Members online now" },
  { value: "382K", label: "Total check-ins" },
  { value: "48.2K lb", label: "Total weight lost" },
  { value: "19.6K lb", label: "Total weight gained" },
];

const LEADERBOARD = [
  { rank: 1, name: "Aisha K.", streak: 42, points: 3840 },
  { rank: 2, name: "Devon P.", streak: 38, points: 3610 },
  { rank: 3, name: "Marco R.", streak: 35, points: 3305 },
  { rank: 4, name: "Priya S.", streak: 29, points: 2990 },
  { rank: 5, name: "Liam T.", streak: 27, points: 2870 },
];

export default function Community() {
  return (
    <section className="bg-[#0B1F17] px-6 py-24 text-[#FAF9F6]">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-wider text-[#84CC16]">
          The community
        </span>
        <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
          Thousands of people, checking in every day
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {COMMUNITY_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#FAF9F6]/10 p-5">
              <p className="font-mono text-2xl font-semibold text-[#84CC16]">{s.value}</p>
              <p className="mt-1 text-xs text-[#FAF9F6]/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#FAF9F6]/10 bg-[#FAF9F6]/[0.03] p-6">
          <span className="font-mono text-xs uppercase tracking-wide text-[#FAF9F6]/45">
            This week's leaderboard
          </span>
          <div className="mt-4 divide-y divide-[#FAF9F6]/8">
            {LEADERBOARD.map((u) => (
              <div key={u.rank} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  {u.rank <= 3 ? (
                    <Medal
                      className={`h-5 w-5 ${
                        u.rank === 1
                          ? "text-[#F59E0B]"
                          : u.rank === 2
                          ? "text-[#FAF9F6]/60"
                          : "text-[#F59E0B]/50"
                      }`}
                    />
                  ) : (
                    <span className="w-5 text-center font-mono text-xs text-[#FAF9F6]/40">
                      {u.rank}
                    </span>
                  )}
                  <span className="text-sm">{u.name}</span>
                </div>
                <div className="flex items-center gap-6 font-mono text-xs text-[#FAF9F6]/55">
                  <span>{u.streak}d streak</span>
                  <span className="text-[#84CC16]">{u.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
