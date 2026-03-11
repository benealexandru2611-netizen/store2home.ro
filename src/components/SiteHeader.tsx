import { useLang } from "@/contexts/LangContext";
import logo from "@/assets/logo-store2home.jpeg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#categories" className="font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors">
            {t.categories}
          </a>
          <a href="#about" className="font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors">
            {t.about}
          </a>
        </nav>

        {/* Logo center — bigger */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Store2Home" className="h-14 md:h-16 w-auto rounded-lg shadow-sm" />
        </a>

        {/* Right nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#contact" className="font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors">
            {t.contact}
          </a>
          <button
            onClick={() => setLang(lang === "ro" ? "en" : "ro")}
            className="font-body text-xs font-bold tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            {lang === "ro" ? "EN" : "RO"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "ro" ? "en" : "ro")}
            className="font-body text-xs font-bold tracking-widest bg-primary text-primary-foreground px-3 py-1.5 rounded"
          >
            {lang === "ro" ? "EN" : "RO"}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          <a href="#categories" onClick={() => setMobileOpen(false)} className="font-body text-sm text-foreground">{t.categories}</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="font-body text-sm text-foreground">{t.about}</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="font-body text-sm text-foreground">{t.contact}</a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
