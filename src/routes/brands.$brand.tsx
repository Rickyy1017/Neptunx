import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, MessageCircle, Phone, Search } from "lucide-react";

import { Nav, Footer, MobileActions, BookingModal } from "@/routes/index";
import { brands, getBrand, naira, type Category } from "@/data/brands";

export const Route = createFileRoute("/brands/$brand")({
  loader: ({ params }) => {
    const brand = getBrand(params.brand);
    if (!brand) throw notFound();
    return { slug: brand.slug, name: brand.name, tagline: brand.tagline };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Brand not found | Neptunx Home Interiors" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} Appliances & Air Conditioners in Lagos | Neptunx`;
    const description = `Verified ${loaderData.name} models and Neptunx selling prices for appliances supplied and installed in Lagos.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BrandPage,
});

const PHONE_DISPLAY = "+234 814 902 4653";
const PHONE_E164 = "2348149024653";
const WHATSAPP_E164 = "2349020811739";

function BrandPage() {
  const { slug } = Route.useLoaderData();
  const brand = getBrand(slug);
  if (!brand) return null;
  const [category, setCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set: Category[] = [];
    for (const p of brand.products) if (!set.includes(p.category)) set.push(p.category);
    return set;
  }, [brand]);

  const visible = brand.products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      p.spec.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="pt-28 sm:pt-32 pb-10 sm:pb-14 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-ember/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/about"
            hash="partners"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ember transition"
          >
            <ArrowLeft className="h-4 w-4" />
            All official partners
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
                Official partner
              </div>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">
                {brand.name} appliances, supplied and installed.
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                {brand.blurb}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                    `Hi Neptunx, please send me your full ${brand.name} price list and available stock.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-5 py-3 font-medium shadow-ember hover:-translate-y-0.5 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Request {brand.name} price list
                </a>
                <a
                  href={`tel:+${PHONE_E164}`}
                  className="inline-flex items-center gap-2 rounded-full bg-card border border-border text-ink px-5 py-3 font-medium shadow-soft hover:-translate-y-0.5 transition"
                >
                  <Phone className="h-4 w-4 text-ember" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card px-8 py-10 shadow-soft grid place-items-center">
              <img
                src={brand.logo}
                alt={`${brand.name} official partner logo`}
                className="h-10 sm:h-12 w-auto max-w-[220px] object-contain"
              />
              <div className="mt-4 text-xs text-center text-muted-foreground max-w-[220px]">
                {brand.tagline}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {(["All", ...categories] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c as Category | "All")}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium border transition ${
                    category === c
                      ? "bg-navy-deep text-primary-foreground border-transparent shadow-soft"
                      : "bg-card text-ink-soft border-border hover:text-ink hover:border-ember/50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${brand.name} models`}
                className="field-input rounded-full"
                style={{ paddingLeft: "2.4rem" }}
                aria-label={`Search ${brand.name} products`}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p) => {
              const message =
                "Hi Neptunx, I would like to purchase this product.\n" +
                `Brand: ${brand.name}\n` +
                `Product: ${brand.name} ${p.name}\n` +
                `Category: ${p.category}\n` +
                `Price: ${naira(p.price)}\n` +
                `Product page: ${p.sourcePage}\n` +
                "Please confirm availability, delivery, and payment options.";
              return (
                <article
                  key={`${p.model}-${p.name}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="relative aspect-square bg-mist overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${brand.name} ${p.name}, model ${p.model}`}
                      loading="lazy"
                      className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-ink shadow-soft">
                      {p.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {brand.name} {p.model}
                    </div>
                    <h2 className="mt-1 font-semibold leading-snug text-ink">{p.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.spec}
                    </p>
                    <div className="mt-auto pt-5">
                      <div className="font-display text-2xl text-ink">{naira(p.price)}</div>
                      <a
                        href={p.sourcePage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition hover:text-ember"
                      >
                        View official model
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-gradient px-4 py-3 text-sm font-medium text-primary-foreground shadow-ember transition hover:-translate-y-0.5"
                      >
                        Buy now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visible.length === 0 && (
            <div className="mt-10 rounded-3xl border border-border/60 bg-card p-10 text-center">
              <p className="text-ink font-medium">No models match that search.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us and we will source the exact {brand.name} model you need.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
            Other official partners
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {brands
              .filter((b) => b.slug !== brand.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  to="/brands/$brand"
                  params={{ brand: b.slug }}
                  className="group grid h-24 place-items-center rounded-2xl border border-border/70 bg-card px-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
                >
                  <img
                    src={b.logo}
                    alt={`${b.name} official partner logo`}
                    loading="lazy"
                    className="max-h-8 w-auto max-w-[70%] object-contain opacity-70 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileActions />
      <BookingModal />
    </main>
  );
}
