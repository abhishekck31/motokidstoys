"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const COLLECTIONS = [
    {
        id: 'ride-on-cars',
        name: 'Ride on Cars',
        count: 98,
        subtitle: "Explore Our Car's Collection",
        image: null // Placeholder
    },
    {
        id: 'ride-on-bikes',
        name: 'Ride on Bikes',
        count: 60,
        subtitle: "Explore Our Bikes Collection",
        image: null // Placeholder
    },
    {
        id: 'kids-tractor',
        name: 'Kids Tractor',
        count: 5,
        subtitle: "Explore Our Tractors Collection",
        image: null // Placeholder
    },
    {
        id: 'dirt-bikes',
        name: 'Dirt bike',
        count: 8,
        subtitle: "Explore Our Dirts Collection",
        image: null // Placeholder
    }
];

export default function CollectionGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-sans font-medium text-slate-900 tracking-tight">
                        Shop By Collection
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {COLLECTIONS.map((collection, i) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <Link href={`/collections/${collection.id}`} className="block h-full">
                                {/* Image Area */}
                                <div className="relative aspect-square bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
                                    {/* Placeholder Text for Image */}
                                    <span className="text-gray-300 font-bold uppercase tracking-widest text-center text-xs">
                                        [{collection.name}<br />Image]
                                    </span>

                                    {/* Overlay "Shop Now" Button */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff5722] text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                                        Shop Now →
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex items-center justify-between border-t border-gray-100/50">
                                    <div className="flex flex-col">
                                        <div className="flex items-start gap-1">
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                                {collection.name}
                                            </h3>
                                            <span className="text-[10px] font-bold text-slate-400 -mt-1">
                                                {collection.count}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-medium mt-1">
                                            {collection.subtitle}
                                        </p>
                                    </div>
                                    <div className="text-slate-900">
                                        <ArrowRight size={18} strokeWidth={1.5} />
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
