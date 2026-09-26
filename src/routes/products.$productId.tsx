import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Nav, Footer, MobileActions, BookingModal } from "@/routes/index";
import { getProduct, naira } from "@/data/brands";
import { getProductPageUrl, openProductWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const result = getProduct(params.productId);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Neptunx Home Interiors" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.brand.name} ${loaderData.product.name} | Neptunx`;
    const description = `${loaderData.brand.name} ${loaderData.product.name} supplied and installed by Neptunx in Lagos.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductPage,
});

const PHONE_DISPLAY = "+234 814 902 4653";
const PHONE_E164 = "2348149024653";

function ProductPage() {
  const { brand, product } = Route.useLoaderData();
  const productPage = getProductPageUrl(product.model);
  const message =
    "Hi Neptunx, I would like to purchase this product.\n" +
    `Brand: ${brand.name}\n` +
    `Product: ${brand.name} ${product.name}\n` +
    `Category: ${product.category}\n` +
    `Price: ${naira(product.price)}\n` +
    `Product page: ${productPage}\n` +
    "Please confirm availability, delivery, and payment options.";

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/brands/$brand"
            params={{ brand: brand.slug }}
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition hover:text-ember"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {brand.name} products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-mist shadow-soft">
              <img
                src={product.image}
                alt={`${brand.name} ${product.name}`}
                className="aspect-square h-full w-full object-contain p-8 sm:p-14"
              />
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
                {brand.name} · {product.category}
              </div>
              <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                Model {product.model}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {product.spec}
              </p>
              <div className="mt-8 font-display text-4xl text-ink">{naira(product.price)}</div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openProductWhatsApp(message)}
                  className="inline-flex items-center gap-2 rounded-full bg-ember-gradient px-5 py-3 font-medium text-primary-foreground shadow-ember transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Buy now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:+${PHONE_E164}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-medium text-ink shadow-soft transition hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 text-ember" />
                  {PHONE_DISPLAY}
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileActions />
      <BookingModal />
    </main>
  );
}