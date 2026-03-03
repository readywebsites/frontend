"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useGsap = () => {
  useEffect(() => {

    // ✅ Register plugin inside useEffect (client only)
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Config inside browser
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
    });

    gsap.config({
      force3D: "auto",
      autoSleep: 120,
    });

    const ctx = gsap.context(() => {

      const chapter2 = document.getElementById("chapter-2");
      const stickyContainers = document.querySelectorAll(".sticky-chapter-container");
      const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
      const counters = document.querySelectorAll(".counter");

      // Example simple animation (tamaro rest code ahi muki sako cho safely)

      if (chapter2) {
        gsap.to(chapter2, {
          opacity: 1,
          duration: 1,
        });
      }

    });

    return () => ctx.revert();

  }, []);
};