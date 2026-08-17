import { BookOpen, HeartHandshake, ShieldCheck, Smile } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { Icon: BookOpen, title: "Educational & Fun", copy: "Toys that support learning through play." },
  { Icon: ShieldCheck, title: "Premium Quality", copy: "Safe, durable & child friendly." },
  { Icon: HeartHandshake, title: "Curated with Love", copy: "Handpicked toys for every age & every stage." },
  { Icon: Smile, title: "Happiness Delivered", copy: "Fast delivery. Big smiles. Every time." },
];

export function WhyToyland() {
  return (
    <section id="why" className="relative bg-gradient-lavender pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal className="rounded-[2rem] bg-cream px-5 py-10 shadow-lift sm:px-10">
          <p className="text-center text-[0.7rem] font-extrabold tracking-[0.3em] text-navy/60">
            ✦ WHY TOYLAND? 👑
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map(({ Icon, title, copy }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="flex min-w-0 items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-navy/15 text-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-extrabold text-navy">{title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
