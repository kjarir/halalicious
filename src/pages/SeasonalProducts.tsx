
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { products as allProducts } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { Product } from "@/types";

const SeasonalProducts = () => {
  const [seasonalProducts, setSeasonalProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Filter only seasonal products
    const filtered = allProducts.filter(product => product.seasonal);
    setSeasonalProducts(filtered);
  }, []);
  
  return (
    <Layout>
      <div className="page-container">
        <div className="text-center mb-10">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Seasonal Delights
          </motion.h1>
          <motion.p 
            className="section-subtitle max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our limited-time seasonal desserts, available only while in season
          </motion.p>
        </div>
        
        {seasonalProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductGrid products={seasonalProducts} />
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-2">No seasonal products available</h3>
            <p className="text-muted-foreground">Check back soon for our upcoming seasonal offerings!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SeasonalProducts;
