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
  Maximize2,
  X,
  ImageOff,
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

type SponsoredProduct = PartnerProduct & {
  partner: string;
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
    `Product page: ${product.source}`,
    "Please confirm availability, delivery, and payment options.",
  ].join("\n");
}

function ProductImage({
  product,
  className,
}: {
  product: PartnerProduct | SponsoredProduct;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-muted-foreground">
        <ImageOff className="h-8 w-8" />
        <span className="text-xs font-medium">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={`${"partner" in product ? `${product.partner} ` : ""}${product.name} product image`}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
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
          "https://wahanasuperstore.com/asset/img/product/AC%20-%20Fan/Wall%20Mounted%20Split/E06SV5%203.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG&categories=Promotions%2CRefrigerator&page=",
      },
      {
        category: "Refrigerator",
        name: "LG Top Freezer Refrigerator 308L (GL-C322RLBN)",
        price: "NGN 649,000",
        image:
          "https://www.lg.com/africa/images/refrigerators/md06165756/gallery/medium05.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Washing machine",
        name: "LG Front Load Wash & Dry 10.5/7KG (F4V5RGPYJE)",
        price: "NGN 728,000",
        image:
          "https://afifitani.com/wp-content/uploads/LG-F4R5VGG2E.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Television",
        name: "LG TV UHD 43 Inch UA73 4K Smart TV",
        price: "NGN 398,000",
        image:
          "https://gzhls.at/pix/52/1f/521f926aabc2d341-n.webp",
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
      {
        category: "Refrigerator",
        name: "LG SxS Refrigerator 674L (GC-X257CSES) InstaView Door-in-Door",
        price: "NGN 2,172,500",
        image:
          "https://www.tilyexpress.ug/wp-content/uploads/2023/09/716v7XvvlyL._SL1500_-1024x1024.jpg",
        source: "https://fouanistore.com/nigeria-en/search?brand=LG",
      },
      {
        category: "Audio",
        name: "LG 300W 2.1Ch Bluetooth Sound Bar with Wireless Subwoofer",
        price: "NGN 199,999",
        image:
          "https://cdn.idealo.com/folder/Product/204650/7/204650716/s1_produktbild_max/lg-us40t-bluetooth-soundbar-with-wireless-subwoofer-black.jpg",
        source: "https://www.jumia.com.ng/mlp-lg-store/",
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
        image:
          "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dpad/images/S300819479_1?1698938165%3Fg=0",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Refrigerator",
        name: "Hisense Top Freezer Refrigerator 124L (REF172DR)",
        price: "NGN 279,000",
        image:
          "https://bucket-production-22f7.up.railway.app/medusa-media/Hisense%20Fridge-Liters%20With%20Dispenser%20%282%29%20%281%29-01KHQKG1HY4DQ57R98VBM8EZ9W.webp",
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
          "https://bomba.md/public/products/6N/55A6N/NO_COLOR/3.webp",
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
          "https://newworld.co.za/cdn/shop/files/H20MOMS11.1_900x.jpg?v=1729107577",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Small appliance",
        name: "Hisense Air Fryer 8L 1700W (H08AFBK1S1)",
        price: "NGN 96,787",
        image:
          "https://www.hisense-usa.com/dw/image/v2/BDBM_PRD/on/demandware.static/-/Sites-hisense-master/default/dw33ec94d6/images/HAF1600D/HAF1600D-1.png",
        source: "https://www.jumia.com.ng/mlp-hisense-store/",
      },
      {
        category: "Audio",
        name: "Hisense Soundbar with Subwoofer 140W 2.1CH",
        price: "NGN 121,000",
        image:
          "https://www.retravision.com.au/img/containers/products/e/0/hs2100_04_med-e058b59843570d559fb06aee743f459a.jpg",
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
          "https://panaservgroup.com/wp-content/uploads/2024/01/CD67_Main-600x600.jpg",
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
          "https://lugoldstore.com/wp-content/uploads/2019/08/OIP-1.jpeg",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Mixer grinder",
        name: "Panasonic MX-AC555 High-Power Mixer Grinder",
        price: "NGN 238,300",
        image:
          "https://gandhiappliances.com/cdn/shop/products/Panasonic-MX-AC400-550-Watt-Super-Mixer-Grinder-with-4-Jars-Black.jpg?v=1608493362",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Kettle",
        name: "Panasonic NC-K101 Electric Kettle 1.7L",
        price: "NGN 49,700",
        image:
          "https://cdn.sheeel.com/catalog/product/cache/074f467fdf747a38ab5e8f88243fd86f/1/2/1200wx1200h-nc-k101wtz.jpg",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Air conditioner",
        name: "Panasonic 2HP Split Air Conditioner (RN18AKD-31)",
        price: "NGN 1,089,400",
        image:
          "https://alabamart.com/cdn/shop/files/img_1920x_66c47633c1dc77-34150306-15924929.webp?v=1724276490&width=1445",
        source: "https://www.jumia.com.ng/mlp-panasonic-store/",
      },
      {
        category: "Iron",
        name: "Panasonic NI-22AWTTH 1000W Heavy Duty Steam Dry Iron",
        price: "NGN 57,100",
        image:
          "https://www.panasonic.com/content/dam/pim/in/en/NI/NI-22/NI-22AWT/ast-1234887.png.pub.png",
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
          "https://freemarketiq.com/cdn/shop/files/4_056d6609-a41a-4589-a67d-a2a429c7ed24.png?v=1768843217&width=720",
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
          "https://www.antonisfoulis.com/public/uploads/all/THQAVAp5hKIec73hwc4pl3SrfDR85kB6359oTPQA.jpg",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Freezer",
        name: "Midea 198L Quattro Inverter Chest Freezer",
        price: "NGN 415,950",
        image:
          "https://seanelectromecco.com.ng/wp-content/uploads/2018/07/Midea-HS-252C-Chest-Freezer-194-Ltrs-Inner-Glass-Door-White-Colour.jpg",
        source: "https://www.jumia.com.ng/midea/",
      },
      {
        category: "Microwave",
        name: "Midea 42L Microwave Oven with Grill",
        price: "Price on request",
        image:
          "https://megaaqaba.com/cdn/shop/files/42L6.webp?v=1760789284&width=1445",
        source: "https://www.midea.com/ng/kitchen-appliances",
      },
      {
        category: "Cooker",
        name: "Midea 4 Burner Gas Cooker With Oven & Grill",
        price: "NGN 195,900",
        image:
          "https://assets.danubehome.com/media/dh-seller/p/sellers/EROS/product-image/179900014195/1747065700525/0.jpeg",
        source: "https://www.jumia.com.ng/home-office/midea/",
      },
      {
        category: "Washing machine",
        name: "Midea 7KG Twin Tub Top Loader Washing Machine",
        price: "NGN 245,000",
        image:
          "https://gde.ng/public/uploads/images/23-09-2025/68d211e086a26.webp",
        source: "https://www.jumia.com.ng/home-office/midea/",
      },
      {
        category: "Small appliance",
        name: "Midea Digital Air Fryer 8L",
        price: "NGN 123,500",
        image:
          "https://www.midea.com.br/_next/image?q=75&url=https%3A%2F%2Fmideabr.vtexassets.com%2Farquivos%2Fids%2F169618%2F01-Air-Fryer-MAD600010APKWx-Front-Fechada.jpg%3Fv%3D638635785913230000&w=540",
        source: "https://www.jumia.com.ng/midea/",
      },
    ],
  },
];

const allSponsoredProducts = partners.flatMap((partner) =>
  partner.products.map((product) => ({ ...product, partner: partner.name })),
);

const PREVIEW_PRODUCT_COUNT = 4;

/* ---------------- Partners ---------------- */
export function Partners() {
  const [activePartner, setActivePartner] = useState(
    () => partners.find((p) => p.name === "Midea") ?? partners[0],
  );
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const [expandedPartners, setExpandedPartners] = useState<string[]>([]);
  const activePartnerExpanded = expandedPartners.includes(activePartner.name);
  const visibleProducts = activePartnerExpanded
    ? activePartner.products
    : activePartner.products.slice(0, PREVIEW_PRODUCT_COUNT);

  function toggleActivePartnerProducts() {
    setExpandedPartners((current) =>
      current.includes(activePartner.name)
        ? current.filter((name) => name !== activePartner.name)
        : [...current, activePartner.name],
    );
  }

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
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <div
                  key={`${activePartner.name}-${product.name}`}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-background hover:border-ember/60 hover:shadow-elegant transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-mist p-5 grid place-items-center">
                    <ProductImage
                      product={product}
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

            <div className="mt-6 flex flex-col justify-center gap-3 border-t border-border/70 pt-6 sm:flex-row">
              {activePartner.products.length > PREVIEW_PRODUCT_COUNT && (
                <button
                  type="button"
                  onClick={toggleActivePartnerProducts}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink hover:border-ember hover:text-ember transition"
                >
                  {activePartnerExpanded
                    ? `Show fewer ${activePartner.name} products`
                    : `View more ${activePartner.name} products`}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setViewAllOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:bg-navy-soft transition"
              >
                <Maximize2 className="h-4 w-4" />
                View all sponsored products
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {viewAllOpen && (
        <div className="fixed inset-0 z-[80] bg-background">
          <div className="sticky top-0 z-10 border-b border-border/70 bg-card/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-ember font-medium">
                  Sponsored products
                </div>
                <h3 className="mt-1 truncate font-display text-2xl text-ink sm:text-3xl">
                  All partner appliances
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setViewAllOpen(false)}
                aria-label="Close sponsored products view"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background text-ink hover:border-ember hover:text-ember transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="h-[calc(100vh-73px)] overflow-y-auto">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allSponsoredProducts.map((product) => (
                  <div
                    key={`${product.partner}-${product.name}`}
                    className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft"
                  >
                    <div className="aspect-square bg-mist p-5 grid place-items-center">
                      <ProductImage
                        product={product}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-ember/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-ember">
                          {product.partner}
                        </span>
                        <span className="rounded-full bg-mist px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                          {product.category}
                        </span>
                      </div>
                      <h4 className="mt-3 min-h-12 text-sm font-semibold leading-snug text-ink">
                        {product.name}
                      </h4>
                      <div className="mt-3 text-base font-semibold text-ember">
                        {product.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
