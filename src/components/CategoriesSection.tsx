import { useLang } from "@/contexts/LangContext";
import { useState } from "react";
import { motion } from "framer-motion";
import catToys from "@/assets/cat-toys.jpg";
import catTech from "@/assets/cat-tech.jpg";
import catHealth from "@/assets/cat-health.jpg";
import catSport from "@/assets/cat-sport.jpg";

const categories = [
  { key: "categoryToys" as const, image: catToys, size: "md:col-span-2 md:row-span-2" },
  { key: "categoryTech" as const, image: catTech, size: "md:col-span-1 md:row-span-1" },
  { key: "categoryHealth" as const, image: catHealth, size: "md:col-span-1 md:row-span-1" },
  { key: "categorySport" as const, image: catSport, size: "md:col-span-2 md:row-span-1" },
];

const CategoriesSection = () => {
  const { t } = useLang();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="categories" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.categoriesTitle}
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            {t.categoriesSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[240px]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`${cat.size} rounded-xl relative overflow-hidden cursor-pointer group`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={t[cat.key]}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIdx === idx
                  ? "bg-primary/70"
                  : "bg-foreground/40"
              }`} />

              {/* Accent line top */}
              <div className={`absolute top-0 left-0 h-1 bg-accent transition-all duration-500 ${hoveredIdx === idx ? "w-full" : "w-0"}`} />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center drop-shadow-lg">
                  {t[cat.key]}
                </h3>
                <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/70 mt-3 block border border-primary-foreground/30 px-4 py-1 rounded-full">
                  {t.comingSoon}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
