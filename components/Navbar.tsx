// components/Navbar.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy: detect which section is currently in view
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = navLinks.map((link) => link.href.replace("#", ""));
    let current = sections[0];

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Section is "active" when its top is within the upper 40% of viewport
        if (rect.top <= window.innerHeight * 0.4) {
          current = sectionId;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Dynamic colors based on scroll position
  const textColor = isScrolled ? "text-foreground/80" : "text-white/80";
  const textHoverColor = isScrolled ? "hover:text-primary" : "hover:text-white";
  const activeTextColor = isScrolled ? "text-primary" : "text-white";
  const logoColor = isScrolled ? "text-foreground" : "text-white";
  const hamburgerColor = isScrolled ? "text-foreground" : "text-white";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              <Sparkles className={`w-6 h-6 text-primary drop-shadow-sm transition-all duration-300 group-hover:scale-110`} />
            </motion.div>
            <span className={`text-2xl font-serif font-semibold tracking-tight transition-colors duration-300 ${logoColor}`}>
              Aurum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? activeTextColor + " font-semibold"
                      : textColor + " " + textHoverColor
                  }`}
                >
                  {link.name}
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <button className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${hamburgerColor}`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl pt-24 px-8 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-serif py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/5 font-semibold"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 pt-4 border-t border-border"
                >
                  <button
                    className="bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-center w-full font-semibold hover:bg-primary/90 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};