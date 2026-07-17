import { Bot, Flame } from "lucide-react";

export default function AICoach() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            AI Fitness Coach
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            A coach that knows your streak, not just your stats
          </h2>
          <p className="mt-4 max-w-md text-[#0B1F17]/60">
            Your AI coach checks your history before it speaks — it knows how
            long your current chain is, where you've slipped before, and what
            actually gets you to check in again.
          </p>
        </div>

        <div className="rounded-2xl border border-[#0B1F17]/8 bg-[#FAF9F6] p-5">
          <div className="flex items-center gap-2 border-b border-[#0B1F17]/8 pb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F17] text-[#84CC16]">
              <Bot className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-[#0B1F17]">FitCrew Coach</span>
          </div>

          <div className="mt-4 flex justify-end">
            <div className="max-w-xs rounded-2xl rounded-tr-sm bg-[#059669] px-4 py-2.5 text-sm text-white">
              How can I stay consistent this week?
            </div>
          </div>

          <div className="mt-3 flex justify-start">
            <div className="max-w-xs rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-[#0B1F17]/80">
              Focus on small daily wins. You're currently on a{" "}
              <span className="inline-flex items-center gap-1 font-mono font-semibold text-[#F59E0B]">
                <Flame className="h-3.5 w-3.5" />
                12-day streak
              </span>
              . Completing today's check-in will strengthen your habit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
