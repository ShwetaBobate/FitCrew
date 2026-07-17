import { Link2 } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "How It Works", "Success Stories"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#FAF9F6]/10 bg-[#0B1F17] text-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#84CC16] text-[#0B1F17]">
                <Link2 className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-serif text-lg font-semibold">FitCrew</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[#FAF9F6]/60">
              Accountability groups, daily check-ins, and streaks that turn
              fitness goals into fitness habits.
            </p>
           <div className="mt-6 flex gap-4">
  <FaInstagram className="h-5 w-5 text-[#FAF9F6]/60 hover:text-[#84CC16]" />
  <FaTwitter className="h-5 w-5 text-[#FAF9F6]/60 hover:text-[#84CC16]" />
  <FaYoutube className="h-5 w-5 text-[#FAF9F6]/60 hover:text-[#84CC16]" />
</div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#FAF9F6]/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#FAF9F6]/70 hover:text-[#FAF9F6]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#FAF9F6]/10 pt-8 text-xs text-[#FAF9F6]/40 md:flex-row">
          <span>© {new Date().getFullYear()} FitCrew. All rights reserved.</span>
          <span>Built for people who show up, together.</span>
        </div>
      </div>
    </footer>
  );
}
