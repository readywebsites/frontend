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
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        height: "100%",
        minWidth: "300px", // Ensures card maintains width in sliders
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* IMAGE WRAPPER – IMPORTANT */}
      <div className="res-card-image" style={{ position: "relative", width: "100%", height: "250px" }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="res-card-img"
          style={{ objectFit: "cover" }}
          priority={false}
        />

        {badge && (
          <span
            className={`res-card-badge ${badgeClass}`}
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              backgroundColor: badgeClass === "completed" ? "#27ae60" : "#e74c3c",
              color: "#fff",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
              zIndex: 10,
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="res-card-content" style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "8px", color: "#2c3e50" }}>{title}</h4>

        <p className="res-location" style={{ color: "#7f8c8d", fontSize: "0.9rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
          <i className="fas fa-map-marker-alt" style={{ color: "#e74c3c" }}></i> {location}
        </p>

        <div className="res-card-footer" style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.9rem", color: "#34495e", fontWeight: "500" }}>{description}</span>

          <Link href={link} className="res-link" style={{ color: "#e74c3c", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
            Explore <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
