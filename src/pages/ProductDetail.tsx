
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Minus, Plus, Check } from "lucide-react";
import ProductGrid from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  
  const product = products.find(p => p.id === id);
  
  // Find related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);
  
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [product]);
  
  if (!product) {
    return (
      <Layout>
        <div className="page-container flex flex-col items-center justify-center py-16">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Layout>
      <div className="page-container">
        {/* Breadcrumb */}
        <motion.div 
          className="text-sm mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden bg-secondary/10 flex items-center justify-center p-4 shadow-lg border border-primary/10 aspect-square">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </motion.div>
          
          {/* Product Details */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              {product.featured && (
                <Badge className="bg-primary">Featured</Badge>
              )}
              {product.seasonal && (
                <Badge className="bg-accent">Seasonal</Badge>
              )}
            </div>
            
            <motion.h1 
              className="text-3xl font-serif font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {product.name}
            </motion.h1>
            
            <motion.div 
              className="text-2xl font-bold text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              ₹{product.price.toFixed(2)}
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {product.description}
            </motion.p>
            
            <motion.div 
              className="bg-secondary/30 p-4 rounded-lg mb-6 border border-primary/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Availability:</span>
                <span className={product.inStock ? "text-green-600 flex items-center" : "text-red-500 flex items-center"}>
                  {product.inStock ? (
                    <>
                      <Check className="mr-1 h-4 w-4" />
                      In Stock
                    </>
                  ) : (
                    "Out of Stock"
                  )}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Category:</span>
                <span className="text-foreground capitalize">{product.category}</span>
              </div>
            </motion.div>

            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">100% Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Free delivery in Mumbai and Thane districts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm">Freshly prepared daily</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center border rounded-md shadow-sm">
                <Button 
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center h-10 w-12 border-x">
                  {quantity}
                </div>
                <Button 
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="h-10 w-10 rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                className="flex-1 bg-primary hover:bg-primary/90"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12 border-primary/20 hover:bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            className="border-t pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
