import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  delay?: number;
}

export default function ProductCard({ name, description, price, image, category, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <Card className="border-0 bg-transparent overflow-hidden group">
        <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted/20">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-md text-foreground border-white/10">
            {category}
          </Badge>
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-heading font-semibold text-lg leading-none group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
          <p className="font-bold text-lg text-foreground mt-2">{price}</p>
        </div>
      </Card>
    </motion.div>
  );
}
