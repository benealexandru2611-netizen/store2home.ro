import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Package, Truck } from "lucide-react";

const stats = [
  { value: "8+", key: "statsYears" as const },
  { value: "12.000+", key: "statsClients" as const },
  { value: "3.500+", key: "statsProducts" as const },
  { value: "45+", key: "statsPartners" as const },
];

const features = [
  { key: "whyUsCurated" as const, descKey: "whyUsCuratedDesc" as const, Icon: Package },
  { key: "whyUsSupport" as const, descKey: "whyUsSupportDesc" as const, Icon: Headphones },
  { key: "whyUsTrust" as const, descKey: "whyUsTrustDesc" as const, Icon: ShieldCheck },
  { key: "whyUsDelivery" as const, descKey: "whyUsDeliveryDesc" as const, Icon: Truck },
];

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center py-8 rounded-xl bg-primary/5 border border-border"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-primary block">{stat.value}</span>
              <span className="font-body text-sm text-muted-foreground mt-2 block">{t[stat.key]}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Why us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {t.whyUsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group p-8 rounded-xl border border-border bg-background hover:bg-primary hover:border-primary transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-5 transition-colors duration-500">
                <feat.Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                {t[feat.key]}
              </h3>
              <p className="font-body text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">
                {t[feat.descKey]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
