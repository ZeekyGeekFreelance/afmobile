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
