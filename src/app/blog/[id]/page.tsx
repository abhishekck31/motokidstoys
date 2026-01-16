"use client";

import { BLOG_POSTS } from '@/lib/data';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BlogPostPage() {
    const params = useParams();
    const post = BLOG_POSTS.find(p => p.id === params.id);

    if (!post) notFound();

    return (
        <article className="bg-zinc-50 min-h-screen pb-32">
            {/* Hero Header */}
            <div className="relative h-[60dvh] lg:h-[80dvh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />

                <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-white/70 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block underline decoration-white decoration-2 underline-offset-8">Journal Edition 2026</span>
                        <h1 className="text-5xl lg:text-8xl font-serif font-black text-white leading-[0.85] tracking-tighter italic">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 max-w-3xl mt-24">
                <div className="flex items-center space-x-6 mb-16 border-b border-zinc-200 pb-12">
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif font-black text-xl">M</div>
                    <div>
                        <p className="font-black text-slate-900 uppercase tracking-widest text-xs">MotoKids Editorial</p>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{post.date}</p>
                    </div>
                </div>

                <div className="prose prose-zinc prose-2xl max-w-none">
                    <p className="text-3xl font-serif font-black text-slate-900 mb-12 leading-tight tracking-tight italic">
                        {post.excerpt}
                    </p>

                    <p className="text-slate-600 font-medium leading-[1.8] mb-10">
                        When it comes to your child's playtime, safety and development are our top priorities. At MotoKids Toys, we believe that every ride-on car is more than just a toy—it's a tool for growth and imagination.
                    </p>

                    <h2 className="text-4xl font-serif font-black text-slate-900 mt-20 mb-10 tracking-tight">Expertly Crafted for Small Explorers</h2>
                    <p className="text-slate-600 font-medium leading-[1.8] mb-10">
                        Our 2026 collection features the latest in battery technology and safety engineering. From the Discovery SUV with its 4x4 drive and 6 powerful motors to our licensed vintage replicas, every detail is considered.
                    </p>

                    <blockquote className="border-l-0 pl-0 py-12 my-20 italic text-4xl text-indigo-600 font-serif font-black leading-tight tracking-tighter text-center">
                        "We don't just build toys; we build the first memories of independence and adventure for the next generation."
                    </blockquote>

                    <p className="text-slate-600 font-medium leading-[1.8] mb-10">
                        The tone for our brand remains professional yet warm, focusing on the parent's desire for the best for their child. We emphasize smooth suspensions, durable materials, and intuitive parental remote controls that ensure total peace of mind.
                    </p>

                    <h2 className="text-4xl font-serif font-black text-slate-900 mt-20 mb-10 tracking-tight">Why Choose MotoKids?</h2>
                    <ul className="space-y-6 mb-16">
                        {[
                            "Unmatched safety standards with multi-point belts.",
                            "Premium aesthetics that mirror real-world luxury brands.",
                            "Extended battery life for longer play sessions.",
                            "Exceptional after-sales support and authentic spare parts."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start space-x-6 text-slate-600 font-medium text-xl">
                                <span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-indigo-600 shrink-0 font-black text-xs">0{i + 1}</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-slate-600 font-medium leading-[1.8]">
                        Stay tuned to our journal for more tips on maintenance, new product launches, and the best ways to keep your children active and happy in 2026.
                    </p>
                </div>
            </div>
        </article>
    );
}

