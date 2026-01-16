"use client";

import Link from 'next/link';
import Image from 'next/image';
import { COLLECTIONS } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CollectionGrid() {
    return (
        <section className="py-32 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block underline decoration-indigo-600 decoration-2 underline-offset-4">Fleet Categories</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-black text-slate-900 tracking-tighter leading-[0.85] italic">
                            Select Your <br /> Mission Type.
                        </h2>
                    </div>
                    <p className="text-slate-400 font-medium text-lg max-w-xs leading-relaxed">
                        From heavy-duty off-roaders to precision-built city replicas. Every category is a new adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COLLECTIONS.map((collection, i) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/collections/${collection.id}`}
                                className="group relative block aspect-[4/5] overflow-hidden bg-white border border-zinc-100 p-8 shadow-2xl shadow-slate-900/5 hover:border-indigo-600 transition-all duration-700"
                            >
                                <div className="relative h-full w-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                                            <ArrowUpRight size={24} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-indigo-600 transition-colors">
                                            {collection.count}+ Items
                                        </span>
                                    </div>

                                    <div className="relative h-2/3 w-full my-auto transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-3">
                                        <Image
                                            src={collection.image || "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600"}
                                            alt={collection.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-serif font-black text-slate-900 leading-none mb-2">
                                            {collection.name}
                                        </h3>
                                        <div className="w-0 group-hover:w-full h-1 bg-indigo-600 transition-all duration-700" />
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
