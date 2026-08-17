import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const COLUMNS = [
  { title: "SHOP", links: ["All Toys", "New Arrivals", "Best Sellers", "Gift Cards", "Sale"] },
  { title: "HELP", links: ["Track Order", "Returns & Refunds", "Shipping Policy", "FAQs", "Contact Us"] },
  { title: "ABOUT", links: ["Our Story", "Sustainability", "Careers", "Press", "Blog"] },
];

const POPULAR = ["STEM Toys", "Wooden Toys", "Outdoor Play", "Board Games"];
const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitter, label: "X" },
];
const PAYMENTS = ["VISA", "Mastercard", "RuPay", "UPI", "Paytm"];

export function Footer() {
  return (
    <footer className="bg-grape pt-12 text-navy-foreground">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-4 max-w-xs text-xs font-semibold leading-relaxed text-navy-foreground/70">
              A magical world of toys for every child, every dream and every adventure.
            </p>
            <ul className="mt-5 flex gap-2">
              {SOCIALS.map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#signup"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-coral/90 text-coral-foreground transition-transform hover:-translate-y-0.5 hover:scale-105"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} className="min-w-0" aria-label={col.title}>
              <h3 className="text-[0.7rem] font-extrabold tracking-[0.2em] text-sun">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#home"
                      className="text-xs font-semibold text-navy-foreground/75 transition-colors hover:text-sun"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="min-w-0">
            <h3 className="text-[0.7rem] font-extrabold tracking-[0.2em] text-sun">POPULAR</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {POPULAR.map((p) => (
                <li key={p}>
                  <a
                    href="#best-sellers"
                    className="inline-block rounded-lg bg-navy-foreground/10 px-3 py-1.5 text-[0.7rem] font-bold text-navy-foreground/85 transition-colors hover:bg-navy-foreground/20 hover:text-sun"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/15 py-6">
          <p className="text-[0.7rem] font-semibold text-navy-foreground/60">
            © 2024 Toyland. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="rounded-md bg-navy-foreground/90 px-2.5 py-1 text-[0.6rem] font-extrabold tracking-wide text-grape"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
