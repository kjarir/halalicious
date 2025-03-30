
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { users } from "@/data/users";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Sample data for charts - updated to use rupees
const salesData = [
  { name: 'Jan', sales: 92000 },
  { name: 'Feb', sales: 146500 },
  { name: 'Mar', sales: 115500 },
  { name: 'Apr', sales: 184800 },
  { name: 'May', sales: 200200 },
  { name: 'Jun', sales: 238700 },
];

const productPerformance = [
  { name: 'Mulberry Cream', sales: 120, revenue: 83006 },
  { name: 'Gulab Jamun', sales: 180, revenue: 96881 },
  { name: 'Rasmalai', sales: 150, revenue: 115385 },
  { name: 'Baklava', sales: 110, revenue: 110025 },
];

const AdminDashboard = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Check authentication in useEffect to avoid React Router warning
    if (!isAuthenticated || !isAdmin) {
      toast({
        variant: "destructive",
        title: "Access denied",
        description: "You don't have permission to access this page.",
      });
      navigate("/login");
    } else {
      setIsLoaded(true);
    }
  }, [isAuthenticated, isAdmin, navigate]);
  
  if (!isLoaded) return null;
  
  return (
    <Layout>
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-serif font-bold mb-8"
        >
          Admin Dashboard
        </motion.h1>
        
        <Tabs
          defaultValue="dashboard"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Total Sales", value: "₹9,52,700", change: "+12.5% from last month" },
                { title: "Orders", value: "284", change: "+8.3% from last month" },
                { title: "Customers", value: "153", change: "+15.2% from last month" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Sales Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-4">Sales Overview</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Sales']} />
                      <Legend />
                      <Bar dataKey="sales" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              {/* Top Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-4">Top Products</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Units Sold</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {productPerformance.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell className="text-right">{product.sales}</TableCell>
                          <TableCell className="text-right">₹{product.revenue.toLocaleString('en-IN')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>
            </div>
            
            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "#12345", customer: "Rahul Sharma", date: "2023-06-05", amount: 6074.13, status: "delivered", location: "Mumbai" },
                      { id: "#12346", customer: "Priya Patel", date: "2023-06-05", amount: 9586.50, status: "processing", location: "Thane" },
                      { id: "#12347", customer: "Amit Kumar", date: "2023-06-04", amount: 3330.25, status: "shipped", location: "Mumbai" },
                      { id: "#12348", customer: "Isha Desai", date: "2023-06-04", amount: 7091.70, status: "pending", location: "Thane" },
                      { id: "#12349", customer: "Vivek Joshi", date: "2023-06-03", amount: 5062.75, status: "delivered", location: "Mumbai" },
                    ].map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">₹{order.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              order.status === "delivered" ? "bg-green-500" :
                              order.status === "shipped" ? "bg-blue-500" :
                              order.status === "processing" ? "bg-amber-500" :
                              "bg-gray-500"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* Products Tab */}
          <TabsContent value="products" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Product Management</h2>
              <Button>Add New Product</Button>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell className="capitalize">{product.category}</TableCell>
                        <TableCell className="text-right">₹{(product.price * 77).toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={product.inStock ? "default" : "destructive"}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Order Management</h2>
              <div>
                <Button variant="outline" className="mr-2">Export Orders</Button>
                <Button>Add Manual Order</Button>
              </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Items</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "#12345", customer: "Rahul Sharma", date: "2023-06-05", items: 3, total: 6074.13, status: "delivered", location: "Mumbai" },
                      { id: "#12346", customer: "Priya Patel", date: "2023-06-05", items: 5, total: 9586.50, status: "processing", location: "Thane" },
                      { id: "#12347", customer: "Amit Kumar", date: "2023-06-04", items: 2, total: 3330.25, status: "shipped", location: "Mumbai" },
                      { id: "#12348", customer: "Isha Desai", date: "2023-06-04", items: 4, total: 7091.70, status: "pending", location: "Mumbai" },
                      { id: "#12349", customer: "Vivek Joshi", date: "2023-06-03", items: 3, total: 5062.75, status: "delivered", location: "Thane" },
                      { id: "#12350", customer: "Neha Singh", date: "2023-06-03", items: 1, total: 2502.50, status: "cancelled", location: "Thane" },
                      { id: "#12351", customer: "Rajesh Gupta", date: "2023-06-02", items: 6, total: 11180.40, status: "shipped", location: "Mumbai" },
                      { id: "#12352", customer: "Anita Mehta", date: "2023-06-02", items: 2, total: 4227.30, status: "delivered", location: "Mumbai" },
                    ].map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">{order.items}</TableCell>
                        <TableCell className="text-right">₹{order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              order.status === "delivered" ? "bg-green-500" :
                              order.status === "shipped" ? "bg-blue-500" :
                              order.status === "processing" ? "bg-amber-500" :
                              order.status === "cancelled" ? "bg-destructive" :
                              "bg-gray-500"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.location}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Update</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          {/* Users Tab */}
          <TabsContent value="users" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">User Management</h2>
              <Button>Add New User</Button>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="capitalize">{user.role}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-destructive"
                              disabled={user.role === "admin"}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
