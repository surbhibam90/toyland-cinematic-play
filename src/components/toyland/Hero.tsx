import { ArrowRight, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import { PlayOnceVideo } from "./PlayOnceVideo";

const BENEFITS = [
  { Icon: Truck, title: "Free Shipping", copy: "On orders above ₹499" },
  { Icon: RotateCcw, title: "Easy Returns", copy: "15 days policy" },
  { Icon: ShieldCheck, title: "Safe & Secure", copy: "100% secure checkout" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[88vh] overflow-hidden bg-navy-deep pt-24 lg:min-h-screen">
      <PlayOnceVideo src={heroVideo.url} label="Toyland magical toy box animation" />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-mint [clip-path:ellipse(78%_100%_at_50%_100%)] sm:h-32"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[60vh] max-w-[1400px] items-center gap-10 px-4 pb-28 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:pb-36">
        <div className="max-w-xl">
          <p className="font-display text-lg text-sun/90 italic">
            A little more magic,
            <br />
            every day.
          </p>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-navy-foreground">PLAY.</span>
            <span className="block text-sun">IMAGINE.</span>
            <span className="block text-coral">DISCOVER.</span>
          </h1>

          <p className="mt-6 max-w-sm text-sm font-semibold leading-relaxed text-navy-foreground/80 sm:text-base">
            Toys that turn ordinary moments into adventures.
          </p>

          <a
            href="#best-sellers"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-sun px-7 py-3.5 text-sm font-extrabold tracking-wide text-sun-foreground shadow-[var(--shadow-glow-sun)] transition-all hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
          >
            EXPLORE TOYS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Floating benefits panel */}
        <ul className="w-full max-w-xs justify-self-end rounded-3xl border border-navy-foreground/10 bg-navy-deep/80 p-2 shadow-float backdrop-blur-md lg:w-56">
          {BENEFITS.map(({ Icon, title, copy }, i) => (
            <li
              key={title}
              className={`flex flex-col items-center gap-1.5 px-4 py-5 text-center transition-colors hover:bg-navy-foreground/5 ${
                i > 0 ? "border-t border-navy-foreground/10" : ""
              }`}
            >
              <Icon className="h-5 w-5 text-sun" aria-hidden />
              <p className="text-xs font-extrabold text-navy-foreground">{title}</p>
              <p className="text-[0.7rem] font-semibold text-navy-foreground/65">{copy}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-28 right-4 hidden items-center gap-2 sm:right-8 lg:flex" aria-hidden>
        <span className="text-[0.6rem] font-extrabold tracking-[0.25em] text-navy-foreground/60">
          SCROLL TO EXPLORE
        </span>
        <span className="grid h-7 w-4 place-items-start rounded-full border border-navy-foreground/40 p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sun" />
        </span>
      </div>
    </section>
  );
}
