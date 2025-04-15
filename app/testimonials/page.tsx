"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Regular Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "I've been coming to Serenity Spa for over two years now, and every visit is pure bliss. The attention to detail and personalized care is unmatched. Their deep tissue massage has helped me manage chronic back pain better than any other treatment.",
    rating: 5,
    featured: true,
  },
  {
    name: "David Chen",
    role: "First-time Visitor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The facial treatment I received was exceptional. The esthetician was knowledgeable and took time to understand my skin concerns. My skin has never looked better!",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Monthly Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The wellness programs here have transformed my approach to self-care. The staff is professional, and the atmosphere is so peaceful. It's my monthly retreat!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Regular Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "Outstanding service every time. The hot stone massage is a must-try. The therapists are skilled and always ensure you're comfortable.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Spa Package Client",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "Had the most amazing spa day package. From the moment I walked in, I felt pampered. The facilities are immaculate, and the staff is so welcoming.",
    rating: 5,
  },
];

export default function Testimonials() {
  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

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
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto"
          >
            Read what our valued clients have to say about their experiences
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary-foreground mb-6" />
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
                  "{featuredTestimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={featuredTestimonial.image}
                    alt={featuredTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{featuredTestimonial.name}</p>
                    <p className="text-muted-foreground">{featuredTestimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Testimonials Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}