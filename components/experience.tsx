"use client";

import { Globe } from "lucide-react";
import { workExperienceData, educationData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center pt-16 md:pt-20 px-4 sm:px-6 md:px-8">
      {/* Work Experience Section */}
      <div className="w-full max-w-5xl mb-5">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 scroll-animate fade-up"
          style={{ color: "var(--ui-heading-color)" }}>
          Work Experience
        </h2>
        <p className="text-base md:text-lg mb-5 scroll-animate"
          style={{ color: "var(--ui-subheading-color)" }}>
          Experienced in software development, problem-solving, and team collaboration, with a strong focus on efficiency and knowledge sharing.
        </p>

        {/* Experience Items */}
        <div className="space-y-0">
          {workExperienceData.map((experience, index) => (
            <div key={experience.id} className="relative flex flex-col md:flex-row gap-4 md:gap-6 scroll-animate fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}>

              {/* Left: Company Info */}
              <div className="md:w-58 md:shrink-0">
                <div className="flex items-start gap-3">
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: "var(--color-blue-primary)" }} />

                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold mb-1"
                      style={{ color: "var(--ui-heading-color)" }}>
                      {experience.company}
                    </h3>
                    <p className="text-sm mb-1"
                      style={{ color: "var(--ui-subheading-color)" }}>
                      {experience.period}
                    </p>
                    {experience.website && (
                      <a href={experience.website} target="_blank" rel="noopener noreferrer"
                        className="text-xs opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1 mt-1"
                        style={{ color: "var(--ui-text-color)" }}>
                        <Globe width={12} height={12} />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Role and Description */}
              <div className="flex-1 pb-8 pl-6 md:pl-0">
                <h4 className="text-lg font-semibold mb-2"
                  style={{ color: "var(--ui-heading-color)" }}>
                  {experience.role}
                </h4>

                <p className="text-sm mb-3"
                  style={{ color: "var(--ui-subheading-color)" }}>
                  {experience.location}
                </p>

                {/* Description Points */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--ui-text-color)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--ui-text-color)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                {experience.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <span key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          backgroundColor: "var(--color-gray-100)",
                          color: "var(--ui-text-color)",
                        }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 scroll-animate fade-up"
          style={{ color: "var(--ui-heading-color)" }}>
          My Education
        </h2>
        <p className="text-base md:text-lg mb-12 scroll-animate fade-up"
          style={{ color: "var(--ui-subheading-color)" }}>
          Graduated with a strong foundation in computer science, covering software engineering, algorithms, databases, networking, and artificial intelligence.
        </p>

        {/* Education Items */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={education.id} className="relative flex flex-col md:flex-row gap-4 md:gap-6 scroll-animate fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}>

              {/* Left: Institution Info */}
              <div className="md:w-58 md:shrink-0">
                <div className="flex items-start gap-3">
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-blue-primary)" }} />

                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold mb-1"
                      style={{ color: "var(--ui-heading-color)" }}>
                      {education.institution}
                    </h3>
                    <p className="text-sm"
                      style={{ color: "var(--ui-subheading-color)" }}>
                      {education.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Degree and Description */}
              <div className="flex-1 pb-8 pl-6 md:pl-0">
                <h4 className="text-lg font-semibold mb-2"
                  style={{ color: "var(--ui-heading-color)" }}>
                  {education.degree}
                </h4>

                <p className="text-sm mb-4"
                  style={{ color: "var(--ui-subheading-color)" }}>
                  {education.location} • CGPA: {education.cgpa}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {education.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--ui-text-color)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--ui-text-color)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
