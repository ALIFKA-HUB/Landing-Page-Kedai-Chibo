import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, Phone, Navigation } from 'lucide-react';

interface OperatingHour {
  days: string;
  hours: string;
  startDay: number; // 0=Sun, 1=Mon, ... 6=Sat
  endDay: number;
  openTime: string;
  closeTime: string;
}

const operatingHours: OperatingHour[] = [
  { days: 'Senin - Kamis', hours: '11.00 - 20.00', startDay: 1, endDay: 4, openTime: '11:00', closeTime: '20:00' },
  { days: 'Jumat', hours: '12.30 - 20.00', startDay: 5, endDay: 5, openTime: '12:30', closeTime: '20:00' },
  { days: 'Sabtu - Minggu', hours: '11.00 - 20.00', startDay: 6, endDay: 0, openTime: '11:00', closeTime: '20:00' },
];

function checkOpenStatus(): { isOpen: boolean; message: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ... 6=Sat
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  let todayHours: OperatingHour | undefined;

  if (day >= 1 && day <= 4) {
    todayHours = operatingHours[0]; // Mon-Thu
  } else if (day === 5) {
    todayHours = operatingHours[1]; // Fri
  } else {
    todayHours = operatingHours[2]; // Sat-Sun
  }

  if (todayHours) {
    const isOpen = currentTime >= todayHours.openTime && currentTime < todayHours.closeTime;
    if (isOpen) {
      return { isOpen: true, message: `Buka sekarang • Tutup pukul ${todayHours.closeTime}` };
    } else if (currentTime < todayHours.openTime) {
      return { isOpen: false, message: `Buka pukul ${todayHours.openTime}` };
    } else {
      return { isOpen: false, message: 'Tutup hari ini' };
    }
  }

  return { isOpen: false, message: 'Tutup hari ini' };
}

export default function LocationSection() {
  const [status, setStatus] = useState({ isOpen: false, message: 'Memuat...' });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    setStatus(checkOpenStatus());
    const interval = setInterval(() => setStatus(checkOpenStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block font-body text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Kunjungi Kami
          </span>
          <h2 className="font-display text-4xl font-medium text-onyx sm:text-5xl lg:text-6xl">
            Lokasi & Kontak
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Open/Closed Status */}
            <div className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-400'}`} />
              <span className={`font-body text-sm font-medium ${status.isOpen ? 'text-emerald-600' : 'text-red-500'}`}>
                {status.message}
              </span>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-onyx/5">
                <MapPin className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h3 className="mb-1 font-body text-sm font-semibold text-onyx">Alamat</h3>
                <p className="font-body text-sm leading-relaxed text-warm-gray">
                  Jl. Oto Iskandardinata No.41 A, Bojongherang, Kec. Cianjur
                </p>
                <p className="mt-1 font-body text-xs text-warm-gray/60">
                  Plus Code: 54MQ+67
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-onyx/5">
                <Clock className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h3 className="mb-3 font-body text-sm font-semibold text-onyx">Jam Operasional</h3>
                <div className="space-y-2">
                  {operatingHours.map((oh) => (
                    <div key={oh.days} className="flex justify-between gap-8">
                      <span className="font-body text-sm text-warm-gray">{oh.days}</span>
                      <span className="font-body text-sm font-medium text-onyx">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-onyx/5">
                <Phone className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h3 className="mb-3 font-body text-sm font-semibold text-onyx">Kontak</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6289658018697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 font-body text-sm text-warm-gray transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    0896-5801-8697
                    <span className="text-xs text-warm-gray/40 transition-colors group-hover:text-gold/60">
                      (WhatsApp)
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/metafore.coffee_eatery.cjr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 font-body text-sm text-warm-gray transition-colors hover:text-gold"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    @metafore.coffee_eatery.cjr
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/54MQ+67"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-onyx px-8 py-4 font-body text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-500 hover:bg-onyx/80 hover:shadow-xl"
            >
              <Navigation className="h-4 w-4 text-gold" />
              Petunjuk Arah
              <svg
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="overflow-hidden rounded-2xl border border-light-gray shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d107.14!3d-6.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Oto+Iskandardinata+No.41+A%2C+Bojongherang%2C+Cianjur!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-grayscale h-[400px] w-full sm:h-[500px]"
                title="Lokasi Kedai Chibo"
              />
            </div>
            <p className="mt-4 text-center font-body text-xs text-warm-gray/50">
              Jl. Oto Iskandardinata No.41 A, Bojongherang, Cianjur
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
