
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left space-y-6"
          >
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Premium Quality Halal Desserts
            </motion.span>
            
            <motion.h1 
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Indulge in <span className="text-primary relative">
                Halal
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-secondary -z-10"></span>
              </span> Sweetness
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Experience the perfect harmony of traditional recipes with modern twists. 
              All our desserts are crafted with premium halal ingredients.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <Button size="lg" className="group" asChild>
                <Link to="/products">
                  Explore Our Desserts
                  <ShoppingBag className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/seasonal">Seasonal Specials</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                Free delivery on orders over ₹500
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                Delivery only in Mumbai and Thane districts
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                100% satisfaction guaranteed
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/rose-milk-cake.jpg" 
                alt="Delicious Halal Desserts" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
              
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-primary/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h3 className="font-serif text-lg font-bold text-foreground">Bestseller</h3>
                <p className="text-primary font-medium">Rose Milk Cake</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-muted-foreground">₹500</span>
                  <Button size="sm" variant="link" asChild>
                    <Link to="/product/5">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-sweet-100 rounded-full opacity-40 z-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-12 -left-12 w-56 h-56 bg-cream-100 rounded-full opacity-60 z-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
