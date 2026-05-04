import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Kedai Chibo Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/logos-transparent.png"
              alt="Kedai Chibo Logo"
              className="mx-auto h-48 w-auto invert opacity-90"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
            className="mb-6 font-body text-xs font-medium tracking-[0.35em] text-white/70 uppercase sm:text-sm"
          >
            Eat & Drink &nbsp;•&nbsp; Cianjur &nbsp;•&nbsp; Zen Dining Experience
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="mb-12 font-display text-5xl font-medium text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <a className="italic text-gold">Kedai Chibo</a>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-body text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-500 hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/20 sm:px-10 sm:py-5 sm:text-sm"
            >
              Jelajahi Menu
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-body text-[10px] tracking-[0.3em] text-white/50 uppercase">
                Gulir ke bawah
              </span>
              <svg
                className="h-5 w-5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
