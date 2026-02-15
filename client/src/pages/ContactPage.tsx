import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Have a broken device? Looking for a quote? Fill out the form or visit our store today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Tech Avenue, Suite 100</p>
                    <p className="text-muted-foreground">Silicon City, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@techmobile.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9am - 8pm</p>
                    <p className="text-muted-foreground">Sat - Sun: 10am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
