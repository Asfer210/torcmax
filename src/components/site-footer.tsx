import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[color:var(--surface)]/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={site.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-md object-contain bg-black/40 p-0.5 ring-1 ring-border" />
            <div>
              <div className="font-display font-bold text-lg tracking-wider">TORQ<span className="text-accent">MAX</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Engineered in Palakkad, Kerala. TorqMax delivers premium engine oils that keep Indian engines running longer, cooler and more efficient.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href={`tel:${site.phoneRaw}`}>{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} TorqMax Lubricants. All rights reserved.</div>
          <div className="uppercase tracking-[0.25em]">Power • Performance • Protection</div>
        </div>
      </div>
    </footer>
  );
}