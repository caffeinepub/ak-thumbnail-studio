import { Award, CheckCircle, Clock, Star, Users } from "lucide-react";

const stats = [
  {
    id: "thumbnails",
    icon: <Award size={28} />,
    value: "500+",
    label: "Thumbnails Delivered",
  },
  {
    id: "clients",
    icon: <Users size={28} />,
    value: "200+",
    label: "Happy Clients",
  },
  {
    id: "rating",
    icon: <Star size={28} />,
    value: "4.9★",
    label: "Average Rating",
  },
  {
    id: "exp",
    icon: <Clock size={28} />,
    value: "2 Years",
    label: "Experience",
  },
];

const reasons = [
  { id: "fast", text: "Fast delivery — 24-hour turnaround available" },
  { id: "quality", text: "High-quality, professional designs every time" },
  { id: "revisions", text: "Unlimited revisions until you're 100% satisfied" },
  { id: "price", text: "Affordable pricing for every budget" },
  { id: "ctr", text: "Deep understanding of YouTube algorithms & CTR" },
  { id: "original", text: "100% original, custom designs — no templates" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0B1020 0%, #1F2937 100%)",
        }}
      >
        <h1 className="font-black text-4xl uppercase text-white">
          About AK Thumbnail Studio
        </h1>
        <div
          className="w-16 h-1 mx-auto mt-2 rounded"
          style={{ background: "linear-gradient(90deg, #E53935, #FBBF24)" }}
        />
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
          We are a passionate team of creative designers helping YouTubers and
          content creators grow their channels with stunning, high-converting
          thumbnails.
        </p>
      </section>

      {/* Studio image + intro */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="/assets/generated/hero-illustration.dim_800x600.png"
              alt="AK Thumbnail Studio Workspace"
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-black text-3xl uppercase text-brand-dark mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              AK Thumbnail Studio was founded with a simple mission: help
              YouTubers stand out in a crowded platform. With millions of videos
              uploaded daily, a compelling thumbnail is the difference between
              getting clicked or getting ignored.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our designers combine psychological insights, color theory, and
              YouTube best practices to create thumbnails that don't just look
              great — they convert. Whether you're a gaming creator, cooking
              channel, or finance educator, we've got the expertise to boost
              your CTR.
            </p>
            <ul className="flex flex-col gap-3">
              {reasons.map((r) => (
                <li
                  key={r.id}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  {r.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #E53935, #F97316, #FBBF24)",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <div key={s.id} data-ocid={`about.card.${i + 1}`}>
                <div className="flex justify-center mb-2 opacity-80">
                  {s.icon}
                </div>
                <div className="font-black text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wide opacity-80 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
