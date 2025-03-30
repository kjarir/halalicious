
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import CartItemComponent from "@/components/cart/CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, ShoppingBag } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const Cart = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to proceed with checkout",
      });
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order placed successfully",
        description: "Your order has been placed and is being processed.",
      });
      navigate("/orders");
      setIsCheckingOut(false);
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="page-container flex flex-col items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <ShoppingBag className="h-20 w-20 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Looks like you haven't added any desserts to your cart yet.
              Browse our delicious collection and find something sweet!
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                Browse Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }
  
  // Calculate order summary
  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const tax = cartTotal * 0.07; // 7% tax
  const orderTotal = cartTotal + shipping + tax;
  
  return (
    <Layout>
      <div className="page-container">
        <motion.h1 
          className="text-3xl font-serif font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center pb-4 border-b mb-4">
                <h2 className="font-medium">Items ({cartItems.length})</h2>
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
              
              <AnimatePresence>
                {cartItems.map((item) => (
                  <CartItemComponent key={item.productId} item={item} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-card rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mb-4" 
                size="lg"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Checkout
                  </>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Free shipping on orders over $50
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
