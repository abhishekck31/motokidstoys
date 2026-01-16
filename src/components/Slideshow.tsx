"use client";

import { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
    {
        id: 1,
        title: "Drive the Future",
        subtitle: "New 2026 Collection Now Live",
        description: "Experience next-generation battery technology and realistic luxury replicas.",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2070",
        buttonText: "Shop New Arrivals",
        accent: "bg-orange-300"
    },
    {
        id: 2,
        title: "Luxury Defined",
        subtitle: "Premium Licensed Replicas",
        description: "Official scale models with leather seats, LED lights, and parental remote control.",
        image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=2070",
        buttonText: "Explore Luxury",
        accent: "bg-royal-blue-600"
    }
];

export default function Slideshow() {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % SLIDES.length);
            }, 7000);
        }
        return () => clearInterval(timer);
    }, [isPlaying]);

    const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-indigo-950">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/40 to-transparent z-10" />
                    <Image
                        src={SLIDES[current].image}
                        alt={SLIDES[current].title}
                        fill
                        className="object-cover scale-110 motion-safe:animate-[zoom-in_20s_infinite_alternate]"
                        priority
                    />

                    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20 pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className={`inline-block px-4 py-1.5 rounded-full ${SLIDES[current].accent} text-indigo-950 text-xs font-black uppercase tracking-[0.2em] mb-6`}>
                                {SLIDES[current].subtitle}
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                                {SLIDES[current].title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-xl font-medium leading-relaxed">
                                {SLIDES[current].description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white px-10 py-5 rounded-3xl font-black flex items-center group transition-all shadow-2xl shadow-royal-blue-600/20 active:scale-95">
                                    {SLIDES[current].buttonText}
                                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-3xl font-black transition-all border border-white/20 active:scale-95">
                                    View Catalog
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-12 left-6 right-6 md:left-20 md:right-20 z-30 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                    </button>
                    <div className="flex space-x-3">
                        {SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-1 rounded-full transition-all duration-500 overflow-hidden bg-white/20 ${index === current ? 'w-16' : 'w-8 hover:bg-white/40'}`}
                            >
                                {index === current && (
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 7, ease: "linear" }}
                                        className="h-full bg-orange-300 w-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex space-x-4">
                    <button onClick={prev} className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:bg-white hover:text-indigo-950 transition-all border border-white/20">
                        <ChevronLeft size={28} />
                    </button>
                    <button onClick={next} className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white hover:bg-white hover:text-indigo-950 transition-all border border-white/20">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>
        </section>
    );
}
