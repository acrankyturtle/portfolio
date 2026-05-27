import type { ReactNode } from "react";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col text-fg">
      <Background />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
