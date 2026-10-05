import { Link, useLocation } from "react-router-dom";
import { Mark, Wordmark } from "./Logo";

export function WebsiteNav() {
  const loc = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programmes", label: "Programmes" },
    { to: "/impact", label: "Impact" },
    { to: "/partners", label: "Partners" },
    { to: "/contact", label: "Contact" },
    { to: "/studio", label: "AI Studio" },
  ];
  return (
    <nav className="no-print fixed left-0 right-0 top-0 z-50 border-b border-ink/20 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-2.5 text-ink hover:opacity-70 transition-opacity">
          <Mark className="h-7 w-auto" stroke={16} />
          <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em]">MPHO MADIKWANE</span>
        </Link>
        <div className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-opacity md:inline-block ${
                loc.pathname === l.to ? "text-ink opacity-100" : "text-ink/40 hover:text-ink hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/20 bg-paper px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-ink">
              <Mark className="h-10 w-auto" stroke={14} />
              <Wordmark className="text-xs" />
            </Link>
            <p className="serif-i mt-6 max-w-xs text-xl opacity-70">Social impact. Community development. Skills. Partnerships.</p>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-6">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/" className="opacity-60 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="opacity-60 hover:opacity-100">About</Link></li>
              <li><Link to="/programmes" className="opacity-60 hover:opacity-100">Programmes</Link></li>
              <li><Link to="/impact" className="opacity-60 hover:opacity-100">Impact</Link></li>
              <li><Link to="/partners" className="opacity-60 hover:opacity-100">Partners</Link></li>
              <li><Link to="/studio" className="text-earth font-bold opacity-90 hover:opacity-100">AI Studio (MacBook Neo)</Link></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-10">
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/contact" className="opacity-60 hover:opacity-100">Contact</Link></li>
              <li><span className="opacity-60">Johannesburg, South Africa</span></li>
              <li><span className="opacity-60">hello@mphomadikwane.org</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 md:flex-row md:items-end">
          <p className="eyebrow opacity-40">© 2026 Mpho Madikwane. All rights reserved.</p>
          <p className="display text-2xl md:text-4xl">From social insight to opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
