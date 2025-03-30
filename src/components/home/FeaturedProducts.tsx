
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { products } from "@/data/products";
import ProductGrid from "../products/ProductGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [seasonalProducts, setSeasonalProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    // Filter featured products
    const featured = products.filter(product => product.featured);
    setFeaturedProducts(featured);
    
    // Filter seasonal products
    const seasonal = products.filter(product => product.seasonal);
    setSeasonalProducts(seasonal);
  }, []);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="section-title">Our Delicious Collection</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover our handcrafted selections made with the finest halal ingredients
          </p>
        </div>
        
        <Tabs
          defaultValue="featured"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="featured">Featured Products</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Delights</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="featured" className="animate-fade-in">
            <ProductGrid products={featuredProducts} />
          </TabsContent>
          
          <TabsContent value="seasonal" className="animate-fade-in">
            <ProductGrid products={seasonalProducts} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
