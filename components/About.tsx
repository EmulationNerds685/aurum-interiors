// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Spaces Delivered" },
  { icon: Award, value: "25+", label: "Design Awards" },
  { icon: Clock, value: "12+", label: "Years of Excellence" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Luxury interior design"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4">
              Crafting Spaces That
              <br />
              Inspire Living
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Aurum Interiors, we are a full-service interior design and execution firm. 
              From initial concept to final handover, we manage every aspect of your project — 
              space planning, material selection, custom furnishing, and on-site execution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over a decade of experience across residential, commercial, and hospitality 
              projects, we bring together architects, designers, and skilled craftsmen under 
              one roof to deliver spaces that are both beautiful and built to last.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};