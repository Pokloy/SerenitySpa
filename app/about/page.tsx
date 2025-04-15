"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Award } from "lucide-react";

const highlights = [
  {
    icon: <Heart className="w-8 h-8 text-primary-foreground" />,
    title: "Personalized Care",
    description:
      "Every treatment is tailored to your unique needs and preferences",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-foreground" />,
    title: "Expert Staff",
    description:
      "Our team of certified professionals brings years of experience",
  },
  {
    icon: <Award className="w-8 h-8 text-primary-foreground" />,
    title: "Premium Products",
    description:
      "We use only the highest quality, natural and organic products",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            About Serenity Spa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto"
          >
            Your sanctuary for wellness and rejuvenation
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <h2 className="text-3xl font-playfair font-bold">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2010, Serenity Spa was born from a passion for holistic wellness and a desire to create a sanctuary where clients could escape the stresses of daily life. What began as a small day spa has grown into a premier wellness destination, thanks to our unwavering commitment to excellence and customer care.
              </p>
              <p>
                Our philosophy is simple: every client deserves a personalized experience that nurtures both body and soul. We believe in the power of touch, the importance of self-care, and the healing properties of natural ingredients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Why Choose Serenity Spa
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-playfair font-bold">
              A Message from Our Founder
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                "At Serenity Spa, we believe that true wellness comes from a balance of body, mind, and spirit. Our mission is to provide a haven where you can escape, rejuvenate, and emerge feeling renewed and refreshed. Every treatment, every service, and every interaction is designed with your well-being in mind."
              </p>
              <p className="font-semibold text-foreground">
                - Sarah Anderson, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}