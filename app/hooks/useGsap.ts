import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = () => {
  useEffect(() => {
    // Cache DOM queries
    const chapter2 = document.getElementById("chapter-2");
    const stickyContainers = document.querySelectorAll(".sticky-chapter-container");
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    const counters = document.querySelectorAll(".counter");

    // About Us Scroll Reveal
    if (chapter2) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapter2,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(chapter2, {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.5,
        ease: "power1.out",
      }, 0)
        .to(".about-mask-layer", {
          scale: 150,
          ease: "power2.inOut",
          duration: 2,
        }, 0)
        .to(".about-mask-layer", {
          opacity: 0,
          duration: 0.5,
        }, "-=0.5")
        .to(".about-content-reveal", {
          opacity: 1,
          duration: 1,
        }, "<");
    }

    // Dynamic Corners - Batch with gsap.utils
    [3, 4, 5, 6, 7].forEach((id) => {
      const section = document.getElementById(`chapter-${id}`);
      if (section) {
        gsap.set(section, { willChange: "border-radius, box-shadow" });
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: "top top",
            scrub: true,
          },
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          ease: "power1.out",
        });
      }
    });

    // Counters - Optimized with batched updates
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target")) || 0;
      let lastValue = 0;

      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          once: true, // Only animate once
        },
        onUpdate: function() {
          const currentValue = Math.ceil(gsap.getProperty(this.targets()[0], "textContent"));
          // Only update DOM when value changes to reduce reflows
          if (currentValue !== lastValue) {
            counter.textContent = currentValue.toLocaleString();
            lastValue = currentValue;
          }
        },
      });
    });

    // Sticky Image Zoom - Batch updates
    stickyContainers.forEach((container) => {
      const img = container.querySelector(".avadh-parallax-wrapper .parallax-img");
      const chapter = container.querySelector(".chapter");
      if (img && chapter) {
        gsap.set(img, { willChange: "transform" });
        gsap.to(img, {
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: chapter,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5, // Reduced from true (1) to improve performance
          },
        });
      }
    });

    // Fade-in animations - Batch with stagger for better performance
    gsap.set(fadeElements, { willChange: "opacity, transform" });
    fadeElements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.8, // Reduced from 1s
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true, // Only animate once
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Remove will-change after animations
      [chapter2, ...Array.from(stickyContainers), ...Array.from(fadeElements)].forEach(
        (el) => el && gsap.set(el, { willChange: "auto" })
      );
    };
  }, []);
};
