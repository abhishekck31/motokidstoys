"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function TopRatedSection() {
    // Select top 4 products for now to match the 4-column layout
    const topRatedProducts = PRODUCTS.slice(0, 4);

    return (
        <section className="py-20 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-sans font-medium text-slate-900 tracking-tight relative inline-block mb-4">
                        Shop By Top Rated Product
                        {/* Scribble Underline */}
                        <svg className="absolute -bottom-2 md:-bottom-4 left-1/4 w-1/2 h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="#fdbf87" strokeWidth="3" fill="none" />
                        </svg>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-sm md:text-base leading-relaxed mt-2">
                        The choice is yours. With our Product, you can select our range of products. The easiest way to keep everyone happy.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topRatedProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link href={`/product/${product.id}`} className="block">
                                {/* Image Card */}
                                <div className="relative aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
                                    {/* Discount Pill */}
                                    {product.salePrice && (
                                        <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                                            Save 12%
                                        </div>
                                    )}

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Hover Action - Simplified for this view */}
                                    <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="bg-white p-2 rounded-full shadow-lg text-slate-900 hover:text-indigo-600">
                                            <ShoppingCart size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                        11CART
                                    </p>
                                    <h3 className="text-sm font-bold text-slate-900 mb-2 truncate">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        {product.salePrice ? (
                                            <>
                                                <span className="text-sm font-black text-slate-900">₹{product.salePrice.toLocaleString()}</span>
                                                <span className="text-xs font-medium text-slate-400 line-through">₹{product.price.toLocaleString()}</span>
                                            </>
                                        ) : (
                                            <span className="text-sm font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
