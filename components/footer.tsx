"use client";

import { useState, useEffect } from "react";
import { User, Phone, Mail } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { navItems } from "@/lib/data";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [contactType, setContactType] = useState<"phone" | "email">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  // Utility Functions
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    return /^\+\d{8,15}$/.test(cleanPhone);
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Validate based on contact type
    if (contactType === "phone") {
      if (!formData.phone || !validatePhoneNumber(formData.phone)) {
        setStatus({ type: "error", message: "Please enter a valid phone number with country code" });
        setIsLoading(false);
        return;
      }
    } else {
      if (!formData.email || !validateEmail(formData.email)) {
        setStatus({ type: "error", message: "Please enter a valid email address" });
        setIsLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", phone: "", email: "", message: "" });
        setShowMessage(false);
      } else {
        const data = await res.json();
        setStatus({ type: "error", message: data.error || "Failed to send message" });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  // Component Functions
  const renderNameInput = () => (
    <div className="relative input-with-icon">
      <input type="text" placeholder="Name" required value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-4 pl-12 rounded-xl text-base outline-none border-2 border-transparent focus:border-(--color-primary-blue) transition-colors"
        style={{ backgroundColor: "var(--color-gray-100)", color: "var(--color-text-primary)", height: "56px", boxSizing: "border-box" }} />
      <User className="input-icon absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50 transition-all duration-200" style={{ color: "var(--ui-text-color)" }} />
    </div>
  );

  const renderContactToggle = () => (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex p-1 rounded-lg z-10" style={{ backgroundColor: "var(--toggle-background)" }}>
      <div className={`absolute top-1 bottom-1 w-8 rounded-md transition-all duration-300 ${contactType === "phone" ? "left-1" : "left-9"}`}
        style={{ backgroundColor: "var(--color-primary-blue)" }} />
      <button type="button" onClick={() => setContactType("phone")}
        className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-md transition-colors ${contactType === "phone" ? "text-white" : "text-slate-400"}`}>
        <Phone className="w-4 h-4" />
      </button>
      <button type="button" onClick={() => setContactType("email")}
        className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-md transition-colors ${contactType === "email" ? "text-white" : "text-slate-400"}`}>
        <Mail className="w-4 h-4" />
      </button>
    </div>
  );

  const renderPhoneEmailInput = () => (
    <div className="relative phone-input-wrapper input-with-icon">
      {contactType === "phone" ? (
        <>
          <PhoneInput
            defaultCountry="my"
            value={formData.phone}
            onChange={(phone: string) => setFormData({ ...formData, phone })}
            onFocus={() => setIsPhoneFocused(true)}
            onBlur={() => setIsPhoneFocused(false)}
          />
          <Phone
            className="phone-icon absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10 pointer-events-none transition-all duration-200"
            style={{
              color: isPhoneFocused ? (document.documentElement.getAttribute('data-theme') === 'dark' ? '#a4b5c8' : '#7c8ba1') : "var(--ui-text-color)",
              opacity: isPhoneFocused ? 0.7 : 0.5
            }}
          />
        </>
      ) : (
        <>
          <input type="email" placeholder="Email Address" required value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 pl-12 pr-24 rounded-xl text-base outline-none border-2 border-transparent focus:border-(--color-primary-blue) transition-colors"
            style={{ backgroundColor: "var(--color-gray-100)", color: "var(--color-text-primary)", height: "56px", boxSizing: "border-box" }} />
          <Mail className="input-icon absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50 transition-all duration-200" style={{ color: "var(--ui-text-color)" }} />
        </>
      )}
      {renderContactToggle()}
    </div>
  );

  const renderMessageField = () => (
    <>
      {!showMessage ? (
        <button type="button" onClick={() => setShowMessage(true)}
          className="text-sm font-medium flex items-center gap-2 w-fit text-(--color-primary-blue) hover:text-(--color-primary-blue)/90">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          Add a message
        </button>
      ) : (
        <textarea placeholder="Your message (optional)" rows={4} value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-4 rounded-xl text-base outline-none border-2 border-transparent focus:border-(--color-primary-blue) transition-colors resize-y min-h-25"
          style={{ backgroundColor: "var(--color-gray-100)", color: "var(--color-text-primary)" }} />
      )}
    </>
  );

  const renderStatusMessage = () => (
    status && (
      <p className={`text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
        {status.message}
      </p>
    )
  );

  const renderSubmitButton = () => (
    <button type="submit" disabled={isLoading}
      className="p-4 rounded-xl font-medium text-base text-white transition-all duration-200 hover:opacity-95 active:scale-98 disabled:opacity-50"
      style={{ backgroundColor: "var(--color-primary-blue)" }}>
      {isLoading ? "Sending..." : "Start Conversation"}
    </button>
  );

  const renderContactForm = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {renderNameInput()}
      {renderPhoneEmailInput()}
      {renderMessageField()}
      {renderStatusMessage()}
      {renderSubmitButton()}
    </form>
  );

  const renderContactHeading = () => (
    <div className="flex flex-col justify-center gap-2">
      <h2 className="text-2xl md:text-4xl font-semibold" style={{ color: "var(--ui-heading-color)" }}>
        Let&apos;s Start a Conversation
      </h2>
      <p className="text-lg" style={{ color: "var(--ui-subheading-color)" }}>
        I&apos;m open to new opportunities. Feel free to reach out using the following form.
      </p>
    </div>
  );

  const renderMobileLayout = () => (
    <div className="lg:hidden p-6 md:p-8 rounded-lg border scroll-animate fade-up"
      style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)", boxShadow: "var(--ui-shadow-card)" }}>
      <div className="flex flex-col gap-8 py-5">
        {renderContactHeading()}
        <div>{renderContactForm()}</div>
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="hidden lg:flex flex-row gap-8">
      {/* Left Side */}
      <div className="flex flex-col flex-1 justify-center gap-2 p-8 md:p-12 rounded-lg border scroll-animate fade-up"
        style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)", boxShadow: "var(--ui-shadow-card)" }}>
        <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "var(--ui-heading-color)" }}>
          Let&apos;s Start a Conversation
        </h2>
        <p className="text-lg" style={{ color: "var(--ui-subheading-color)" }}>
          I&apos;m open to new opportunities. Feel free to reach out using the following form.
        </p>
      </div>
      {/* Right Side - Form */}
      <div className="flex-1 p-6 md:p-8 rounded-lg border scroll-animate fade-up delay-200"
        style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-gray-200)", boxShadow: "var(--ui-shadow-card)" }}>
        {renderContactForm()}
      </div>
    </div>
  );

  const renderSocialLinks = () => (
    <div className="flex gap-2">
      <a href="https://www.linkedin.com/in/faisal-al-madhehagi/" target="_blank" rel="noopener noreferrer"
        className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-(--color-primary-purple) hover:bg-[#f1f5f9] transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-[#f1f5f9] group-hover:fill-(--color-primary-purple)">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a href="https://github.com/faisalsamer" target="_blank" rel="noopener noreferrer"
        className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-(--color-primary-purple) hover:bg-[#f1f5f9] transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-[#f1f5f9] group-hover:fill-(--color-primary-purple)">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="mailto:faisalsameer55@gmail.com" target="_blank" rel="noopener noreferrer"
        className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-(--color-primary-purple) hover:bg-[#f1f5f9] transition-colors group">
        <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#f1f5f9] group-hover:text-(--color-primary-purple)" />
      </a>
      <a href="https://wa.me/601128745561" target="_blank" rel="noopener noreferrer"
        className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-(--color-primary-purple) hover:bg-[#f1f5f9] transition-colors group">
        <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-[#f1f5f9] group-hover:fill-(--color-primary-purple)">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );

  const renderNavigationLinks = () => (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-lg">
      {navItems.map((item) => (
        <button key={item.scrollTo} onClick={() => scrollToSection(item.scrollTo)}
          className="font-semibold transition-colors duration-100 text-[#f1f5f9] hover:text-amber-400">
          {item.name}
        </button>
      ))}
    </div>
  );

  const renderFooterBottom = () => (
    <div className="flex flex-col items-center justify-end gap-4 md:gap-6 pt-10 lg:pt-15 pb-12 md:pb-16 lg:pb-20 z-10 px-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f1f5f9] text-center">
        Faisal Samer
      </h3>
      {renderNavigationLinks()}
      {renderSocialLinks()}
      <p className="text-xs md:text-sm font-bold text-center text-[#d1d5db]">
        &copy; Created by Faisal Samer. All rights Reserved.
      </p>
    </div>
  );

  return (
    <footer id="contact" className="relative flex flex-col items-center justify-end lg:pt-15">
      {/* Contact Form Section */}
      <div className="w-full max-w-7xl z-10 px-4 sm:px-6 md:px-8 pt-10 pb-8 lg:pt-0 lg:mb-0">
        {renderMobileLayout()}
        {renderDesktopLayout()}
      </div>

      {/* Footer Bottom Section */}
      {renderFooterBottom()}

      {/* Purple Background */}
      <div className="absolute bottom-0 w-full h-110 md:h-96 lg:h-116 z-0"
        style={{ backgroundColor: "var(--color-primary-purple)" }} />
    </footer>
  );
}
