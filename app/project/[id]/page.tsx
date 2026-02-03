"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { projectsData } from "@/lib/data";
import { projectDetailsData } from "@/lib/project-details";
import ScrollAnimator from "@/components/scroll-animator";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--color-body-background)" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--ui-heading-color)" }}>
            Project not found
          </h1>
          <Link href="/" className="text-(--color-primary-blue) hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const details = projectDetailsData[project.id];
  const images = isDarkMode ? project.darkImages : project.lightImages;

  // ─── Fallback: simple view ──────────────────────────────────────
  if (!details) {
    return (
      <div className="min-h-screen" style={{ background: "var(--color-body-background)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--ui-text-color)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Projects
          </Link>
        </div>
        <section className="px-4 sm:px-6 md:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4 text-sm" style={{ color: "var(--ui-text-color)" }}>
              <span>{project.category}</span>
              <span style={{ color: "var(--color-gray-300)" }}>·</span>
              <span>{project.status}</span>
              <span style={{ color: "var(--color-gray-300)" }}>·</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--ui-heading-color)" }}>
              {project.title}
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--ui-subheading-color)" }}>
              {project.subtitle}
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-gray-200)" }}>
              <Image src={images[0]} alt={project.title} width={1200} height={700} className="w-full h-auto" priority />
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            {project.customerProblem && (
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--ui-heading-color)" }}>The Challenge</h2>
                <p className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>{project.customerProblem}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--ui-heading-color)" }}>The Solution</h2>
                <p className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>{project.solution}</p>
              </div>
            )}
            {project.result && (
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--ui-heading-color)" }}>The Result</h2>
                <p className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>{project.result}</p>
              </div>
            )}
            <div className="pt-8 text-center">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-primary-blue)", color: "white" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ─── Impact section theming ─────────────────────────────────────
  const impact = {
    bg: isDarkMode ? "#1e293b" : "#111827",
    heading: isDarkMode ? "var(--ui-heading-color)" : "#f1f5f9",
    text: isDarkMode ? "var(--ui-text-color)" : "#94a3b8",
    num: isDarkMode ? "var(--color-gray-300)" : "#475569",
  };

  // ─── Full case study ────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "var(--color-body-background)" }}>
      <ScrollAnimator contentLoaded={mounted} headerFooterReady={mounted} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto pt-8 pb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--ui-text-color)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Projects
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="flex flex-wrap items-center gap-3 mb-6 text-sm"
            style={{ color: "var(--ui-text-color)" }}
          >
            <span>{project.category}</span>
            <span style={{ color: "var(--color-gray-300)" }}>·</span>
            <span
              style={{
                color:
                  project.status === "Deployed"
                    ? "#22c55e"
                    : project.status === "In Development"
                      ? "#eab308"
                      : "var(--ui-text-color)",
              }}
            >
              {project.status}
            </span>
            <span style={{ color: "var(--color-gray-300)" }}>·</span>
            <span>{project.year}</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-6"
            style={{
              color: "var(--ui-heading-color)",
              fontFamily: "var(--font-family-secondary)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed max-w-3xl"
            style={{ color: "var(--ui-subheading-color)" }}
          >
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* ── Screenshot ───────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto scroll-animate fade-up">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: isDarkMode
                ? "0 25px 60px -12px rgba(0, 0, 0, 0.5)"
                : "0 25px 60px -12px rgba(0, 0, 0, 0.15)",
              border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`,
            }}
          >
            <Image
              src={images[0]}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Project Info ─────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 pb-8">
        <div
          className="max-w-4xl mx-auto rounded-xl border p-6 md:p-8 scroll-animate fade-up"
          style={{ borderColor: "var(--color-gray-200)", backgroundColor: "var(--color-card)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { label: "Role", value: details.role },
              { label: "Company", value: details.company },
              { label: "Timeline", value: details.timeline },
              { label: "Location", value: details.location },
            ].map((item) => (
              <div key={item.label}>
                <span
                  className="text-xs uppercase tracking-wider font-medium block mb-1"
                  style={{ color: "var(--ui-text-color)" }}
                >
                  {item.label}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--ui-heading-color)" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t mb-6" style={{ borderColor: "var(--color-gray-200)" }} />

          <div className="mb-6">
            <span
              className="text-xs uppercase tracking-wider font-medium block mb-3"
              style={{ color: "var(--ui-text-color)" }}
            >
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium"
                  style={{
                    backgroundColor: "var(--color-gray-100)",
                    color: "var(--ui-heading-color)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-primary-blue)" }}
              >
                Visit Live Site
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-opacity hover:opacity-80"
                style={{
                  borderColor: "var(--color-gray-200)",
                  color: "var(--ui-heading-color)",
                }}
              >
                View Code
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed opacity-40"
                style={{ color: "var(--ui-text-color)" }}
              >
                <Lock className="w-3.5 h-3.5" />
                Private Repository
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <p
            className="text-base leading-relaxed scroll-animate fade-up"
            style={{ color: "var(--ui-text-color)" }}
          >
            {details.overview}
          </p>
        </div>
      </section>

      {/* ── 01 The Challenge ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-8 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              01
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              The Challenge
            </h2>
          </div>
          <div className="space-y-4 scroll-animate fade-up delay-100">
            {details.problem.map((p, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 The Approach ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-8 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              02
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              The Approach
            </h2>
          </div>
          <div className="space-y-4 scroll-animate fade-up delay-100">
            {details.solution.map((p, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Key Features ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-10 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              03
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.features.map((feature, index) => (
              <div
                key={feature.category}
                className="p-5 rounded-lg border transition-colors duration-200 scroll-animate fade-up"
                style={{
                  borderColor: "var(--color-gray-200)",
                  backgroundColor: "var(--color-card)",
                  transitionDelay: `${Math.min(index * 60, 240)}ms`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-gray-300)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-gray-200)")
                }
              >
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--ui-heading-color)" }}
                >
                  {feature.category}
                </h3>
                <ul className="space-y-1.5">
                  {feature.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed"
                      style={{ color: "var(--ui-text-color)" }}
                    >
                      <span
                        className="shrink-0 mt-1.75 w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--color-gray-300)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Under the Hood ────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-10 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              04
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              Under the Hood
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {details.technicalHighlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="scroll-animate fade-up"
                style={{ transitionDelay: `${Math.min(index * 60, 240)}ms` }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--ui-heading-color)" }}
                >
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ui-text-color)" }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Architecture ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-10 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              05
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              Architecture
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate fade-up delay-100">
            {details.architecture.map((layer) => (
              <div key={layer.category}>
                <h3
                  className="text-xs font-semibold uppercase tracking-wider mb-4 pb-2 border-b"
                  style={{
                    color: "var(--ui-subheading-color)",
                    borderColor: "var(--color-gray-200)",
                  }}
                >
                  {layer.category}
                </h3>
                <ul className="space-y-2.5">
                  {layer.items.map((item) => (
                    <li key={item.name}>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--ui-heading-color)" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--ui-text-color)" }}>
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Impact (inverted section) ─────────────────────── */}
      <section
        className="py-20 md:py-28 px-4 sm:px-6 md:px-8"
        style={{ backgroundColor: impact.bg }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: impact.num }}>
              06
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: impact.heading }}>
              Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {details.results.map((result, index) => (
              <div
                key={result.label}
                className="scroll-animate fade-up"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 leading-none"
                  style={{
                    color: impact.heading,
                    fontFamily: "var(--font-family-secondary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {result.value}
                </div>
                <div className="text-sm" style={{ color: impact.text }}>
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-sm leading-relaxed max-w-xl scroll-animate fade-up"
            style={{ color: impact.text }}
          >
            Live production system handling real financial transactions, used daily by a property
            management company.
          </p>
        </div>
      </section>

      {/* ── 07 Reflections ───────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-14 md:py-20"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="flex items-baseline gap-4 mb-8 scroll-animate fade-up">
            <span className="text-sm tabular-nums" style={{ color: "var(--color-gray-300)" }}>
              07
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--ui-heading-color)" }}>
              Reflections
            </h2>
          </div>

          <div className="space-y-5 max-w-3xl scroll-animate fade-up delay-100">
            {details.journey.map((paragraph, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "var(--ui-text-color)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation ───────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8">
        <div
          className="max-w-4xl mx-auto border-t py-10"
          style={{ borderColor: "var(--color-gray-200)" }}
        >
          <div className="text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary-blue)", color: "white" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
