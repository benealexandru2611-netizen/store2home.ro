import { useLang } from "@/contexts/LangContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/logo-store2home.jpeg";

const SignatureSection = () => {
  const { t } = useLang();
  const sealRef = useRef(null);
  const isInView = useInView(sealRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-xl md:text-3xl text-foreground/80 italic max-w-2xl mx-auto leading-relaxed"
        >
          {t.signatureText}
        </motion.p>

        <div ref={sealRef} className="mt-12 flex justify-center">
          {isInView && (
            <img
              src={logo}
              alt="Store2Home"
              className="h-28 w-auto rounded-xl opacity-0 animate-stamp shadow-lg"
              style={{ animationFillMode: "forwards" }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
