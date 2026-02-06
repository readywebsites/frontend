import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = () => {
  useEffect(() => {
    // About Us Scroll Reveal
    const section = document.getElementById("chapter-2");
    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(section, {
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

    // Dynamic Corners
    [3, 4, 5, 6, 7].forEach((id) => {
      const section = document.getElementById(`chapter-${id}`);
      if (section) {
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

    // Counters
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
        onUpdate: function() {
            counter.innerHTML = Math.ceil(gsap.getProperty(this.targets()[0], 'textContent')).toLocaleString();
        }
      });
    });

    // Sticky Image Zoom
    const stickyContainers = document.querySelectorAll(".sticky-chapter-container");
    if (stickyContainers.length > 0) {
      stickyContainers.forEach((container) => {
        const img = container.querySelector(".avadh-parallax-wrapper .parallax-img");
        const chapter = container.querySelector(".chapter");
        if (img && chapter) {
          gsap.to(img, {
            scale: 1.25,
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }

    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    fadeElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
            },
        });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
