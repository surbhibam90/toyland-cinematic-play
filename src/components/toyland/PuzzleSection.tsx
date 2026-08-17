import { ArrowRight } from "lucide-react";
import puzzle from "@/assets/puzzle.jpg";
import { Reveal } from "./Reveal";

export function PuzzleSection() {
  return (
    <section id="puzzle" className="relative overflow-hidden bg-gradient-lavender py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <Reveal>
          <img
            src={puzzle}
            alt="Castle jigsaw puzzle coming together, pieces floating around"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full animate-float-soft rounded-3xl object-cover shadow-lift"
          />
        </Reveal>

        <Reveal delay={120} className="max-w-md">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Build Your Own
            <br />
            <span className="text-lavender-deep">Adventure</span>
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-navy/70">
            Every piece creates a memory.
            <br />
            Every memory creates a bond.
          </p>
          <a
            href="#best-sellers"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-xs font-extrabold tracking-widest text-navy-foreground shadow-card transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-deep"
          >
            EXPLORE COLLECTION
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
