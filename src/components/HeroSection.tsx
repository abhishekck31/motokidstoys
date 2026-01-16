"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90dvh] w-full flex items-center overflow-hidden bg-slate-900 pt-20">
            {/* Background Cinematic Gradient / Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2070"
                    alt="Cinematic background"
                    fill
                    className="object-cover opacity-40 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text Content with Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-xl"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">New 2026 Fleet Available</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.85] mb-10 tracking-tighter">
                        Drive Their <br /> <span className="italic text-indigo-400">Dreams.</span>
                    </h1>

                    <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-indigo-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        <p className="relative z-10 text-lg text-white/50 font-medium leading-relaxed mb-10">
                            Beyond just toys—meticulously engineered luxury replicas designed to spark development and unbridled joy.
                        </p>
                        <div className="relative z-10 flex flex-wrap gap-4">
                            <Link
                                href="/collections/all"
                                className="bg-white text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center"
                            >
                                View the Fleet
                                <ChevronRight size={16} className="ml-2" />
                            </Link>
                            <Link
                                href="/pages/contact-us"
                                className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all border border-white/10 active:scale-95"
                            >
                                Start Your Engine
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Floating Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="relative hidden lg:flex justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full aspect-square max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000"
                            alt="Lamborghini SVJ Replica"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-slate-400/10 rounded-full blur-3xl" />
                </motion.div>
            </div>

            {/* Trust Bar Bottom Ticker */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 h-16 flex items-center overflow-hidden">
                <div className="flex items-center space-x-12 px-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center space-x-3 text-white/60">
                                <Truck size={14} className="text-indigo-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Free Shipping Orders &gt; ₹7,499</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white/60">
                                <RotateCcw size={14} className="text-indigo-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">10-Day Parts Replacement Policy</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white/60">
                                <ShieldCheck size={14} className="text-indigo-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Unbridled Technical Support</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
