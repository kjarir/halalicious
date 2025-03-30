
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Features />
      
      {/* Newsletter Section */}
      <motion.section 
        className="py-16 bg-cream-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sweet-600 text-white rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sweet-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sweet-500 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Stay Updated with Sweet Offers
              </h2>
              <p className="text-sweet-100 mb-8 text-lg">
                Subscribe to our newsletter and be the first to know about new products, 
                seasonal specials, and exclusive discounts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg flex-1 text-foreground focus:outline-none focus:ring-2 focus:ring-sweet-300"
                />
                <Button size="lg" className="bg-sweet-800 hover:bg-sweet-900">
                  Subscribe
                </Button>
              </div>
              
              <p className="mt-4 text-xs text-sweet-200">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Halalicious Flavours.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <Testimonials />
      
      {/* Instagram Feed Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-title">Follow Us on Instagram</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Check out our latest creations and behind-the-scenes moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-muted overflow-hidden relative group"
              >
                <img
                  src="/images/placeholder.webp"
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <span>@halaliciousflavors</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="link" size="lg" asChild>
              <a href="https://www.instagram.com/halaliciousflavors/" target="_blank" rel="noopener noreferrer">
                Follow Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
