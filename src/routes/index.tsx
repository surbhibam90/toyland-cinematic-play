import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/toyland/Header";
import { Hero } from "@/components/toyland/Hero";
import { Adventure } from "@/components/toyland/Adventure";
import { BestSellers } from "@/components/toyland/BestSellers";
import { PuzzleSection } from "@/components/toyland/PuzzleSection";
import { WhyToyland } from "@/components/toyland/WhyToyland";
import { FinalCta } from "@/components/toyland/FinalCta";
import { Footer } from "@/components/toyland/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toyland — Play. Imagine. Discover. | Premium Toy Store" },
      {
        name: "description",
        content:
          "Shop handpicked STEM kits, plush friends, wooden toys and craft sets at Toyland. Free shipping above ₹499, easy 15-day returns.",
      },
      { property: "og:title", content: "Toyland — Play. Imagine. Discover." },
      {
        property: "og:description",
        content: "A magical world of toys for every child, every dream and every adventure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Adventure />
        <BestSellers />
        <PuzzleSection />
        <WhyToyland />
        <FinalCta />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
