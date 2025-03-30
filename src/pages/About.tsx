
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="page-container">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="section-title mb-4">Our Sweet Journey</h1>
              <p className="text-muted-foreground mb-6">
                Founded in 2015, Halalicious Flavours started with a simple mission: to create delicious halal desserts that blend traditional recipes with modern innovation. Our journey began in a small kitchen with just three signature desserts, and today we proudly offer a wide range of sweets that bring joy to homes across the country.
              </p>
              <p className="text-muted-foreground">
                Every dessert we create is made with premium halal-certified ingredients and crafted with dedication to both taste and presentation. We believe that everyone deserves to enjoy exceptional sweets, regardless of dietary preferences or restrictions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src="/images/desert.jpg" 
                alt="About Halalicious" 
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="section-subtitle max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What makes us different and drives everything we do
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on ingredients or processes. Every dessert is made with the finest halal-certified ingredients, ensuring exceptional taste and quality.",
                icon: "🌟",
              },
              {
                title: "Innovation with Tradition",
                description: "We honor traditional recipes while adding our own innovative twist, creating unique flavors that respect heritage while embracing creativity.",
                icon: "🔄",
              },
              {
                title: "Community Focused",
                description: "We believe in giving back to our community. A portion of our proceeds goes to local food banks and community initiatives.",
                icon: "❤️",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-secondary p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Sweet Makers
            </motion.h2>
            <motion.p 
              className="section-subtitle max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The talented people behind our delicious creations
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Amira Hassan", role: "Head Chef & Founder", image: "/images/pfp.png" },
              { name: "Ahmed Khan", role: "Pastry Specialist", image: "/images/pfp.png" },
              { name: "Leila Rahman", role: "Dessert Innovator", image: "/images/pfp.png" },
              { name: "Zain Ali", role: "Quality Control", image: "/images/pfp.png" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-ratio-1/1 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Our Process */}
        <section className="mb-16">
          <div className="bg-secondary/30 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Process
              </motion.h2>
              <motion.p 
                className="section-subtitle max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From recipe development to delivery, quality is assured at every step
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Ingredient Selection",
                  description: "We source only premium halal-certified ingredients from trusted suppliers.",
                },
                {
                  step: "2",
                  title: "Recipe Development",
                  description: "Our chefs meticulously craft and refine recipes to achieve perfect flavors.",
                },
                {
                  step: "3",
                  title: "Artisan Production",
                  description: "Desserts are handcrafted in small batches to ensure quality and consistency.",
                },
                {
                  step: "4",
                  title: "Careful Delivery",
                  description: "Products are shipped with care to maintain freshness and presentation.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative bg-card p-6 rounded-xl"
                >
                  <div className="absolute -top-5 -left-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-medium mt-3 mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Have questions or want to place a custom order? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="font-medium">Email Us</p>
                <p className="text-sm">info@halalicious.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="font-medium">Call Us</p>
                <p className="text-sm">+1 (123) 456-7890</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <p className="font-medium">Visit Us</p>
                <p className="text-sm">123 Sweet Street, City, State</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
