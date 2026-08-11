import { createFileRoute } from "@tanstack/react-router";

import { Nav, Footer } from "@/routes/index";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Neptunx Home Interiors" },
      { name: "description", content: "The terms and conditions governing the use of Neptunx Home Interiors website and services in Lagos, Nigeria." },
      { property: "og:title", content: "Terms & Conditions | Neptunx Home Interiors" },
      { property: "og:description", content: "The terms and conditions governing the use of Neptunx Home Interiors website and services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
            Legal
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06] text-ink">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-semibold text-ink text-lg">1. Acceptance of terms</h2>
              <p className="mt-3">
                By accessing or using the Neptunx Home Interiors website, booking a service, or purchasing a product, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">2. Services</h2>
              <p className="mt-3">
                Neptunx Home Interiors provides HVAC installation and repair, refrigeration services, appliance sales and repair, interior solutions, home maintenance, and related property services in Lagos, Nigeria. All services are subject to availability and scheduling confirmation.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">3. Quotes and pricing</h2>
              <p className="mt-3">
                Quotes provided via WhatsApp, phone, email, or in person are estimates based on the information supplied. Final pricing may vary after an on-site assessment. All prices are quoted in Nigerian Naira (NGN) unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">4. Bookings and cancellations</h2>
              <p className="mt-3">
                Appointments are confirmed once we agree on a date and time. If you need to reschedule or cancel, please notify us at least 24 hours in advance. We reserve the right to charge a cancellation fee for late cancellations or no-shows.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">5. Payments</h2>
              <p className="mt-3">
                Payment terms will be communicated before work begins. For product orders and selected services, a deposit may be required. Full payment is due upon completion unless a written agreement states otherwise.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">6. Warranties and liability</h2>
              <p className="mt-3">
                We stand behind the quality of our workmanship and the products we supply. Specific warranty terms are provided with each service or product. Our liability is limited to the value of the service or product purchased, and we are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">7. Customer responsibilities</h2>
              <p className="mt-3">
                Customers must provide safe access to the property, accurate information about the job, and disclose any conditions that may affect the work. Failure to do so may result in additional charges or rescheduling.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">8. Intellectual property</h2>
              <p className="mt-3">
                All content on this website, including text, images, logos, and design, is the property of Neptunx Home Interiors or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without permission.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">9. Governing law</h2>
              <p className="mt-3">
                These Terms & Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved through good-faith negotiation, and if necessary, the courts of Lagos State.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">10. Changes to these terms</h2>
              <p className="mt-3">
                We may update these Terms & Conditions at any time. Continued use of our website or services after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">11. Contact us</h2>
              <p className="mt-3">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p>Neptunx Home Interiors</p>
                <p>C7, 96 Nicon Town, Lekki, Lagos</p>
                <p>Block C, 104 Complex, Ogijo Bus Stop, Ikorodu</p>
                <p>Phone: <a href="tel:+2348149024653" className="text-ink hover:text-ember transition">+234 814 902 4653</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
