import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light" : "Switch to dark"}
      className={cn(
        "border-border text-fg-muted hover:text-fg hover:border-fg-subtle/60 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        className,
      )}
    >
      {isDark ? (
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
          <circle cx="8" cy="8" r="3" fill="currentColor" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="8"
              y1="1.5"
              x2="8"
              y2="3"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              transform={`rotate(${deg} 8 8)`}
            />
          ))}
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M13.5 9.5A5.5 5.5 0 1 1 6.5 2.5a4.5 4.5 0 0 0 7 7Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
