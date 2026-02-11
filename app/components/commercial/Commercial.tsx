import ProjectCard from "../residential/ProjectCard";
import Image from "next/image";

const ongoingProjects = [
  {
    image: "/images/comm-ongoing/01-arkelia.webp",
    badge: "Iconic",
    title: "Avadh Arkelia",
    location: "Rundh, Surat",
    description: "Premium Retail & Offices",
    link: "#",
    delay: 0,
  },
  {
    image: "/images/comm-ongoing/02-industrial.webp",
    badge: "Plots",
    title: "Avadh Industrial Park",
    location: "Sachin, Surat",
    description: "Industrial Park",
    link: "#",
    delay: 0.1,
  },
  {
    image: "/images/comm-ongoing/03-kontina.webp",
    badge: "Ongoing",
    badgeClass: "completed",
    title: "Avadh Kontina",
    location: "Vesu, Surat",
    description: "Office & Shop",
    link: "#",
    delay: 0.2,
  },
  {
    image: "/images/comm-ongoing/04-texttile.webp",
    badge: "Upcoming",
    title: "Avadh Texttile Hub",
    location: "Bhatena, Surat",
    description: "Office & Showrooms",
    link: "#",
    delay: 0.3,
  },
  {
    image: "/images/comm-ongoing/05-industrial-arena.webp",
    badge: "Upcoming",
    title: "Avadh Industrial Arena",
    location: "To be announced",
    description: "Mixed Use",
    link: "#",
    delay: 0.3,
  },
];

const completedProjects = [
  {
    image: "/images/comm-complete/01-arena.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Arena",
    location: "Bharthana, Surat",
    description: "Office & Retail",
    link: "#",
    delay: 0,
  },
  {
    image: "/images/comm-complete/02-texttile.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Textile Market",
    location: "Umarwada, Surat",
    description: "Office & showroom",
    link: "#",
    delay: 0.1,
  },
  {
    image: "/images/comm-complete/03-viceroy.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Viceroy",
    location: "Sarthana Jakatnaka, Surat",
    description: "Office & Showroom",
    link: "#",
    delay: 0.2,
  },
  {
    image: "/images/comm-complete/04-rituraj.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Rituraj Texttile Hub",
    location: "Pursottam Nagar, Surat",
    description: "Office & Showrrom",
    link: "#",
    delay: 0.3,
  },
];

const Commercial = () => {
  return (
    <div className="sticky-chapter-container">
      <section className="avadh-parallax-wrapper">
        <div className="sticky-bg">
          <Image
            src="/images/scroll-images/02-arkelia.webp"
            alt="Luxury Real Estate Background"
            className="parallax-img"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="parallax-overlay"></div>
        </div>
      </section>
      <section id="chapter-4" className="chapter" data-chapter="4">
        <div className="chapter-background">
          <div className="commercial-bg-pattern"></div>
        </div>
        <div className="chapter-content">
          <div className="content-wrapper centered">
            <h6 className="chapter-subtitle">Corporate Landmarks</h6>
            <h2 className="chapter-title">
              Defining <span className="highlight">Business Horizons</span>
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto var(--spacing-xl)" }}>
              From iconic textile hubs to next-gen corporate parks, we build
              ecosystems where businesses thrive and legacies are forged.
            </p>
          </div>

          <div className="project-filters fade-in">
            <div className="filter-group">
              <select id="comm-filter-location" className="filter-select">
                <option value="all">Location: All</option>
              </select>
            </div>
            <div className="filter-group">
              <select id="comm-filter-type" className="filter-select">
                <option value="all">Type: All</option>
              </select>
            </div>
            <div className="filter-group">
              <select id="comm-filter-status" className="filter-select">
                <option value="all">Status: All</option>
              </select>
            </div>
            <button id="comm-reset-filters" className="filter-reset-btn">
              <i className="fas fa-undo"></i> Reset Filters
            </button>
          </div>

          <div className="project-category-section">
            <h3 className="category-title fade-in">On-Going Projects</h3>
            <div className="grid-scroll-wrapper">
              <button className="scroll-arrow left-arrow" aria-label="Scroll Left">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="residential-grid" style={{ display: "flex", overflowX: "auto", gap: "30px", padding: "20px 5px", scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
                {ongoingProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
              <button className="scroll-arrow right-arrow" aria-label="Scroll Right">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="view-all-container fade-in" data-delay="0.2">
              <a href="/portfolio" className="cta-button outline">
                <span>View All</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="project-category-section">
            <h3 className="category-title fade-in">Completed Projects</h3>
            <div className="grid-scroll-wrapper">
              <button className="scroll-arrow left-arrow" aria-label="Scroll Left">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="residential-grid" style={{ display: "flex", overflowX: "auto", gap: "30px", padding: "20px 5px", scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
                {completedProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
              <button className="scroll-arrow right-arrow" aria-label="Scroll Right">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="view-all-container fade-in" data-delay="0.2">
              <a href="/portfolio" className="cta-button outline">
                <span>View More</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
