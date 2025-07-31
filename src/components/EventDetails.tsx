import { Card } from "@/components/ui/card";
import { Users, Palette, Coffee, Music } from "lucide-react";

const EventDetails = () => {
  const features = [
    {
      icon: Palette,
      title: "Creative Workshops",
      description: "Hands-on sessions with renowned artists and designers exploring minimalist aesthetics."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded creatives, entrepreneurs, and thought leaders in an intimate setting."
    },
    {
      icon: Coffee,
      title: "Curated Experience",
      description: "Artisanal refreshments and carefully selected ambient music throughout the evening."
    },
    {
      icon: Music,
      title: "Live Performance",
      description: "Ambient acoustic performances that complement our minimalist aesthetic."
    }
  ];

  return (
    <section id="details" className="py-20 lg:py-32 bg-canvas-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-canvas-charcoal mb-6">
            An Evening of
            <span className="block">Pure Inspiration</span>
          </h2>
          <p className="text-lg text-canvas-charcoal/70 max-w-2xl mx-auto font-body leading-relaxed">
            Blank Canvas brings together creative minds in a thoughtfully designed space 
            that celebrates the beauty of simplicity and the power of imagination.
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
                    {feature.title}
                  </h3>
                  <p className="text-canvas-charcoal/70 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Event Schedule */}
        <div className="bg-canvas-mist rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-display font-medium text-canvas-charcoal mb-8 text-center">
            Event Schedule
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">7:00 PM</span>
              <span className="text-canvas-charcoal/70 font-body">Welcome & Registration</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">7:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">Opening Presentation</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">8:00 PM</span>
              <span className="text-canvas-charcoal/70 font-body">Creative Workshops Begin</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-canvas-silver/30">
              <span className="font-display font-medium text-canvas-charcoal">9:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">Networking & Refreshments</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-display font-medium text-canvas-charcoal">10:30 PM</span>
              <span className="text-canvas-charcoal/70 font-body">Closing Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;