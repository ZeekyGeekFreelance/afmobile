import { Wrench, Smartphone, Battery, Shield, Wifi, Zap, Cable, Headphones, HardDrive, Smartphone as PhoneIcon, UserCheck } from "lucide-react";

export const CATEGORIES = [
  {
    id: "accessories",
    name: "Accessories",
    subcategories: [
      {
        id: "charging",
        name: "Charging & Power",
        items: ["Charger", "Data Cable"]
      },
      {
        id: "audio",
        name: "Audio",
        items: ["Bluetooth Headphones", "Earbuds"]
      },
      {
        id: "storage",
        name: "Storage Devices",
        items: ["Memory Card", "Pendrive"]
      },
      {
        id: "protection",
        name: "Protection & Style",
        items: ["Tempered Glass", "Back Covers", "Back Skin"]
      }
    ]
  },
  {
    id: "services",
    name: "Services",
    subcategories: [
      {
        id: "network",
        name: "Network (N/W) Issue",
        items: ["Signal Repair", "Antenna Replacement"]
      },
      {
        id: "power",
        name: "Power On Problem",
        items: ["Boot Loop Fix", "Battery Logic Repair"]
      }
    ]
  },
  {
    id: "mobiles",
    name: "Mobiles (Antique Pieces)",
    subcategories: [
      {
        id: "feature-phones",
        name: "Feature Phones",
        items: ["Kechaoda", "Snexian Rocks"]
      }
    ]
  }
];

export const INVENTORY = [
  // Accessories
  {
    id: "acc-1",
    name: "Fast Charger 20W",
    description: "High-speed charging for all devices.",
    price: "$25",
    category: "Accessories",
    subcategory: "Charging & Power",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "acc-2",
    name: "Braided Data Cable",
    description: "Ultra-durable USB-C to Lightning.",
    price: "$15",
    category: "Accessories",
    subcategory: "Charging & Power",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "acc-3",
    name: "Pro Wireless Earbuds",
    description: "Active noise cancellation and deep bass.",
    price: "$129",
    category: "Accessories",
    subcategory: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "acc-4",
    name: "Premium Back Cover",
    description: "Silicon soft-touch protection.",
    price: "$19",
    category: "Accessories",
    subcategory: "Protection & Style",
    image: "https://images.unsplash.com/photo-1610792516307-ea5acd3c3b00?auto=format&fit=crop&q=80&w=800",
  },
  // Mobiles
  {
    id: "mob-1",
    name: "Kechaoda K115",
    description: "Classic slim design, long battery life.",
    price: "$45",
    category: "Mobiles (Antique Pieces)",
    subcategory: "Feature Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "mob-2",
    name: "Snexian Rocks",
    description: "Rugged build with powerful torch.",
    price: "$39",
    category: "Mobiles (Antique Pieces)",
    subcategory: "Feature Phones",
    image: "https://images.unsplash.com/photo-1520923179274-8397ed637a96?auto=format&fit=crop&q=80&w=800",
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "Network (N/W) Issue",
    description: "Expert troubleshooting for signal drops, no service, and poor connectivity.",
    icon: Wifi,
    price: "From $35",
  },
  {
    id: 2,
    title: "Power On Problem",
    description: "Repair for dead devices, charging failures, and boot loop issues.",
    icon: Zap,
    price: "From $45",
  },
  {
    id: 3,
    title: "Screen Repair",
    description: "Premium OLED and LCD screen replacements for all major brands.",
    icon: Smartphone,
    price: "From $89",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Fixed my signal issue in 20 minutes. Great service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    text: "Found a Kechaoda here for my collection. Rare find!",
    rating: 5,
  },
];
