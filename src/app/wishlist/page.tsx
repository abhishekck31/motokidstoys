"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WishlistPage() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product: any) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.salePrice || product.price,
            quantity: 1,
            image: product.image,
            variant: product.colors[0],
            shippingCostPerItem: product.shippingCost || 0
        });
    };

    if (wishlist.length === 0) {
        return (
            <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden min-h-[60vh] flex items-center justify-center p-6 mx-4 md:mx-6 my-8">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <ShoppingBag size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Wishlist is Empty</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Looks like you haven't saved any vehicles yet. Explore our fleet and save your favorites for later!
                    </p>
                    <Link href="/collections/all" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-indigo-600 transition-colors">
                        Start Exploring
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden min-h-[60vh] mx-4 md:mx-6 my-8">
            <div className="container mx-auto px-6 py-16 md:px-12">
                <div className="mb-12">
                    <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Saved For Later</span>
                    <h1 className="text-4xl md:text-5xl font-sans font-black text-slate-900 tracking-tight">
                        Your Wishlist ({wishlist.length})
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {wishlist.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="group flex flex-col md:flex-row items-center bg-zinc-50 border border-zinc-100 rounded-3xl p-6 gap-6 hover:shadow-md transition-shadow"
                        >
                            {/* Image */}
                            <div className="w-full md:w-48 aspect-square relative bg-white rounded-2xl overflow-hidden shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left">
                                <Link href={`/product/${product.id}`} className="block group-hover:text-indigo-600 transition-colors">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                </Link>
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                    {product.salePrice ? (
                                        <>
                                            <span className="text-lg font-black text-slate-900">₹{product.salePrice.toLocaleString()}</span>
                                            <span className="text-sm font-medium text-slate-400 line-through">₹{product.price.toLocaleString()}</span>
                                        </>
                                    ) : (
                                        <span className="text-lg font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                                    )}
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                                    In Stock • Ready to Ship
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-full md:w-auto bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-indigo-600 transition-colors whitespace-nowrap"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-400 hover:text-red-500 font-bold uppercase tracking-wider text-[10px] transition-colors py-3 px-4 border border-transparent hover:border-red-100 hover:bg-red-50 rounded-full"
                                >
                                    <Trash2 size={16} />
                                    <span className="md:hidden">Remove</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
