import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              Shop Devices
            </h1>
            <p className="text-xl text-muted-foreground">
              New and certified pre-owned smartphones, tablets, and premium accessories.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} {...product} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
