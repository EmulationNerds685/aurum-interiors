"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Share, Camera, Briefcase } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type ContactValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We'll get back to you within 24 hours.");
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2">
            Let's Discuss Your Project
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-4 mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                  placeholder="hello@example.com"
                />
                {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    123 Design Avenue, Creative District<br />
                    New York, NY 10001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">hello@auruminteriors.com</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Share size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Camera size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <Briefcase size={18} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 bg-gray-200 relative">
              <img
                src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Map location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                Find us on Google Maps
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};