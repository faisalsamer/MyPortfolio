"use client";
import { useTheme } from "@/context/theme-context";

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const { isDarkMode } = useTheme();

  return (
    <section className="flex items-center justify-center pt-16 md:pt-20 pb-16 md:pb-20 px-4 sm:px-6 md:px-8"
      style={{ background: "linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))" }}>
      <div className="flex flex-col items-center max-w-4xl scroll-animate fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#f1f5f9]">
          Opening to new opportunities soon.
        </h2>
        <p className="text-lg md:text-xl text-center text-[#f1f5f9] mt-4 mb-8">
          I&apos;m currently wrapping up my current commitments and will be available for new opportunities in the coming months. If you&apos;re looking for a dedicated full-stack developer or want to discuss future collaborations, feel free to reach out!
        </p>
        <button onClick={scrollToContact}
          className={`mt-5 px-8 py-3 rounded-md font-semibold transition-all duration-200 bg-(--color-card) ${isDarkMode ? 'hover:bg-(--color-card)/90' : 'hover:bg-gray-100'} active:scale-97`}
          style={{
            fontFamily: "var(--font-family-secondary)",
            color: "var(--color-primary-purple)",
            border: "1px solid var(--color-gray-200)",
          }}>
          Contact Me
        </button>
      </div>
    </section>
  );
}
