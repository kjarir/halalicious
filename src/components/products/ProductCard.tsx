
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "/images/placeholder.jpg";
              }}
            />
          </div>
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-primary animate-pulse">Featured</Badge>
          )}
          {product.seasonal && (
            <Badge className="bg-accent">Seasonal</Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 flex justify-between transition-all duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Button 
            size="sm" 
            variant="ghost"
            className="w-10 h-10 rounded-full p-0 flex items-center justify-center hover:bg-primary/10"
          >
            <Heart size={18} className="text-primary" />
          </Button>
          
          <Button 
            size="sm"
            className="flex-1 mx-2 bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          
          {/* Fix: Replace 'as={Link} to=' with a proper implementation using asChild and wrapping with Link */}
          <Link to={`/product/${product.id}`}>
            <Button 
              size="sm" 
              variant="ghost"
              className="w-10 h-10 rounded-full p-0 flex items-center justify-center hover:bg-primary/10"
            >
              <Eye size={18} className="text-primary" />
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="p-4 text-left bg-card rounded-b-xl">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 text-sm mt-1 h-10">
          {product.description}
        </p>
        <div className="mt-2 font-semibold text-primary">₹{product.price.toFixed(2)}</div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
