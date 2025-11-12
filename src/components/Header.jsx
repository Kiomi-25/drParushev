import React, { useState, useEffect } from "react";
import LOGO from "../assets/LOGO.svg";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLang, toggleLanguage, translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}>
      <nav className="max-w-6xl mx-auto py-4 px-4 sm:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img
              src={LOGO}
              alt="Dental Practice Logo"
              className="w-14 h-14 object-contain transform transition-transform group-hover:scale-105"
            />
            <div className="text-center">
              <div className="text-base font-bold text-gray-800 group-hover:text-[#014d7f] transition-colors uppercase tracking-wide">
                {translations.logoTitle}
              </div>
              <div className="text-sm font-semibold text-[#014d7f] italic -mt-1">
                {translations.logoSubtitle}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {translations.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-[#0071BB] font-medium text-base transition-colors group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A79D] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Book Button & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#book"
              className="px-6 py-2.5 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
              {translations.bookButton}
            </a>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-[#0071BB] hover:text-[#0071BB] transition-all duration-300">
              {currentLang}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="py-4 space-y-3 border-t border-gray-200">
            {translations.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-[#0071BB] hover:bg-gray-50 rounded-lg font-medium transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-3 px-4 pt-3">
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center px-6 py-2.5 bg-[#0071BB] text-white font-semibold rounded-lg hover:bg-[#005a99] transition-colors">
                {translations.bookButton}
              </a>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2.5 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-[#0071BB] hover:text-[#0071BB] transition-all">
                {currentLang}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
