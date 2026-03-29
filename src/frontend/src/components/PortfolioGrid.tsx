import { Eye, X } from "lucide-react";
import { useState } from "react";

const thumbnails = [
  {
    src: "/assets/generated/thumb-gaming.dim_400x225.jpg",
    label: "Gaming",
    category: "Gaming",
  },
  {
    src: "/assets/generated/thumb-motivation.dim_400x225.jpg",
    label: "Motivation",
    category: "Motivation",
  },
  {
    src: "/assets/generated/thumb-tech.dim_400x225.jpg",
    label: "Tech Review",
    category: "Tech",
  },
  {
    src: "/assets/generated/thumb-cooking.dim_400x225.jpg",
    label: "Cooking",
    category: "Food",
  },
  {
    src: "/assets/generated/thumb-finance.dim_400x225.jpg",
    label: "Finance",
    category: "Finance",
  },
  {
    src: "/assets/generated/thumb-fitness.dim_400x225.jpg",
    label: "Fitness",
    category: "Fitness",
  },
];

export { thumbnails };

interface PortfolioGridProps {
  items?: typeof thumbnails;
  showAll?: boolean;
}

export default function PortfolioGrid({
  items = thumbnails,
  showAll = false,
}: PortfolioGridProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const displayed = showAll ? items : items.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayed.map((thumb) => (
          <button
            key={thumb.src}
            type="button"
            className="thumb-card relative rounded-xl overflow-hidden shadow-card cursor-pointer group text-left"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightbox(thumb.src)}
            aria-label={`View ${thumb.label} thumbnail`}
            data-ocid="gallery.item.1"
          >
            <img
              src={thumb.src}
              alt={thumb.label}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="thumb-overlay absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <Eye size={32} className="text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                View
              </span>
              <span className="text-brand-yellow text-xs font-semibold">
                {thumb.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          aria-label="Image preview lightbox"
          tabIndex={-1}
          data-ocid="gallery.modal"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white bg-brand-red rounded-full p-2"
            onClick={() => setLightbox(null)}
            data-ocid="gallery.close_button"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-4xl max-h-[80vh] w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
