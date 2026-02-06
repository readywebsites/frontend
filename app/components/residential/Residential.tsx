import ProjectCard from "./ProjectCard";
import Image from "next/image";

const ongoingProjects = [
  {
    image: "/images/resi-ongoing/01-riverside.webp",
    badge: "New Launch",
    title: "Avadh Riverside",
    location: "Tukwada, Vapi",
    description: "3 & 4 BHK Ultra Luxury",
    link: "#",
    delay: 0,
  },
  {
    image: "/images/resi-ongoing/02-berthina.webp",
    badge: "Premium",
    title: "Avadh Bertina",
    location: "Vesu, Surat",
    description: "4 & 5 BHK Lifestyle Apts",
    link: "#",
    delay: 0.1,
  },
  {
    image: "/images/resi-ongoing/03-onica.webp",
    title: "Avadh Onica",
    location: "Dumas, Surat",
    description: "2 BHK Apartments",
    link: "#",
    delay: 0.2,
  },
  {
    image: "/images/resi-ongoing/04-habitat.webp",
    badge: "Upcoming",
    title: "Avadh Habitat",
    location: "Pal, Surat",
    description: "3 & 4 BHK Premium Living",
    link: "#",
    delay: 0.3,
  },
  {
    image: "/images/resi-ongoing/05-ercole.webp",
    badge: "Booking Open",
    title: "Avadh Ercole",
    location: "Vesu, Surat",
    description: "4 & 5 BHK Premium Living",
    link: "#",
    delay: 0.4,
  },
  {
    image: "/images/resi-ongoing/06-onella.webp",
    badge: "Premium",
    title: "Avadh onella",
    location: "Dumas, Surat",
    description: "3 BHK, 4BHK & 5 BHK Luxury Villas",
    link: "#",
    delay: 0.5,
  },
];

const completedProjects = [
  {
    image: "/images/resi-complete/01-holiconia.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Holiconia",
    location: "Vapi, Gujarat",
    description: "Premium Residency",
    link: "#",
    delay: 0,
  },
  {
    image: "/images/resi-complete/02-copperstone.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Copper Stone",
    location: "Dumas Road, Surat",
    description: "Apartments",
    link: "#",
    delay: 0.1,
  },
  {
    image: "/images/resi-complete/03-carolina.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Carolina",
    location: "Dumas Road, Surat",
    description: "Apartments",
    link: "#",
    delay: 0.2,
  },
  {
    image: "/images/resi-complete/04-regelia.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Regalia",
    location: "Navsari, Gujarat",
    description: "Premium Villas",
    link: "#",
    delay: 0.3,
  },
  {
    image: "/images/resi-complete/05-sangrilla.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh shangrila",
    location: "Chalthan, Surat",
    description: "vacation Villas",
    link: "#",
    delay: 0.4,
  },
  {
    image: "/images/resi-complete/06-lifestyle.webp",
    badge: "Sold Out",
    badgeClass: "completed",
    title: "Avadh Life Style",
    location: "Bardoli, Gujarat",
    description: "Apartments",
    link: "#",
    delay: 0.5,
  },
];

const Residential = () => {
  return (
    <div className="sticky-chapter-container">
      <section className="avadh-parallax-wrapper">
        <div className="sticky-bg">
          <Image
            src="/images/scroll-images/01-riverside.webp"
            alt="Luxury Real Estate Background"
            className="parallax-img"
            layout="fill"
            objectFit="cover"
          />
          <div className="parallax-overlay"></div>
        </div>
      </section>
      <section id="chapter-3" className="chapter" data-chapter="3">
        <div className="chapter-background">
          <div className="residential-bg-pattern"></div>
          <div className="gradient-orb orb-1" data-speed="-0.06"></div>
          <div className="gradient-orb orb-2" data-speed="-0.03"></div>
        </div>
        <div className="chapter-content">
          <div className="content-wrapper centered">
            <h6 className="chapter-subtitle">Residential Excellence</h6>
            <h2 className="chapter-title">
              Crafting <span className="highlight">Dream Homes</span>
            </h2>
            <div className="project-filters fade-in">
              <div className="filter-group">
                <select id="filter-location" className="filter-select">
                  <option value="all">Location: All</option>
                  <option value="surat">Surat</option>
                  <option value="vapi">Vapi</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="filter-type" className="filter-select">
                  <option value="all">Type: All</option>
                  <option value="apartment">Apartments</option>
                  <option value="villa">Villas</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="filter-group">
                <select id="filter-bhk" className="filter-select">
                  <option value="all">BHK: All</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5 BHK</option>
                </select>
              </div>
              <button id="reset-filters" className="filter-reset-btn">
                <i className="fas fa-undo"></i> Reset Filters
              </button>
            </div>
          </div>

          <div className="project-category-section">
            <h3 className="category-title fade-in">On-Going Projects</h3>
            <div className="grid-scroll-wrapper">
              <button className="scroll-arrow left-arrow" aria-label="Scroll Left">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="residential-grid">
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
              <div className="residential-grid">
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
                <span>View All</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;
