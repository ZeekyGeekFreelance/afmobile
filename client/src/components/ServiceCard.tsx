import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ElementType;
  delay?: number;
}

export default function ServiceCard({ title, description, price, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-white/10 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-muted-foreground">Starts at</span>
            <span className="text-xl font-bold text-primary">{price}</span>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between group-hover:text-primary pl-0 hover:bg-transparent">
            Book Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
