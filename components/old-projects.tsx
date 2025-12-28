"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="flex flex-col items-center pt-16 md:pt-20 pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
      <h2 className="text-4xl md:text-5xl font-semibold scroll-animate fade-up"
        style={{ color: "var(--ui-heading-color)" }}>
        Projects
      </h2>
      <p className="text-lg md:text-xl mt-4 mb-12 text-center max-w-4xl scroll-animate fade-up"
        style={{ color: "var(--ui-subheading-color)" }}>
        Have a look at some of the rolled-out projects I&apos;m proud of:
      </p>

      <div className="w-full max-w-7xl flex flex-col gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <div key={project.id}
            className={`flex flex-col lg:flex-row w-full gap-6 md:gap-8 scroll-animate ${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
            {/* Image */}
            <div className="flex items-center justify-center flex-1 border rounded-lg p-8 md:p-12"
              style={{
                background: project.bgColor,
                borderColor: "var(--color-gray-200)",
                boxShadow: "var(--ui-shadow-modern)",
              }}>
              <Image
                src={isDarkMode ? project.darkImages[0] : project.lightImages[0]}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center flex-1 border rounded-lg"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-gray-200)",
                boxShadow: "var(--ui-shadow-modern)",
              }}>
              <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4"
                  style={{ color: `var(${project.textColor})` }}>
                  {project.title}
                </h3>
                <p className="text-base text-center mb-6" style={{ color: "var(--ui-text-color)" }}>
                  {project.subtitle}
                </p>
                <Link href={`/project/${project.id}`}
                  className="font-semibold hover:underline transition-colors duration-200"
                  style={{ fontFamily: "var(--font-family-secondary)", color: `var(${project.textColor})` }}>
                  View project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
