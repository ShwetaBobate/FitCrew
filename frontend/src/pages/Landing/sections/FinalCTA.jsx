export default function FinalCTA() {
  return (
    <section className="bg-[#0B1F17] px-6 py-24 text-center text-[#FAF9F6]">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Start your fitness journey with accountability
        </h2>
        <p className="mt-4 text-[#FAF9F6]/60">
          Your crew is waiting. Your streak starts today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/signup"
            className="rounded-full bg-[#84CC16] px-7 py-3.5 text-sm font-semibold text-[#0B1F17] transition-transform hover:scale-[1.03]"
          >
            Get Started Free
          </a>
          <a
            href="/groups"
            className="rounded-full border border-[#FAF9F6]/20 px-7 py-3.5 text-sm font-semibold text-[#FAF9F6] transition-colors hover:bg-[#FAF9F6]/5"
          >
            Join a Group
          </a>
        </div>
      </div>
    </section>
  );
}
