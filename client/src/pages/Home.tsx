import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { SERVICES, INVENTORY, TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import showroomImage from "@/assets/showroom.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="py-24 bg-card/30 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                Expert Services
              </h2>
              <p className="text-muted-foreground">
                From cracked screens to logic board repairs, our certified technicians handle it all with precision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 3).map((service, index) => (
                <ServiceCard key={service.id} {...service} delay={index * 0.1} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" variant="secondary" className="rounded-full">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                  Latest Arrivals
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Shop certified pre-owned devices and premium accessories at unbeatable prices.
                </p>
              </div>
              <Link href="/products">
                <Button variant="ghost" className="group">
                  Shop All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {INVENTORY.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} {...product} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Showroom / About Teaser */}
        <section className="py-24 bg-card border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={showroomImage} 
                  alt="Our Showroom" 
                  className="rounded-2xl shadow-2xl border border-white/10 w-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                  Visit Our Tech Hub
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience our premium showroom where technology meets style. 
                  Test the latest devices, get expert advice, and watch your repair happen in real-time through our open-lab window.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-1">10k+</h3>
                    <p className="text-sm text-muted-foreground">Devices Repaired</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-1">100%</h3>
                    <p className="text-sm text-muted-foreground">Satisfaction Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16 text-white">
              Client Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-card/40 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{t.text}"</p>
                  <p className="font-bold text-white">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
