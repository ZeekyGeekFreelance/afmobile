import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-white">
                <Smartphone className="w-6 h-6 text-primary" />
                TechMobile
              </a>
            </Link>
            <p className="text-muted-foreground">
              Your trusted partner for premium mobile repairs, sales, and accessories. 
              We bring technology back to life.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Screen Repair</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Battery Replacement</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Water Damage</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Data Recovery</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              <li><Link href="/products"><a className="hover:text-primary transition-colors">Shop</a></Link></li>
              <li><Link href="/"><a className="hover:text-primary transition-colors">Careers</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                123 Tech Avenue, Silicon City
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                support@techmobile.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechMobile. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
