import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
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

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const open = index !== null;
  const hasMany = images.length > 1;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  // drag navigation
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const dragX = useMotionValue(0);
  const SWIPE_THRESHOLD = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStart.current;
      if (!start || !hasMany) return;

      const t = e.touches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;

      if (Math.abs(dx) > Math.abs(dy)) dragX.set(dx * 0.4);
    },
    [hasMany, dragX],
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;

      const t = e.changedTouches[0];
      const dx = start ? t.clientX - start.x : 0;
      const dy = start ? t.clientY - start.y : 0;
      const swiped =
        !!start &&
        hasMany &&
        Math.abs(dx) >= SWIPE_THRESHOLD &&
        Math.abs(dx) > Math.abs(dy);

      if (swiped) {
        dragX.set(0);
        go(dx < 0 ? 1 : -1);
      } else {
        animate(dragX, 0, { type: "spring", stiffness: 500, damping: 40 });
      }
    },
    [hasMany, go, dragX],
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
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-lg text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/20 active:bg-white/35"
          >
            ✕
          </button>

          {hasMany && (
            <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-6 md:inset-x-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:justify-between">
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-xl text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/20 active:bg-white/35"
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
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-xl text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/20 active:bg-white/35"
              >
                ›
              </button>
            </div>
          )}

          <motion.figure
            key={current.src}
            className="flex max-h-full max-w-5xl flex-col items-center gap-4 pt-14 pb-16 md:py-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease }}
            style={{ x: dragX }}
            // Clicks on the image itself should not dismiss the overlay.
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {current.kind === "video" ? (
              <video
                src={current.src}
                controls
                autoPlay
                playsInline
                aria-label={current.alt}
                className="max-h-[70vh] w-auto max-w-full rounded-lg md:max-h-[80vh]"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain md:max-h-[80vh]"
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
