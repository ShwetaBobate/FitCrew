import { useState } from "react";
import { Menu, X, Link2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F17]/8 bg-[#FAF9F6]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#059669] text-[#FAF9F6]">
            <Link2 className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-[#0B1F17]">
            FitCrew
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#0B1F17]/70 transition-colors hover:text-[#0B1F17]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-[#0B1F17]/70 transition-colors hover:text-[#0B1F17]"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="rounded-full bg-[#0B1F17] px-5 py-2.5 text-sm font-semibold text-[#FAF9F6] transition-transform hover:scale-[1.03]"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#0B1F17]/8 bg-[#FAF9F6] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#0B1F17]/70"
              >
                {link.label}
              </a>
            ))}
            <a href="/login" className="text-sm font-medium text-[#0B1F17]/70">
              Log in
            </a>
            <a
              href="/signup"
              className="rounded-full bg-[#0B1F17] px-5 py-2.5 text-center text-sm font-semibold text-[#FAF9F6]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
