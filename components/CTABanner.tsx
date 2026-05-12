// components/CTABanner.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/70" />
          </div>
          
          <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4"
            >
              Let's Create Something Extraordinary
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-lg max-w-2xl mx-auto mb-8"
            >
              Ready to transform your space? Our design team is here to take your project from concept to reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="bg-white text-primary px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                <MessageCircle size={18} /> WhatsApp Us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};