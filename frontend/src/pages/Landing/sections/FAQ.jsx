import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How does FitCrew work?",
    a: "You set a fitness goal, join or create an accountability group, and check in daily. Your crew sees your streak, and you see theirs.",
  },
  {
    q: "Is it free?",
    a: "Yes. The Free plan includes group joining, daily check-ins, and streak tracking with no cost. Premium adds AI coaching and analytics.",
  },
  {
    q: "Can I create private groups?",
    a: "Yes, you can create invite-only groups for friends, gym partners, or coworkers.",
  },
  {
    q: "How does AI coaching work?",
    a: "The AI coach looks at your check-in history and streak to give specific, timely nudges rather than generic tips.",
  },
  {
    q: "Can I track weight gain and muscle building goals?",
    a: "Yes. FitCrew supports weight loss, weight gain, muscle building, and general fitness goals with tailored check-ins for each.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#FAF9F6] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">FAQ</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[#0B1F17]/8 rounded-2xl border border-[#0B1F17]/8 bg-white">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-[#0B1F17]">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#0B1F17]/40 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#0B1F17]/60">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
