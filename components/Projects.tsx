import { useState } from "react";
import Image from "next/image";

// Sample project data with dynamic category colors
const projectsData = [
  {
    id: 1,
    title: "Elfateh Store",
    description: "Robust API powering a modern e-commerce store.",
    category: "apis",
    image: "/fateh.png",
    alt: "Elfateh Store API illustration",
    color: "#FF9800", // Example color extracted from logo
    links: [{ label: "View API", url: "/api-docs", type: "primary" }],
  },
  {
    id: 2,
    title: "Full Stack Dashboard",
    description: "A complete full-stack solution for data analytics.",
    category: "fullstacks",
    image: "/elitecare.png",
    alt: "Dashboard interface",
    color: "#4CAF50", // Green color from logo
    links: [
      { label: "Live Demo", url: "/dashboard-demo", type: "primary" },
      {
        label: "GitHub Repo",
        url: "https://github.com/user/dashboard",
        type: "secondary",
      },
    ],
  },
  {
    id: 3,
    title: "Mobile App",
    description: "An intuitive mobile experience for on-the-go users.",
    category: "mobile",
    image: "/unicef.webp",
    alt: "Mobile app interface",
    color: "#2196F3", // Blue color from logo
    links: [
      { label: "Download App", url: "/mobile-app-download", type: "primary" },
      {
        label: "App Store",
        url: "https://appstore.com/mobileapp",
        type: "secondary",
      },
    ],
  },
];

const categories = ["all", "apis", "fullstacks", "mobile"];

export default function Grid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <>
      <div id="projects" className="max-w-7xl px-4 py-10 lg:py-24 mx-auto">
        {/* Title & Description */}
        <div className="max-w-4xl mx-auto text-center mb-4 lg:mb-6">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Innovative
            <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-primary">
              Solutions
            </span>
            Showcase
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-muted-foreground capitalize">
          A selection of projects demonstrating capability in managing full project lifecycles from conception to deployment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mx-2 px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-white"
                  : "bg-card text-foreground  border hover:bg-muted"
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-card border shadow-2xs rounded-xl"
            >
              <div
                className="h-52 border-b flex flex-col justify-center items-center  rounded-t-xl"
                style={{ background: project.color, opacity: "70%" }}
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                {/* Dynamic category label */}
                <span
                  className="block mb-1 text-xs font-semibold capitalize"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground capitalize">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {project.description}
                </p>
              </div>
              {/* Dynamic Buttons */}
              <div className="mt-auto flex border-t divide-x">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium ${
                      index === 0
                        ? "rounded-es-xl bg-primary text-white"
                        : "rounded-ee-xl bg-card text-foreground hover:bg-muted"
                    } shadow-2xs transition-all`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
