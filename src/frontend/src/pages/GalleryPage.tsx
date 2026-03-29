import { useState } from "react";
import PortfolioGrid, { thumbnails } from "../components/PortfolioGrid";

const categories = [
  "All",
  "Gaming",
  "Motivation",
  "Tech",
  "Food",
  "Finance",
  "Fitness",
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? thumbnails
      : thumbnails.filter((t) => t.category === active);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-black text-4xl uppercase text-brand-dark">
            Our Portfolio
          </h1>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded" />
          <p className="text-gray-500 mt-3 text-sm">
            Browse our collection of professional thumbnails
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              data-ocid="gallery.tab"
              className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                active === cat
                  ? "bg-brand-red text-white shadow-glow"
                  : "bg-gray-100 text-gray-600 hover:bg-brand-red/10 hover:text-brand-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <PortfolioGrid items={filtered} showAll />
        ) : (
          <div
            className="text-center py-16 text-gray-400"
            data-ocid="gallery.empty_state"
          >
            No thumbnails in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
