import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  number: string;
  category: string;
  name: string;
  url: string;
  col1Images: [string, string];
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "E-commerce",
    name: "ShopEase",
    url: "https://purnendusinha24-design.github.io/shopease/",
    col1Images: ["/projects/shopease-1.png", "/projects/shopease-4.png"],
    col2Image: "/projects/shopease-3.png",
  },
  {
    number: "02",
    category: "Restaurant",
    name: "Cafe Aroma",
    url: "https://purnendusinha24-design.github.io/cafearoma/",
    col1Images: ["/projects/cafearoma1.png", "/projects/cafearoma2.png"],
    col2Image: "/projects/cafearoma3.png",
  },
  {
    number: "03",
    category: "Gym",
    name: "Momentum Fit Studio",
    url: "https://purnendusinha24-design.github.io/momentumfitstudio/index.html",
    col1Images: ["/projects/moment1.png", "/projects/moment2.png"],
    col2Image: "/projects/moment3.png",
  },
];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, background: "#0C0C0C" }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-6 sm:gap-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black"
              style={{
                color: "#0C0C0C",
                fontSize: "clamp(3rem, 10vw, 140px)",
                WebkitTextStroke: "2px #D7E2EA",
              }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-70">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-blue-500 text-white hover:bg-blue-500 transition"
          >
            LIVE PROJECT
          </a>
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 h-[520px]">
          {/* Left column */}
          <div
            className="flex flex-col gap-3 sm:gap-4 h-full"
            style={{ width: "40%" }}
          >
            <img
              src={project.col1Images[0]}
              alt=""
              className="flex-1 w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0"
            />

            <img
              src={project.col1Images[1]}
              alt=""
              className="flex-1 w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0"
            />
          </div>

          {/* Right column */}
          <div className="h-full" style={{ width: "60%" }}>
            <img
              src={project.col2Image}
              alt=""
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Best Projects
      </h2>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
