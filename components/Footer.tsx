"use client";

import { Sparkles, Heart, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
});

const footerLinks = {
  Company: ["About", "Careers", "Press", "Sustainability"],
  Services: ["Residential Interiors", "Commercial Spaces", "Modular Fit-Outs", "Custom Furnishing"],
};

export const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubscribe = async (data: any) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Subscribed successfully! Welcome to Aurum.");
    reset();
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-2xl font-serif font-semibold">Aurum</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Full-service interior design and execution — from concept to completion, for homes and businesses.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>123 Design Avenue, NY</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@auruminteriors.com</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for design inspiration and updates.
            </p>
            <form onSubmit={handleSubmit(onSubscribe)} className="relative">
              <input
                type="text"
                {...register("email")}
                placeholder="Email Address"
                className={`w-full bg-white/10 border-b ${errors.email ? 'border-red-500' : 'border-white/20'} focus:border-primary outline-none py-2 px-3 text-white transition-colors placeholder:text-white/40 text-sm rounded-t-md`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-primary transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 absolute -bottom-5">
                  {errors.email.message as string}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Aurum Interiors. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed with <Heart className="w-4 h-4 text-primary fill-primary" /> by [Your Name/Agency]
          </p>
        </div>
      </div>
    </footer>
  );
};