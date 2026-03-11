import { useLang } from "@/contexts/LangContext";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just show success — will integrate backend later
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.contactTitle}
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
        >
          <div>
            <input
              type="text"
              required
              maxLength={100}
              placeholder={t.contactName}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full font-body px-5 py-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div>
            <input
              type="email"
              required
              maxLength={255}
              placeholder={t.contactEmailLabel}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full font-body px-5 py-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div>
            <textarea
              required
              maxLength={1000}
              rows={5}
              placeholder={t.contactMessage}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full font-body px-5 py-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full font-body font-bold text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t.contactSend}
          </button>
          {sent && (
            <p className="text-center font-body text-sm text-accent font-semibold">
              ✓ {t.contactSuccess}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
