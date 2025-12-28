"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { navItems } from "@/lib/data";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 400) {
        setIsHeaderFixed(false);
        setIsHeaderVisible(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setIsHeaderFixed(true);
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderFixed(true);
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    controlHeader();
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isSidebarOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  const ModeIcon = ({ size = 16 }: { size?: number }) => (
    isDarkMode ? (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--color-primary-blue)" />
        <circle cx="17" cy="7" r="1" fill="var(--color-primary-blue)" />
        <circle cx="19" cy="9" r="0.5" fill="var(--color-primary-blue)" />
      </svg>
    ) : (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" fill="var(--color-primary-blue)" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="var(--color-primary-blue)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  );

  const SocialIcon = ({ type, className = "" }: { type: "linkedin" | "email" | "whatsapp" | "github"; className?: string }) => {
    const paths = {
      linkedin: "M25 22.5V16C25 13.5 23.5 11 20.5 11C19 11 17.5 11.8 16.8 13H16.7V11.3H13V22.5H16.8V16.7C16.8 15.1 17.2 13.6 19.1 13.6C21 13.6 21.2 15.4 21.2 16.8V22.5H25ZM8 22.5H11.8V11.3H8V22.5ZM9.9 7C8.8 7 8 7.8 8 8.9C8 10 8.8 10.8 9.9 10.8C11 10.8 11.8 10 11.8 8.9C11.8 7.8 11 7 9.9 7Z",
      email: "M24 10H8C7.4 10 7 10.4 7 11V21C7 21.6 7.4 22 8 22H24C24.6 22 25 21.6 25 21V11C25 10.4 24.6 10 24 10ZM22.5 12L16 16.5L9.5 12H22.5ZM9 20V13.5L16 18L23 13.5V20H9Z",
      whatsapp: "M16 8C11.6 8 8 11.6 8 16C8 17.4 8.4 18.7 9.1 19.8L8.2 23.8L12.3 22.9C13.4 23.5 14.7 23.8 16 23.8C20.4 23.8 24 20.2 24 15.8C24 11.4 20.4 8 16 8ZM20.2 19.2C20 19.7 19.2 20.2 18.7 20.3C18.3 20.4 17.8 20.4 17.3 20.2C16.9 20.1 16.4 19.8 15.8 19.5C13.9 18.6 12.7 16.7 12.6 16.5C12.5 16.4 11.8 15.4 11.8 14.4C11.8 13.4 12.3 12.9 12.5 12.7C12.7 12.5 12.9 12.4 13.1 12.4C13.2 12.4 13.3 12.4 13.4 12.4C13.6 12.4 13.8 12.4 14 12.9C14.2 13.4 14.7 14.4 14.8 14.5C14.9 14.6 14.9 14.7 14.8 14.8C14.7 14.9 14.7 15 14.6 15.1C14.5 15.2 14.4 15.3 14.3 15.4C14.2 15.5 14.1 15.6 14.2 15.8C14.3 16 14.7 16.6 15.2 17.1C15.9 17.7 16.5 17.9 16.7 18C16.9 18.1 17 18.1 17.1 17.9C17.2 17.7 17.6 17.2 17.8 17C18 16.8 18.1 16.8 18.3 16.9C18.5 17 19.5 17.5 19.7 17.6C19.9 17.7 20 17.8 20.1 17.9C20.2 18 20.2 18.5 20.2 19.2Z",
      github: "M16 8C11.6 8 8 11.6 8 16C8 19.4 10.3 22.3 13.5 23.3C13.9 23.4 14.1 23.1 14.1 22.9C14.1 22.7 14.1 22.1 14.1 21.4C12 21.9 11.5 20.5 11.5 20.5C11.2 19.7 10.7 19.4 10.7 19.4C10 18.9 10.7 18.9 10.7 18.9C11.4 19 11.8 19.6 11.8 19.6C12.5 20.7 13.6 20.4 14.1 20.2C14.2 19.7 14.4 19.4 14.6 19.2C13.1 19 11.5 18.4 11.5 15.8C11.5 15 11.8 14.4 12.2 13.9C12.1 13.7 11.9 13 12.3 12C12.3 12 13 11.8 14.1 12.5C14.7 12.3 15.4 12.2 16 12.2C16.6 12.2 17.3 12.3 17.9 12.5C19 11.8 19.7 12 19.7 12C20.1 13 19.9 13.7 19.8 13.9C20.2 14.4 20.5 15 20.5 15.8C20.5 18.4 18.9 19 17.4 19.2C17.7 19.4 17.9 19.9 17.9 20.6C17.9 21.6 17.9 22.4 17.9 22.6C17.9 22.8 18.1 23.1 18.5 23C21.7 22 24 19.4 24 16C24 11.6 20.4 8 16 8Z",
    };

    return (
      <svg viewBox="0 0 32 32" className={`relative group transition-all duration-300 hover:scale-105 z-10 ${className}`} style={{ borderRadius: "50%" }}>
        <path d="M32 0H0V32H32V0Z" className="fill-transparent group-hover:fill-(--color-primary-blue) transition-colors duration-300" fillRule="evenodd" />
        <path d="M16,31 C24.2842712,31 31,24.2842712 31,16 C31,7.71572875 24.2842712,1 16,1 C7.71572875,1 1,7.71572875 1,16 C1,24.2842712 7.71572875,31 16,31 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z" className="fill-[var(--color-primary-blue)] group-hover:fill-transparent transition-colors duration-300" />
        <path d={paths[type]} className="fill-(--color-primary-blue) group-hover:fill-white transition-colors duration-300" />
      </svg>
    );
  };

  return (
    <div className="select-none">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out sm:hidden ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ backgroundColor: "var(--color-card)" }}>
        <div className="flex flex-col h-full justify-center items-center pt-18">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <button key={item.scrollTo} onClick={() => scrollToSection(item.scrollTo)}
                className="text-3xl font-semibold transition-colors duration-200 active:text-(--color-primary-blue)"
                style={{ color: "var(--color-text-primary)" }}>
                {item.name}
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <button onClick={toggleTheme}
              className="relative w-26 h-12 rounded-full mt-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_6px_rgba(60,101,255,0.15)]"
              style={{ background: "rgba(60, 101, 255, 0.1)" }}>
              <div className={`absolute top-1 w-10 h-10 rounded-full transition-transform duration-500 ease-in-out flex items-center justify-center ${isDarkMode ? "translate-x-[58px]" : "translate-x-1"}`}
                style={{ backgroundColor: "var(--color-card)", boxShadow: "var(--ui-shadow-card)" }}>
                <ModeIcon size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-3 text-xs font-bold pointer-events-none transition-all duration-500"
                style={{ color: "var(--color-text-primary)" }}>
                <span className={`ml-1 transition-opacity duration-500 ${isDarkMode ? "opacity-100" : "opacity-0"}`}>Night</span>
                <span className={`mr-1 transition-opacity duration-500 ${isDarkMode ? "opacity-0" : "opacity-100"}`}>DAY</span>
              </div>
            </button>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-0">
              <a href="https://www.linkedin.com/in/faisal-al-madhehagi/" target="_blank" rel="noopener noreferrer"
                className="relative group flex items-center p-3 rounded-lg transition-colors duration-200">
                <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                <SocialIcon type="linkedin" className="w-10 h-10" />
              </a>
              <a href="https://github.com/faisalsamer" target="_blank" rel="noopener noreferrer"
                className="relative group flex items-center p-3 rounded-lg transition-colors duration-200">
                <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                <SocialIcon type="github" className="w-10 h-10" />
              </a>
              <a href="mailto:faisalsameer55@gmail.com" className="relative group flex items-center p-3 rounded-lg transition-colors duration-200">
                <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                <SocialIcon type="email" className="w-10 h-10" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="relative group flex items-center p-3 rounded-lg transition-colors duration-200">
                <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                <SocialIcon type="whatsapp" className="w-10 h-10" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Floating Header (Desktop) */}
      <header className={`fixed left-1/2 -translate-x-1/2 z-[51] bg-[var(--color-card)]/80 backdrop-blur-sm transition-all duration-300 hidden sm:flex items-center justify-between gap-2 sm:gap-10 max-w-[1000px] p-2 px-4 rounded-full shadow-xl border border-gray-200/50 hover:bg-[var(--color-card)] hover:scale-[1.01] ${isHeaderFixed ? "top-6 opacity-100 scale-100" : "top-4 opacity-0 scale-90"}`}>
        <Link href="/" className={`transform scale-[0.85] sm:scale-90 relative inline-block focus:outline-none cursor-pointer fade scroll-animate delay-100 transition-all duration-700 ease-in-out ${animate ? "visible" : ""}`}>
          <span className="text-[var(--color-primary-blue)] font-bold text-xl">FS</span>
        </Link>
        <div className={`flex items-center fade scroll-animate delay-100 transition-all duration-700 ease-in-out ${animate ? "visible" : ""} gap-2 sm:gap-4 text-sm`}>
          {navItems.map((item) => (
            <button key={item.scrollTo} onClick={() => scrollToSection(item.scrollTo)}
              className="nav-link text-xs md:text-sm whitespace-nowrap">
              {item.name}
            </button>
          ))}
          <button onClick={toggleTheme} className=" hover:bg-gray-100 p-2 rounded-full transition-colors duration-200">
            <ModeIcon />
          </button>
        </div>
      </header>

      {/* Mobile Fixed Header (appears on scroll up) */}
      <header className={`${isHeaderVisible ? "translate-y-0 duration-700" : "-translate-y-full"} sm:hidden fixed top-0 flex items-center justify-center w-full z-50 transition-all duration-300 ease-in-out bg-[var(--color-card)]/80 backdrop-blur-sm py-4`}>
        <div className="flex items-center justify-between transition-all duration-700 ease-in-out w-full mx-4 max-w-7xl">
          <Link href="/" className={`relative inline-block focus:outline-none cursor-pointer fade scroll-animate delay-100 transition-all duration-200 ease-in-out ${animate ? "visible" : ""}`}>
            <span className="text-(--color-primary-blue) font-bold text-xl">FS</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-transparent transition-all duration-700 relative w-10 h-10 flex items-center justify-center">
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? "rotate-45 top-3" : "top-1"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
              <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out top-3 ${isSidebarOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
              <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? "-rotate-45 top-3" : "top-5"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
            </div>
          </button>
        </div>
      </header>

      {/* Main Header */}
      <header className={`relative flex items-center justify-center w-full z-[51] transition-all duration-300 ease-in-out py-4 md:py-7 ${isHeaderFixed ? "opacity-0" : "delay-300 opacity-100"}`}>
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${isHeaderFixed ? "w-full gap-4" : "delay-100 w-full mx-4 md:mx-10 max-w-7xl"}`}>
          <Link href="/" className={`relative inline-block focus:outline-none cursor-pointer fade scroll-animate delay-100 transition-all duration-200 ease-in-out ${animate ? "visible" : ""} ${isHeaderFixed ? "transform scale-90" : "delay-100 transform scale-100"}`}>
            <span className={`text-[var(--color-primary-blue)] font-bold transition-all duration-200 ${isHeaderFixed ? "text-xl" : "delay-100 text-2xl"}`}>FS</span>
          </Link>

          <div className="flex items-center gap-5">
            {/* Desktop Nav */}
            <div className={`hidden sm:flex gap-2 md:gap-3 text-sm md:text-lg fade scroll-animate delay-100 transition-all duration-700 ease-in-out ${animate ? "visible" : ""} ${isHeaderFixed ? "gap-4 text-sm" : "delay-100 gap-2 md:gap-3 text-sm md:text-lg"}`}>
              {navItems.map((item) => (
                <button key={item.scrollTo} onClick={() => scrollToSection(item.scrollTo)}
                  className="nav-link text-sm md:text-base">
                  {item.name}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Social Icons */}
            <div className={`flex justify-center items-center gap-3 transition-all duration-700 ease-in-out ${isHeaderFixed ? "opacity-0 scale-0 w-0 overflow-hidden translate-x-4" : "delay-100 opacity-100 scale-100 translate-x-0"}`}>
              <div className={`scale-in scroll-animate ${animate ? "visible delay-100" : ""}`}>
                <button onClick={toggleTheme}
                  className="hidden sm:block relative w-[60px] h-7 md:w-20 md:h-10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_6px_rgba(60,101,255,0.15)]"
                  style={{ background: "rgba(60, 101, 255, 0.1)" }}>
                  <div className={`absolute top-1 w-5 h-5 md:w-8 md:h-8 rounded-full transition-transform duration-500 ease-in-out flex items-center justify-center ${isDarkMode ? "translate-x-9 md:translate-x-11" : "translate-x-1"}`}
                    style={{ backgroundColor: "var(--color-card)", boxShadow: "var(--ui-shadow-card)" }}>
                    <ModeIcon />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-0.5 md:px-2 text-[10px] font-bold transition-all duration-500 pointer-events-none"
                    style={{ color: "var(--color-text-primary)" }}>
                    <span className={`ml-[5px] md:ml-[2px] transition-opacity duration-500 ${isDarkMode ? "opacity-100" : "opacity-0"}`}>Night</span>
                    <span className={`mr-[5px] md:mr-[3px] transition-opacity duration-500 ${isDarkMode ? "opacity-0" : "opacity-100"}`}>DAY</span>
                  </div>
                </button>
              </div>

              {/* Desktop Social Icons */}
              <div className="flex gap-1">
                <a href="https://www.linkedin.com/in/faisal-al-madhehagi/" target="_blank" rel="noopener noreferrer"
                  className={`relative group hidden sm:block scale-in scroll-animate ${animate ? "visible" : ""}`}>
                  <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                  <SocialIcon type="linkedin" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="https://github.com/faisalsamer" target="_blank" rel="noopener noreferrer"
                  className={`relative group hidden sm:block scale-in scroll-animate ${animate ? "visible" : ""} delay-100`}>
                  <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                  <SocialIcon type="github" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="mailto:faisalsameer55@gmail.com"
                  className={`relative group hidden sm:block scale-in scroll-animate ${animate ? "visible" : ""} delay-200`}>
                  <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                  <SocialIcon type="email" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                  className={`relative group hidden sm:block scale-in scroll-animate ${animate ? "visible" : ""} delay-300`}>
                  <div className="absolute inset-[-2px] rounded-full opacity-0 blur-sm group-hover:opacity-20 transition-all duration-300" style={{ backgroundColor: "var(--color-primary-blue)" }} />
                  <SocialIcon type="whatsapp" className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`sm:hidden p-2 rounded-md hover:bg-transparent transition-all duration-700 relative w-10 h-10 flex items-center justify-center ${isHeaderFixed ? "opacity-0 scale-0 w-0 overflow-hidden translate-x-4" : "opacity-100 scale-100 translate-x-0"}`}>
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? "rotate-45 top-3" : "top-1"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
                <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out top-3 ${isSidebarOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
                <span className={`absolute block h-0.5 w-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? "-rotate-45 top-3" : "top-5"}`} style={{ backgroundColor: "var(--color-text-primary)" }} />
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
