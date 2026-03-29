import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  RefreshCw,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  { id: "1thumb", icon: <Check size={18} />, text: "1 Custom Thumbnail" },
  { id: "24h", icon: <Clock size={18} />, text: "24-Hour Delivery" },
  { id: "2rev", icon: <RefreshCw size={18} />, text: "2 Free Revisions" },
  { id: "hd", icon: <Zap size={18} />, text: "HD Quality (1280×720)" },
  { id: "comm", icon: <Shield size={18} />, text: "Full Commercial Rights" },
  { id: "orig", icon: <Check size={18} />, text: "100% Original Design" },
];

const bundles = [
  {
    id: "b3",
    qty: 3,
    price: "₹550",
    per: "₹183/thumb",
    save: "Save ₹50",
  },
  {
    id: "b5",
    qty: 5,
    price: "₹900",
    per: "₹180/thumb",
    save: "Save ₹100",
  },
];

const faqs = [
  {
    id: "upgrade",
    q: "Can I order more than one thumbnail?",
    a: "Yes! Check our bundle deals below for discounted rates on 3 or 5 thumbnails.",
  },
  {
    id: "satisfy",
    q: "What if I'm not satisfied?",
    a: "We offer 2 free revisions. We'll tweak until you're happy.",
  },
  {
    id: "bulk",
    q: "Is there a bulk discount?",
    a: "Yes! Contact us for orders of 10+ thumbnails for special pricing.",
  },
  {
    id: "pay",
    q: "How do I pay?",
    a: "We accept UPI, Paytm, and GPay. Pay via the QR code on the order page and enter your transaction ID to confirm.",
  },
];

function FAQItem({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-brand-dark hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`pricing-faq-${id}`}
        data-ocid="pricing.toggle"
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-brand-red flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-brand-red flex-shrink-0" />
        )}
      </button>
      {open && (
        <div
          id={`pricing-faq-${id}`}
          className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-100"
        >
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-black text-4xl uppercase text-brand-dark">
            Simple Pricing
          </h1>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          <p className="text-gray-500 mt-3 text-sm">
            One flat price. No hidden fees. Fast delivery.
          </p>
        </div>

        {/* Hero pricing block */}
        <div
          className="rounded-3xl overflow-hidden shadow-glow border-4 border-brand-red mb-10"
          data-ocid="pricing.card.1"
        >
          <div
            className="py-3 text-center text-white text-xs font-black uppercase tracking-widest"
            style={{
              background: "linear-gradient(90deg, #E53935, #F97316, #FBBF24)",
            }}
          >
            🔥 Best Value — Most Popular Choice
          </div>
          <div className="bg-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Price */}
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-1">
                  Per Thumbnail
                </p>
                <div className="flex items-end gap-2">
                  <span className="font-black text-7xl text-brand-red leading-none">
                    ₹200
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Delivered in{" "}
                  <strong className="text-brand-dark">24 hours</strong>
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 md:ml-12">
                {features.map((f) => (
                  <li
                    key={f.id}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="text-green-500 flex-shrink-0">
                      {f.icon}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3">
                <Button
                  asChild
                  className="bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-wide rounded-full px-10 py-4 text-base"
                  data-ocid="pricing.primary_button.1"
                >
                  <Link to="/order">Order Now →</Link>
                </Button>
                <p className="text-xs text-gray-400">Pay ₹200 via UPI/GPay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle deals */}
        <div className="mb-14">
          <h2 className="font-black text-xl uppercase text-brand-dark text-center mb-6">
            Bundle Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bundles.map((b, i) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 flex flex-col gap-4"
                data-ocid={`pricing.card.${i + 2}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-2xl text-brand-dark">
                      {b.qty} Thumbnails
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{b.per}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-3xl text-brand-red">
                      {b.price}
                    </p>
                    <span className="inline-block text-xs font-bold text-green-600 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 mt-1">
                      {b.save}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-brand-dark hover:bg-gray-800 text-white font-bold uppercase tracking-wide rounded-full w-full"
                  data-ocid={`pricing.primary_button.${i + 2}`}
                >
                  <Link to="/order">Order Bundle</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            For bundles, pay the total amount and mention quantity in your order
            details.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-black text-2xl uppercase text-brand-dark">
              Pricing FAQ
            </h2>
            <div className="w-12 h-1 bg-brand-orange mx-auto mt-2 rounded" />
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <FAQItem key={f.id} id={f.id} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
