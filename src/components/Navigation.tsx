import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas-white/80 backdrop-blur-sm border-b border-canvas-silver/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-display font-semibold text-canvas-charcoal tracking-tight">
              Blank Canvas
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#about" 
                className="text-canvas-charcoal/70 hover:text-canvas-charcoal font-display font-medium transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="#details" 
                className="text-canvas-charcoal/70 hover:text-canvas-charcoal font-display font-medium transition-colors duration-300"
              >
                Details
              </a>
              <a 
                href="#register" 
                className="text-canvas-charcoal/70 hover:text-canvas-charcoal font-display font-medium transition-colors duration-300"
              >
                Register
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button variant="canvas" size="sm" className="font-display font-medium">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;