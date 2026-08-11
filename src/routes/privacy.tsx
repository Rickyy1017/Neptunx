import { createFileRoute } from "@tanstack/react-router";

import { Nav, Footer } from "@/routes/index";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Neptunx Home Interiors" },
      { name: "description", content: "How Neptunx Home Interiors collects, uses, and protects your personal information when you use our website and services in Lagos, Nigeria." },
      { property: "og:title", content: "Privacy Policy | Neptunx Home Interiors" },
      { property: "og:description", content: "How Neptunx Home Interiors collects, uses, and protects your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] text-ember font-medium">
            Legal
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06] text-ink">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-semibold text-ink text-lg">1. Introduction</h2>
              <p className="mt-3">
                Neptunx Home Interiors ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, request a quote, book a service, or interact with us through WhatsApp, phone, or email.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">2. Information we collect</h2>
              <p className="mt-3">
                We may collect the following types of information:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li><strong>Contact details:</strong> name, phone number, email address, and property address.</li>
                <li><strong>Service information:</strong> details about your home, appliance model, service requested, and preferred appointment date.</li>
                <li><strong>Communication records:</strong> messages sent via WhatsApp, email, or phone calls.</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, and pages visited on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">3. How we use your information</h2>
              <p className="mt-3">
                We use your information to:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Respond to enquiries and provide quotes.</li>
                <li>Schedule, deliver, and follow up on services.</li>
                <li>Process payments and issue invoices.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Send service updates, maintenance reminders, or promotional messages where you have consented.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">4. Sharing your information</h2>
              <p className="mt-3">
                We do not sell your personal data. We only share information with trusted third parties when necessary to deliver our services, such as payment processors, field technicians assigned to your job, or legal authorities when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">5. Data security</h2>
              <p className="mt-3">
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">6. Your rights</h2>
              <p className="mt-3">
                You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">7. Cookies and analytics</h2>
              <p className="mt-3">
                Our website may use cookies and similar technologies to understand visitor behaviour and improve performance. You can adjust your browser settings to refuse cookies, though some features may not function correctly.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">8. Changes to this policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. The latest version will always be available on this page.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-ink text-lg">9. Contact us</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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
