import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-body text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Tentang Kami
          </span>
        </motion.div>

        {/* Asymmetric Layout */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Text Column */}
          <div className="lg:col-span-5 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-onyx sm:text-5xl lg:text-6xl">
                Filosofi &<br />
                <span className="italic text-gold">Sejarah</span>
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-warm-gray sm:text-lg">
                Menghadirkan suasana tempat yang nyaman, santai, tenang, dan trendi
                dengan sentuhan romantis. Sangat cocok untuk me-time atau berkumpul.
                Populer di kalangan mahasiswa dan turis.
              </p>
              <p className="mb-12 font-body text-sm leading-relaxed text-warm-gray/70">
                Sejak 2016, Kedai Chibo telah menjadi destinasi kuliner favorit
                di Cianjur. Dengan konsep zen dining yang unik, kami menghadirkan
                pengalaman bersantap yang berbeda dari yang lain.
              </p>

              {/* Stats */}
              <div className="flex gap-12 border-t border-light-gray pt-8">
                <div>
                  <p className="font-display text-3xl font-medium text-onyx sm:text-4xl">
                    2016
                  </p>
                  <p className="mt-1 font-body text-xs tracking-[0.2em] text-warm-gray uppercase">
                    Founded
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-medium text-gold sm:text-4xl">
                    4.5★
                  </p>
                  <p className="mt-1 font-body text-xs tracking-[0.2em] text-warm-gray uppercase">
                    Rating Google
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Decorative element */}
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold/30 lg:-left-8 lg:-top-8" />
              
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/contoh menu.png"
                  alt="Kedai Chibo Interior"
                  className="h-[500px] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:h-[600px]"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-2xl shadow-onyx/10 sm:-bottom-8 sm:-left-8">
                <p className="font-display text-2xl font-medium text-onyx">10+</p>
                <p className="font-body text-xs tracking-[0.15em] text-warm-gray uppercase">
                  Tahun Melayani
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
