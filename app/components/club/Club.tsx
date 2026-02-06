import ProjectCard from "../residential/ProjectCard";
import Image from "next/image";

const clubProjects = [
  {
    image: "/images/club/02-utopia-vapi-plus.webp",
    badge: "Premium",
    title: "Avadh Utopia Plus",
    location: "Vapi, Gujarat",
    description: "Lifestyle Club",
    link: "#",
    delay: 0,
  },
  {
    image: "/images/club/03-utopia-vapi.webp",
    badge: "Luxury",
    title: "Avadh Utopia, Vapi",
    location: "Vapi, Gujarat",
    description: "Lifestyle Club",
    link: "#",
    delay: 0.1,
  },
  {
    image: "/images/club/01-utopia-surat.webp",
    title: "Avadh Utopia, Surat",
    location: "Dumas Road, Surat",
    description: "Events & Weddings",
    link: "#",
    delay: 0.2,
  },
];

const Club = () => {
  return (
    <div className="sticky-chapter-container">
      <section className="avadh-parallax-wrapper">
        <div className="sticky-bg">
          <Image
            src="/images/scroll-images/03-utopia-vapi-plus.webp"
            alt="Avadh Club Lifestyle"
            className="parallax-img"
            layout="fill"
            objectFit="cover"
          />
          <div className="parallax-overlay"></div>
        </div>
      </section>

      <section id="chapter-5" className="chapter" data-chapter="5">
        <div className="chapter-background">
          <div className="residential-bg-pattern"></div>
        </div>

        <div className="chapter-content">
          <div className="content-wrapper centered">
            <h6 className="chapter-subtitle">The Avadh Distinction</h6>
            <h2 className="chapter-title">
              Club <span className="highlight">Utopia</span>
            </h2>

            <div className="project-filters fade-in">
              <div className="filter-group">
                <select id="club-filter-location" className="filter-select">
                  <option value="all">Location: All</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="club-filter-type" className="filter-select">
                  <option value="all">Type: All</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="club-filter-status" className="filter-select">
                  <option value="all">Status: All</option>
                </select>
              </div>
              <button id="club-reset-filters" className="filter-reset-btn">
                <i className="fas fa-undo"></i> Reset Filters
              </button>
            </div>
          </div>

          <div className="project-category-section">
            <h3 className="category-title fade-in">
              Exclusive Clubs & Amenities
            </h3>
            <div className="grid-scroll-wrapper">
              <button
                className="scroll-arrow left-arrow"
                aria-label="Scroll Left"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="residential-grid">
                {clubProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
              <button
                className="scroll-arrow right-arrow"
                aria-label="Scroll Right"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="view-all-container fade-in" data-delay="0.2">
              <a href="#" className="cta-button outline">
                <span>View All Clubs</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;
