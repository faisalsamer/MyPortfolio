"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { projectsData } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-body-background)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--ui-heading-color)" }}>Project not found</h1>
          <Link href="/" className="text-[var(--color-primary-blue)] hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const images = isDarkMode ? project.darkImages : project.lightImages;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-body-background)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold transition-colors hover:text-(--color-primary-blue)"
            style={{ color: "var(--color-text-primary)" }}>
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <span className="text-sm font-medium" style={{ color: "var(--ui-text-color)" }}>{project.category}</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8" style={{ background: project.bgColor }}>
        <div className="max-w-5xl mx-auto">
          <Image src={images[0]} alt={project.title} width={1200} height={700} className="w-full h-auto rounded-lg shadow-2xl" priority />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: `var(${project.textColor})` }}>{project.title}</h1>
            <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: "var(--color-gray-100)", color: "var(--ui-text-color)" }}>
              {project.year}
            </span>
          </div>

          <p className="text-lg mb-8" style={{ color: "var(--ui-subheading-color)", lineHeight: 1.6 }}>{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.split(" | ").map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-md text-sm font-medium"
                style={{ backgroundColor: "var(--color-primary-purple)", color: "white" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl border" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--ui-heading-color)" }}>The Challenge</h2>
              <p style={{ color: "var(--ui-text-color)", lineHeight: 1.6 }}>{project.customerProblem}</p>
            </div>

            <div className="p-6 rounded-xl border" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--ui-heading-color)" }}>The Solution</h2>
              <p style={{ color: "var(--ui-text-color)", lineHeight: 1.6 }}>{project.solution}</p>
            </div>

            <div className="p-6 rounded-xl border" style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)" }}>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--ui-heading-color)" }}>The Result</h2>
              <p style={{ color: "var(--ui-text-color)", lineHeight: 1.6 }}>{project.result}</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--ui-heading-color)" }}>Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.slice(1).map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--color-gray-200)" }}>
                  <Image src={img} alt={`${project.title} - ${index + 2}`} width={600} height={400} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: "var(--color-primary-purple)", color: "white" }}>
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
