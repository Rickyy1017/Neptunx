import { createFileRoute } from "@tanstack/react-router";
import type * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Wind,
  Snowflake,
  Sofa,
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  Star,
  Menu,
  X,
  ShoppingBag,
  Zap,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import heroInterior from "@/assets/hero-interior.jpg";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import productAc from "@/assets/product-ac.jpg";
import productFridge from "@/assets/product-fridge.jpg";
import productWasher from "@/assets/product-washer.jpg";
import productMicrowave from "@/assets/product-microwave.jpg";
import neptunxLogo from "@/assets/neptunx-logo.png";
import serviceHvacReal from "@/assets/service-hvac-real.jpg";

const LOGO_URL = neptunxLogo;
const serviceHvac = serviceHvacReal;

export const Route = createFileRoute("/")({
  component: Landing,
});

const PHONE_DISPLAY = "+234 902 081 1739";
const PHONE_E164 = "2349020811739";
const WHATSAPP = `https://wa.me/${PHONE_E164}`;
const TEL = `tel:+${PHONE_E164}`;

function waLink(message?: string) {
  return message ? `${WHATSAPP}?text=${encodeURIComponent(message)}` : WHATSAPP;
}

const SERVICE_TYPES = [
  "HVAC Installation",
  "HVAC Repair & Maintenance",
  "Refrigeration Service",
  "Appliance Repair",
  "Interior Solutions",
  "Home Maintenance",
] as const;
type ServiceType = (typeof SERVICE_TYPES)[number];

const WA_MESSAGES: Record<string, string> = {
  general:
    "Hi Neptunx, I'd like to book a home service visit. Could you share available slots?",
  "HVAC Installation":
    "Hi Neptunx, I'd like a quote for HVAC installation (split/central AC). When can a technician visit?",
  "HVAC Repair & Maintenance":
    "Hi Neptunx, my AC needs service (repair / gas top-up / maintenance). Please advise on the next available visit.",
  "Refrigeration Service":
    "Hi Neptunx, I need refrigeration service (fridge/freezer repair or maintenance). Kindly confirm availability.",
  "Appliance Repair":
    "Hi Neptunx, I'd like to book an appliance repair (washer / microwave / other). Please share options.",
  "Interior Solutions":
    "Hi Neptunx, I'd like to discuss an interior solutions project (finishes / joinery / lighting).",
  "Home Maintenance":
    "Hi Neptunx, I'd like to sign up for home maintenance / on-demand technician visit.",
};

/* ---------------- Booking modal (singleton via window event) ---------------- */
const BOOKING_EVENT = "neptunx:open-booking";
function openBooking(service?: ServiceType) {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT, { detail: { service } }));
}

function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Neptunx Home Interiors logo"
      className={`${className} object-contain shrink-0`}
    />
  );
}

/* ---------------- Reveal on scroll ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Animated counter ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#shop", label: "Shop" },
    { href: "#why", label: "Why Neptunx" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group min-w-0">
            <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
            <div className="leading-tight min-w-0">
              <div className="font-semibold tracking-tight text-navy-deep truncate">Neptunx</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate">
                Home Interiors
              </div>
            </div>
          </a>


          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-navy-soft hover:text-navy-deep rounded-lg hover:bg-mist transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={TEL}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-navy-deep hover:text-ember transition"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <button
              type="button"
              onClick={() => openBooking()}
              className="inline-flex items-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-4 py-2.5 text-sm font-medium shadow-ember hover:shadow-elegant hover:-translate-y-0.5 transition"
            >
              Book a visit
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-navy-deep"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 shadow-soft animate-rise">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-navy-deep hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-ember-gradient text-primary-foreground px-4 py-3 font-medium"
            >
              Book a visit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* ambient gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-ember/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-navy/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-navy-soft shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              Trusted by 2,400+ Lagos homes
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-navy-deep">
              Premium care for the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">homes</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-ember/30 -z-0 rounded-sm" />
              </span>{" "}
              you love.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              HVAC, refrigeration, appliances and interior solutions — engineered
              for modern Lagos living. Certified technicians, curated products,
              and a service standard you can feel.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-6 py-3.5 font-medium shadow-ember hover:-translate-y-0.5 hover:shadow-elegant transition"
              >
                Book a service
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3.5 font-medium border border-border hover:border-navy/40 hover:-translate-y-0.5 transition shadow-soft"
              >
                <MessageCircle className="h-4 w-4 text-ember" />
                Chat on WhatsApp
              </a>
            </div>


            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {[
                { k: <><Counter to={2400} suffix="+" /></>, v: "Homes served" },
                { k: <><Counter to={12} suffix="+" /></>, v: "Years in Lagos" },
                { k: <><Counter to={98} suffix="%" /></>, v: "Repeat clients" },
              ].map((s, i) => (
                <div key={i}>
                  <dt className="font-display text-3xl sm:text-4xl text-navy-deep">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroInterior}
                alt="Modern luxury Lagos apartment interior at golden hour"
                width={1600}
                height={1200}
                className="w-full h-[420px] sm:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />

              {/* Floating card 1 */}
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 glass rounded-2xl p-3 sm:p-4 shadow-soft animate-float max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-ember-gradient grid place-items-center shrink-0">
                    <Wind className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Just installed</div>
                    <div className="text-sm font-semibold text-navy-deep truncate">
                      Split AC · Ikoyi
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute right-4 sm:right-6 top-4 sm:top-6 glass rounded-2xl p-3 sm:p-4 shadow-soft">
                <div className="flex items-center gap-2 text-navy-deep">
                  <ShieldCheck className="h-4 w-4 text-ember" />
                  <span className="text-xs font-medium">Certified · Insured</span>
                </div>
              </div>
            </div>

            {/* decorative circles */}
            <div className="absolute -z-10 -bottom-8 -right-8 h-40 w-40 rounded-full bg-ember/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logos strip ---------------- */
function TrustStrip() {
  const items = ["Ikoyi", "Lekki", "Victoria Island", "Banana Island", "Ikeja GRA", "Yaba"];
  return (
    <section className="border-y border-border/60 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Serving Lagos' finest neighborhoods
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {items.map((i) => (
            <div key={i} className="flex items-center gap-1.5 text-navy-soft text-sm">
              <MapPin className="h-3.5 w-3.5 text-ember" />
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services: {
  icon: typeof Wind;
  title: ServiceType;
  desc: string;
  image: string;
  tag: string;
}[] = [
  {
    icon: Wind,
    title: "HVAC Installation",
    desc: "Precision installs of split, cassette and central systems tuned for Lagos' climate.",
    image: serviceHvac,
    tag: "Cooling",
  },
  {
    icon: Snowflake,
    title: "Refrigeration Service",
    desc: "Repairs, gas top-ups and maintenance for premium fridges and freezers.",
    image: serviceFridge,
    tag: "Cold Chain",
  },
  {
    icon: Sofa,
    title: "Interior Solutions",
    desc: "Curated finishes, joinery and lighting design for modern residences.",
    image: serviceInterior,
    tag: "Design",
  },
  {
    icon: Wrench,
    title: "Home Maintenance",
    desc: "Annual care plans and on-demand technicians — plumbing, electrical and beyond.",
    image: heroInterior,
    tag: "Care",
  },
];


function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
              Services
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-navy-deep leading-[1.05]">
              Every discipline your home needs — under one roof.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A single, reliable partner for cooling, appliances and interiors —
              delivered with a craft-level standard from first quote to final walk-through.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
                  <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-navy-deep">
                    {s.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-ember-gradient grid place-items-center shadow-ember">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy-deep text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openBooking(s.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-ember transition group/link"
                    >
                      Book service
                      <ArrowUpRight className="h-4 w-4 text-ember transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                    <a
                      href={waLink(WA_MESSAGES[s.title])}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp us about ${s.title}`}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ember transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shop ---------------- */
const products = [
  {
    name: "Neptunx Cool Pro Split AC",
    tag: "1.5HP · Inverter",
    price: "₦520,000",
    image: productAc,
    icon: Wind,
  },
  {
    name: "Arcta French-Door Refrigerator",
    tag: "545L · Smart Display",
    price: "₦1,850,000",
    image: productFridge,
    icon: Snowflake,
  },
  {
    name: "Halo Front-Load Washer",
    tag: "10kg · Silent Drive",
    price: "₦780,000",
    image: productWasher,
    icon: Sparkles,
  },
  {
    name: "Lumen Convection Microwave",
    tag: "32L · Stainless",
    price: "₦260,000",
    image: productMicrowave,
    icon: Zap,
  },
];

function Shop() {
  return (
    <section id="shop" className="py-24 sm:py-32 bg-mist-gradient relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-ember/15 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-navy/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
                Curated Shop
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-navy-deep leading-[1.05]">
                Appliances, chosen with intent.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A tight collection of the most quietly excellent products — installed,
                configured, and supported by our team.
              </p>
            </div>
            <a
              href={waLink("Hi Neptunx, please share your full product catalog and current prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-ember transition"
            >
              View full catalog
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className="group rounded-3xl bg-card border border-border/60 overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-square bg-mist overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-6 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white grid place-items-center shadow-soft opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                    <ShoppingBag className="h-4 w-4 text-navy-deep" />
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 glass rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-navy-deep">
                    <p.icon className="h-3 w-3 text-ember" />
                    In stock
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </div>
                  <h3 className="mt-1 font-semibold text-navy-deep leading-snug">
                    {p.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="font-display text-2xl text-navy-deep">{p.price}</div>
                    <a
                      href={waLink(`Hi Neptunx, I'd like to order the ${p.name} (${p.price}). Please confirm availability and delivery.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy-deep text-primary-foreground px-3.5 py-2 text-xs font-medium hover:bg-ember transition"
                    >
                      Order
                      <ArrowRight className="h-3 w-3" />
                    </a>

                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */
const why = [
  { icon: ShieldCheck, title: "Fully insured technicians", desc: "Every visit is covered end-to-end, from arrival to sign-off." },
  { icon: Clock, title: "Same-day response", desc: "Priority dispatch across Lagos Island and Mainland." },
  { icon: Sparkles, title: "Craft-level standard", desc: "Clean installs, tidy sites, and finishes you'd be proud to show." },
  { icon: ShoppingBag, title: "Curated appliances", desc: "Only products we'd install in our own homes." },
];

function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-navy-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-40" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-ember/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-navy/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-ember-soft font-medium">
                Why Neptunx
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
                A quiet obsession with doing things{" "}
                <span className="italic text-ember-soft">properly.</span>
              </h2>
              <p className="mt-5 text-white/70 max-w-lg">
                We built Neptunx for homeowners who care about how their space works —
                not just how it looks. Every technician, every product, every callback
                is held to a single standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-5 py-3 font-medium shadow-ember hover:-translate-y-0.5 transition"
                >
                  Talk to a specialist
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={TEL}
                  className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-5 py-3 font-medium hover:bg-white/15 transition"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>

              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="rounded-2xl glass-dark p-5 h-full hover:bg-white/10 transition">
                  <div className="h-10 w-10 rounded-xl bg-ember-gradient grid place-items-center shadow-ember">
                    <w.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const reviews = [
  {
    quote:
      "Neptunx installed our whole AC system in a day. Clean, quiet, and the finish looks factory-perfect.",
    name: "Ada O.",
    role: "Homeowner · Ikoyi",
  },
  {
    quote:
      "Finally, a service company that shows up when they say they will. Our building trusts them now.",
    name: "Emeka U.",
    role: "Facility Manager · Lekki",
  },
  {
    quote:
      "Their interior team refined every detail. Our apartment feels ten years newer.",
    name: "Zainab A.",
    role: "Client · Banana Island",
  },
];

function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
              Client stories
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-navy-deep leading-[1.05]">
              The homes we serve, in their own words.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft h-full flex flex-col hover:shadow-elegant transition">
                <div className="flex gap-0.5 text-ember">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-2xl text-navy-deep leading-snug">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-ember-gradient grid place-items-center text-primary-foreground font-semibold shrink-0">
                    {r.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-navy-deep truncate">
                      {r.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden bg-navy-deep text-primary-foreground p-8 sm:p-14 shadow-elegant">
            <div className="absolute inset-0 grid-fade opacity-40" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ember/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h2 className="font-display text-4xl sm:text-6xl leading-[1.03]">
                  Ready to elevate <span className="italic text-ember-soft">your home?</span>
                </h2>
                <p className="mt-5 text-white/70 max-w-xl">
                  Book a site visit, request a quote, or talk to a specialist about
                  your project. We respond within the hour, seven days a week.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-6 py-3.5 font-medium shadow-ember hover:-translate-y-0.5 transition"
                  >
                    Book a visit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={waLink(WA_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-3.5 font-medium text-white hover:bg-white/15 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp us
                  </a>
                  <a
                    href={TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-3.5 font-medium text-white hover:bg-white/15 transition"
                  >
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </a>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "1hr", v: "Avg. response" },
                  { k: "7d", v: "Open all week" },
                  { k: "24/7", v: "Emergency line" },
                  { k: "12+", v: "Years experience" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl glass-dark p-5 hover:bg-white/10 transition"
                  >
                    <div className="font-display text-3xl text-white">{s.k}</div>
                    <div className="mt-1 text-xs text-white/60 uppercase tracking-widest">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />

              <div>
                <div className="font-semibold tracking-tight text-navy-deep">Neptunx</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Home Interiors
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Lagos' premium partner for HVAC, refrigeration, appliances and
              interior solutions.
            </p>
          </div>
          {[
            { h: "Services", l: ["HVAC", "Refrigeration", "Interiors", "Maintenance"] },
            { h: "Shop", l: ["Air conditioners", "Refrigerators", "Washers", "Microwaves"] },
            { h: "Company", l: ["About", "Contact", "Careers", "Warranty"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs uppercase tracking-[0.2em] text-navy-deep font-medium">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-ember transition">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Neptunx Home Interiors. All rights reserved.</div>
          <div>Made in Lagos.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Mobile floating actions ---------------- */
function MobileActions() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
      <button
        type="button"
        onClick={() => openBooking()}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-4 py-3.5 font-medium shadow-ember"
      >
        <Sparkles className="h-4 w-4" /> Book
      </button>
      <a
        href={waLink(WA_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center justify-center rounded-full bg-white text-navy-deep border border-border px-4 py-3.5 font-medium shadow-soft"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={TEL}
        aria-label="Call Neptunx"
        className="inline-flex items-center justify-center rounded-full bg-navy-deep text-primary-foreground px-4 py-3.5 font-medium shadow-elegant"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

/* ---------------- Booking modal ---------------- */
type BookingForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: ServiceType;
  date: string;
  time: string;
  notes: string;
};

const TIME_SLOTS = [
  "08:00 – 10:00",
  "10:00 – 12:00",
  "12:00 – 14:00",
  "14:00 – 16:00",
  "16:00 – 18:00",
];

function todayISO() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function BookingModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "HVAC Installation",
    date: "",
    time: TIME_SLOTS[0],
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent).detail as { service?: ServiceType } | undefined;
      setForm((f) => ({ ...f, service: detail?.service ?? f.service }));
      setSubmitted(false);
      setOpen(true);
    }
    window.addEventListener(BOOKING_EVENT, onOpen as EventListener);
    return () => window.removeEventListener(BOOKING_EVENT, onOpen as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  if (!open) return null;

  function update<K extends keyof BookingForm>(k: K, v: BookingForm[K]) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof BookingForm, string>> = {};
    if (!form.name.trim() || form.name.trim().length > 80) e.name = "Please enter your name.";
    if (!/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email or leave blank.";
    if (!form.address.trim() || form.address.trim().length > 160)
      e.address = "Please share your address / area.";
    if (!form.date) e.date = "Choose a preferred date.";
    if (!form.time) e.time = "Choose a time slot.";
    if (form.notes.length > 500) e.notes = "Notes are too long.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const message =
      `Neptunx booking request%0A` +
      `• Name: ${form.name}%0A` +
      `• Phone: ${form.phone}%0A` +
      (form.email ? `• Email: ${form.email}%0A` : "") +
      `• Service: ${form.service}%0A` +
      `• Date: ${form.date}%0A` +
      `• Time: ${form.time}%0A` +
      `• Address: ${form.address}` +
      (form.notes ? `%0A• Notes: ${form.notes}` : "");
    const url = `${WHATSAPP}?text=${message}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      <button
        type="button"
        aria-label="Close booking"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm animate-fade-in"
      />
      <div className="relative w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-elegant border border-border/60 max-h-[92vh] flex flex-col animate-rise">
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
              Book a service
            </div>
            <h3 id="booking-title" className="mt-1 font-display text-2xl text-navy-deep leading-tight truncate">
              Schedule your Neptunx visit
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="shrink-0 rounded-full p-2 text-navy-deep hover:bg-mist transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="rounded-2xl bg-mist p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-ember-gradient grid place-items-center shadow-ember">
                <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="mt-4 font-display text-2xl text-navy-deep">Request sent</h4>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                We opened WhatsApp with your details. A specialist will confirm
                your slot within the hour. You can also call us directly.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <a
                  href={TEL}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-primary-foreground px-4 py-2.5 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-navy-deep hover:bg-mist"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex-1 overflow-y-auto space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" error={errors.name}>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={form.name}
                  maxLength={80}
                  onChange={(e) => update("name", e.target.value)}
                  className="field-input"
                  placeholder="e.g. Ada Okafor"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="field-input"
                  placeholder="+234 8xx xxx xxxx"
                />
              </Field>
            </div>
            <Field label="Email (optional)" error={errors.email}>
              <input
                type="email"
                value={form.email}
                maxLength={120}
                onChange={(e) => update("email", e.target.value)}
                className="field-input"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Service" error={errors.service}>
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value as ServiceType)}
                className="field-input"
              >
                {SERVICE_TYPES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Preferred date" error={errors.date}>
                <input
                  type="date"
                  min={todayISO()}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="field-input"
                />
              </Field>
              <Field label="Time slot" error={errors.time}>
                <select
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="field-input"
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Address / area" error={errors.address}>
              <input
                type="text"
                value={form.address}
                maxLength={160}
                onChange={(e) => update("address", e.target.value)}
                className="field-input"
                placeholder="Street, estate, city (e.g. Lekki Phase 1)"
              />
            </Field>
            <Field label="Notes (optional)" error={errors.notes}>
              <textarea
                value={form.notes}
                maxLength={500}
                onChange={(e) => update("notes", e.target.value)}
                rows={3}
                className="field-input resize-none"
                placeholder="Anything we should know before the visit?"
              />
            </Field>

            <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 text-sm text-navy-deep hover:text-ember transition"
              >
                <Phone className="h-4 w-4" /> Prefer to call? {PHONE_DISPLAY}
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-gradient text-primary-foreground px-6 py-3 font-medium shadow-ember hover:-translate-y-0.5 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              By submitting, you agree to be contacted by Neptunx about your
              booking. We never share your details.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-navy-deep font-medium">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-ember">{error}</span>}
    </label>
  );
}

/* ---------------- Page ---------------- */
function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <Shop />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
      <MobileActions />
      <BookingModal />
    </main>
  );
}

