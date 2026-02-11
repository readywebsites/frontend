"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  badge?: string;
  badgeClass?: string;
  title: string;
  location: string;
  description: string;
  link: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  badge,
  badgeClass = "",
  title,
  location,
  description,
  link,
  delay,
}) => {
  return (
    <div
      className="res-project-card slide-in-right flex h-full min-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
      data-delay={delay}
      data-location={location}
    >
      {/* IMAGE WRAPPER – IMPORTANT */}
      <div className="relative h-[250px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />

        {badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] ${
              badgeClass === "completed" ? "bg-[#27ae60]" : "bg-[#e74c3c]"
            } ${badgeClass}`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-grow flex-col p-5">
        <h4 className="mb-2 text-xl font-bold text-[#2c3e50]">{title}</h4>

        <p className="mb-4 flex items-center gap-1.5 text-[0.9rem] text-[#7f8c8d]">
          <i className="fas fa-map-marker-alt text-[#e74c3c]"></i> {location}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-[0.9rem] font-medium text-[#34495e]">{description}</span>

          <Link
            href={link}
            className="group flex items-center gap-1 text-[0.9rem] font-semibold text-[#e74c3c] no-underline"
          >
            Explore <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
