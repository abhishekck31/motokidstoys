"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/lib/data';
import { motion } from 'framer-motion';

interface ProductCarouselProps {
    title: string;
    subtitle?: string;
    products: typeof PRODUCTS;
}

export default function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-royal-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block underline decoration-orange-300 decoration-4 underline-offset-8">Featured</span>
                        <h2 className="text-4xl md:text-7xl font-black text-indigo-950 uppercase tracking-tighter leading-[0.9]">
                            {title}
                        </h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 rounded-2xl border-2 border-indigo-950/5 flex items-center justify-center text-indigo-950 hover:bg-indigo-950 hover:text-white transition-all active:scale-90"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 rounded-2xl bg-indigo-950 text-white flex items-center justify-center hover:bg-royal-blue-600 transition-all shadow-xl active:scale-90"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex space-x-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory perspective-1000"
                >
                    {products.map((product, index) => (
                        <div key={product.id} className="min-w-[320px] md:min-w-[420px] snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}

                    {/* View All Card */}
                    <div className="min-w-[320px] md:min-w-[420px] snap-start h-full">
                        <Link href="/collections/all" className="block h-full min-h-[500px]">
                            <div className="h-full bg-cream-50 rounded-[2rem] border-4 border-dashed border-indigo-950/10 flex flex-col items-center justify-center text-center p-12 group hover:border-royal-blue-600 transition-colors duration-500">
                                <div className="w-20 h-20 bg-indigo-950 text-white rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                    <ArrowRight size={32} />
                                </div>
                                <h3 className="text-3xl font-black text-indigo-950 uppercase tracking-tighter mb-4">View All Products</h3>
                                <p className="text-indigo-950/40 font-bold uppercase tracking-widest text-[10px]">Discover the full 2026 fleet</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Fixed missing import for Link in ProductCarousel
import Link from 'next/link';
