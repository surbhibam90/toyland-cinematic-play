import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Background video layer: autoplays once (muted, inline, no loop, no controls),
 * freezes on its last frame, and replays from the start on hover / focus.
 */
export function PlayOnceVideo({
  src,
  webmSrc,
  className,
  poster,
  label,
}: {
  src: string;
  webmSrc?: string;
  className?: string;
  poster?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    const host = hostRef.current;
    if (!video || !host) return;

    const play = () => {
      video.currentTime = 0;
      void video.play().catch(() => {});
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(host);

    host.addEventListener("mouseenter", play);
    return () => {
      io.disconnect();
      host.removeEventListener("mouseenter", play);
    };
  }, []);

  return (
    <div ref={hostRef} className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        poster={poster}
        muted
        playsInline
        autoPlay
        preload="metadata"
        controls={false}
        disablePictureInPicture
        aria-label={label}
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
