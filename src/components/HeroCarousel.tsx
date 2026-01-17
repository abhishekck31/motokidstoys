"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SLIDES = [
    {
        id: 1,
        title: "[PRODUCT NAME] Ride-On Supercar",
        subtitle: "The ultimate driving experience for kids.",
        tagline: "Luxury performance for kids",
        description: "Designed for those who demand the best in safety and style.",
        image: "/caroselImages/CaroselImage1.png"
    },
    {
        id: 2,
        title: "[Licensed Kids Supercar]",
        subtitle: "Designed for fun and safety",
        tagline: "Authentic detailing",
        description: "A replica so precise, you'll wish it came in your size.",
        image: "/caroselImages/CaroselImage2.png"
    },
    {
        id: 3,
        title: "[Electric Ride-On Bike]",
        subtitle: "Adventure starts at home",
        tagline: "Two-wheeled freedom",
        description: "Start their journey on two wheels with stability and speed.",
        image: "/caroselImages/CaroselImage3.png"
    },
    {
        id: 4,
        title: "[Off-Road Dirt Bike]",
        subtitle: "Built for young explorers",
        tagline: "Conquer the backyard",
        description: "Rugged tires and suspension for the little daredevil.",
        image: "/caroselImages/CaroselImage4.png"
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[85vh] bg-zinc-900 overflow-hidden flex items-center justify-center font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={SLIDES[current].image}
                            alt={SLIDES[current].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 container mx-auto">
                        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start text-left space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-indigo-400 font-bold uppercase tracking-widest text-sm"
                            >
                                {SLIDES[current].tagline}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                            >
                                {SLIDES[current].title}
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl md:text-2xl font-medium text-zinc-200"
                            >
                                {SLIDES[current].subtitle}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-zinc-300 max-w-md text-base leading-relaxed"
                            >
                                {SLIDES[current].description}
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-lg shadow-white/10"
                            >
                                ORDER NOW
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation - Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all text-white border border-white/10 shadow-sm md:left-8"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all text-white border border-white/10 shadow-sm md:right-8"
            >
                <ChevronRight size={24} />
            </button>

            {/* Navigation - Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-white w-8" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
