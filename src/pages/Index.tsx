import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-canvas-white font-body">
      <Navigation />
      <Hero />
      <EventDetails />
      <Footer />
    </div>
  );
};

export default Index;
