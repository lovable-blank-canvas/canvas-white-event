const Footer = () => {
  return (
    <footer className="bg-canvas-white border-t border-canvas-silver/30 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-semibold text-canvas-charcoal mb-4">
              Blank Canvas
            </h3>
            <p className="text-canvas-charcoal/70 font-body leading-relaxed">
              Where creativity meets minimalism. An exclusive event celebrating 
              the beauty of simplicity and the power of imagination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-medium text-canvas-charcoal mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#about" className="block text-canvas-charcoal/70 hover:text-canvas-charcoal font-body transition-colors duration-300">
                About the Event
              </a>
              <a href="#details" className="block text-canvas-charcoal/70 hover:text-canvas-charcoal font-body transition-colors duration-300">
                Event Details
              </a>
              <a href="#register" className="block text-canvas-charcoal/70 hover:text-canvas-charcoal font-body transition-colors duration-300">
                Registration
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-medium text-canvas-charcoal mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="text-canvas-charcoal/70 font-body">
                hello@blankcanvas.event
              </p>
              <p className="text-canvas-charcoal/70 font-body">
                +1 (555) 123-4567
              </p>
              <p className="text-canvas-charcoal/70 font-body">
                Gallery District, Downtown
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-canvas-silver/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-canvas-charcoal/60 font-body text-sm">
            © 2024 Blank Canvas. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-canvas-charcoal/60 hover:text-canvas-charcoal font-body text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-canvas-charcoal/60 hover:text-canvas-charcoal font-body text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;