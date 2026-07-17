import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const WEIGHT_TREND = [
  { week: "W1", kg: 82 },
  { week: "W2", kg: 81.2 },
  { week: "W3", kg: 80.6 },
  { week: "W4", kg: 79.9 },
  { week: "W5", kg: 79.1 },
  { week: "W6", kg: 78.4 },
];

const CONSISTENCY = [
  { week: "W1", pct: 60 },
  { week: "W2", pct: 71 },
  { week: "W3", pct: 78 },
  { week: "W4", pct: 85 },
  { week: "W5", pct: 88 },
  { week: "W6", pct: 94 },
];

export default function Analytics() {
  return (
    <section className="bg-[#FAF9F6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Progress analytics
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            See the trend, not just the day
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-[#0B1F17]/45">
              Weight trend
            </span>
            <div className="mt-4 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={WEIGHT_TREND}>
                  <CartesianGrid stroke="#0B1F17" strokeOpacity={0.06} vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#0B1F1780" }} axisLine={false} tickLine={false} />
                  <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #0B1F1714" }} />
                  <Line type="monotone" dataKey="kg" stroke="#059669" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-[#0B1F17]/45">
              Consistency score
            </span>
            <div className="mt-4 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={CONSISTENCY}>
                  <CartesianGrid stroke="#0B1F17" strokeOpacity={0.06} vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#0B1F1780" }} axisLine={false} tickLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #0B1F1714" }} />
                  <Line type="monotone" dataKey="pct" stroke="#84CC16" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-[#0B1F17]/45">
              Monthly progress
            </span>
            <p className="mt-4 font-mono text-4xl font-semibold text-[#0B1F17]">+14%</p>
            <p className="mt-1 text-sm text-[#0B1F17]/50">vs. last month's activity</p>
          </div>

          <div className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-[#0B1F17]/45">
              Goal completion
            </span>
            <p className="mt-4 font-mono text-4xl font-semibold text-[#059669]">68%</p>
            <div className="mt-3 h-2 w-full rounded-full bg-[#0B1F17]/8">
              <div className="h-2 w-[68%] rounded-full bg-[#059669]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
