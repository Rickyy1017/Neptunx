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
const partners = [
  { name: "LG", logo: lgLogo },
  { name: "Hisense", logo: hisenseLogo },
  { name: "Panasonic", logo: panasonicLogo },
  { name: "Midea", logo: mideaLogo },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="py-16 sm:py-20 bg-background border-y border-border/60 relative overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-64 w-[640px] max-w-full rounded-full bg-ember/5 dark:bg-ember/[0.02] blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
              Official partners
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl text-ink">
              We partner with the brands we trust.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className="group relative h-28 sm:h-32 rounded-2xl border border-border/70 bg-card grid place-items-center px-6 shadow-soft dark:shadow-none hover:shadow-elegant dark:hover:shadow-[0_20px_50px_-20px_oklch(0.6_0.16_250/0.15)] animate-logo-lift hover:[animation-play-state:paused] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 900}ms` }}
              >
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ember/10 to-transparent opacity-0 animate-fade-pulse group-hover:opacity-100 dark:from-ember/[0.03] dark:group-hover:opacity-60"
                  style={{ animationDelay: `${i * 900}ms` }}
                />
                <span
                  className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-12 bg-white/40 blur-xl opacity-0 animate-logo-sheen dark:hidden"
                  style={{ animationDelay: `${i * 900}ms` }}
                />
                <img
                  src={p.logo}
                  alt={`${p.name} official partner logo`}
                  loading="lazy"
                  className="relative max-h-8 sm:max-h-10 w-auto max-w-[75%] object-contain animate-logo-alive group-hover:[animation-play-state:paused] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${i * 900}ms` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
