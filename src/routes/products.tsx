import { createFileRoute } from "@tanstack/react-router";
import { Check, Fuel, Bike } from "lucide-react";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — TorqMax Premium Engine Oil" },
      { name: "description", content: "Explore the TorqMax range of 4T premium engine oils, 20W-40 API SL / JASO MA2, engineered for Indian two-wheelers." },
      { property: "og:title", content: "TorqMax Products" },
      { property: "og:description", content: "The TorqMax range: 20W-40 4T engine oils built for power, performance and protection." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-[color:var(--surface)]/30">
        <div className="container-x py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Our Range</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">The TorqMax Range</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Two premium 20W-40 formulations, engineered for four-stroke petrol engines. Both meet API SL and JASO MA2 — pick the finish that suits your ride.
          </p>
        </div>
      </section>

      <section className="container-x py-20 space-y-24">
        {products.map((p, idx) => (
          <div key={p.slug} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className={`absolute -inset-6 blur-3xl opacity-25 rounded-full ${p.color === "red" ? "bg-[#c9302c]" : "bg-primary"}`} />
              <div className="relative flex justify-center rounded-2xl border border-border/60 bg-background/40 py-10">
                <img src={p.image} alt={p.name} className="h-[520px] w-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]" />
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">{p.variant}</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">{p.name}</h2>
              <div className="mt-2 font-display text-6xl font-bold text-gradient-steel">{p.grade}</div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                {p.spec}
              </div>
              <p className="mt-6 text-muted-foreground max-w-md">{p.tagline}</p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <Spec icon={Fuel} label="Volume" value={p.size} />
                <Spec icon={Bike} label="Engine" value="4T" />
                <Spec label="For" value="Petrol" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl border border-border/60 bg-[color:var(--surface)]/40 p-10 text-center">
          <h3 className="font-display text-3xl font-bold">Bulk orders & distributor enquiries</h3>
          <p className="mt-3 text-muted-foreground">Reach out to our Palakkad office for pricing and partnership opportunities.</p>
        </div>
      </section>
    </div>
  );
}

function Spec({ icon: Icon, label, value }: { icon?: typeof Fuel; label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/60 bg-background/40 p-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {Icon && <Icon className="h-3.5 w-3.5" />} {label}
      </div>
      <div className="mt-1 font-display font-bold text-lg">{value}</div>
    </div>
  );
}