export default function MarqueeBar() {
  const items = [
    '⭐ 4.5 Rating Google',
    'Nyaman untuk WFC',
    'Ramah Disabilitas',
    'Reservasi Tersedia',
    'Suasana Romantis',
    'Cocok untuk Me-Time',
    'Favorit Mahasiswa',
  ];

  const marqueeText = items.join('  •  ');

  return (
    <section className="relative overflow-hidden border-y border-light-gray bg-onyx py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-8 font-body text-xs font-medium tracking-[0.2em] text-white/80 uppercase"
          >
            {marqueeText} &nbsp;•&nbsp;
          </span>
        ))}
      </div>
    </section>
  );
}
