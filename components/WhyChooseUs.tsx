// components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import { Gem, Hammer, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest sustainably sourced materials, finishes, and fixtures.",
  },
  {
    icon: Hammer,
    title: "In-House Execution",
    description: "Our own team of skilled craftsmen and project managers on every site.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Rigorous project management ensuring on-time, on-budget completion.",
  },
  {
    icon: ThumbsUp,
    title: "5-Year Warranty",
    description: "Dedicated post-project support and warranty on all our work.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4">
              Uncompromising
              <br />
              Quality & Service
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don’t just design spaces; we build them. From 3D visualization to final
              walkthrough, our integrated design-and-build approach ensures quality at
              every stage — no middlemen, no surprises.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <feature.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/CraftMan.png"
                alt="Craftsmanship"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="/CraftMat.png"
                alt="Materials"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};