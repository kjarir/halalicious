
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Mulberry Cream",
    description: "A rich cream dessert topped with fresh mulberries and a hint of rosewater",
    price: 692.23, // In rupees
    image: "/images/mulberry-cream.webp",
    category: "cream",
    featured: true,
    seasonal: false,
    inStock: true,
  },
  {
    id: "2",
    name: "Jumbo Gulab Jamun",
    description: "Oversized soft milk solids dumplings soaked in aromatic sugar syrup",
    price: 538.23, // In rupees
    image: "/images/gulab-jamun.webp",
    category: "traditional",
    featured: true,
    seasonal: false,
    inStock: true,
  },
  {
    id: "3",
    name: "Mango Cream",
    description: "Smooth cream dessert infused with Alphonso mango puree and cardamom",
    price: 615.23, // In rupees
    image: "/images/mango-cream.jpg",
    category: "cream",
    featured: false,
    seasonal: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Pistachio Phirni",
    description: "Creamy rice pudding topped with crushed pistachios and silver leaf",
    price: 461.23, // In rupees
    image: "/images/pistachio-phirni.jpeg",
    category: "traditional",
    featured: false,
    seasonal: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Saffron Rasmalai",
    description: "Soft cottage cheese patties soaked in saffron-infused sweet milk",
    price: 769.23, // In rupees
    image: "/images/rasmalai.webp",
    category: "traditional",
    featured: true,
    seasonal: false,
    inStock: true,
  },
  {
    id: "6",
    name: "Rose Milk Cake",
    description: "Moist milk-soaked cake delicately flavored with rose essence",
    price: 846.23, // In rupees
    image: "/images/rose-milk-cake.jpg",
    category: "cakes",
    featured: false,
    seasonal: false,
    inStock: true,
  },
  {
    id: "7",
    name: "Baklava Selection",
    description: "Assortment of honey-soaked pastries layered with nuts and spices",
    price: 1000.23, // In rupees
    image: "/images/baklava.png",
    category: "pastries",
    featured: true,
    seasonal: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Pomegranate Cheesecake",
    description: "Creamy cheesecake with pomegranate jelly topping and edible rose petals",
    price: 1154.23, // In rupees
    image: "/images/pomegranate-cheesecake.jpeg", 
    category: "cakes",
    featured: false,
    seasonal: true,
    inStock: true,
  },
];
