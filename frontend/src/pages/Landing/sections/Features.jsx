import {
  CalendarCheck,
  Users,
  Flame,
  Trophy,
  Bot,
  LineChart,
  Scale,
  TrendingUp,
  Dumbbell,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  { icon: CalendarCheck, title: "Daily Check-Ins", desc: "Log progress in seconds and keep your crew in the loop." },
  { icon: Users, title: "Accountability Groups", desc: "Join or create small crews that keep each other honest." },
  { icon: Flame, title: "Streak Tracking", desc: "Build visible momentum that's painful to break." },
  { icon: Trophy, title: "Real-Time Leaderboards", desc: "See where you rank in your crew, updated instantly." },
  { icon: Bot, title: "AI Fitness Coach", desc: "Get nudges and plans tuned to your goal and history." },
  { icon: LineChart, title: "Progress Analytics", desc: "Trends, consistency scores, and goal-completion charts." },
  { icon: Scale, title: "Weight Loss Tracking", desc: "Purpose-built check-ins for cutting goals." },
  { icon: TrendingUp, title: "Weight Gain Tracking", desc: "Track surplus goals with the same rigor as a cut." },
  { icon: Dumbbell, title: "Muscle Building Programs", desc: "Structured check-ins around strength progression." },
  { icon: Target, title: "General Fitness Goals", desc: "Flexible tracking for maintenance and habit-building." },
  { icon: Award, title: "Achievement Badges", desc: "Milestones that mark real, earned consistency." },
  { icon: Sparkles, title: "Personalized Insights", desc: "Weekly summaries of what's working and what isn't." },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#FAF9F6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Everything you need
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            Built to keep you consistent, not just informed
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#0B1F17]/8 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-[#0B1F17]/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669] transition-colors group-hover:bg-[#059669] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-[#0B1F17]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#0B1F17]/55">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
