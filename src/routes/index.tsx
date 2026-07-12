import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Gauge, Droplets, Wrench, Award, Factory } from "lucide-react";
import heroImg from "@/assets/hero-engine.jpg";
import { products, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1200} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="container-x relative py-28 md:py-40 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Engineered in Palakkad
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Unleash the <span className="text-gradient-gold">Torque.</span>
              <br />
              Protect the <span className="text-gradient-steel">Engine.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              TorqMax premium 4T engine oils are formulated for Indian roads — delivering ultimate protection, enhanced performance and a smoother ride, kilometre after kilometre.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-steel)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border/80 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-secondary transition"
              >
                Become a Distributor
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "API", v: "SL" },
                { k: "JASO", v: "MA2" },
                { k: "GRADE", v: "20W-40" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-accent/70 pl-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.k}</div>
                  <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-8 bg-[image:var(--gradient-steel)] blur-3xl opacity-20 rounded-full" />
            <img
              src={products[0].image}
              alt={products[0].name}
              className="relative max-h-[560px] w-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-x py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Ultimate Protection", body: "Advanced anti-wear additives shield critical engine parts under extreme load and heat." },
            { icon: Gauge, title: "Enhanced Performance", body: "Sharper throttle response and stable power delivery across every RPM band." },
            { icon: Droplets, title: "Longer Life", body: "Superior thermal stability means cleaner engines, longer drain intervals and better mileage." },
          ].map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-lg border border-border/60 bg-[color:var(--surface)]/40 p-8 hover:border-accent/60 transition">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[image:var(--gradient-steel)] opacity-10 group-hover:opacity-20 transition" />
              <f.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wider">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="relative py-24 border-y border-border/60 bg-[color:var(--surface)]/30">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">The Range</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Built for Every Ride</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-accent">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                to="/products"
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-8 flex gap-6 items-center hover:border-accent/50 transition"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition ${p.color === "red" ? "bg-gradient-to-br from-[#c9302c]/10 to-transparent" : "bg-gradient-to-br from-primary/15 to-transparent"}`} />
                <img src={p.image} alt={p.name} className="relative h-56 w-auto drop-shadow-2xl" />
                <div className="relative flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.variant}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
                  <div className="mt-1 font-display text-3xl font-bold text-gradient-steel">{p.grade}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{p.spec}</div>
                  <p className="mt-4 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent">The TorqMax Difference</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Formulated by riders. <br /> Trusted by mechanics.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Every TorqMax bottle is blended from virgin base oils and premium additive packs — meeting API SL and JASO MA2 standards for four-stroke petrol engines.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { icon: Factory, t: "Made in Kerala", d: "Manufactured with strict quality control at our Palakkad facility." },
              { icon: Award, t: "Certified Grade", d: "API SL & JASO MA2 compliant — meets modern OEM requirements." },
              { icon: Wrench, t: "Workshop Tested", d: "Field-validated by service technicians across South India." },
            ].map((x) => (
              <div key={x.t} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[image:var(--gradient-steel)]">
                  <x.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold">{x.t}</div>
                  <div className="text-sm text-muted-foreground">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/60">
          <img src={heroImg} alt="Engine detail" width={1200} height={1200} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Inside every drop</div>
            <div className="mt-2 font-display text-2xl font-bold">Advanced additive chemistry</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-[image:var(--gradient-steel)] p-10 md:p-14">
          <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Ready to feel the difference?</h3>
              <p className="mt-2 text-primary-foreground/80 max-w-lg">Call our team or drop an email — we'll help you find the right TorqMax grade for your engine.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${site.phoneRaw}`} className="rounded-md bg-background/90 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-background transition">{site.phone}</a>
              <Link to="/contact" className="rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10 transition">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
