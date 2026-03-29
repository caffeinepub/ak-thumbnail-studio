import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/assets/generated/ak-logo-transparent.dim_200x200.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-black text-white text-lg uppercase">
              AK Thumbnail Studio
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional YouTube thumbnail design that helps creators grow their
            channels and boost click-through rates.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-brand-red transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Gallery", to: "/gallery" },
              { label: "Pricing", to: "/pricing" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Order Now", to: "/order" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 ak.thumbnailstudio@gmail.com</li>
            <li>📱 WhatsApp: +91 98765 43210</li>
            <li>📍 India</li>
          </ul>
          <p className="text-xs text-gray-500 mt-6">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noreferrer"
              className="text-brand-yellow hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
