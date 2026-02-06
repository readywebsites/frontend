import { useEffect } from "react";

export const useInteractivity = () => {
  useEffect(() => {
    // Mobile Menu
    const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
    const mobileNav = document.getElementById("mobileNav");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    const toggleMobileMenu = () => {
      mobileNav?.classList.toggle("active");
      mobileMenuOverlay?.classList.toggle("active");
      document.body.style.overflow = mobileNav?.classList.contains("active")
        ? "hidden"
        : "auto";
    };

    mobileMenuTrigger?.addEventListener("click", toggleMobileMenu);
    closeMenuBtn?.addEventListener("click", toggleMobileMenu);
    mobileMenuOverlay?.addEventListener("click", toggleMobileMenu);

    // Modal
    const openModalBtn = document.getElementById("openModalBtn");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    const mobileCtaBtn = document.getElementById("mobileCtaBtn");

    const openModal = () => {
      modalOverlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modalOverlay?.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    openModalBtn?.addEventListener("click", openModal);
    modalCloseBtn?.addEventListener("click", closeModal);
    mobileCtaBtn?.addEventListener("click", openModal);
    modalOverlay?.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
    
    // Search
    const trigger = document.getElementById("navSearchTrigger");
    const overlay = document.getElementById("searchOverlay");
    const closeBtn = document.getElementById("searchCloseBtn");
    const input = document.getElementById("navSearchInput") as HTMLInputElement;
    const sidebarNav = document.querySelector(".sidebar-nav");

    if (trigger && overlay && closeBtn) {
        trigger.addEventListener("click", () => {
            overlay.classList.add("active");
            if (sidebarNav) sidebarNav.classList.add("search-active");
            setTimeout(() => input.focus(), 100);
        });

        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("active");
            if (sidebarNav) sidebarNav.classList.remove("search-active");
        });
    }

    // Scroll Arrows
    const scrollWrappers = document.querySelectorAll(".grid-scroll-wrapper");
    scrollWrappers.forEach((wrapper) => {
      const grid = wrapper.querySelector(".residential-grid");
      const leftBtn = wrapper.querySelector(".left-arrow") as HTMLElement;
      const rightBtn = wrapper.querySelector(".right-arrow") as HTMLElement;

      if (!grid || !leftBtn || !rightBtn) return;

      const scrollAmount = 370;

      const updateArrows = () => {
        const tolerance = 2;
        const maxScroll = grid.scrollWidth - grid.clientWidth;

        if (grid.scrollLeft <= tolerance) {
          leftBtn.style.opacity = "0";
          leftBtn.style.pointerEvents = "none";
        } else {
          leftBtn.style.opacity = "1";
          leftBtn.style.pointerEvents = "auto";
        }

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
      const observer = new MutationObserver(updateArrows);
      observer.observe(grid, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["style", "class"],
      });
      setTimeout(updateArrows, 100);
    });

    function initProjectFilters() {
      const createFilterSystem = (config: any) => {
        const container = document.getElementById(config.containerId);
        if (!container) return;
  
        const locationSelect = document.getElementById(config.locationId) as HTMLSelectElement;
        const typeSelect = document.getElementById(config.typeId) as HTMLSelectElement;
        const extraSelect = document.getElementById(config.extraId) as HTMLSelectElement;
        const resetBtn = document.getElementById(config.resetId) as HTMLButtonElement;
        const cards = container.querySelectorAll(".res-project-card");
        const categories = container.querySelectorAll(
          ".project-category-section"
        );
  
        if (!locationSelect || !typeSelect || !extraSelect || !resetBtn) return;
  
        const locations = new Set();
        const types = new Set();
        const extras = new Set();
  
        cards.forEach((card: any) => {
          const loc = card.getAttribute("data-location");
          const type = card.getAttribute("data-type");
          const extra = card.getAttribute(config.extraAttr);
  
          if (loc) locations.add(loc);
          if (type) types.add(type);
          if (extra) {
            extra.split(",").forEach((e: any) => extras.add(e.trim()));
          }
        });
  
        const populateSelect = (select: any, values: any, suffix = "") => {
          const first = select.options[0];
          select.innerHTML = "";
          select.appendChild(first);
  
          Array.from(values)
            .sort()
            .forEach((val: any) => {
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
  
        const filter = () => {
          const locVal = locationSelect.value;
          const typeVal = typeSelect.value;
          const extraVal = extraSelect.value;
  
          container
            .querySelectorAll(".residential-grid")
            .forEach((grid: any) => (grid.scrollLeft = 0));
  
          if (locVal !== "all" || typeVal !== "all" || extraVal !== "all") {
            resetBtn.style.display = "flex";
          } else {
            resetBtn.style.display = "none";
          }
  
          cards.forEach((card: any) => {
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
                .map((s: any) => s.trim())
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
  
          categories.forEach((cat: any) => {
            const visible = Array.from(
              cat.querySelectorAll(".res-project-card")
            ).filter((c: any) => c.style.display !== "none");
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
  
      createFilterSystem({
        containerId: "chapter-3",
        locationId: "filter-location",
        typeId: "filter-type",
        extraId: "filter-bhk",
        resetId: "reset-filters",
        extraAttr: "data-bhk",
        extraSuffix: "BHK",
      });
  
      createFilterSystem({
        containerId: "chapter-4",
        locationId: "comm-filter-location",
        typeId: "comm-filter-type",
        extraId: "comm-filter-status",
        resetId: "comm-reset-filters",
        extraAttr: "data-status",
        extraSuffix: "",
      });
  
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

    initProjectFilters();

    // Cleanup
    return () => {
      mobileMenuTrigger?.removeEventListener("click", toggleMobileMenu);
      closeMenuBtn?.removeEventListener("click", toggleMobileMenu);
      mobileMenuOverlay?.removeEventListener("click", toggleMobileMenu);
      openModalBtn?.removeEventListener("click", openModal);
      modalCloseBtn?.removeEventListener("click", closeModal);
      mobileCtaBtn?.removeEventListener("click", openModal);
    };
  }, []);
};
