// components/Projects.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Maximize2, X } from "lucide-react";

const categories = ["All", "Residential", "Commercial"];

const projects = [
  {
    id: 1,
    title: "Minimalist Luxury Villa",
    category: "Residential",
    image: "/MinLuxVilla.png",
    size: "large",
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/CorpHead.png",
    size: "small",
  },
  {
    id: 3,
    title: "Penthouse Collection",
    category: "Residential",
    image: "/PentColl.png",
    size: "small",
  },
  {
    id: 4,
    title: "Modern Office Suite",
    category: "Commercial",
    image: "/ModernOfficeSuite.png",
    size: "large",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground">
            A curated selection of our most exceptional work.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-muted-foreground hover:text-primary hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  activeCategory === "All" && project.size === "large" ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    activeCategory === "All" && project.size === "large" ? "h-[400px] md:h-full" : "h-[400px] md:h-[500px]"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === project.id ? "opacity-100" : "opacity-0 md:opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 translate-y-0">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm uppercase tracking-wider mb-3">
                      {project.category}
                    </p>
                    <div className="flex gap-3">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-primary transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-primary transition-colors">
                        <Maximize2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtle indicator on non-hover */}
                {hoveredIndex !== project.id && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Screen Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative w-full flex-grow overflow-hidden bg-black/50 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-3xl font-serif font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-primary uppercase tracking-wider font-semibold text-sm">
                  {selectedProject.category}
                </p>
                <p className="mt-4 text-muted-foreground">
                  A comprehensive {selectedProject.category.toLowerCase()} interior project
                  featuring end-to-end design and execution — from space planning and material
                  selection to on-site build and final styling.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};