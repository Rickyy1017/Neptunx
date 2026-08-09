import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { About, Different, Team, Partners } from "../components/AboutTeam";
import { Nav, Footer, MobileActions, BookingModal } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neptunx | Our Story, Team & Standards in Lagos" },
      {
        name: "description",
        content:
          "Meet Neptunx Home Interiors: our mission, leadership team, offices in Lekki and Ikorodu, and the standards behind our HVAC, refrigeration and interior work.",
      },
      { property: "og:title", content: "About Neptunx Home Interiors" },
      {
        property: "og:description",
        content:
          "Our mission, leadership team and the six standards behind every Neptunx project in Lagos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-navy-deep text-primary-foreground">
        <div className="absolute inset-0 grid-fade opacity-25" />
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-ember/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="text-xs uppercase tracking-[0.22em] text-ember-soft font-medium">
            Who we are
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.04] max-w-3xl">
            Raising the standard of{" "}
            <span className="italic text-ember-soft">home services</span> in Nigeria.
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            Neptunx Home Interiors delivers reliable, innovative and high-quality
            solutions for homeowners, businesses and estate managers across Lagos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-5 py-3 text-sm font-medium shadow-ember hover:-translate-y-0.5 transition"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+2348149024653"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" />
              +234 814 902 4653
            </a>
          </div>
        </div>
      </section>

      <About />
      <Different />
      <Team />
      <Partners />

      <Footer />
      <MobileActions />
      <BookingModal />
    </main>
  );
}
