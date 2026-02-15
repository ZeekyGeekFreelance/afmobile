import { Wrench, Smartphone, Battery, Shield, Wifi, Zap } from "lucide-react";

export const SERVICES = [
  {
    id: 1,
    title: "Screen Repair",
    description: "Premium OLED and LCD screen replacements for all major brands. Done in under 30 minutes.",
    icon: Smartphone,
    price: "From $89",
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Restore your device's battery health to 100% with genuine OEM parts.",
    icon: Battery,
    price: "From $49",
  },
  {
    id: 3,
    title: "Water Damage Recovery",
    description: "Advanced ultrasonic cleaning and board-level repair to save liquid-damaged devices.",
    icon: Wifi,
    price: "From $59",
  },
  {
    id: 4,
    title: "Board Level Repair",
    description: "Micro-soldering services for complex issues like charging ports, audio ICs, and backlight.",
    icon: Wrench,
    price: "Custom Quote",
  },
  {
    id: 5,
    title: "Data Recovery",
    description: "Secure retrieval of photos, contacts, and files from damaged or non-booting devices.",
    icon: Shield,
    price: "From $99",
  },
  {
    id: 6,
    title: "Unlocking Services",
    description: "Network unlocking and software flashing for supported devices.",
    icon: Zap,
    price: "From $29",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "Titanium design, A17 Pro chip. 256GB - Natural Titanium.",
    price: "$1,199",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    category: "New",
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    description: "Galaxy AI is here. 512GB - Titanium Grey.",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1706606995654-20f77242d50e?auto=format&fit=crop&q=80&w=800",
    category: "New",
  },
  {
    id: 3,
    name: "MagSafe Charger",
    description: "Fast wireless charging. Compatible with iPhone 12 and later.",
    price: "$39",
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800",
    category: "Accessory",
  },
  {
    id: 4,
    name: "AirPods Pro (2nd Gen)",
    description: "Active Noise Cancellation. USB-C Charging Case.",
    price: "$249",
    image: "https://images.unsplash.com/photo-1603351154351-5cf23309275b?auto=format&fit=crop&q=80&w=800",
    category: "Audio",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Fixed my shattered iPhone 14 screen in 20 minutes. Looks brand new! Highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    text: "Thought my phone was dead after dropping it in the pool. They saved all my photos!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Alverez",
    text: "Bought a refurbished MacBook here. Great price and works perfectly.",
    rating: 4,
  },
];
