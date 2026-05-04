import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="animate-gentle-pulse">
              <img
                src="/logos-transparent.png"
                alt="Kedai Chibo"
                className="h-24 w-auto logo-blend"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-body text-xs tracking-[0.3em] text-warm-gray uppercase"
            >
              Memuat Pengalaman...
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
              className="h-[1px] bg-gold"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
