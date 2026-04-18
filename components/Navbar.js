"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sectionIds = ["home", "features", "cta"];
      
      let current = "home";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          current = sectionIds[i];
          break;
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id) =>
    `block transition duration-300 ${
      active === id
        ? "text-[#c6a969] font-semibold"
        : "text-[#444] hover:text-[#c6a969]"
    }`;

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 md:py-5 border-b border-[#eee] sticky top-0 bg-[#fdfaf6]/95 backdrop-blur-md z-50">
      <h1 className="text-xl font-semibold tracking-wide">TOKOIOS</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm">
        <a href="#home" className={getLinkClass("home")}>Home</a>
        <a href="#features" className={getLinkClass("features")}>Features</a>
        <a href="#cta" className={getLinkClass("cta")}>Contact</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-2 text-[#444] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#fdfaf6] border-b border-[#eee] shadow-sm md:hidden">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm">
            <a href="#home" className={getLinkClass("home")} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#features" className={getLinkClass("features")} onClick={() => setIsOpen(false)}>Features</a>
            <a href="#cta" className={getLinkClass("cta")} onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}