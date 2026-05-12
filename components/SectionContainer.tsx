// components/SectionContainer.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export const SectionContainer = ({
  id,
  children,
  className = "",
  animate = true,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};