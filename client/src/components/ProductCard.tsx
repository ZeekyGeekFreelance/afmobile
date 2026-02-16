import { motion } from "framer-motion";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  delay?: number;
  allowGallery?: boolean;
}

export default function ProductCard({ name, description, price, images = [], category, delay = 0, allowGallery = true }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure images is an array and has at least one item, fallback to placeholder if needed
  const displayImages = images.length > 0 ? images : ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"];

  // If gallery is disabled, force only the first image
  const effectiveImages = allowGallery ? displayImages : [displayImages[0]];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!allowGallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % effectiveImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!allowGallery) return;
    setCurrentImageIndex((prev) => (prev - 1 + effectiveImages.length) % effectiveImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <Card className="border-0 bg-transparent overflow-hidden group">
        <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-muted/20 group/image">
          <img
            src={effectiveImages[currentImageIndex]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 left-2 bg-background/80 backdrop-blur-md text-foreground border-white/10 text-[10px] px-2 h-5 z-10">
            {category}
          </Badge>

          {/* Navigation Arrows */}
          {allowGallery && effectiveImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity z-20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity z-20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
                {effectiveImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            {/* Shopping cart icon if desired, currently obscured by overlay logic or can be re-added */}
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-heading font-semibold text-base leading-none group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1 min-h-[1.25rem]">{description || "\u00A0"}</p>
          <p className="font-bold text-base text-foreground mt-1">{price}</p>
        </div>

        <CardFooter className="grid grid-cols-2 gap-2 mt-3 px-0 pb-0">
          <a href="tel:+1234567890" className="w-full">
            <Button size="sm" variant="outline" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] border-white/10 hover:text-white text-[10px] h-8 px-2 gap-1.5 transition-colors">
              <Phone className="w-3 h-3" /> Call
            </Button>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="sm" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none text-[10px] h-8 px-2 gap-1.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> Buy
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
