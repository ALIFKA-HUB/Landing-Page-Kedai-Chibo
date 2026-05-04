import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="bg-onyx py-16 sm:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <img
            src="/logos-transparent.png"
            alt="Kedai Chibo"
            className="h-10 w-auto invert opacity-40 grayscale"
          />

          {/* Divider */}
          <div className="h-[1px] w-12 bg-white/10" />

          {/* Tagline */}
          <p className="font-display text-sm italic text-white/30">
            Zen Dining Experience
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-white/20">
            © 2026 Kedai Chibo. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
