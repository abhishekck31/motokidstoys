"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    User,
    Gamepad2,
    Info,
    Package,
    ShieldCheck,
    MessageCircle,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ProductDetailPage() {
    const params = useParams();
    const product = PRODUCTS.find(p => p.id === params.id);
    const { addToCart } = useCart();
    const [activeTab, setActiveTab] = useState('specs');

    if (!product) return <div className="min-h-screen pt-40 text-center font-serif text-2xl">Product not found.</div>;

    const handleWhatsApp = () => {
        const link = getWhatsAppLink(product.name, product.salePrice || product.price);
        window.open(link, '_blank');
    };

    const dashboardItems = [
        { icon: Zap, label: "Voltage", value: product.specs.voltage || "N/A" },
        { icon: User, label: "Seats", value: product.specs.seats ? `${product.specs.seats} Seater` : "1 Seater" },
        { icon: Gamepad2, label: "Control", value: product.specs.remoteControl ? "Parental Remote" : "Manual Only" },
        { icon: ShieldCheck, label: "Warranty", value: product.category === 'ride-on' ? "10 Days Parts" : "15 Days Replacement" },
    ];

    return (
        <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-12">
                    <Link href="/">Home</Link>
                    <ChevronRight size={10} />
                    <Link href="/collections/all">Collection</Link>
                    <ChevronRight size={10} />
                    <span className="text-slate-900">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Zone A: Media Viewer (Sticky) */}
                    <div className="lg:sticky lg:top-40">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square bg-white border border-zinc-100 p-12 overflow-hidden shadow-2xl shadow-slate-900/5 group"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-8 group-hover:scale-110 transition-transform duration-1000"
                            />
                            {product.salePrice && (
                                <div className="absolute top-8 left-8 bg-red-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    Special Offer
                                </div>
                            )}
                        </motion.div>

                        <div className="grid grid-cols-4 gap-4 mt-8">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-white border border-zinc-100 p-2 cursor-pointer hover:border-indigo-600 transition-colors">
                                    <Image src={product.image} alt={product.name} width={100} height={100} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Zone B: Information Dashboard */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">
                                {product.category === 'ride-on' ? 'Ride-on Performance' : 'Premium Accessory'}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                                {product.name}
                            </h1>
                            <div className="flex items-end space-x-6 mb-12">
                                <span className="text-4xl font-black text-slate-900">₹{(product.salePrice || product.price).toLocaleString()}</span>
                                {product.salePrice && (
                                    <span className="text-xl font-medium text-slate-400 line-through mb-1">₹{product.price.toLocaleString()}</span>
                                )}
                            </div>

                            {/* Bento Grid Specs */}
                            <div className="grid grid-cols-2 gap-4 mb-12">
                                {dashboardItems.map((item, i) => (
                                    <div key={i} className="bg-white p-6 border border-zinc-100 flex flex-col items-center text-center group hover:border-indigo-600 transition-all duration-300">
                                        <item.icon size={24} className="text-slate-300 group-hover:text-indigo-600 mb-4 transition-colors" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</span>
                                        <span className="text-sm font-black text-slate-900">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex-grow bg-[#25D366] text-white px-10 py-6 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-green-500/20 active:scale-95 transition-all"
                                >
                                    <MessageCircle size={20} />
                                    Buy via WhatsApp
                                </button>
                                <button
                                    onClick={() => addToCart({
                                        id: product.id,
                                        name: product.name,
                                        price: product.salePrice || product.price,
                                        quantity: 1,
                                        image: product.image,
                                        shippingCostPerItem: product.shippingCost
                                    })}
                                    className="bg-slate-900 text-white px-10 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all active:scale-95"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Zone C: Detailed Tabs */}
                        <div className="pt-12 border-t border-zinc-200">
                            <div className="flex space-x-12 mb-12 border-b border-zinc-100">
                                {['specs', 'box', 'warranty'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-slate-900' : 'text-slate-300'
                                            }`}
                                    >
                                        {tab === 'specs' ? 'Specifications' : tab === 'box' ? 'In The Box' : 'Warranty & Parts'}
                                        {activeTab === tab && (
                                            <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="min-h-[200px]">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'specs' && (
                                        <motion.div
                                            key="specs"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12"
                                        >
                                            {Object.entries(product.specs).map(([key, value]) => (
                                                <div key={key} className="flex justify-between items-center py-4 border-b border-zinc-100">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                    <span className="text-sm font-bold text-slate-900">{String(value)}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === 'box' && (
                                        <motion.div
                                            key="box"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4"
                                        >
                                            {product.inTheBox.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-4">
                                                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-indigo-600">
                                                        <Package size={16} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{item}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === 'warranty' && (
                                        <motion.div
                                            key="warranty"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-zinc-100 p-8 rounded-[2rem] border border-zinc-200"
                                        >
                                            <h4 className="text-lg font-serif font-black mb-4">Official MotoKids Support Policy</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                                {product.category === 'ride-on'
                                                    ? "This vehicle is covered by our 10-Day Parts Replacement Policy. This covers the Gearbox, Remote Control, and Battery. Professional technical support is available via WhatsApp throughout the warranty period."
                                                    : "This accessory is covered by our 15-Day Replacement Policy. Items must be in original packaging and unused condition for a valid claim."
                                                }
                                            </p>
                                            <div className="flex items-center space-x-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                                                <ShieldCheck size={16} />
                                                <span>Unbridled Technical Support Guaranteed</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-serif font-black mb-8 italic">Key Features</h3>
                            <div className="space-y-6">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-4 group">
                                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Fixed missing import for Link in ProductDetail
import Link from 'next/link';
