import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/constants"; // Keeping static categories structure if it matches schema
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

// Types corresponding to Sanity schema
interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  subcategory: string;
  images: any[];
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "product"]`;
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const categoryMatch = p.category === activeCategory;
    const subcategoryMatch = activeSubcategory ? p.subcategory === activeSubcategory : true;
    return categoryMatch && subcategoryMatch;
  }).sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^0-9]/g, '') || "0");
    const priceB = parseInt(b.price.replace(/[^0-9]/g, '') || "0");
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

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
            <aside className="space-y-6 lg:space-y-8">
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
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeCategory === cat.name
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
                              className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors ${activeSubcategory === sub.name
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

              {/* Mobile Sort moved here for desktop sidebar, but checking layout */}
            </aside>

            {/* Product Display Area */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white">
                    {activeSubcategory || activeCategory}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} items found
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
                  <select
                    className="bg-card border border-white/10 rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                  >
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-96 bg-card animate-pulse rounded-xl" />
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product._id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                      images={product.images ? product.images.map(img => urlFor(img).url()) : []}
                      delay={index * 0.05}
                    />
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
        </div >
      </main >
      <Footer />
    </div >
  );
}
