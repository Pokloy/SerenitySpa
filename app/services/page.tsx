"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Scissors, Sparkles, MessageCircle as MassageIcon, Mail as Nail } from "lucide-react";

const serviceCategories = [
  {
    title: "Hair",
    icon: <Scissors className="w-8 h-8 text-primary-foreground" />,
    services: [
      {
        name: "Women's Haircut & Style",
        description: "Professional cut and style tailored to your preferences",
        price: "$60-120",
      },
      {
        name: "Hair Coloring",
        description: "Full color, highlights, or balayage by expert colorists",
        price: "$85-200",
      },
      {
        name: "Special Occasion Styling",
        description: "Elegant updos and styling for events and weddings",
        price: "$75-150",
      },
    ],
  },
  {
    title: "Skin",
    icon: <Sparkles className="w-8 h-8 text-primary-foreground" />,
    services: [
      {
        name: "Signature Facial",
        description: "Customized facial treatment for your skin type",
        price: "$90-130",
      },
      {
        name: "Microdermabrasion",
        description: "Advanced exfoliation for renewed, glowing skin",
        price: "$120-180",
      },
      {
        name: "Anti-Aging Treatment",
        description: "Premium treatment to reduce fine lines and wrinkles",
        price: "$150-250",
      },
    ],
  },
  {
    title: "Massage",
    icon: <MassageIcon className="w-8 h-8 text-primary-foreground" />,
    services: [
      {
        name: "Swedish Massage",
        description: "Classic relaxation massage with gentle to medium pressure",
        price: "$85-140",
      },
      {
        name: "Deep Tissue Massage",
        description: "Therapeutic massage targeting deep muscle tension",
        price: "$95-160",
      },
      {
        name: "Hot Stone Massage",
        description: "Relaxing massage enhanced with heated stones",
        price: "$110-180",
      },
    ],
  },
  {
    title: "Nails",
    icon: <Nail className="w-8 h-8 text-primary-foreground" />,
    services: [
      {
        name: "Signature Manicure",
        description: "Luxurious hand treatment with premium polish",
        price: "$35-55",
      },
      {
        name: "Deluxe Pedicure",
        description: "Rejuvenating foot treatment with massage",
        price: "$55-85",
      },
      {
        name: "Gel Nail Service",
        description: "Long-lasting gel polish for hands or feet",
        price: "$45-75",
      },
    ],
  },
];

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto"
          >
            Discover our comprehensive range of luxury beauty and wellness services
          </motion.p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  {category.icon}
                  <h2 className="text-3xl font-playfair font-bold">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <p className="text-lg font-semibold text-primary-foreground">{service.price}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-playfair font-bold">Ready to Experience Our Services?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule your appointment or learn more about our services
            </p>
            <p className="text-2xl font-semibold">(555) 123-4567</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}