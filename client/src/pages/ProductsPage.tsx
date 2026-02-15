import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, INVENTORY } from "@/lib/constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const filteredProducts = INVENTORY.filter(p => {
    const categoryMatch = p.category === activeCategory;
    const subcategoryMatch = activeSubcategory ? p.subcategory === activeSubcategory : true;
    return categoryMatch && subcategoryMatch;
  });

  const currentCategoryObj = CATEGORIES.find(c => c.name === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              Inventory
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our curated selection of accessories, antique mobiles, and professional services.
            </p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="space-y-8">
              <div className="bg-card/30 rounded-2xl border border-white/5 p-6 backdrop-blur-sm sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-4 text-white">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <button
                        onClick={() => {
                          setActiveCategory(cat.name);
                          setActiveSubcategory(null);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                          activeCategory === cat.name 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {cat.name}
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === cat.name ? "rotate-90" : "group-hover:translate-x-1"}`} />
                      </button>
                      
                      {activeCategory === cat.name && (
                        <div className="pl-4 py-2 space-y-1 animate-in slide-in-from-left-2 duration-200">
                          {cat.subcategories.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => setActiveSubcategory(sub.name)}
                              className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors ${
                                activeSubcategory === sub.name
                                  ? "text-primary font-bold"
                                  : "text-muted-foreground hover:text-white"
                              }`}
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Display Area */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl font-heading font-bold text-white">
                  {activeCategory} {activeSubcategory && ` / ${activeSubcategory}`}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredProducts.length} items found
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} {...product} delay={index * 0.05} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-card/20 rounded-3xl border border-dashed border-white/10">
                  <p className="text-muted-foreground">No items found in this section.</p>
                  <Button 
                    variant="link" 
                    onClick={() => setActiveSubcategory(null)}
                    className="text-primary mt-2"
                  >
                    View all {activeCategory}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
