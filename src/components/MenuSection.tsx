import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type MenuCategory = 'snacks' | 'foods' | 'drinks';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  snacks: [
    { name: 'Cream Soup', description: 'Dengan garlic bread', price: '10k' },
    { name: 'Lumpia Pisang', description: 'Cokelat/Keju', price: '10k' },
    { name: 'Keju Aroma', price: '10k' },
    { name: 'Cireng', price: '10k' },
    { name: 'Otak-otak/Basreng Cobek', description: 'Pedes dikit/sedang/banget', price: '10k' },
    { name: 'Otak-otak/Basreng Chili Oil', price: '10k' },
    { name: 'Ulen Krispi', description: 'Ayam suwir pedas/abon', price: '12k' },
    { name: 'French Fries', price: '12k' },
    { name: 'Potato Wedges', price: '12k' },
    { name: 'Mix Platter', description: 'Kentang, nugget, sosis', price: '16k' },
    { name: 'Spicy BBQ Wings', price: '16k' },
  ],
  foods: [
    { name: 'Chicken on Bowl', price: '15k' },
    { name: 'Chicken Spicy Mayo', price: '18k' },
    { name: 'Chicken Sautéed Blackpepper', price: '18k' },
    { name: 'Chicken Parmigiana', price: '19k' },
    { name: 'Chicken Cheese', price: '23k' },
    { name: 'Chicken Cordon Bleu', price: '25k' },
    { name: 'Chicken Schnitzel', price: '23k' },
    { name: 'Spaghetti Carbonara', price: '18k' },
    { name: 'Ayam Geprek Pedas', price: '18k' },
    { name: 'Ayam Geprek Cabe Ijo', price: '18k' },
    { name: 'Indomie Geprek Pedas', price: '19k' },
    { name: 'Indomie Geprek Pedas + Telor', price: '21k' },
    { name: 'Indomie Geprek Cabe Ijo', price: '19k' },
    { name: 'Indomie Geprek Cabe Ijo + Telor', price: '21k' },
    { name: 'Nasi Goreng Chibo', price: '20k' },
  ],
  drinks: [
    { name: 'Choco Cookies', price: '12k' },
    { name: 'Orenji Milk', price: '12k' },
    { name: 'Green Tea', price: '12k' },
    { name: 'Lemon Tea', price: '6k' },
    { name: 'Orange Squash', price: '12k' },
    { name: 'Lemon Squash', price: '12k' },
    { name: 'Mango Mojito', price: '12k' },
    { name: 'Lime Mojito', price: '12k' },
    { name: 'Air Mineral', price: '4k' },
  ],
};

const categories: { key: MenuCategory; label: string }[] = [
  { key: 'snacks', label: 'Snacks' },
  { key: 'foods', label: 'Foods' },
  { key: 'drinks', label: 'Drinks' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('snacks');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="bg-onyx py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block font-body text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Koleksi Rasa
          </span>
          <h2 className="font-display text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
            Menu Kami
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gold" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="inline-flex gap-1 rounded-full border border-white/10 p-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-6 py-3 font-body text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 sm:px-8 sm:text-sm ${
                  activeCategory === cat.key
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group flex cursor-pointer items-start justify-between gap-4 border-b border-white/10 p-5 transition-all duration-300 hover:bg-white/5"
              >
                <div className="flex-1">
                  <h3 className="font-body text-sm font-medium text-white transition-colors group-hover:text-gold sm:text-base">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="mt-1 font-body text-xs text-white/40">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="shrink-0">
                  <span className="font-body text-sm font-semibold text-gold sm:text-base">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Price note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center font-body text-xs text-white/30"
        >
          * Harga dalam ribuan rupiah (k). Harga dapat berubah sewaktu-waktu.
        </motion.p>
      </div>

      {/* Modal Popup for Menu Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-onyx border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white/70 hover:bg-black hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Empty Image Placeholder */}
              <div className="aspect-square w-full bg-white/5 flex items-center justify-center">
                <span className="font-body text-white/30 text-sm tracking-widest uppercase">
                  Gambar {selectedItem.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-medium text-white mb-2">
                  {selectedItem.name}
                </h3>
                {selectedItem.description && (
                  <p className="font-body text-sm text-white/60 mb-4">
                    {selectedItem.description}
                  </p>
                )}
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 font-body text-sm font-semibold text-gold border border-gold/20">
                  {selectedItem.price}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
