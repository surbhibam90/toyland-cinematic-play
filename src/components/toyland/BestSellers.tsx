import { ArrowLeft, ArrowRight, Heart, Star } from "lucide-react";
import { useRef, useState } from "react";
import stacker from "@/assets/p-stacker.jpg";
import dino from "@/assets/p-dino.jpg";
import science from "@/assets/p-science.jpg";
import teddy from "@/assets/p-teddy.jpg";
import rocket from "@/assets/rocket.png";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  { name: "Wooden Rainbow Stacker", price: "₹899", rating: 4, reviews: 125, img: stacker },
  { name: "Interactive Dino Robot", price: "₹1,299", rating: 5, reviews: 98, img: dino },
  { name: "DIY Science Lab Kit", price: "₹1,599", rating: 4, reviews: 86, img: science },
  { name: "Soft Cuddle Teddy Bear", price: "₹699", rating: 5, reviews: 112, img: teddy },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-3 w-3", i < rating ? "fill-sun text-sun" : "text-border")}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function BestSellers() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [wish, setWish] = useState<Record<string, boolean>>({});

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section id="best-sellers" className="relative isolate overflow-hidden bg-cream py-16 sm:py-24">
      {/* Rocket launch layer (decorative background) */}
      <img
        src={rocket}
        alt=""
        aria-hidden
        loading="lazy"
        width={768}
        height={1024}
        className="pointer-events-none absolute left-1/2 top-4 hidden h-[26rem] -translate-x-[6rem] animate-float-soft select-none opacity-90 lg:block"
      />
      <p className="pointer-events-none absolute left-1/2 top-2 hidden -translate-x-[13rem] font-display text-xl font-extrabold text-navy/60 lg:block">
        3… 2… 1…
      </p>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
        <Reveal>
          <p className="text-[0.7rem] font-extrabold tracking-[0.3em] text-navy/60">BEST SELLERS ⭐</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Loved by Kids.
            <br />
            Trusted by Parents.
          </h2>
          <p className="mt-4 max-w-xs text-sm font-semibold text-muted-foreground">
            Handpicked toys that bring smiles, learning & endless fun.
          </p>
          <a
            href="#adventure"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-coral px-6 py-3 text-xs font-extrabold tracking-widest text-coral-foreground shadow-[var(--shadow-glow-coral)] transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="relative">
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible"
          >
            {PRODUCTS.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 80}
                className={cn(
                  "min-w-[72%] snap-start sm:min-w-[46%] lg:min-w-0",
                  i % 2 === 1 && "lg:-translate-y-5",
                )}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      aria-label={`Add ${p.name} to wishlist`}
                      aria-pressed={!!wish[p.name]}
                      onClick={() => setWish((w) => ({ ...w, [p.name]: !w[p.name] }))}
                      className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/90 text-coral shadow-card transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                    >
                      <Heart className={cn("h-4 w-4", wish[p.name] && "fill-coral")} />
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <h3 className="font-display text-sm font-extrabold leading-snug text-navy">{p.name}</h3>
                    <div className="flex items-center gap-2">
                      <Stars rating={p.rating} />
                      <span className="text-[0.7rem] font-semibold text-muted-foreground">({p.reviews})</span>
                    </div>
                    <p className="mt-auto font-display text-base font-extrabold text-navy">{p.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <div className="mt-2 flex justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous products"
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-navy shadow-card transition-transform hover:-translate-x-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next products"
              className="grid h-10 w-10 place-items-center rounded-full bg-card text-navy shadow-card transition-transform hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
