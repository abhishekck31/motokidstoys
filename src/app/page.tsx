"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import HeroCarousel from "@/components/HeroCarousel";
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
import TopRatedSection from '@/components/TopRatedSection';
import BrandMarquee from '@/components/BrandMarquee';
import TestimonialsSection from '@/components/TestimonialsSection';
import { BLOG_POSTS } from '@/lib/data';

export default function Home() {
  return (
    <div className="pb-8 bg-zinc-100/50 space-y-6">

      {/* Hero Section - Rounded & Floating */}
      <div className="pt-4 px-4 md:px-6">
        <div className="rounded-[2.5rem] overflow-hidden shadow-sm">
          <HeroCarousel />
        </div>
      </div>

      {/* Category Navigation - Floating Card style */}
      <div className="px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm">
          <CollectionGrid />
        </div>
      </div>

      {/* Main Grid: New Arrivals */}
      <div className="px-4 md:px-6">
        <section className="py-24 bg-white rounded-[2.5rem] shadow-sm">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-4 md:space-y-0">
              <div className="max-w-xl">
                <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Fleet Update 2026</span>
                <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-slate-900 leading-tight">New Arrivals.</h2>
              </div>
              <p className="max-w-xs text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                Meticulously engineered luxury replicas designed for the next generation of explorers.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16"
            >
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>

            <div className="mt-24 text-center">
              <Link href="/collections/all" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                Explore The Full Fleet
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Top Rated Section */}
      <div className="px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm">
          <TopRatedSection />
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="px-4 md:px-6">
        <div className="rounded-[2.5rem] overflow-hidden shadow-sm">
          <BrandMarquee />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm">
          <TestimonialsSection />
        </div>
      </div>

      {/* Technical Showcase */}
      <div className="px-4 md:px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm">
          <TechShowcase />
        </div>
      </div>

      {/* Journal Teaser */}
      <div className="px-4 md:px-6">
        <section className="py-24 bg-white rounded-[2.5rem] shadow-sm overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mb-20">
              <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Editorial</span>
              <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
                The MotoKids Journal.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS.slice(0, 2).map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.id}`} className="group block">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100 mb-8">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">{post.date}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 font-medium line-clamp-2 text-base mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs flex items-center group-hover:gap-3 transition-all">
                        Read story <span className="ml-2">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Philosophy Section */}
      <div className="px-4 md:px-6 mb-8">
        <section className="py-32 px-6 text-center bg-white rounded-[2.5rem] shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-slate-900 mx-auto rounded-2xl mb-12 flex items-center justify-center text-white font-sans font-bold">M</div>
            <h3 className="text-3xl md:text-5xl font-sans font-bold mb-8 tracking-tight text-slate-900 leading-tight">"Engineered for memories."</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-lg">
              At MotoKids, we believe high-quality play is the foundation of growth. Every vehicle in our fleet is balanced for safety and designed for sheer, unbridled joy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

