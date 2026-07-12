import { createFileRoute } from "@tanstack/react-router";
import { Factory, ShieldCheck, Users, Sparkles } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TorqMax — Premium Engine Oil from Bengaluru" },
      { name: "description", content: "TorqMax is a Bengaluru-based lubricants brand crafting premium engine oils for India's two-wheeler and passenger vehicle market." },
      { property: "og:title", content: "About TorqMax" },
      { property: "og:description", content: "Premium engine oils, engineered in Bengaluru, Karnataka." },
      { property: "og:url", content: "https://torcmax.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://torcmax.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <img src={patternBg} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="container-x relative py-24 md:py-32 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Our Story</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold leading-tight">
            Built in Bengaluru. <br /> Built for Indian engines.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            TorqMax was born from a simple belief — that riders across Karnataka and beyond deserve a premium engine oil brand that understands local roads, local heat, and the way Indian bikes are actually ridden.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To deliver engine oils that don't just meet international standards — they exceed the demands of everyday Indian riding. Traffic jams, monsoon downpours, highway sprints. Our formulations are tuned for all of it.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Promise</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every bottle of TorqMax is blended from 100% virgin base stocks and world-class additive packages. No shortcuts. No blended re-refined oil. Just clean, consistent performance you can feel from the first start.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-[color:var(--surface)]/30">
        <div className="container-x py-20 grid md:grid-cols-4 gap-8">
          {[
            { icon: Factory, k: "Bengaluru", v: "Manufacturing base" },
            { icon: ShieldCheck, k: "API SL", v: "Certified formulations" },
            { icon: Sparkles, k: "100%", v: "Virgin base oil" },
            { icon: Users, k: "Karnataka", v: "Growing distributor network" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <s.icon className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-4 font-display text-3xl font-bold text-gradient-steel">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Values</div>
          <h2 className="mt-3 font-display text-4xl font-bold">What we stand for</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: "Quality first", d: "Every batch is lab-tested before it leaves our facility." },
              { t: "Honest formulations", d: "We publish real specs — API SL, JASO MA2. No marketing fluff." },
              { t: "Rider focus", d: "Built for real machines: commuters, cruisers, sport bikes." },
            ].map((v) => (
              <div key={v.t} className="rounded-lg border border-border/60 bg-background/40 p-6">
                <div className="font-display text-lg font-bold">{v.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}