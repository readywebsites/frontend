import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger global config for performance
ScrollTrigger.config({ autoRefreshEvents: "orientationchange,resize" });

export const useGsap = () => {
  useEffect(() => {
    // Cache DOM queries
    const chapter2 = document.getElementById("chapter-2");
    const stickyContainers = document.querySelectorAll(".sticky-chapter-container");
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    const counters = document.querySelectorAll(".counter");

    // Disable expensive animations globally
    gsap.config({ force3D: "auto", autoSleep: 120 });

    // About Us Scroll Reveal
    if (chapter2) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapter2,
          start: "top top",
          end: "+=200%",
          scrub: 0.5, // Reduced for better performance
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true, // Stop updating after scroll ends
          preventOverlaps: true,
        },
      });

      tl.to(chapter2, {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.5,
        ease: "power1.out",
        overwrite: "auto",
      }, 0)
        .to(".about-mask-layer", {
          scale: 150,
          ease: "power2.inOut",
          duration: 2,
          overwrite: "auto",
        }, 0)
        .to(".about-mask-layer", {
          opacity: 0,
          duration: 0.5,
          overwrite: "auto",
        }, "-=0.5")
        .to(".about-content-reveal", {
          opacity: 1,
          duration: 1,
          overwrite: "auto",
        }, "<");
    }

    // Dynamic Corners - Ultra lightweight
    [3, 4, 5, 6, 7].forEach((id) => {
      const section = document.getElementById(`chapter-${id}`);
      if (section) {
        gsap.set(section, { willChange: "border-radius, box-shadow", force3D: false });
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: "top top",
            scrub: 0.1, // Reduced from true (1) = much lighter
            fastScrollEnd: true,
          },
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          ease: "power1.out",
          overwrite: "auto",
          force3D: false,
        });
      }
    });

    // Counters - Optimized with minimal DOM updates
    const counterUpdates = new Map(); // Track last updates to debounce
    
    counters.forEach((counter) => {
      const dataTarget = counter.getAttribute("data-target");
      if (!dataTarget) return;
      
      const target = parseInt(dataTarget) || 0;
      counterUpdates.set(counter, 0);

      gsap.from(counter, {
        textContent: 0,
        duration: 1.5, // Reduced from 2s
        ease: "power1.inOut",
        snap: { textContent: 5 }, // Update every 5 units instead of 1
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          once: true,
          fastScrollEnd: true,
        },
        onUpdate: function() {
          const currentValue = Math.ceil(gsap.getProperty(this.targets()[0], "textContent"));
          const lastValue = counterUpdates.get(counter);
          
          // Only update DOM if significant change (reduces reflows)
          if (Math.abs(currentValue - lastValue) >= 5 || currentValue === target) {
            counter.textContent = currentValue.toLocaleString();
            counterUpdates.set(counter, currentValue);
          }
        },
        overwrite: "auto",
        force3D: false,
      });
    });

    // Sticky Image Zoom - Reduced refresh rate
    stickyContainers.forEach((container) => {
      const img = container.querySelector(".avadh-parallax-wrapper .parallax-img");
      const chapter = container.querySelector(".chapter");
      if (img && chapter) {
        gsap.set(img, { willChange: "transform", force3D: true }); // true for transforms
        gsap.to(img, {
          scale: 1.2, // Reduced from 1.25
          ease: "none",
          scrollTrigger: {
            trigger: chapter,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2, // Further reduced for performance
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          overwrite: "auto",
          force3D: true,
        });
      }
    });

    // Fade-in animations - Reduced scope
    gsap.set(fadeElements, { willChange: "opacity, transform", force3D: "auto" });
    
    // Use batch for efficient animation
    gsap.utils.toArray(fadeElements).forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 30, // Reduced from 50
        duration: 0.6, // Reduced from 0.8
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Increased from 85% (triggers animation sooner)
          once: true,
          fastScrollEnd: true,
        },
        overwrite: "auto",
        force3D: "auto",
      });
    });

    // Cleanup
    return () => {
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      counterUpdates.clear();
      // Clean will-change
      [chapter2, ...Array.from(stickyContainers), ...Array.from(fadeElements)].forEach(
        (el) => el && gsap.set(el, { willChange: "auto" })
      );
    };
  }, []);
};
