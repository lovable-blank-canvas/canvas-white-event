import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas-white/80 backdrop-blur-sm border-b border-canvas-silver/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-display font-semibold text-canvas-charcoal tracking-tight">
              {t('nav.title')}
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            
          </div>

          {/* Language Switcher */}
          <div className="flex items-center">
            <Select value={language} onValueChange={(value: "EN" | "CN") => setLanguage(value)}>
              <SelectTrigger className="w-16 h-8 bg-transparent border-none shadow-none text-canvas-charcoal hover:bg-canvas-mist focus:ring-0 focus:ring-offset-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-canvas-white border-canvas-silver shadow-elegant">
                <SelectItem value="EN" className="text-canvas-charcoal hover:bg-canvas-mist">EN</SelectItem>
                <SelectItem value="CN" className="text-canvas-charcoal hover:bg-canvas-mist">CN</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;