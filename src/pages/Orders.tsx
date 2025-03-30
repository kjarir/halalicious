
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ShoppingBag, Package, ChevronDown, ChevronUp, Eye } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock order data for demonstration
const mockOrders = [
  {
    id: "ORD12345",
    date: "June 5, 2023",
    total: 78.90,
    status: "delivered",
    items: [
      { id: "1", name: "Mulberry Cream", quantity: 2, price: 8.99 },
      { id: "2", name: "Jumbo Gulab Jamun", quantity: 3, price: 6.99 },
      { id: "5", name: "Saffron Rasmalai", quantity: 2, price: 9.99 },
    ],
    address: "123 Main St, Anytown, ST 12345",
  },
  {
    id: "ORD12346",
    date: "May 28, 2023",
    total: 43.96,
    status: "delivered",
    items: [
      { id: "1", name: "Mulberry Cream", quantity: 1, price: 8.99 },
      { id: "4", name: "Pistachio Phirni", quantity: 2, price: 5.99 },
      { id: "6", name: "Rose Milk Cake", quantity: 2, price: 10.99 },
    ],
    address: "123 Main St, Anytown, ST 12345",
  },
  {
    id: "ORD12347",
    date: "June 1, 2023",
    total: 59.93,
    status: "processing",
    items: [
      { id: "3", name: "Mango Cream", quantity: 3, price: 7.99 },
      { id: "7", name: "Baklava Selection", quantity: 1, price: 12.99 },
      { id: "4", name: "Pistachio Phirni", quantity: 4, price: 5.99 },
    ],
    address: "123 Main St, Anytown, ST 12345",
  }
];

const Orders = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    toast({
      title: "Authentication required",
      description: "Please sign in to view your orders",
    });
    navigate("/login", { state: { from: "/orders" } });
    return null;
  }
  
  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders(prev => 
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };
  
  // Status badge color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "processing": return "bg-amber-500";
      case "shipped": return "bg-blue-500";
      case "cancelled": return "bg-destructive";
      default: return "bg-gray-500";
    }
  };
  
  return (
    <Layout>
      <div className="page-container">
        <motion.h1
          className="text-3xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Orders
        </motion.h1>
        
        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Track your order history and check the status of your purchases
        </motion.p>
        
        {mockOrders.length > 0 ? (
          <div className="space-y-6">
            {mockOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-sm overflow-hidden"
              >
                {/* Order Header */}
                <div className="bg-secondary/30 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.id}</span>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                  </div>
                  
                  <div className="mt-2 sm:mt-0 flex items-center gap-3">
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => toggleOrderDetails(order.id)}
                      className="sm:ml-4"
                    >
                      {expandedOrders.includes(order.id) ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          View Details
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Order Details */}
                {expandedOrders.includes(order.id) && (
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <p className="text-sm text-muted-foreground">{order.address}</p>
                    </div>
                    
                    <h3 className="font-medium mb-2">Order Items</h3>
                    <div className="space-y-2">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b pb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center">
                              <Package className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.quantity} x ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <p className="font-medium">${(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-2">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        <Eye className="h-4 w-4 mr-1" /> Track Order
                      </Button>
                      {order.status === "delivered" && (
                        <Button size="sm">
                          Reorder
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              You haven't placed any orders yet. Start shopping to track your orders here.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </motion.div>
        )}
        
        {mockOrders.length > 0 && (
          <div className="mt-10 bg-secondary/30 p-6 rounded-xl">
            <h2 className="text-xl font-medium mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  You can track your order by clicking the "Track Order" button on any order.
                  This will provide you with real-time updates on your order's location and estimated delivery time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What if I'm not happy with my order?</AccordionTrigger>
                <AccordionContent>
                  We want you to be completely satisfied with your purchase. If you're not happy with your order,
                  please contact our customer service within 24 hours of delivery, and we'll make it right.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I modify my order after placing it?</AccordionTrigger>
                <AccordionContent>
                  Orders can be modified within 1 hour of placing them. After that, the preparation process begins,
                  and modifications may not be possible. Please contact customer service as soon as possible for assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
