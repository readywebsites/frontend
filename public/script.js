/**
 * Avadh Group Scrollytelling Website
 * Vanilla JavaScript Implementation
 *
 * Features:
 * 1. Chapter detection and navigation highlighting
 * 2. Parallax effects on background elements
 * 3. Intersection Observer for fade-in animations
 * 4. Modal and mobile menu functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ===== INITIALIZATION =====
  console.log("Avadh Group Scrollytelling initialized");

  // ===== GLOBAL VARIABLES =====
  const chapters = document.querySelectorAll(".chapter");
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
  const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
  const mobileNav = document.getElementById("mobileNav");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const openModalBtn = document.getElementById("openModalBtn");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const mobileCtaBtn = document.getElementById("mobileCtaBtn");
  const lifestyleCtaBtn = document.getElementById("lifestyleCtaBtn");
  const leadForm = document.getElementById("leadForm");

  // ===== CHAPTER DETECTION & NAVIGATION =====
  /**
   * Updates the active navigation item based on current scroll position
   */
  function updateActiveNav() {
    // Get current scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Find the current chapter
    let currentChapter = 1;

    chapters.forEach((chapter) => {
      const chapterTop = chapter.offsetTop;
      const chapterBottom = chapterTop + chapter.offsetHeight;

      if (scrollPosition >= chapterTop && scrollPosition < chapterBottom) {
        currentChapter = parseInt(chapter.getAttribute("data-chapter"));
      }
    });

    // Update desktop navigation
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.hasAttribute("data-chapter")) {
        if (parseInt(item.getAttribute("data-chapter")) === currentChapter) {
          item.classList.add("active");
        }
      }
    });

    // Update mobile navigation
    mobileNavItems.forEach((item) => {
      item.classList.remove("active");
      if (parseInt(item.getAttribute("data-chapter")) === currentChapter) {
        item.classList.add("active");
      }
    });
  }

  // ===== PARALLAX EFFECT =====
  /**
   * Creates parallax effect on elements with data-speed attribute
   * Adjust the speed value (0.1 to 0.9) for different parallax intensities
   */
  let parallaxInitialized = false;

  function initParallax() {
    const parallaxLayers = document.querySelectorAll("[data-speed]");

    // Reset transforms on mobile
    if (window.innerWidth < 1130) {
      parallaxLayers.forEach((layer) => {
        layer.style.transform = "translateY(0)";
      });
      return; // Stop here for mobile
    }

    function updateParallax() {
      if (window.innerWidth < 1130) return; // Guard clause for resize scenarios
      const scrollTop = window.pageYOffset;

      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed"));
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    }

    // Add scroll listener only once
    if (!parallaxInitialized) {
      let ticking = false;
      window.addEventListener("scroll", function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            updateParallax();
            ticking = false;
          });
          ticking = true;
        }
      });
      parallaxInitialized = true;
    }

    updateParallax(); // Initial call
  }

  // ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
  /**
   * Observes elements with class 'fade-in' and adds 'visible' class when they enter viewport
   */
  function initIntersectionObserver() {
    const fadeElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right",
    );

    // Configuration for the observer
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: "0px",
      threshold: 0.15, // Trigger when 15% of element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get delay from data attribute or default to 0
          const delay = entry.target.getAttribute("data-delay") || 0;

          // Apply animation with delay
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay * 1000);

          // Unobserve after animation is triggered (optional for performance)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Start observing all fade-in elements
    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  }

  // ===== TYPEWRITER EFFECT =====
  /**
   * Types out text character by character when element enters viewport
   */
  function initTypewriter() {
    const elements = document.querySelectorAll(".typewriter-effect");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    elements.forEach((el) => {
      // Store original text
      if (!el.hasAttribute("data-text")) {
        el.setAttribute("data-text", el.textContent);
      }
      // Clear text initially
      el.textContent = "";
      // Start observing
      observer.observe(el);
    });
  }

  function startTyping(element) {
    const text = element.getAttribute("data-text");
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50); // Typing speed (50ms per char)
      }
    }
    type();
  }

  // ===== SMOOTH SCROLL TO CHAPTER =====
  /**
   * Scrolls to a specific chapter with smooth behavior
   * @param {number} chapterNumber - The chapter to scroll to (1-5)
   */
  function scrollToChapter(chapterNumber) {
    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
      // Calculate offset for fixed header if needed
      const offset = 80; // Height of the new top navbar
      const targetPosition = targetChapter.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      mobileNav.classList.remove("active");
    }
  }

  // ===== MODAL FUNCTIONS =====
  /**
   * Opens the lead generation modal
   */
  function openModal() {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  /**
   * Closes the lead generation modal
   */
  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }

  // ===== MOBILE MENU FUNCTIONS =====
  /**
   * Toggles the mobile menu visibility
   */
  function toggleMobileMenu() {
    mobileNav.classList.toggle("active");
    if (mobileMenuOverlay) mobileMenuOverlay.classList.toggle("active");
    document.body.style.overflow = mobileNav.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  // ===== FORM HANDLING =====
  /**
   * Handles lead form submission
   */
  function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // In a real implementation, you would send this to a server
    console.log("Form submitted:", formObject);

    // Show success message
    alert(
      "Thank you for your enquiry! Our relationship manager will contact you within 24 hours.",
    );

    // Close modal and reset form
    closeModal();
    event.target.reset();
  }

  // ===== LOADER =====
  /**
   * Handles the initial loading screen animation
   */
  function handleLoader() {
    const loader = document.getElementById("loader-overlay");
    // Lock scroll initially
    document.body.style.overflow = "hidden";

    // Wait for liquid animation (2.5s) + brand fade (0.5s buffer)
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }, 3000);
  }

  // ===== NAVBAR SCROLL EFFECT =====
  /**
   * Handles the dynamic iOS-style navbar resizing on scroll
   */
  function initNavbarEffect() {
    const navbar = document.querySelector(".sidebar-nav");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // ===== MOBILE NAV SCROLL EFFECT =====
  /**
   * Adds shadow to mobile nav header on scroll
   */
  function initMobileNavScrollEffect() {
    if (!mobileNav) return;

    const header = mobileNav.querySelector(".mobile-nav-header");
    if (!header) return;

    mobileNav.addEventListener("scroll", () => {
      if (mobileNav.scrollTop > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // ===== SMART SUBMENUS =====
  /**
   * Adjusts submenu position based on available screen space
   */
  function initSmartSubmenus() {
    const nestedTriggers = document.querySelectorAll(".has-nested-submenu");

    nestedTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", function () {
        const submenu = this.querySelector(".nested-submenu");
        if (submenu) {
          // Reset to default to check natural position
          submenu.classList.remove("open-left");

          const rect = submenu.getBoundingClientRect();

          // If right edge is off-screen (or close to it)
          if (rect.right > window.innerWidth - 20) {
            submenu.classList.add("open-left");
          }
        }
      });
    });
  }

  // ===== NAVBAR SEARCH OVERLAY =====
  /**
   * Handles the expanding search bar in the navbar
   */
  function initSearchOverlay() {
    const trigger = document.getElementById("navSearchTrigger");
    const overlay = document.getElementById("searchOverlay");
    const closeBtn = document.getElementById("searchCloseBtn");
    const input = document.getElementById("navSearchInput");
    const sidebarNav = document.querySelector(".sidebar-nav");

    if (trigger && overlay && closeBtn) {
      trigger.addEventListener("click", () => {
        overlay.classList.add("active");
        if (sidebarNav) sidebarNav.classList.add("search-active");
        setTimeout(() => input.focus(), 100); // Focus after transition starts
      });

      closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
        if (sidebarNav) sidebarNav.classList.remove("search-active");
      });

      // Close on Escape is handled in the global keydown listener
    }
  }

  // ===== PORTFOLIO FILTERING =====
  /**
   * Handles filtering of portfolio items
   */
  function initPortfolio() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-card");
    const searchInput = document.getElementById("portfolioSearch");

    if (filterBtns.length === 0 && !searchInput) return;

    let currentFilter = "all";
    let currentSearch = "";

    function filterItems() {
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        const title = item
          .querySelector(".p-card-title")
          .textContent.toLowerCase();
        const location = item
          .querySelector(".p-card-loc")
          .textContent.toLowerCase();

        const matchesCategory =
          currentFilter === "all" || category === currentFilter;
        const matchesSearch =
          title.includes(currentSearch) || location.includes(currentSearch);

        if (matchesCategory && matchesSearch) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.9)";
          setTimeout(() => {
            // Only hide if it's still invisible (prevents flickering during rapid typing)
            if (item.style.opacity === "0") {
              item.style.display = "none";
            }
          }, 300);
        }
      });
    }

    // Category Buttons
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        filterItems();
      });
    });

    // Search Input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        filterItems();
      });
    }
  }

  // ===== HERO CAROUSEL =====
  /**
   * Handles the hero section video carousel with progress bars
   */
  function initHeroCarousel() {
    const slides = document.querySelectorAll(".hero-slide");
    const controls = document.querySelectorAll(".control-item");
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 8000; // 8 seconds

    function switchSlide(index) {
      // Remove active class from current
      slides[currentSlide].classList.remove("active");
      controls[currentSlide].classList.remove("active");

      // Update index
      currentSlide = index;
      if (currentSlide >= slides.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slides.length - 1;

      // Add active class to new
      slides[currentSlide].classList.add("active");
      controls[currentSlide].classList.add("active");

      // Reset video time for the new slide
      const video = slides[currentSlide].querySelector("video");
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }

    function startCarousel() {
      slideInterval = setInterval(() => {
        switchSlide(currentSlide + 1);
      }, intervalTime);
    }

    controls.forEach((control, index) => {
      control.addEventListener("click", () => {
        clearInterval(slideInterval);
        switchSlide(index);
        startCarousel();
      });
    });

    // Initialize
    startCarousel();
  }

  // ===== HERO VIDEO ZOOM ON SCROLL =====
  /**
   * Zooms the hero video based on scroll position for dramatic effect
   */
  function initHeroZoom() {
    const heroSection = document.getElementById("chapter-1");
    if (!heroSection) return;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // Stop if scrolled past the hero section to save resources
      if (scrollY > window.innerHeight) return;

      // Scale starts at 1 and increases slightly as you scroll down
      const scale = 1 + scrollY * 0.0005;
      const videos = document.querySelectorAll(".hero-video");

      videos.forEach((video) => {
        video.style.transform = `scale(${scale})`;
      });
    });
  }

  // ===== SCROLL INDICATOR FADE =====
  /**
   * Fades out the scroll indicator as user scrolls down
   */
  function initScrollIndicatorFade() {
    const indicator = document.querySelector(".scroll-indicator");
    if (!indicator) return;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // Fade out completely by 300px scroll
      const opacity = Math.max(0, 1 - scrollY / 300);

      indicator.style.opacity = opacity;
    });
  }

  // ===== HERO TEXT FADE ON SCROLL =====
  /**
   * Fades out hero text as user scrolls down
   */
  function initHeroTextFade() {
    const heroContent = document.querySelectorAll(".hero-content");
    if (heroContent.length === 0) return;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // Fade out completely by 400px scroll
      const opacity = Math.max(0, 1 - scrollY / 400);

      heroContent.forEach((content) => {
        content.style.opacity = opacity;
      });
    });
  }

  // ===== BLUR-UP LOADING =====
  /**
   * Implements blur-up loading effect for background images
   */
  function initBlurUpLoading() {
    const blurLoadElements = document.querySelectorAll(".blur-load");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const src = element.getAttribute("data-bg");

            if (src) {
              // Load image in background
              const img = new Image();
              img.src = src;
              img.onload = () => {
                element.style.backgroundImage = `url('${src}')`;
                element.classList.remove("blur-load");
                element.classList.add("loaded");
              };
            }
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: "50px" },
    );

    blurLoadElements.forEach((el) => observer.observe(el));
  }

  // ===== ABOUT US SCROLL REVEAL =====
  /**
   * Handles the scroll animation for the About Us section (Chapter 2) using GSAP
   */
  function initAvadhScroll() {
    // Check if GSAP is loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn("GSAP or ScrollTrigger not loaded");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = document.getElementById("chapter-2");
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%", // Adjust scroll length for pacing
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 0. Flatten corners as section becomes fully active
    tl.to(
      section,
      {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.5,
        ease: "power1.out",
      },
      0,
    )
      // 1. Zoom the Mask (Scale up the SVG container)
      .to(
        ".about-mask-layer",
        {
          scale: 150,
          ease: "power2.inOut",
          duration: 2,
        },
        0,
      )
      // 2. Fade out mask to reveal full background image clearly
      .to(
        ".about-mask-layer",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5",
      )
      // 3. Reveal Content
      .to(
        ".about-content-reveal",
        {
          opacity: 1,
          duration: 1,
        },
        "<",
      ); // Sync with mask fade
  }

  // ===== DYNAMIC CORNERS =====
  /**
   * Applies dynamic corner flattening to Chapters 3, 4, 5, and 6
   */
  function initDynamicCorners() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
      return;

    gsap.registerPlugin(ScrollTrigger);

    [3, 4, 5, 6, 7].forEach((id) => {
      const section = document.getElementById(`chapter-${id}`);
      if (!section) return;

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
    });
  }

  // ===== 3D TILT EFFECT =====
  /**
   * Adds a 3D tilt effect to project cards on hover
   */
  function initProjectCardTilt() {
    const cards = document.querySelectorAll(".res-project-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        // Faster transition for responsive feel
        card.style.transition = "transform 0.1s ease-out, box-shadow 0.4s ease";
      });

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation (max 5 degrees)
        // xPct goes from -1 (left) to 1 (right)
        const xPct = (x / rect.width - 0.5) * 2;
        const yPct = (y / rect.height - 0.5) * 2;

        // Apply transform: RotateX is based on Y pos, RotateY on X pos
        // translateY(-10px) maintains the lift effect
        card.style.transform = `perspective(1000px) rotateX(${
          -yPct * 5
        }deg) rotateY(${xPct * 5}deg) translateY(-10px)`;
      });

      card.addEventListener("mouseleave", () => {
        // Reset transition and transform
        card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        card.style.transform = "";
      });
    });
  }

  // ===== COUNTER ANIMATION =====
  /**
   * Animates numbers counting up when they enter the viewport
   */
  function initCounters() {
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute("data-target"));
            const duration = 2000; // 2 seconds
            let startTime = null;

            function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);

              // Ease out quart
              const ease = 1 - Math.pow(1 - progress, 4);

              counter.innerText = Math.floor(ease * target).toLocaleString();

              if (timeElapsed < duration) {
                requestAnimationFrame(animation);
              } else {
                counter.innerText = target.toLocaleString();
              }
            }

            requestAnimationFrame(animation);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // ===== PROJECT FILTERS =====
  /**
   * Handles filtering of projects (Residential and Commercial)
   */
  function initProjectFilters() {
    const createFilterSystem = (config) => {
      const container = document.getElementById(config.containerId);
      if (!container) return;

      const locationSelect = document.getElementById(config.locationId);
      const typeSelect = document.getElementById(config.typeId);
      const extraSelect = document.getElementById(config.extraId);
      const resetBtn = document.getElementById(config.resetId);
      const cards = container.querySelectorAll(".res-project-card");
      const categories = container.querySelectorAll(
        ".project-category-section",
      );

      if (!locationSelect || !typeSelect || !extraSelect || !resetBtn) return;

      // 1. Populate Options
      const locations = new Set();
      const types = new Set();
      const extras = new Set();

      cards.forEach((card) => {
        const loc = card.getAttribute("data-location");
        const type = card.getAttribute("data-type");
        const extra = card.getAttribute(config.extraAttr);

        if (loc) locations.add(loc);
        if (type) types.add(type);
        if (extra) {
          extra.split(",").forEach((e) => extras.add(e.trim()));
        }
      });

      const populateSelect = (select, values, suffix = "") => {
        const first = select.options[0];
        select.innerHTML = "";
        select.appendChild(first);

        Array.from(values)
          .sort()
          .forEach((val) => {
            const opt = document.createElement("option");
            opt.value = val;
            const label = val.charAt(0).toUpperCase() + val.slice(1);
            opt.textContent = suffix ? `${label} ${suffix}` : label;
            select.appendChild(opt);
          });
      };

      populateSelect(locationSelect, locations);
      populateSelect(typeSelect, types);
      populateSelect(extraSelect, extras, config.extraSuffix);

      // 2. Filter Logic
      const filter = () => {
        const locVal = locationSelect.value;
        const typeVal = typeSelect.value;
        const extraVal = extraSelect.value;

        // Reset scroll
        container
          .querySelectorAll(".residential-grid")
          .forEach((grid) => (grid.scrollLeft = 0));

        // Toggle reset button
        if (locVal !== "all" || typeVal !== "all" || extraVal !== "all") {
          resetBtn.style.display = "flex";
        } else {
          resetBtn.style.display = "none";
        }

        cards.forEach((card) => {
          const cLoc = card.getAttribute("data-location");
          const cType = card.getAttribute("data-type");
          const cExtra = card.getAttribute(config.extraAttr);

          const matchLoc = locVal === "all" || cLoc === locVal;
          const matchType = typeVal === "all" || cType === typeVal;

          let matchExtra = false;
          if (extraVal === "all") matchExtra = true;
          else if (cExtra) {
            matchExtra = cExtra
              .split(",")
              .map((s) => s.trim())
              .includes(extraVal);
          }

          if (matchLoc && matchType && matchExtra) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translate(0,0)";
            }, 10);
          } else {
            card.style.display = "none";
            card.style.opacity = "0";
          }
        });

        // Hide empty categories
        categories.forEach((cat) => {
          const visible = Array.from(
            cat.querySelectorAll(".res-project-card"),
          ).filter((c) => c.style.display !== "none");
          cat.style.display = visible.length > 0 ? "block" : "none";
        });
      };

      locationSelect.addEventListener("change", filter);
      typeSelect.addEventListener("change", filter);
      extraSelect.addEventListener("change", filter);

      resetBtn.addEventListener("click", () => {
        locationSelect.value = "all";
        typeSelect.value = "all";
        extraSelect.value = "all";
        filter();
      });
    };

    // Initialize Residential
    createFilterSystem({
      containerId: "chapter-3",
      locationId: "filter-location",
      typeId: "filter-type",
      extraId: "filter-bhk",
      resetId: "reset-filters",
      extraAttr: "data-bhk",
      extraSuffix: "BHK",
    });

    // Initialize Commercial
    createFilterSystem({
      containerId: "chapter-4",
      locationId: "comm-filter-location",
      typeId: "comm-filter-type",
      extraId: "comm-filter-status",
      resetId: "comm-reset-filters",
      extraAttr: "data-status",
      extraSuffix: "",
    });

    // Initialize Club (Chapter 5)
    createFilterSystem({
      containerId: "chapter-5",
      locationId: "club-filter-location",
      typeId: "club-filter-type",
      extraId: "club-filter-status",
      resetId: "club-reset-filters",
      extraAttr: "data-status",
      extraSuffix: "",
    });
  }

  // ===== SCROLL ARROWS =====
  /**
   * Initializes left/right scroll buttons for residential grids
   */
  function initScrollArrows() {
    const scrollWrappers = document.querySelectorAll(".grid-scroll-wrapper");

    scrollWrappers.forEach((wrapper) => {
      const grid = wrapper.querySelector(".residential-grid");
      const leftBtn = wrapper.querySelector(".left-arrow");
      const rightBtn = wrapper.querySelector(".right-arrow");

      if (!grid || !leftBtn || !rightBtn) return;

      const scrollAmount = 370; // Card width (340px) + gap (30px)

      const updateArrows = () => {
        const tolerance = 2;
        const maxScroll = grid.scrollWidth - grid.clientWidth;

        // Left Arrow
        if (grid.scrollLeft <= tolerance) {
          leftBtn.style.opacity = "0";
          leftBtn.style.pointerEvents = "none";
        } else {
          leftBtn.style.opacity = "1";
          leftBtn.style.pointerEvents = "auto";
        }

        // Right Arrow
        if (maxScroll <= 0 || grid.scrollLeft >= maxScroll - tolerance) {
          rightBtn.style.opacity = "0";
          rightBtn.style.pointerEvents = "none";
        } else {
          rightBtn.style.opacity = "1";
          rightBtn.style.pointerEvents = "auto";
        }
      };

      leftBtn.addEventListener("click", () => {
        grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });

      rightBtn.addEventListener("click", () => {
        grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      grid.addEventListener("scroll", updateArrows);
      window.addEventListener("resize", updateArrows);

      // Observe changes in the grid (filtering)
      const observer = new MutationObserver(updateArrows);
      observer.observe(grid, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["style", "class"],
      });

      // Initial check
      setTimeout(updateArrows, 100);
    });
  }

  // ===== DRAG TO SCROLL =====
  /**
   * Enables mouse drag scrolling for residential grids
   */
  function initDragScroll() {
    const sliders = document.querySelectorAll(".residential-grid");

    sliders.forEach((slider) => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });

      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });

      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  }

  // ===== STICKY IMAGE ZOOM =====
  /**
   * Zooms the sticky image as the next chapter scrolls over it
   */
  function initStickyImageZoom() {
    const stickyContainers = document.querySelectorAll(
      ".sticky-chapter-container",
    );

    if (stickyContainers.length === 0) return;

    window.addEventListener("scroll", () => {
      const viewportHeight = window.innerHeight;

      stickyContainers.forEach((container) => {
        const img = container.querySelector(
          ".avadh-parallax-wrapper .parallax-img",
        );
        const chapter = container.querySelector(".chapter");

        if (!img || !chapter) return;

        const rect = chapter.getBoundingClientRect();

        // Calculate progress: 0 when chapter is at bottom, 1 when at top
        let progress = 1 - rect.top / viewportHeight;

        // Clamp progress between 0 and 1 to prevent over-scaling
        progress = Math.max(0, Math.min(1, progress));

        // Zoom from 1.1 (base) to 1.25
        const scale = 1.1 + progress * 0.15;
        img.style.transform = `scale(${scale})`;
      });
    });
  }

  // ===== EVENT LISTENERS =====
  /**
   * Sets up all event listeners for the application
   */
  function setupEventListeners() {
    // Chapter navigation clicks (desktop)
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        // If it has a submenu, don't scroll unless it's the text part (simplified: just check attribute)
        if (this.hasAttribute("data-chapter")) {
          const chapterNumber = parseInt(this.getAttribute("data-chapter"));
          scrollToChapter(chapterNumber);
        }
      });
    });

    // Chapter navigation clicks (mobile)
    mobileNavItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        if (
          this.hasAttribute("data-chapter") &&
          !e.target.closest(".mobile-nav-header-row")
        ) {
          const chapterNumber = parseInt(this.getAttribute("data-chapter"));
          scrollToChapter(chapterNumber);
          toggleMobileMenu();
        }
      });
    });

    // Mobile Submenu Toggles (Generic for nested levels)
    const mobileDropdownTriggers = document.querySelectorAll(
      ".mobile-nav-header-row",
    );
    mobileDropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent bubbling to parent LI click events
        const parentLi = this.closest("li");
        const submenu = parentLi.querySelector("ul"); // Get immediate UL
        if (submenu) {
          submenu.classList.toggle("open");
          const icon = this.querySelector(".mobile-dropdown-toggle");
          if (icon) {
            icon.style.transform = submenu.classList.contains("open")
              ? "rotate(180deg)"
              : "rotate(0)";
          }
        }
      });
    });

    // Mobile menu triggers
    mobileMenuTrigger.addEventListener("click", toggleMobileMenu);
    closeMenuBtn.addEventListener("click", toggleMobileMenu);
    if (mobileMenuOverlay)
      mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

    // Modal triggers
    openModalBtn.addEventListener("click", openModal);
    modalCloseBtn.addEventListener("click", closeModal);
    mobileCtaBtn.addEventListener("click", openModal);
    lifestyleCtaBtn.addEventListener("click", openModal);

    // Mobile Search Trigger
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");
    if (mobileSearchBtn) {
      mobileSearchBtn.addEventListener("click", () => {
        toggleMobileMenu(); // Close mobile menu
        const overlay = document.getElementById("searchOverlay");
        const input = document.getElementById("navSearchInput");
        const sidebarNav = document.querySelector(".sidebar-nav");
        if (overlay && input) {
          overlay.classList.add("active");
          if (sidebarNav) sidebarNav.classList.add("search-active");
          setTimeout(() => input.focus(), 100);
        }
      });
    }

    // New Contact Tab Triggers
    const contactTriggers = document.querySelectorAll(".contact-trigger");
    contactTriggers.forEach((trigger) => {
      trigger.addEventListener("click", openModal);
      // For mobile, also close menu
      trigger.addEventListener("click", () => {
        if (mobileNav.classList.contains("active")) toggleMobileMenu();
      });
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener("click", function (event) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });

    // Form submission
    if (leadForm) {
      leadForm.addEventListener("submit", handleFormSubmit);
    }
    const inlineLeadForm = document.getElementById("inlineLeadForm");
    if (inlineLeadForm) {
      inlineLeadForm.addEventListener("submit", handleFormSubmit);
    }

    // Reinitialize on window resize
    window.addEventListener("resize", function () {
      initParallax();
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (mobileNav.classList.contains("active")) {
          toggleMobileMenu();
        }
        if (
          document.getElementById("searchOverlay")?.classList.contains("active")
        ) {
          document.getElementById("searchOverlay").classList.remove("active");
          const sidebarNav = document.querySelector(".sidebar-nav");
          if (sidebarNav) sidebarNav.classList.remove("search-active");
        }
        if (modalOverlay.classList.contains("active")) {
          closeModal();
        }
      }
    });
  }

  // ===== INITIALIZATION FUNCTIONS =====
  /**
   * Initializes all components when page loads
   */
  function init() {
    // Handle loading screen
    handleLoader();

    // Update active nav on load
    updateActiveNav();

    // Initialize parallax effects
    initParallax();

    // Initialize intersection observer for animations
    initIntersectionObserver();

    // Initialize typewriter effect
    initTypewriter();

    // Initialize navbar scroll effect
    initNavbarEffect();

    // Initialize mobile nav scroll effect
    initMobileNavScrollEffect();

    // Initialize smart submenus
    initSmartSubmenus();

    // Initialize search overlay
    initSearchOverlay();

    // Initialize hero carousel
    initHeroCarousel();

    // Initialize hero video zoom on scroll
    initHeroZoom();

    // Initialize scroll indicator fade
    initScrollIndicatorFade();

    // Initialize hero text fade on scroll
    initHeroTextFade();

    // Initialize blur-up loading for gallery
    initBlurUpLoading();

    // Initialize About Us scroll reveal
    initAvadhScroll();

    // Initialize dynamic corners for other chapters
    initDynamicCorners();

    // Initialize 3D tilt effect for project cards
    initProjectCardTilt();

    // Initialize counter animations
    initCounters();

    // Initialize project filters
    initProjectFilters();

    // Initialize scroll arrows
    initScrollArrows();

    // Initialize drag to scroll
    initDragScroll();

    // Initialize sticky image zoom
    initStickyImageZoom();

    // Initialize portfolio filtering
    initPortfolio();

    // Setup all event listeners
    setupEventListeners();

    // Log initialization complete
    console.log("All components initialized successfully");
  }

  // ===== START THE APPLICATION =====
  init();

  // ===== PERFORMANCE OPTIMIZATIONS =====
  // Throttle scroll events for better performance
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        scrollTimeout = null;
        updateActiveNav();
      }, 100); // Adjust throttle timing as needed (100ms)
    }
  });

  // ===== HELPER FUNCTIONS =====
  /**
   * Debounce function to limit how often a function can be called
   * @param {Function} func - The function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} - Debounced function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===== EXPOSE FUNCTIONS FOR DEBUGGING (Optional) =====
  // This can be useful for testing in browser console
  window.AvadhApp = {
    scrollToChapter,
    openModal,
    closeModal,
    toggleMobileMenu,
    updateActiveNav,
  };
});
