"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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
    `cursor-pointer transition duration-300 ${
      active === id
        ? "text-[#c6a969] font-semibold"
        : "text-[#444] hover:text-[#c6a969]"
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-[#eee] sticky top-0 bg-[#fdfaf6]/95 backdrop-blur-md z-50">
      <h1 className="text-xl font-semibold tracking-wide">AUTOMATE.ID</h1>
      <div className="space-x-6 text-sm">
        <a href="#home" className={getLinkClass("home")}>Home</a>
        <a href="#features" className={getLinkClass("features")}>Features</a>
        <a href="#cta" className={getLinkClass("cta")}>Contact</a>
      </div>
    </nav>
  )
}