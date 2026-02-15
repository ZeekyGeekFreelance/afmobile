import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-repair.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 z-0" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Fastest Repairs in Town</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tighter text-white">
            Future-Proof <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Mobile Care
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Expert repairs, premium devices, and professional service. 
            We bring your technology back to life with precision and speed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get a Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-white/20 hover:bg-white/5 text-foreground group">
                View Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open Today Until 8PM
            </div>
            <div>
              ⭐ 4.9/5 Rating (500+ Reviews)
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-card/30 backdrop-blur-sm">
            <img 
              src={heroImage} 
              alt="High Tech Repair Lab" 
              className="w-full h-auto object-cover aspect-4/3"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg. Repair Time</p>
                <p className="font-bold text-foreground">Under 30 Mins</p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
