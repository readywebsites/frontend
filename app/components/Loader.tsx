"use client";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const loader = document.getElementById("loader-overlay");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 1200);
    }
  }, []);

  return (
    <div id="loader-overlay">
      <div className="loader-container">
        <img
          src="/images/logo/logo_01_trans.png"
          alt="Avadh Group Logo"
          className="loader-logo"
        />
        <div className="loader-brand">AVADH GROUP</div>
      </div>
    </div>
  );
};

export default Loader;
