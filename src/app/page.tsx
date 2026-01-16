"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import { PRODUCTS } from '@/lib/data';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


import CollectionGrid from '@/components/CollectionGrid';
import TechShowcase from '@/components/TechShowcase';
import { BLOG_POSTS } from '@/lib/data';

export default function Home() {
  return (
    <div className="pb-0">
      <HeroSection />

      {/* Category Navigation */}
      <CollectionGrid />

      {/* Main Grid: New Arrivals */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-4 md:space-y-0">
            <div className="max-w-xl">
              <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block underline decoration-indigo-600 decoration-2 underline-offset-4">Fleet Update 2026</span>
              <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-slate-900 leading-[0.85] italic">New Arrivals.</h2>
            </div>
            <p className="max-w-xs text-slate-400 font-medium text-lg leading-relaxed">
              Meticulously engineered luxury replicas designed for the next generation of explorers.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24"
          >
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <div className="mt-32 text-center">
            <Link href="/collections/all" className="inline-block bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-900/10 active:scale-95">
              Explore The Full Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Showcase */}
      <TechShowcase />

      {/* Journal Teaser */}
      <section className="py-32 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-24">
            <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block underline decoration-indigo-600 decoration-2 underline-offset-4">Editorial</span>
            <h2 className="text-5xl md:text-8xl font-serif font-black text-slate-900 tracking-tighter leading-[0.85] italic">
              The MotoKids <br /> Journal.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BLOG_POSTS.slice(0, 2).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-[3rem] bg-zinc-100 mb-10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="px-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block">{post.date}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 font-medium line-clamp-2 md:text-lg mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-indigo-600 font-black uppercase tracking-widest text-[10px] flex items-center group-hover:gap-4 transition-all">
                      Read the story <span className="ml-2">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 bg-indigo-600 mx-auto rounded-full mb-12 flex items-center justify-center text-white font-serif font-black italic">M</div>
          <h3 className="text-4xl md:text-7xl font-serif font-black italic mb-12 tracking-tighter text-slate-900 leading-tight">"Engineered for memories."</h3>
          <p className="text-slate-400 font-medium leading-[2] text-xl">
            At MotoKids, we believe high-quality play is the foundation of growth. Every vehicle in our fleet is balanced for safety, engineered for durability, and designed for sheer, unbridled joy. This isn't just about toy cars; it's about the first drive they'll never forget.
          </p>
        </div>
      </section>
    </div>
  );
}

