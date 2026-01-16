"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/lib/data';

interface ProductCardProps {
    product: typeof PRODUCTS[0];
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.salePrice || product.price,
            quantity: 1,
            image: product.image,
            variant: product.colors[0],
            shippingCostPerItem: product.shippingCost || 0
        });

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            {/* Image Container */}
            <div className="relative aspect-[1/1] bg-zinc-100 overflow-hidden mb-6 flex items-center justify-center p-8 group-hover:bg-zinc-200/50 transition-colors duration-700">
                <Link href={`/product/${product.id}`} className="absolute inset-0 z-10" /> {/* Added Link for image */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {/* Floating Action */}
                <button
                    onClick={handleAdd}
                    className={`absolute bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 scale-0 group-hover:scale-100 z-20 ${isAdded ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-indigo-600'
                        }`}
                    aria-label="Add to cart"
                >
                    {isAdded ? <Check size={24} strokeWidth={3} /> : <ShoppingBag size={24} />}
                </button>

                {product.salePrice && (
                    <div className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-widest text-red-500">
                        Price drop
                    </div>
                )}
            </div>

            {/* Info wrap in Link */}
            <Link href={`/product/${product.id}`} className="flex flex-col items-center text-center">
                <h3 className="font-serif text-xl font-bold mb-2 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">
                    {product.name}
                </h3>
                <div className="flex items-center space-x-3">
                    {product.salePrice ? (
                        <>
                            <span className="text-sm font-black text-slate-900">₹{product.salePrice.toLocaleString()}</span>
                            <span className="text-xs font-medium text-slate-400 line-through">₹{product.price.toLocaleString()}</span>
                        </>
                    ) : (
                        <span className="text-sm font-black text-slate-900">₹{product.price.toLocaleString()}</span>
                    )}
                </div>
            </Link>
        </motion.div>
    );
}
