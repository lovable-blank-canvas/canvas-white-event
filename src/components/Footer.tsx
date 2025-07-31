import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return <footer className="bg-canvas-white border-t border-canvas-silver/30 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          

          {/* Quick Links */}
          

          {/* Contact */}
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-canvas-silver/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-canvas-charcoal/60 font-body text-sm">{t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-canvas-charcoal/60 hover:text-canvas-charcoal font-body text-sm transition-colors duration-300">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-canvas-charcoal/60 hover:text-canvas-charcoal font-body text-sm transition-colors duration-300">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;