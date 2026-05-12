// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-white/80 text-sm uppercase tracking-wider mb-4 border-l-4 border-primary pl-4">
              Designing Spaces Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight"
          >
            Where Vision
            <br />
            <span className="text-primary">Meets Execution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mt-6 max-w-xl"
          >
            End-to-end interior design and execution for homes, offices, and commercial spaces.
            From concept to completion — every detail, perfected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              View Our Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Phone size={18} /> Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>


    </section>
  );
};