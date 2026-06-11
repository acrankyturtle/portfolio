import { useState } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";
import { Caption } from "./Caption";
import { Lightbox } from "./Lightbox";

type Fit = "cover" | "contain";

type GridItem = {
  src: string;
  alt: string;
  caption?: string;
  /** "video" plays in the lightbox; the tile shows the first frame. */
  kind?: "image" | "video";
  /** Override the grid-level `fit` for this item. */
  fit?: Fit;
  /** Override the grid-level `noUpscale` for this item. */
  noUpscale?: boolean;
};

type ImageGridProps = {
  images: GridItem[];
  columns?: 1 | 2 | 3 | 4;
  gap?: "tight" | "default" | "loose";
  /**
   * How each image fills its tile.
   * - "cover" (default): crop to fill — best for uniform, edge-to-edge images.
   * - "contain": letterbox the whole image without cropping.
   */
  fit?: Fit;
  /**
   * When true, an image is never scaled beyond its intrinsic pixel size — it
   * sits centered in the tile at native resolution instead of being blown up
   * to match larger neighbours. Implies "contain" sizing for that image.
   */
  noUpscale?: boolean;
  /** Optional uniform tile aspect ratio, e.g. "4 / 3". */
  aspect?: string;
  /** Open a full-screen preview when an image is clicked. Defaults to true. */
  lightbox?: boolean;
  className?: string;
};

const columnClasses: Record<1 | 2 | 3 | 4, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

const gapClasses = {
  tight: "gap-3",
  default: "gap-6",
  loose: "gap-10",
};

export function ImageGrid({
  images,
  columns = 2,
  gap = "default",
  fit = "cover",
  noUpscale = false,
  aspect,
  lightbox = true,
  className,
}: ImageGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Videos can only be played in the lightbox, so it must be available whenever
  // the grid contains one — even if the caller turned lightbox off for images.
  const hasVideo = images.some((image) => image.kind === "video");
  const showLightbox = lightbox || hasVideo;

  return (
    <>
      <div
        className={cn(
          "mx-auto grid w-full max-w-4xl grid-cols-1",
          columnClasses[columns],
          gapClasses[gap],
          className,
        )}
      >
        {images.map((image, i) => {
          const isVideo = image.kind === "video";
          const clickable = isVideo ? showLightbox : lightbox;
          const imageFit = image.fit ?? fit;
          const imageNoUpscale = image.noUpscale ?? noUpscale;
          // noUpscale relies on contain sizing so the image can shrink inside
          // the tile rather than being cropped at native resolution.
          const contain = imageNoUpscale || imageFit === "contain";

          const mediaClass = cn(
            "block",
            contain
              ? "max-h-full max-w-full object-contain"
              : "h-full w-full object-cover",
            clickable &&
              "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
          );
          const mediaStyle = imageNoUpscale
            ? // Cap the rendered size at the file's native pixels: auto sizing
              // means the media never scales past 1:1.
              { maxWidth: "100%", width: "auto", height: "auto" }
            : undefined;

          const media = isVideo ? (
            <>
              <video
                // The media fragment nudges browsers to render the first frame
                // as a poster without us shipping a separate thumbnail.
                src={`${image.src}#t=0.1`}
                preload="metadata"
                muted
                playsInline
                aria-label={image.alt}
                className={mediaClass}
                style={mediaStyle}
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition group-hover:bg-black/70">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-0.5 h-6 w-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={mediaClass}
              style={mediaStyle}
            />
          );

          const tileClass = cn(
            "relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface",
          );

          return (
            <Reveal key={`${image.src}-${i}`} delay={i * 0.05}>
              <figure className="flex h-full flex-col space-y-3">
                {clickable ? (
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={
                      isVideo
                        ? `Play video: ${image.alt}`
                        : `Enlarge image: ${image.alt}`
                    }
                    className={cn(
                      tileClass,
                      "group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isVideo ? "cursor-pointer" : "cursor-zoom-in",
                      "hover:-translate-y-1 hover:border-fg-subtle/50",
                      "focus-visible:ring-2 focus-visible:ring-fg/50 focus-visible:outline-none",
                    )}
                    style={aspect ? { aspectRatio: aspect } : undefined}
                  >
                    {media}
                  </button>
                ) : (
                  <div
                    className={tileClass}
                    style={aspect ? { aspectRatio: aspect } : undefined}
                  >
                    {media}
                  </div>
                )}
                {image.caption ? <Caption>{image.caption}</Caption> : null}
              </figure>
            </Reveal>
          );
        })}
      </div>

      {showLightbox && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
