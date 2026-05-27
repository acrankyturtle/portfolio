export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/*/!* Aurora glow *!/*/}
      {/*<div*/}
      {/*  className="absolute -top-1/6 left-1/4 h-250 w-300 -translate-x-1/2 rounded-full opacity-50 blur-[120px] dark:opacity-10"*/}
      {/*  style={{*/}
      {/*    background:*/}
      {/*      "radial-gradient(circle at center, #C9D4E5 0%, #849AB8 45%, transparent 70%)",*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className="absolute top-[30%] right-[-10%] h-150 w-200 rounded-full opacity-35 blur-[120px] dark:opacity-5"*/}
      {/*  style={{*/}
      {/*    background:*/}
      {/*      "radial-gradient(circle at center, #EEF4FB 0%, #849AB8 50%, transparent 72%)",*/}
      {/*  }}*/}
      {/*/>*/}

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.1] mix-blend-multiply dark:opacity-[0.07] dark:mix-blend-hard-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
