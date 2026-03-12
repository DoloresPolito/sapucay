"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0.9}}
        animate={{ opacity: 1}}
        // exit={{ opacity: 0.5}}
        transition={{
          duration:1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}