import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Join groups", "Daily check-ins", "Streak tracking"],
    highlighted: false,
    cta: "Get Started Free",
  },
  {
    name: "Premium",
    price: "$8",
    period: "/ month",
    features: [
      "Everything in Free",
      "AI Fitness Coach",
      "Advanced analytics",
      "Personalized insights",
      "Priority features",
    ],
    highlighted: true,
    cta: "Go Premium",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Pricing
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            Start free. Upgrade when you're ready.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-[#059669] bg-[#0B1F17] text-[#FAF9F6]"
                  : "border border-[#0B1F17]/10 bg-[#FAF9F6] text-[#0B1F17]"
              }`}
            >
              <h3 className="font-serif text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4">
                <span className="font-mono text-4xl font-semibold">{plan.price}</span>
                <span className={`ml-1 text-sm ${plan.highlighted ? "text-[#FAF9F6]/50" : "text-[#0B1F17]/45"}`}>
                  {plan.period}
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-[#84CC16]" : "text-[#059669]"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-[#FAF9F6]/80" : "text-[#0B1F17]/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/signup"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-[#84CC16] text-[#0B1F17]"
                    : "bg-[#0B1F17] text-[#FAF9F6]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
