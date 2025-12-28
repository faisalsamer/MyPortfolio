"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { projectsData } from "@/lib/data";
import { SiGithub } from "react-icons/si";
import { TbWorld, TbEye, TbLock } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Projects() {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="flex flex-col items-center pt-16 md:pt-20 pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
      <h2 className="text-4xl md:text-5xl font-semibold scroll-animate fade-up"
        style={{ color: "var(--ui-heading-color)" }}>
        Projects
      </h2>
      <p className="text-lg md:text-xl mt-4 mb-16 text-center max-w-4xl scroll-animate fade-up"
        style={{ color: "var(--ui-subheading-color)" }}>
        A showcase of projects I've built and shipped
      </p>

      {/* Projects Grid */}
      <PhotoProvider
        maskOpacity={0.8}
        speed={() => 300}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
        pullClosable={false}
        toolbarRender={({ onScale, scale, rotate, onRotate }) => (
          <>
            <svg className="PhotoView-Slider__toolbarIcon" width="44" height="44" fill="white" viewBox="0 0 768 768"
              onClick={() => onScale(scale + 1)}>
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z" />
            </svg>
            <svg className="PhotoView-Slider__toolbarIcon" width="44" height="44" fill="white" viewBox="0 0 768 768"
              onClick={() => onScale(scale - 1)}>
              <path d="M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z" />
            </svg>
            <svg className="PhotoView-Slider__toolbarIcon" width="44" height="44" fill="white" viewBox="0 0 768 768"
              onClick={() => onRotate(rotate + 90)}>
              <path d="M565.5 202.5l75-75v225h-225l87-87q-42-42-102-42-29.25 0-54.75 11.25t-44.25 30.75-30.75 44.25-11.25 54.75 11.25 54.75 30.75 44.25 44.25 30.75 54.75 11.25q43.5 0 80.25-24t56.25-64.5h66q-21 63-73.5 103.5t-129 40.5q-43.5 0-81.75-16.5t-66.75-45-45-66.75-16.5-81.75 16.5-81.75 45-66.75 66.75-45 81.75-16.5q63 0 111 36z" />
            </svg>
          </>
        )}
        photoClosable={true}
        maskClosable={true}
      >
        <div className="w-full px-10 md:max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projectsData.map((project, index) => (
              <div key={project.id}
                className="flex flex-col rounded-lg border overflow-hidden transition-all duration-300 hover:scale-[1.02] scroll-animate fade-up"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-gray-200)",
                  boxShadow: "var(--ui-shadow-modern)",
                  animationDelay: `${index * 0.1}s`,
                }}>

                {/* Image Container */}
                <div className="relative w-full aspect-video overflow-hidden"
                  style={{ backgroundColor: isDarkMode ? "#151533" : "#FAFAFA" }}>
                  <Image
                    src={isDarkMode ? project.darkImages[0] : project.lightImages[0]}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-contain p-3"
                  />
                </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                {/* Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: "var(--color-blue-primary)" }}>
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: project.status === "Deployed"
                        ? "rgba(34, 197, 94, 0.1)"
                        : project.status === "In Development"
                        ? "rgba(234, 179, 8, 0.1)"
                        : "rgba(156, 163, 175, 0.1)",
                      color: project.status === "Deployed"
                        ? "#22c55e"
                        : project.status === "In Development"
                        ? "#eab308"
                        : "#9ca3af",
                    }}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold"
                  style={{ color: "var(--ui-heading-color)" }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--ui-text-color)" }}>
                  {project.subtitle}
                </p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech}
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "var(--color-gray-100)",
                          color: "var(--ui-text-color)",
                        }}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "var(--color-gray-100)",
                          color: "var(--ui-text-color)",
                        }}>
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center gap-2 mt-2">
                  {project.websiteUrl && (
                    <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: "var(--color-blue-primary)", color: "#ffffff" }}>
                      <TbWorld size={14} />
                      Visit
                    </Link>
                  )}
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-gray-200)", color: "var(--ui-text-color)" }}>
                      <SiGithub size={14} />
                      Code
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-not-allowed! opacity-50"
                      style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-gray-200)", color: "var(--ui-text-color)" }}>
                      <SiGithub size={14} />
                      Code
                      <TbLock size={12} />
                    </button>
                  )}

                  {/* View Images Button - Always visible */}
                  {project.viewingImagesLight && project.viewingImagesDark && (
                    <PhotoView
                      key={`${project.id}-${isDarkMode ? 'dark' : 'light'}`}
                      src={isDarkMode ? project.viewingImagesDark : project.viewingImagesLight}>
                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-gray-200)", color: "var(--ui-text-color)" }}>
                        <TbEye size={14} />
                        View
                      </button>
                    </PhotoView>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhotoProvider>
    </section>
  );
}
