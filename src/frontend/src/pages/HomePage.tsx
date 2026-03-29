import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Image,
  Layout,
  Share2,
  Star,
} from "lucide-react";
import { useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";

const services = [
  {
    id: "thumbnail",
    icon: <Image size={28} />,
    title: "Thumbnail Design",
    desc: "Eye-catching custom thumbnails that boost your CTR and attract more views.",
  },
  {
    id: "banner",
    icon: <Layout size={28} />,
    title: "YouTube Banner",
    desc: "Professional channel art and banners that brand your YouTube presence.",
  },
  {
    id: "social",
    icon: <Share2 size={28} />,
    title: "Social Media Post",
    desc: "Vibrant social media graphics for Instagram, Facebook, and Twitter.",
  },
  {
    id: "logo",
    icon: <Star size={28} />,
    title: "Logo Design",
    desc: "Bold, memorable logos that establish your brand identity.",
  },
];

const testimonials = [
  {
    id: "rs",
    name: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    text: "My CTR jumped from 3% to 9% after using AK Thumbnail Studio! The quality is absolutely amazing. Highly recommended!",
    channel: "TechWithRahul",
  },
  {
    id: "pv",
    name: "Priya Verma",
    initials: "PV",
    rating: 5,
    text: "Delivered within 24 hours and exactly what I wanted. The team understood my vision perfectly. Will order again!",
    channel: "CookingWithPriya",
  },
  {
    id: "ak",
    name: "Amit Kumar",
    initials: "AK",
    rating: 5,
    text: "Best thumbnail designer in India! My gaming channel grew 50% in views after switching to AK Studio designs.",
    channel: "GamingWithAmit",
  },
];

const faqs = [
  {
    id: "delivery",
    q: "How fast do you deliver thumbnails?",
    a: "We offer 24-hour and 48-hour delivery options. For custom requirements, we discuss timelines directly with you.",
  },
  {
    id: "revisions",
    q: "How many revisions are included?",
    a: "Basic plan includes 2 revisions, Standard includes 3, and Premium includes unlimited revisions until you're 100% happy.",
  },
  {
    id: "payment",
    q: "What payment methods do you accept?",
    a: "We accept UPI, Paytm, and PayPal for your convenience.",
  },
  {
    id: "reference",
    q: "Do I need to provide reference images?",
    a: "Not mandatory, but reference images help us understand your style better. You can also describe your vision in detail.",
  },
  {
    id: "commercial",
    q: "Can I use the thumbnails commercially?",
    a: "Yes! All thumbnails are created exclusively for you with full commercial usage rights.",
  },
];

const starKeys = ["s1", "s2", "s3", "s4", "s5"];

function FAQItem({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-brand-dark hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        data-ocid="faq.toggle"
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
          id={`faq-${id}`}
          className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-100"
        >
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]"
        data-ocid="hero.section"
      >
        <div
          className="flex flex-col justify-center px-8 lg:px-16 py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0B1020 0%, #1F2937 60%, #111827 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10"
            style={{
              background: "linear-gradient(135deg, #E53935, #F97316)",
              clipPath: "polygon(100% 0, 100% 100%, 0 0)",
            }}
          />
          <div className="relative z-10">
            <span className="inline-block bg-brand-red/20 text-brand-yellow text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              🔥 #1 Thumbnail Design Service
            </span>
            <h1 className="font-black text-5xl lg:text-6xl uppercase leading-tight text-white mb-2">
              Custom Thumbnails
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #F97316, #FBBF24)",
                }}
              >
                That Sell!
              </span>
            </h1>
            <p className="text-gray-400 text-sm mt-3 italic mb-6">
              Aapke Liye Perfect Thumbnail Banaye
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-brand-orange hover:bg-orange-600 text-white font-bold uppercase tracking-wide rounded-full px-6 py-3"
                data-ocid="hero.secondary_button"
              >
                <Link to="/gallery">Explore Portfolio</Link>
              </Button>
              <Button
                asChild
                className="bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-full px-6 py-3"
                data-ocid="hero.primary_button"
              >
                <Link to="/order">Order Now!</Link>
              </Button>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="text-center">
                <div className="font-black text-2xl text-brand-yellow">
                  500+
                </div>
                <div className="text-xs text-gray-400 uppercase">
                  Thumbnails
                </div>
              </div>
              <div className="text-center">
                <div className="font-black text-2xl text-brand-yellow">
                  200+
                </div>
                <div className="text-xs text-gray-400 uppercase">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="font-black text-2xl text-brand-yellow">
                  4.9★
                </div>
                <div className="text-xs text-gray-400 uppercase">Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center relative overflow-hidden min-h-72"
          style={{
            background:
              "linear-gradient(135deg, #E53935 0%, #F97316 50%, #FBBF24 100%)",
          }}
        >
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 w-full h-1/3"
              style={{ background: "rgba(229,57,53,0.4)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-2/3 h-2/3"
              style={{
                background: "rgba(251,191,36,0.3)",
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
          <img
            src="/assets/generated/hero-illustration.dim_800x600.png"
            alt="AK Thumbnail Studio"
            className="relative z-10 max-w-md w-full object-contain p-8 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Services */}
      <section
        className="bg-brand-beige py-16 px-4"
        data-ocid="services.section"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl uppercase text-brand-dark">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                data-ocid={`services.card.${i + 1}`}
              >
                <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-red">
                  {s.icon}
                </div>
                <h3 className="font-bold text-brand-dark uppercase text-sm tracking-wide mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-4" data-ocid="portfolio.section">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl uppercase text-brand-dark">
              Our Portfolio
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-2 rounded" />
            <p className="text-gray-500 mt-3 text-sm">
              See what we can create for your channel
            </p>
          </div>
          <PortfolioGrid />
          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-full px-8"
              data-ocid="portfolio.primary_button"
            >
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-brand-beige py-16 px-4"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl uppercase text-brand-dark">
              What Clients Say
            </h2>
            <div className="w-16 h-1 bg-brand-yellow mx-auto mt-2 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-card"
                data-ocid={`testimonials.card.${i + 1}`}
              >
                <div className="flex gap-1 mb-3">
                  {starKeys.slice(0, t.rating).map((k) => (
                    <Star
                      key={k}
                      size={16}
                      className="fill-brand-yellow text-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-brand-dark">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.channel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(90deg, #E53935, #F97316, #FBBF24)",
        }}
        data-ocid="cta.section"
      >
        <h2 className="font-black text-3xl md:text-4xl uppercase text-white mb-3">
          Get Your Thumbnail Today!
        </h2>
        <p className="text-white/80 mb-6 text-sm">
          Professional thumbnails that skyrocket your views and CTR
        </p>
        <Button
          asChild
          className="bg-white text-brand-red hover:bg-gray-100 font-black uppercase tracking-wide rounded-full px-10 py-3 text-sm"
          data-ocid="cta.primary_button"
        >
          <Link to="/order">Order Now</Link>
        </Button>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" data-ocid="faq.section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl uppercase text-brand-dark">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <FAQItem key={f.id} id={f.id} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
