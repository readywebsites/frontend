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
      className="res-project-card slide-in-right flex h-full min-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      data-delay={delay}
      data-location={location}
    >
      
      {/* ✅ IMAGE WRAPPER FIXED */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        {badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white shadow ${
              badgeClass === "completed"
                ? "bg-green-600"
                : "bg-red-500"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-grow flex-col p-5">
        <h4 className="mb-2 text-xl font-bold text-gray-800">
          {title}
        </h4>

        <p className="mb-4 flex items-center gap-1 text-sm text-gray-500">
          {location}
        </p>

        <div className="mt-auto flex items-center justify-between border-t pt-4">
          <span className="text-sm font-medium text-gray-700">
            {description}
          </span>

          <Link
            href={link}
            className="group flex items-center gap-1 text-sm font-semibold text-red-500"
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;