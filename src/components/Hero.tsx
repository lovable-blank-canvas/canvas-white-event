import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return <section className="min-h-screen flex items-center justify-center bg-canvas-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-canvas-mist via-canvas-white to-canvas-mist opacity-60"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Event Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-display text-canvas-charcoal tracking-tight leading-none mb-6 lg:text-8xl font-extrabold">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-display font-light text-canvas-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
              <span className="block mt-2">{t('hero.subtitle2')}</span>
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-canvas-charcoal/80">
              <Calendar className="w-5 h-5" />
              <span className="font-display font-medium">{t('hero.date')}</span>
            </div>
            <div className="flex items-center gap-3 text-canvas-charcoal/80">
              <Clock className="w-5 h-5" />
              <span className="font-display font-medium">{t('hero.time')}</span>
            </div>
            <div className="flex items-center gap-3 text-canvas-charcoal/80">
              <MapPin className="w-5 h-5" />
              <span className="font-display font-medium">{t('hero.location')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;