import { ArrowRight } from "lucide-react";
import adventureVideo from "@/assets/adventure.mp4.asset.json";
import explorers from "@/assets/cat-explorers.jpg";
import wild from "@/assets/cat-wild.jpg";
import creators from "@/assets/cat-creators.jpg";
import cozy from "@/assets/cat-cozy.jpg";
import { PlayOnceVideo } from "./PlayOnceVideo";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { title: "LITTLE\nEXPLORERS", copy: "Space, Science & More", img: explorers, tone: "bg-grape/85" },
  { title: "WILD\nADVENTURES", copy: "Dinosaurs & Animals", img: wild, tone: "bg-sun/85" },
  { title: "LITTLE\nCREATORS", copy: "Art, Craft & DIY", img: creators, tone: "bg-coral/80" },
  { title: "COZY\nCOMPANIONS", copy: "Plush & Pretend Play", img: cozy, tone: "bg-leaf/75" },
];

export function Adventure() {
  return (
    <section id="adventure" className="relative isolate overflow-hidden bg-mint py-16 sm:py-20">
      <PlayOnceVideo
        src={adventureVideo.url}
        label="Toy car driving through the Toyland scene"
        className="opacity-60"
      />
      <div className="absolute inset-0 bg-mint/45" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.7rem] font-extrabold tracking-[0.3em] text-navy/60">PICK YOUR</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold text-navy sm:text-5xl">
              Adventure
              <span className="mt-1 block h-1.5 w-24 rounded-full bg-sun" />
            </h2>
          </div>
          <div className="hidden items-center gap-3 sm:flex" aria-hidden>
            <span className="animate-car-drive text-3xl">🚗</span>
            <span className="h-0.5 w-32 border-t-2 border-dashed border-navy/30 md:w-56" />
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <a
                href="#best-sellers"
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl shadow-card transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lift sm:h-80 lg:h-[22rem]"
              >
                <img
                  src={c.img}
                  alt={c.title.replace("\n", " ")}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${c.tone} mix-blend-multiply`} aria-hidden />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep/80 to-transparent"
                  aria-hidden
                />
                <div className="relative flex items-end justify-between gap-2 p-4 sm:p-5">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-extrabold leading-tight text-navy-foreground sm:text-xl">
                      {c.title.split("\n").map((line, li) => (
                        <span key={li} className={li === 0 ? "block text-sun" : "block"}>
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="mt-1 truncate text-[0.7rem] font-bold text-navy-foreground/80 sm:text-xs">
                      {c.copy}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-coral text-coral-foreground transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
