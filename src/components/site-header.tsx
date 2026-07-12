import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={site.logo}
            alt="TorqMax logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-contain bg-black/40 p-0.5 ring-1 ring-border"
          />
          <div className="leading-tight">
            <div className="font-display font-bold text-xl tracking-wider text-foreground">
              TORQ<span className="text-accent">MAX</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Premium Engine Oil
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-4 py-2 text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="ml-4 inline-flex items-center rounded-md bg-[image:var(--gradient-steel)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition"
          >
            Call Us
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[image:var(--gradient-steel)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}