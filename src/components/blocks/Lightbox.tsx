import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ease } from "../../lib/motion";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "image" | "video";
};

type LightboxProps = {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const hasMany = images.length > 1;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    }

    document.addEventListener("keydown", onKey);
    // Lock background scroll while the overlay is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, go]);

  const current = index === null ? null : images[index];

  return createPortal(
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? current.alt}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20"
          >
            ✕
          </button>

          {hasMany && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
              >
                ›
              </button>
            </>
          )}

          <motion.figure
            key={current.src}
            className="flex max-h-full max-w-5xl flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease }}
            // Clicks on the image itself should not dismiss the overlay.
            onClick={(e) => e.stopPropagation()}
          >
            {current.kind === "video" ? (
              <video
                src={current.src}
                controls
                autoPlay
                playsInline
                aria-label={current.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-lg"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              />
            )}
            {current.caption && (
              <figcaption className="text-center text-sm text-white/70">
                {current.caption}
                {hasMany && (
                  <span className="ml-2 text-white/40">
                    {index! + 1} / {images.length}
                  </span>
                )}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
