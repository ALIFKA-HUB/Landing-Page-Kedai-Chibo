import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isScrolled
              ? 'bg-cream/90 shadow-sm backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src="/logos-transparent.png"
                alt="Kedai Chibo"
                className={`h-8 w-auto transition-all duration-500 ${
                  isScrolled ? 'logo-blend' : 'invert opacity-90'
                }`}
              />
              <span
                className={`font-display text-sm font-medium tracking-[0.1em] uppercase transition-colors ${
                  isScrolled ? 'text-warm-gray' : 'text-white/70 hover:text-white'
                }`}
              >
                Kedai Chibo
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {[
                { href: '#about', label: 'Tentang' },
                { href: '#menu', label: 'Menu' },
                { href: '#location', label: 'Lokasi' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:text-gold ${
                    isScrolled ? 'text-warm-gray' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6289658018697"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-5 py-2.5 font-body text-xs font-semibold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Reservasi
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-[1.5px] w-6 transition-all duration-300 ${
                    isScrolled ? 'bg-onyx' : 'bg-white'
                  } ${isMobileMenuOpen ? 'translate-y-[4.5px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-[1.5px] w-6 transition-all duration-300 ${
                    isScrolled ? 'bg-onyx' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-[1.5px] w-6 transition-all duration-300 ${
                    isScrolled ? 'bg-onyx' : 'bg-white'
                  } ${isMobileMenuOpen ? '-translate-y-[4.5px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-cream/95 backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-1 px-6 py-4">
                  {[
                    { href: '#about', label: 'Tentang' },
                    { href: '#menu', label: 'Menu' },
                    { href: '#location', label: 'Lokasi' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="border-b border-light-gray/50 py-3 font-body text-sm font-medium text-onyx transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="https://wa.me/6289658018697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-gold py-3 text-center font-body text-sm font-semibold tracking-[0.15em] text-white uppercase"
                  >
                    Reservasi
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
