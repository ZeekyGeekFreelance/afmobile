import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";

interface ServiceCardProps {
  id?: number | string;
  title: string;
  description: string;
  price: string;
  icon: React.ElementType | any; // Allow generic for now to bypass strict check until icon mapping is implemented
  delay?: number;
  issues?: string[];
}

export default function ServiceCard({ title, description, price, icon: Icon, delay = 0, issues = [] }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-white/10 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group relative overflow-hidden flex flex-col p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="p-0 mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <CardTitle className="text-lg font-heading">{title}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2 text-xs">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow p-0">
          <ul className="space-y-1.5 mb-4">
            {issues.map((issue, i) => (
              <li key={i} className="flex items-center text-xs text-muted-foreground">
                <Check className="w-3 h-3 mr-2 text-primary" />
                {issue}
              </li>
            ))}
          </ul>
          <div className="flex items-baseline gap-1 mt-auto">
            <span className="text-xs text-muted-foreground">Starts at</span>
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 gap-2 pt-4 px-0">
          <a href="tel:+1234567890" className="w-full">
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 text-[10px] h-8">
              <Phone className="w-3 h-3" /> Call
            </Button>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="sm" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-1.5 text-[10px] h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> WhatsApp
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
