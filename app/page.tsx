"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Space as Spa, MessageCircle as Massage, Scissors, Flower2, Star } from "lucide-react";

const services = [
  {
    icon: <Spa className="w-10 h-10 mb-4 text-primary-foreground" />,
    title: "Spa Treatments",
    description: "Luxurious treatments to rejuvenate your body and mind",
  },
  {
    icon: <Massage className="w-10 h-10 mb-4 text-primary-foreground" />,
    title: "Massage Therapy",
    description: "Professional massage services for ultimate relaxation",
  },
  {
    icon: <Scissors className="w-10 h-10 mb-4 text-primary-foreground" />,
    title: "Beauty Services",
    description: "Complete beauty treatments for a radiant you",
  },
  {
    icon: <Flower2 className="w-10 h-10 mb-4 text-primary-foreground" />,
    title: "Wellness Programs",
    description: "Customized wellness programs for your lifestyle",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center text-white">
        <div className="text-center space-y-6 animate-fade-in">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold"
          >
            Relax. Rejuvenate. Refresh.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Experience luxury wellness treatments in a serene environment
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="text-white text-black hover:bg-white/20">
              View Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair text-center mb-12 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-playfair mb-12 font-bold">What Our Clients Say</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="p-8">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-lg mb-4">"The most relaxing spa experience I've ever had. The staff was professional and attentive."</p>
              <p className="font-semibold">- Sarah Johnson</p>
            </Card>
            <Card className="p-8">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-lg mb-4">"Amazing massage therapy! I feel completely renewed and refreshed."</p>
              <p className="font-semibold">- Michael Chen</p>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}