import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight tracking-tight"
        >
          Store2Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {t.heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#categories"
            className="inline-block mt-12 font-body text-sm tracking-widest uppercase border-2 border-primary-foreground/50 text-primary-foreground px-10 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            {t.discoverMore}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
