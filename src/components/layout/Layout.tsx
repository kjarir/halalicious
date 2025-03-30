
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { AlertCircle, MapPin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <motion.div 
        className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 text-primary-foreground py-2 text-sm text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="flex items-center justify-center font-medium text-black">
          <MapPin className="h-4 w-4 mr-2 animate-pulse text-black" />
          We currently deliver only in Mumbai and Thane districts, Maharashtra, India
        </p>
      </motion.div>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
