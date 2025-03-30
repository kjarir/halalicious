
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Award, Clock } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "100% Halal Certified",
    description: "All our ingredients and processes strictly follow halal guidelines",
  },
  {
    id: 2,
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "Natural Ingredients",
    description: "We use only premium quality natural ingredients in all our desserts",
  },
  {
    id: 3,
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Award Winning",
    description: "Our recipes have won multiple culinary awards for authentic taste",
  },
  {
    id: 4,
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Fresh Daily",
    description: "Desserts made fresh daily to ensure the best taste and quality",
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Halalicious</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We take pride in creating desserts that bring joy while maintaining the highest standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
