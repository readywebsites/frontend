"use client";

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
    <section className="residential-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h6 className="text-sm uppercase tracking-widest text-gray-500">
            Residential Excellence
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Crafting <span className="text-yellow-500">Dream Homes</span>
          </h2>
        </div>

        {/* ONGOING */}
        <h3 className="text-2xl font-semibold mb-6">
          On-Going Projects
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* COMPLETED */}
        <h3 className="text-2xl font-semibold mb-6">
          Completed Projects
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Residential;