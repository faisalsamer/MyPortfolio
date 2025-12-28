"use client";

import { useEffect } from "react";

export default function ScrollAnimator({ headerFooterReady=false, contentLoaded = false }: { headerFooterReady?: boolean, contentLoaded?: boolean }) {
  useEffect(() => {
    // Wait for content to be loaded before observing
    if (!contentLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Small delay to ensure DOM is fully ready
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [headerFooterReady, contentLoaded]);

  return null;
}
