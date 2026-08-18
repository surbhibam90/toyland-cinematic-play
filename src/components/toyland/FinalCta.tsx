import { useState } from "react";
import { toast } from "sonner";
import giftbox from "@/assets/giftbox.jpg";
import { Reveal } from "./Reveal";

const CONFETTI = Array.from({ length: 14 }).map((_, i) => ({
  left: `${(i * 7 + 4) % 96}%`,
  delay: `${(i % 7) * 0.8}s`,
  size: 4 + (i % 3) * 3,
}));

export function FinalCta() {
  const [email, setEmail] = useState("");

  return (
    <section id="signup" className="relative isolate overflow-hidden bg-navy-deep py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            className="absolute bottom-0 animate-drift-up rounded-sm bg-sun/70"
            style={{
              left: c.left,
              width: c.size,
              height: c.size,
              animationDelay: c.delay,
              backgroundColor: i % 3 === 0 ? undefined : "currentColor",
              color: i % 3 === 1 ? "oklch(0.68 0.19 15)" : "oklch(0.86 0.07 300)",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <Reveal>
          <img
            src={giftbox}
            alt="Gift box bursting open with a teddy bear and colourful toys"
            loading="lazy"
            width={1024}
            height={896}
            className="mx-auto w-full max-w-md animate-float-soft rounded-3xl object-cover"
          />
        </Reveal>

        <Reveal delay={100} className="max-w-lg">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl">
            Ready to find their
            <br />
            next <span className="text-sun">favourite toy?</span>
          </h2>
          <p className="mt-4 text-sm font-semibold text-navy-foreground/75">
            Surprise. Joy. Play. All in one place.
          </p>

          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes("@")) {
                toast.error("Please enter a valid email address.");
                return;
              }
              toast.success("You're on the list! Magic incoming.");
              setEmail("");
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full bg-card px-5 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gradient-coral px-7 py-3 text-xs font-extrabold tracking-widest text-coral-foreground shadow-[var(--shadow-glow-coral)] transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              SIGN ME UP
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
