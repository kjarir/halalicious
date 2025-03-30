
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface CartItemProps {
  item: CartItemType;
}

const CartItemComponent = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRemove = () => {
    setIsDeleting(true);
    setTimeout(() => {
      removeFromCart(item.productId);
    }, 300); // Match animation duration
  };

  const subtotal = item.quantity * item.product.price;

  return (
    <motion.div 
      className={`flex flex-col sm:flex-row items-center gap-4 py-4 border-b ${
        isDeleting ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } transition-all duration-300`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="w-24 h-24 rounded-md overflow-hidden border border-border shadow-sm">
        <Link to={`/product/${item.productId}`}>
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "/images/placeholder.jpg";
            }}
          />
        </Link>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row w-full justify-between">
        <div className="flex-1">
          <Link to={`/product/${item.productId}`} className="font-medium hover:text-primary transition-colors">
            {item.product.name}
          </Link>
          <p className="text-sm text-muted-foreground">₹{item.product.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-r-none"
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="h-8 px-4 flex items-center justify-center border-y">
              {item.quantity}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-l-none"
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="w-24 text-right font-medium text-primary">
            ₹{subtotal.toFixed(2)}
          </div>

          <Button variant="ghost" size="icon" onClick={handleRemove} className="text-red-500 hover:text-red-600 hover:bg-red-50">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItemComponent;
