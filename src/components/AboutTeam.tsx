import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  HeartHandshake,
  ScrollText,
  MapPin,
  Phone,
  ArrowUpRight,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import lgLogo from "@/assets/partners/lg.svg";
import hisenseLogo from "@/assets/partners/hisense.svg";
import panasonicLogo from "@/assets/partners/panasonic.svg";
import mideaLogo from "@/assets/partners/midea.svg";

/* ---------------- shared reveal ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-mist-gradient relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-ember/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
                About Neptunx
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06] text-ink">
                A trusted home &amp; property solutions company.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Neptunx Home Interiors delivers high-quality services for residential,
                commercial and estate clients. We provide a complete range of solutions:
                air conditioner and refrigerator installation, maintenance and repairs,
                home and estate maintenance, interior design, AC conduit piping,
                professional fumigation, and the supply of quality air conditioners and
                refrigerators.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our mission is to make homes and workplaces more comfortable, functional and
                well-maintained by delivering reliable services with professionalism,
                integrity and attention to detail. Every project is handled by experienced
                professionals committed to quality workmanship and outstanding customer
                satisfaction.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-card/70 backdrop-blur p-6 sm:p-8 shadow-soft border border-border/60">
              <div className="text-xs uppercase tracking-[0.2em] text-ink font-medium">
                Our offices
              </div>
              <ul className="mt-5 space-y-5">
                {[
                  "C7, 96 Nicon Town, Lekki, Lagos",
                  "Block C, 104 Complex, Ogijo Bus Stop, Ikorodu",
                ].map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-0.5 h-9 w-9 shrink-0 rounded-xl bg-ember-gradient grid place-items-center shadow-ember">
                      <MapPin className="h-4 w-4 text-primary-foreground" />
                    </span>
                    <span className="text-sm text-ink-soft leading-relaxed">{a}</span>
                  </li>
                ))}
                <li className="flex gap-3">
                  <span className="mt-0.5 h-9 w-9 shrink-0 rounded-xl bg-navy-deep grid place-items-center">
                    <Phone className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <a
                    href="tel:+2348149024653"
                    className="text-sm font-medium text-ink hover:text-ember transition"
                  >
                    +234 814 902 4653
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What makes us different ---------------- */
const differentiators = [
  {
    icon: HeartHandshake,
    title: "Client-first approach",
    desc: "We listen, understand your needs, and deliver solutions that exceed expectations.",
  },
  {
    icon: Clock,
    title: "Timely delivery",
    desc: "Every project completed on schedule, without compromising quality or safety.",
  },
  {
    icon: Users,
    title: "Experienced professionals",
    desc: "Skilled experts across technical services, interiors, facilities and project execution.",
  },
  {
    icon: ShieldCheck,
    title: "Risk management",
    desc: "Project, operational and financial risks managed at every stage of delivery.",
  },
  {
    icon: Sparkles,
    title: "Quality workmanship",
    desc: "Industry best practices and quality materials for durable, reliable results.",
  },
  {
    icon: ScrollText,
    title: "Integrity & transparency",
    desc: "Honest communication, fair pricing, and long-term relationships built on trust.",
  },
];

export function Different() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
              What makes us different
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06] text-ink">
              Six standards we never negotiate.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-2xl bg-mist grid place-items-center group-hover:bg-ember-gradient transition-colors">
                  <d.icon className="h-5 w-5 text-ink group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="mt-5 font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Leadership ---------------- */
const team = [
  {
    name: "Ifeanyi Ogazi",
    role: "Founder & Chief Executive Officer",
    initials: "IO",
    bio: "Over eight years in air conditioning and refrigeration, with leadership roles in business development, marketing and corporate administration across the West Africa Innovation Award, Africa Finance Awards and Nigeria Brand Awards, and as Personal Assistant to the former Managing Director of the Nigeria Railway Corporation. He founded Neptunx to raise the standard of home services in Nigeria.",
    tags: ["Leadership", "HVAC & Refrigeration", "Strategy"],
  },
  {
    name: "Okeke Promise Chukwudi",
    role: "Project Manager, Home Interiors",
    initials: "OP",
    bio: "Over 10 years in interior design, lighting solutions and colour coordination. He creates elegant, functional spaces through creative concepts, smart lighting and effective colour combinations, leading interior projects from planning to completion.",
    tags: ["Interior Design", "Lighting", "Colour"],
  },
  {
    name: "Mercy Okoro",
    role: "Project Manager, Home Maintenance & Estate Facilities",
    initials: "MO",
    bio: "Over 11 years in home maintenance, estate cleaning and professional fumigation. She oversees the planning and execution of maintenance projects, keeping homes, estates and commercial properties clean, safe and well-maintained.",
    tags: ["Maintenance", "Estate Facilities", "Fumigation"],
  },
  {
    name: "Ayomide Abidemi",
    role: "Risk Management Officer",
    initials: "AA",
    bio: "Over 8 years in business consulting and risk management. He identifies and manages risk to protect both the company and its clients, ensuring projects are delivered with transparency, accountability and financial security.",
    tags: ["Risk", "Consulting", "Governance"],
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-navy-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-30" />
      <div className="absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-ember/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-ember-soft font-medium">
              Leadership
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06]">
              The people behind every{" "}
              <span className="italic text-ember-soft">Neptunx</span> project.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="h-full rounded-3xl glass-dark p-6 sm:p-7 hover:bg-white/10 transition">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-ember-gradient grid place-items-center shadow-ember">
                    <span className="font-semibold tracking-tight text-primary-foreground">
                      {m.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white truncate">{m.name}</h3>
                    <p className="text-xs sm:text-sm text-ember-soft">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-white/65 leading-relaxed">{m.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */
type PartnerProduct = {
  category: string;
  name: string;
  price: string;
  image: string;
  source: string;
};

type Partner = {
  name: string;
  logo: string;
  sourceName: string;
  sourceUrl: string;
  products: PartnerProduct[];
};

function waLink(message?: string) {
  const WHATSAPP = "https://wa.me/2348149024653";
  return message ? `${WHATSAPP}?text=${encodeURIComponent(message)}` : WHATSAPP;
}

function buildPartnerProductOrderMessage(partner: Partner, product: PartnerProduct) {
  return [
    "Hi Neptunx, I would like to purchase this product.",
    `Brand: ${partner.name}`,
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    `Price: ${product.price}`,
    `Image: ${product.image}`,
    "Please confirm availability, delivery, and payment options.",
  ].join("\n");
}

const partners: Partner[] = [
  {
    name: "LG",
    logo: lgLogo,
    sourceName: "Fouani / Jumia Nigeria",
    sourceUrl: "https://fouanistore.com/nigeria-en/search?brand=LG",
    products: [
      {
        category: "Air conditioner",
        name: "LG Split AC 1.5 HP Dual Inverter with Gen-mode",
        price: "NGN 519,600",
        image:
          "https://bf1af2.akinoncloudcdn.com/products/2024/09/09/49010/9111591e-6b29-41d4-a559-fdf3c1464193_size2048_cropCenter.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG&categories=Promotions%2CRefrigerator&page=",
      },
      {
        category: "Refrigerator",
        name: "LG Top Freezer Refrigerator 308L (GL-C322RLBN)",
        price: "NGN 649,000",
        image:
          "https://www.lg.com/africa/images/refrigerators/md06165756/gallery/medium01-v1.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Washing machine",
        name: "LG Front Load Wash & Dry 10.5/7KG (F4V5RGPYJE)",
        price: "NGN 728,000",
        image:
          "https://static.ticimax.cloud/13616/uploads/urunresimleri/buyuk/lg-f4v5rgp2t-a-10.5-kg-yikama--7-kg-kuru-2c9b.png",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Television",
        name: "LG TV UHD 43 Inch UA73 4K Smart TV",
        price: "NGN 398,000",
        image:
          "https://youget.pt/237498-large_default/lg-ai-ua73-tv-2025-43-led-uhd-4k-43ua73006la.jpg",
        source: "https://fouanistore.com/nigeria-en/search?categories=Promotions",
      },
      {
        category: "Freezer",
        name: "LG Chest Freezer 243L (GCFB255BQCF)",
        price: "NGN 324,000",
        image:
          "https://audiomarc.com.bn/public/uploads/all/NGF4w8VUdzPMz19l5mauiI0WRiklXIplOGk9p6iB.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Microwave",
        name: "LG Microwave 25L 1000W (MS2535GIS)",
        price: "NGN 167,000",
        image:
          "https://cdn.mediapark.uz/imgs/9e750e91-f463-4b0b-8715-6bcadaa570f2_Artboard-1.webp",
        source: "https://fouanistore.com/nigeria-en/shop?brand_ids%5B%5D=1&category_id=undefined&category_name=&page=2&with_filters=true",
      },
    ],
  },
  {
    name: "Hisense",
    logo: hisenseLogo,
    sourceName: "Hisense Official Store / Fouani",
    sourceUrl: "https://www.jumia.com.ng/mlp-hisense-store/",
    products: [
      {
        category: "Air conditioner",
        name: "Hisense 1.5HP Split Air Conditioner (AS12TG1)",
        price: "NGN 344,000",
        image: "https://mchris.ng/wp-content/uploads/2023/09/1HP-AC.jpg",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Refrigerator",
        name: "Hisense Top Freezer Refrigerator 124L (REF172DR)",
        price: "NGN 279,000",
        image: "https://cdn.miswag.me/images/images/a1938c44-b5dc-41a6-b608-9bae1deff24f.jpg",
        source: "https://fouanistore.com/nigeria-en/shop?brand_ids%5B%5D=5",
      },
      {
        category: "Washing machine",
        name: "Hisense 7.5kg Twin Tub Washing Machine (WSQB 753)",
        price: "NGN 174,070",
        image:
          "https://alabamart.com/cdn/shop/files/307.jpg?v=1693813021",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Television",
        name: 'Hisense 55" UHD 4K Smart TV (55A6N / 55A6Q)',
        price: "NGN 515,450",
        image:
          "https://enzinger.mh-cf.de/cache/renditeimages/a2054642-639039268247750839-1400x1400-vcenterhcenter.jpeg",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Freezer",
        name: "Hisense 200 Litres Chest Freezer (HISFRZ270)",
        price: "NGN 299,999",
        image:
          "https://www.appliancesonline.com.au/ak/6/e/f/5/6ef54844c41be447a26827c2a195b6dd81f0e5c0_hisense_200l_chest_freezer_hrcf200_2_50165ae4_high-high.jpeg",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Microwave",
        name: "Hisense 20 Litres Manual Microwave Oven (H20MOMS14)",
        price: "NGN 80,740",
        image:
          "https://f.nooncdn.com/p/pnsku/N70060228V/45/_/1764236080/8a5fd4ef-86b0-4daa-ae6b-d8d85a5dd843.jpg?width=800",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
    ],
  },
  {
    name: "Panasonic",
    logo: panasonicLogo,
    sourceName: "Panasonic Official Store on Jumia",
    sourceUrl: "https://www.jumia.com.ng/mlp-panasonic-store/",
    products: [
      {
        category: "Air conditioner",
        name: "Panasonic 1.5HP Inverter Split AC (CS-U12XKD-3)",
        price: "NGN 1,344,500",
        image: "https://www.panasonic.com/content/dam/pim/mi/en/CS/CS-U12/CS-U12XKD-3/ast-1543529.png.pub.png",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Microwave",
        name: "Panasonic 27L 4-in-1 Convection Microwave & Grill",
        price: "NGN 388,300",
        image:
          "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/3935483/1.jpg",
        source:
          "https://www.jumia.com.ng/panasonic-27-litres-4-in-1-convection-microwave-grill-oven-nncd67mbkpq-384539362.html",
      },
      {
        category: "Water dispenser",
        name: "Panasonic Top Loading Water Dispenser SDM-WD3320TG",
        price: "NGN 311,200",
        image:
          "https://www.panasonic.com/content/dam/pim/mi/ar/SD/SDM-WD/SDM-WD3320TG/ast-1351907.png.pub.thumb.644.644.png",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Fan",
        name: "Panasonic F-407X 16-Inch Standing Fan",
        price: "NGN 185,100",
        image:
          "https://etsound.com.sg/cdn/shop/files/Main-2_a8be909f-2f4b-4554-a525-dca6a1bde988.jpg?v=1751439750&width=1214",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Mixer grinder",
        name: "Panasonic MX-AC555 High-Power Mixer Grinder",
        price: "NGN 238,300",
        image:
          "https://gandhiappliances.com/cdn/shop/products/Panasonic-MX-AC555-New-550-Watt-Mixer-Grinder-with-5-Jars-Bronze.jpg?v=1608493332",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Kettle",
        name: "Panasonic NC-K101 Electric Kettle 1.7L",
        price: "NGN 49,700",
        image:
          "https://cdn.nguyenkimmall.com/images/detailed/806/10052383-binh-dun-sieu-toc-panasonic-1-7-lit-nc-k101wra-1.jpg",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
    ],
  },
  {
    name: "Midea",
    logo: mideaLogo,
    sourceName: "Midea Nigeria / Jumia",
    sourceUrl: "https://www.midea.com/ng",
    products: [
      {
        category: "Air conditioner",
        name: "Midea 1.5HP Dual Gencool Inverter Split AC",
        price: "NGN 545,500",
        image:
          "https://d21d281c1yd2en.cloudfront.net/media/product_images/midea-2-0hp-aurora-white-standard-inverter-split-type-installation-kit-inv-2hp_1.0.webp",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Refrigerator",
        name: "Midea 208L Double Door Top Freezer Refrigerator",
        price: "NGN 416,000",
        image:
          "https://aghasarkissian.com/wp-content/uploads/2022/02/MDRT489MTE46-MAIN-1500-1500.jpg",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Washing machine",
        name: "Midea 12kg Dual Force Pulsator Twin Tub Washer",
        price: "NGN 326,000",
        image:
          "https://web-res.midea.com/content/dam/midea-aem/mx/mx-new/plp/lavanderia/MA500W22W-1-new.jpg/jcr%3Acontent/renditions/MA500W22W-1-new.webp",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Freezer",
        name: "Midea 198L Quattro Inverter Chest Freezer",
        price: "NGN 415,950",
        image:
          "https://www.midea.com/content/dam/midea-aem/id/id-new/pdp/refrigerator/hs-129c/hs-390ck/HS-390CK-new.jpg/jcr%3Acontent/renditions/HS-390CK-new.webp",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Microwave",
        name: "Midea 42L Microwave Oven with Grill",
        price: "Price on request",
        image:
          "https://murad.com.jo/cdn/shop/files/35fa451e-d8f5-4400-af42-df6987ab5a69.png?v=1771938734",
        source: "https://www.midea.com/ng/kitchen-appliances",
      },
      {
        category: "Cooker",
        name: "Midea 4 Burner Gas Cooker With Oven & Grill",
        price: "NGN 195,900",
        image:
          "https://cdn.media.amplience.net/i/lmg/166447891-166447891-HC11012024_01-2100.jpg?%24prodimg-m-sqr-pdp-2x%24=&%24quality-standard%24=&fmt=auto&sm=c",
        source: "https://www.jumia.com.ng/home-office/midea/",
      },
    ],
  },
];

export function Partners() {
  const [activePartner, setActivePartner] = useState(
    () => partners.find((p) => p.name === "Midea") ?? partners[0],
  );

  return (
    <section id="partners" className="py-16 sm:py-20 bg-background border-y border-border/60 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-64 w-[640px] max-w-full rounded-full bg-ember/5 dark:bg-ember/[0.02] blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">Official partners</div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl text-ink">We partner with the brands we trust.</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
              Select a brand to browse stocked electronics and appliances with current market guide prices.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <button
                type="button"
                onClick={() => setActivePartner(p)}
                aria-pressed={activePartner.name === p.name}
                className={`group relative aspect-[4/3] w-full rounded-2xl border bg-card grid place-items-center px-6 shadow-soft dark:shadow-none hover:shadow-elegant dark:hover:shadow-[0_20px_50px_-20px_oklch(0.6_0.16_250/0.15)] animate-logo-lift hover:[animation-play-state:paused] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
                  activePartner.name === p.name
                    ? "border-ember ring-4 ring-ember/15"
                    : "border-border/70"
                }`}
                style={{ animationDelay: `${i * 900}ms` }}
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ember/10 to-transparent opacity-0 animate-fade-pulse group-hover:opacity-100 dark:from-ember/[0.03] dark:group-hover:opacity-60" style={{ animationDelay: `${i * 900}ms` }} />
                <span className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-12 bg-white/40 blur-xl opacity-0 animate-logo-sheen dark:hidden" style={{ animationDelay: `${i * 900}ms` }} />
                <img src={p.logo} alt={`${p.name} official partner logo`} loading="lazy" className="relative h-10 sm:h-12 w-auto max-w-[70%] object-contain animate-logo-alive group-hover:[animation-play-state:paused] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" style={{ animationDelay: `${i * 900}ms` }} />
                <span className="sr-only">View {p.name} product catalog</span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-3xl border border-border/70 bg-card p-4 sm:p-6 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-mist grid place-items-center">
                    <ShoppingBag className="h-5 w-5 text-ink" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-ink">
                      {activePartner.name} catalog
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Prices are guide prices from {activePartner.sourceName}.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={activePartner.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink hover:border-ember hover:text-ember transition"
              >
                Source catalog <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activePartner.products.map((product) => (
                <div
                  key={`${activePartner.name}-${product.name}`}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-background hover:border-ember/60 hover:shadow-elegant transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-mist p-5 grid place-items-center">
                    <img
                      src={product.image}
                      alt={`${product.name} product image`}
                      loading="lazy"
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-mist px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                        {product.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-ember transition" />
                    </div>
                    <h4 className="mt-3 min-h-12 text-sm font-semibold leading-snug text-ink">
                      {product.name}
                    </h4>
                    <div className="mt-3 text-lg font-semibold text-ember">{product.price}</div>
                  </div>

                  <div className="flex items-center gap-2 px-4 pb-4">
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          waLink(buildPartnerProductOrderMessage(activePartner, product)),
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-ember/90 transition"
                    >
                      Order
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
