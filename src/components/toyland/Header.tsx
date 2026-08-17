import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#best-sellers" },
  { label: "Categories", href: "#adventure" },
  { label: "Brands", href: "#why" },
  { label: "New Arrivals", href: "#best-sellers" },
  { label: "About Us", href: "#why" },
  { label: "Contact", href: "#signup" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-float" : "bg-navy-deep/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:py-4">
        <a href="#home" className="min-w-0 shrink-0" aria-label="Toyland home">
          <Logo />
        </a>

        <nav className="hidden justify-center lg:flex" aria-label="Main">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-bold text-navy-foreground/80 transition-colors hover:text-sun",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-sun after:transition-transform after:duration-300 hover:after:scale-x-100",
                    i === 0 && "text-sun after:scale-x-100",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          {[
            { Icon: Search, label: "Search" },
            { Icon: User, label: "Account" },
            { Icon: Heart, label: "Wishlist" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-foreground/85 transition-all hover:-translate-y-0.5 hover:bg-navy-foreground/10 hover:text-sun focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
            >
              <Icon className="h-[1.15rem] w-[1.15rem]" />
            </button>
          ))}
          <button
            type="button"
            aria-label="Cart, 1 item"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-foreground/85 transition-all hover:-translate-y-0.5 hover:bg-navy-foreground/10 hover:text-sun focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
          >
            <ShoppingCart className="h-[1.15rem] w-[1.15rem]" />
            <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-sun text-[0.65rem] font-extrabold text-sun-foreground">
              1
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy-foreground transition-colors hover:bg-navy-foreground/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-foreground/10 bg-navy-deep/98 px-4 pb-5 pt-2 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-bold text-navy-foreground/85 transition-colors hover:bg-navy-foreground/10 hover:text-sun"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
