import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Riya Malhotra",
    goal: "Weight Loss",
    quote: "My group noticed the day I almost skipped. That's the difference — someone actually notices.",
    initials: "RM",
  },
  {
    name: "James Okafor",
    goal: "Weight Gain",
    quote: "Bulking alone I'd lose track of meals for days. Daily check-ins made surplus consistency finally click.",
    initials: "JO",
  },
  {
    name: "Wei Zhang",
    goal: "Muscle Building",
    quote: "The streak became the goal itself. Twenty-two weeks in and I haven't missed a lift day.",
    initials: "WZ",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#FAF9F6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wider text-[#059669]">
            Success stories
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#0B1F17]">
            Real crews, real consistency
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-[#0B1F17]/8 bg-white p-6">
              <div className="flex gap-0.5 text-[#F59E0B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#0B1F17]/70">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#059669]/10 font-mono text-xs font-semibold text-[#059669]">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B1F17]">{t.name}</p>
                  <p className="text-xs text-[#0B1F17]/45">{t.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
