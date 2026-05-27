import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "./components/layout/SiteShell";
import { pageFade } from "./lib/motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  const location = useLocation();

  return (
    <SiteShell>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageFade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </SiteShell>
  );
}
