import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Registration = () => {
  return (
    <section id="register" className="py-20 lg:py-32 bg-canvas-mist">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-canvas-charcoal mb-6">
            Reserve Your
            <span className="block">Creative Space</span>
          </h2>
          <p className="text-lg text-canvas-charcoal/70 max-w-2xl mx-auto font-body leading-relaxed">
            Limited to 60 attendees to ensure an intimate and meaningful experience. 
            Secure your spot today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Registration Form */}
          <Card className="p-8 lg:p-10 bg-canvas-white border border-canvas-silver/50 shadow-elegant">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-display font-medium text-canvas-charcoal mb-2 block">
                    Full Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="border-canvas-silver/50 focus:border-canvas-charcoal transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-display font-medium text-canvas-charcoal mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="border-canvas-silver/50 focus:border-canvas-charcoal transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-display font-medium text-canvas-charcoal mb-2 block">
                    Creative Background
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Designer, Artist, Entrepreneur, etc."
                    className="border-canvas-silver/50 focus:border-canvas-charcoal transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button variant="canvas" size="lg" className="w-full font-display font-medium">
                  Reserve My Spot
                </Button>
              </div>

              <p className="text-xs text-canvas-charcoal/60 text-center font-body">
                By registering, you agree to receive event updates and communications.
              </p>
            </form>
          </Card>

          {/* Registration Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-medium text-canvas-charcoal mb-6">
                What's Included
              </h3>
              <div className="space-y-4">
                {[
                  "Access to all creative workshops",
                  "Welcome package with curated materials",
                  "Artisanal refreshments throughout the evening",
                  "Networking opportunities with industry leaders",
                  "Digital resource library access",
                  "Follow-up community invitations"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-canvas-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-canvas-white" />
                    </div>
                    <span className="text-canvas-charcoal/80 font-body">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-canvas-white rounded-xl p-6 border border-canvas-silver/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-display font-medium text-canvas-charcoal">
                  Early Bird Pricing
                </span>
                <Badge variant="secondary" className="bg-canvas-mist text-canvas-charcoal font-display">
                  Limited Time
                </Badge>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-display font-light text-canvas-charcoal">Free</span>
                <span className="text-sm text-canvas-charcoal/60 line-through font-body">$75</span>
              </div>
              <p className="text-sm text-canvas-charcoal/70 font-body">
                Complimentary admission for the first 60 registrants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;