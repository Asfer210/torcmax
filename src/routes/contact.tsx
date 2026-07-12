import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TorqMax — Bengaluru, Karnataka" },
      { name: "description", content: "Contact TorqMax Lubricants in Bengaluru. Call +91 85472 09583 or email tormax@gmail.com for sales & distribution." },
      { property: "og:title", content: "Contact TorqMax" },
      { property: "og:description", content: "TorqMax — Bengaluru, Karnataka. Sales, distribution and support enquiries." },
      { property: "og:url", content: "https://torcmax.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://torcmax.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-[color:var(--surface)]/30">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Talk to us</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">Let's get your engine running right.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're a rider looking for the right grade, a workshop wanting to stock TorqMax, or a distributor ready to partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-3 gap-6">
        <ContactCard
          icon={Phone}
          label="Call us"
          value={site.phone}
          href={`tel:${site.phoneRaw}`}
          hint="Mon – Sat, 9am to 7pm IST"
        />
        <ContactCard
          icon={Mail}
          label="Email us"
          value={site.email}
          href={`mailto:${site.email}`}
          hint="We respond within 24 hours"
        />
        <ContactCard
          icon={MessageCircle}
          label="WhatsApp"
          value="Chat with sales"
          href={`https://wa.me/${site.phoneRaw.replace("+", "")}`}
          hint="Fastest way to reach us"
        />
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl border border-border/60 bg-[color:var(--surface)]/40 p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Send a message</h2>
            <p className="mt-3 text-sm text-muted-foreground">Fill in the form and we'll get back to you shortly.</p>

            <form
              className="mt-8 space-y-4"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Phone" name="phone" placeholder="+91 " required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[image:var(--gradient-steel)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Visit us</h2>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-lg font-bold text-foreground">TorqMax Lubricants</div>
                <div className="text-muted-foreground">{site.address}</div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border/60 aspect-square">
              <iframe
                title="TorqMax location"
                src="https://www.google.com/maps?q=5th+Main+Road+M+S+Ramaiah+Enclave+Nagasandra+Bengaluru+560073&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  hint,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  hint: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-border/60 bg-background/40 p-8 hover:border-accent/60 transition"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[image:var(--gradient-steel)] shadow-[var(--shadow-glow)]">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-xl font-bold text-foreground group-hover:text-accent transition">{value}</div>
      <div className="mt-2 text-xs text-muted-foreground">{hint}</div>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}