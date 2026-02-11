"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";

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
    title: "Avadh Onella",
    location: "Dumas, Surat",
    description: "3, 4 & 5 BHK Luxury Villas",
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
    title: "Avadh Shangrila",
    location: "Chalthan, Surat",
    description: "Vacation Villas",
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
    <section className="chapter residential-section">
      <div className="chapter-content">
        <h6 className="chapter-subtitle">Residential Excellence</h6>
        <h2 className="chapter-title">
          Crafting <span className="highlight">Dream Homes</span>
        </h2>

        {/* ONGOING */}
        <h3 className="category-title">On-Going Projects</h3>
        <div className="mb-[50px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[30px]">
          {[...ongoingProjects].map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* COMPLETED */}
        <h3 className="category-title">Completed Projects</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[30px]">
          {[...completedProjects].map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residential;
