import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          data-ocid="header.link"
        >
          <img
            src="/assets/generated/ak-logo-transparent.dim_200x200.png"
            alt="AK Thumbnail Studio Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <span className="font-black text-brand-red text-lg uppercase tracking-tight">
              AK
            </span>
            <span className="font-bold text-brand-dark text-sm uppercase tracking-wider ml-1">
              Thumbnail Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="header.link"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-red ${
                pathname === link.to ? "text-brand-red" : "text-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden md:inline-flex bg-brand-red hover:bg-red-700 text-white font-bold uppercase text-xs tracking-wide rounded-full px-5"
            data-ocid="header.primary_button"
          >
            <Link to="/order">Get Your Custom Thumbnail</Link>
          </Button>
          <button
            type="button"
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="header.link"
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold uppercase tracking-wide py-1 ${
                pathname === link.to ? "text-brand-red" : "text-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-brand-red hover:bg-red-700 text-white font-bold uppercase text-xs tracking-wide rounded-full mt-2"
          >
            <Link to="/order" onClick={() => setOpen(false)}>
              Order Now
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
