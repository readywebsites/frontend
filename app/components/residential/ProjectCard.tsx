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
      className="res-project-card slide-in-right"
      data-delay={delay}
      data-location={location}
    >
      {/* IMAGE WRAPPER – IMPORTANT */}
      <div className="res-card-image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="res-card-img"
          priority={false}
        />

        {badge && (
          <span className={`res-card-badge ${badgeClass}`}>
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="res-card-content">
        <h4>{title}</h4>

        <p className="res-location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>

        <div className="res-card-footer">
          <span>{description}</span>

          <Link href={link} className="res-link">
            Explore <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
