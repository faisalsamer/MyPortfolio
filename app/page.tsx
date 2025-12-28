"use client";

import { lazy, Suspense, useState, useEffect } from "react";

// Split 1: Header and Footer (load first)
import Header from "@/components/header";
import Footer from "@/components/footer";

// Split 2: Page content (load after header/footer)
const Hero = lazy(() => import("@/components/hero"));
const Skills = lazy(() => import("@/components/skills"));
const Projects = lazy(() => import("@/components/projects"));
const CTA = lazy(() => import("@/components/cta"));
const Experience = lazy(() => import("@/components/experience"));
const ScrollAnimator = lazy(() => import("@/components/scroll-animator"));

// Loading component for initial load
function InitialLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen"
      style={{ background: "var(--color-body-background)" }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: "var(--color-blue-primary)", borderTopColor: "transparent" }} />
        <p className="text-lg font-medium" style={{ color: "var(--ui-text-color)" }}>
          Loading...
        </p>
      </div>
    </div>
  );
}

// Loading component for page content
function ContentLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: "var(--color-blue-primary)", borderTopColor: "transparent" }} />
        <p className="text-base font-medium" style={{ color: "var(--ui-text-color)" }}>
          Loading content...
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [headerFooterReady, setHeaderFooterReady] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Mark header/footer as ready after they mount
    setHeaderFooterReady(true);
  }, []);

  // Show initial loader until header/footer are ready
  if (!headerFooterReady) {
    return <InitialLoader />;
  }

  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden"
      style={{ background: "var(--color-body-background)" }}>
      <ScrollAnimator headerFooterReady={headerFooterReady} contentLoaded={contentLoaded} />

      <Header />

      <main>
        <Suspense fallback={<ContentLoader />}>
          <ContentWrapper onLoad={() => setContentLoaded(true)} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

// Wrapper component to detect when lazy content loads
function ContentWrapper({ onLoad }: { onLoad: () => void }) {
  useEffect(() => {
    // Notify parent that content has loaded
    onLoad();
  }, [onLoad]);

  return (
    <>
      <Hero />
      <Skills />
      {/* Divider */}
      <div className="h-1" style={{ backgroundColor: "var(--color-fafafa)" }} />
      <Projects />
      <CTA />
      <Experience />
    </>
  );
}
