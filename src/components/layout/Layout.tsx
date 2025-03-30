import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <motion.div 
        className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 text-primary-foreground py-2 text-xs sm:text-sm text-center px-2 sm:px-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="flex flex-wrap items-center justify-center font-medium text-black gap-2 max-w-[95%] sm:max-w-full mx-auto">
          <MapPin className="h-4 w-4 animate-pulse text-black shrink-0" />
          <span className="text-center leading-tight">
            We currently deliver only in Mumbai and Thane districts, Maharashtra, India
          </span>
        </p>
      </motion.div>
      <main className="flex-grow container mx-auto px-4 py-8 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
