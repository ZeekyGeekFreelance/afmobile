import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional repairs for all major brands. We use premium quality parts and back our work with a comprehensive warranty.
            </p>
          </div>

          <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200"
            >
              <source src="https://videos.pexels.com/video-files/4443653/4443653-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full mb-2">
                Live Repair Lab
              </span>
              <h3 className="text-xl font-bold text-white">Precision in Every Fix</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} {...service} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
