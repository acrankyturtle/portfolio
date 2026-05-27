import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ContainerWidth = "default" | "wide" | "narrow";

const widths: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  width?: ContainerWidth;
};

export function Container({
  width = "default",
  className,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-10", widths[width], className)}
      {...rest}
    />
  );
}
