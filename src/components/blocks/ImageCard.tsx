import type { ImgHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "../ui/Reveal";
import { Caption } from "./Caption";

type Frame = "bordered" | "plain" | "shadow";

const frames: Record<Frame, string> = {
  bordered: "border border-border rounded-xl overflow-hidden bg-surface",
  plain: "rounded-xl overflow-hidden",
  shadow:
    "rounded-xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 ring-1 ring-border bg-surface",
};

type ImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
  frame?: Frame;
  aspect?: string;
  /**
   * When true, the image is never scaled beyond its intrinsic pixel size — it
   * sits centered in the frame at native resolution instead of being stretched
   * to fill. Implies "contain" sizing.
   */
  noUpscale?: boolean;
  className?: string;
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
};

export function ImageCard({
  src,
  alt,
  caption,
  frame = "bordered",
  aspect,
  noUpscale = false,
  className,
  imgProps,
}: ImageCardProps) {
  return (
    <figure className={cn("mx-auto w-full max-w-4xl space-y-4", className)}>
      <Reveal>
        <div
          className={cn(
            frames[frame],
            noUpscale && "flex items-center justify-center",
          )}
          style={aspect ? { aspectRatio: aspect } : undefined}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              "block",
              noUpscale
                ? "max-h-full max-w-full object-contain"
                : "h-full w-full object-cover",
            )}
            // Cap the rendered size at the file's native pixels: auto sizing
            // means the image never scales past 1:1.
            style={
              noUpscale
                ? { maxWidth: "100%", width: "auto", height: "auto" }
                : undefined
            }
            {...imgProps}
          />
        </div>
      </Reveal>
      {caption ? <Caption>{caption}</Caption> : null}
    </figure>
  );
}
