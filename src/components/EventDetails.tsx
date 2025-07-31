import { Card } from "@/components/ui/card";
import { Users, Palette, Coffee, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventDetails = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Palette,
      titleKey: "details.workshop.title",
      descKey: "details.workshop.desc"
    },
    {
      icon: Users,
      titleKey: "details.networking.title", 
      descKey: "details.networking.desc"
    },
    {
      icon: Coffee,
      titleKey: "details.experience.title",
      descKey: "details.experience.desc"
    },
    {
      icon: Music,
      titleKey: "details.performance.title",
      descKey: "details.performance.desc"
    }
  ];

  return (
    <section id="details" className="py-20 lg:py-32 bg-canvas-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-canvas-charcoal mb-6">
            {t('details.title')}
            <span className="block">{t('details.title2')}</span>
          </h2>
          <p className="text-lg text-canvas-charcoal/70 max-w-2xl mx-auto font-body leading-relaxed">
            {t('details.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-canvas-white border border-canvas-silver/50 shadow-minimal hover:shadow-elegant transition-all duration-500 ease-elegant">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-canvas-mist rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-canvas-charcoal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-canvas-charcoal mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-canvas-charcoal/70 font-body leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Event Schedule */}
        <div className="bg-canvas-mist rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-display font-medium text-canvas-charcoal mb-8 text-center">
            {t('details.schedule')}
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">7:00 PM</span>
              <span className="text-canvas-charcoal/70 font-body">{t('details.schedule.welcome')}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">7:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">{t('details.schedule.opening')}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">8:00 PM</span>
              <span className="text-canvas-charcoal/70 font-body">{t('details.schedule.workshops')}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">9:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">{t('details.schedule.networking')}</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-display font-medium text-canvas-charcoal">10:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">{t('details.schedule.closing')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;