// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Sofa, 
  Building2, 
  Box, 
  Home,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    description: "Complete home interiors — from living rooms to kitchens, designed and executed to match your lifestyle.",
    image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Offices, retail stores, and showrooms designed to boost productivity and leave a lasting impression.",
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Box,
    title: "Modular Fit-Outs",
    description: "Space-efficient modular kitchens, wardrobes, and storage solutions tailored to your floor plan.",
    image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Sofa,
    title: "Custom Furnishing",
    description: "Bespoke furniture and decor pieces crafted to complement your interior design perfectly.",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2">
            Our Services
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground">
            Comprehensive interior solutions from concept to completion — for every kind of space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <service.icon className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-serif font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-primary text-sm font-semibold flex items-center gap-1 group/btn hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};