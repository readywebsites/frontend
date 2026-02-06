"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    video: "/video/hero/kontina-edit.mp4",
    title: "Life at the Edge<br />of the Sky",
    label: "Avadh Kontina",
  },
  {
    video: "/video/hero/elrica-edit.mp4",
    title: "Sanctuary of<br />Inner Peace",
    label: "Avadh Elrica",
  },
  {
    video: "/video/hero/Avadh_Menorca_edit.mp4",
    title: "Where Luxury<br />Meets Legacy",
    label: "Avadh Menorca",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="chapter-1" className="chapter" data-chapter="1">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${activeSlide === index ? "active" : ""}`}
          >
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              src={slide.video}
            />
            <div className="video-overlay"></div>
            <div className="hero-content">
              <div data-speed="0.4">
                <h1
                  className="hero-title"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <button className="hero-cta-outline">Discover More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`control-item ${activeSlide === index ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          >
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <span className="control-label">{slide.label}</span>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
