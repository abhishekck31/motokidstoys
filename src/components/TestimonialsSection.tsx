"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Mother of 2",
        rating: 5,
        content: "The Lamborghini replica is absolutely stunning. My son hasn't stopped driving it since it arrived. The attention to detail is incredible!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        role: "Verified Buyer",
        rating: 5,
        content: "Excellent build quality and battery life. It handles our garden terrain perfectly. Highly recommend MotoKids for premium toys.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        id: 3,
        name: "Anita Desai",
        role: "Gifted for Nephew",
        rating: 5,
        content: "Buying this was the best decision. The remote control feature gives me peace of mind while my nephew enjoys his 'first car'.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-zinc-50 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block underline decoration-indigo-600 decoration-2 underline-offset-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-slate-900 tracking-tighter leading-tight italic">
                        Trusted by Parents. <br /> Loved by Kids.
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group"
                        >
                            <div className="absolute top-8 right-8 text-indigo-100 group-hover:text-indigo-600 transition-colors duration-300">
                                <Quote size={48} className="fill-current" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100">
                                    {/* Using a colored div fallback if image fails, but styling implied image */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
