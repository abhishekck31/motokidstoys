"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalSubtotal, totalShipping, handleWhatsAppCheckout } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-lg bg-zinc-50 shadow-2xl z-[101] flex flex-col"
                    >
                        <div className="p-8 border-b border-zinc-200 flex items-center justify-between">
                            <h2 className="text-2xl font-serif font-black">Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                                aria-label="Close cart"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 scrollbar-hide">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <p className="text-zinc-400 font-medium mb-6">Your cart is currently empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-indigo-600 font-black uppercase tracking-widest text-sm border-b-2 border-indigo-600 pb-1 hover:text-indigo-900 hover:border-indigo-900 transition-all"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-6 items-start">
                                            <div className="relative w-24 h-24 bg-white overflow-hidden flex-shrink-0 border border-zinc-100">
                                                <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-serif font-bold truncate leading-tight">{item.name}</h3>
                                                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-500 ml-4">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-zinc-400 mb-4 font-medium uppercase tracking-tighter">₹{item.price.toLocaleString()}</p>
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center border border-zinc-200 rounded-full px-2">
                                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-indigo-600"><Minus size={14} /></button>
                                                        <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-indigo-600"><Plus size={14} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-8 bg-white border-t border-zinc-200">
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-zinc-600 font-medium">
                                        <span>Subtotal</span>
                                        <span>₹{totalSubtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-600 font-medium">
                                        <span>Shipping</span>
                                        <span>{totalShipping === 0 ? <span className="text-green-600 font-black">FREE</span> : `₹${totalShipping.toLocaleString()}`}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-serif font-black pt-4 border-t border-zinc-100">
                                        <span>Total</span>
                                        <span>₹{(totalSubtotal + totalShipping).toLocaleString()}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="w-full bg-indigo-900 text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-900/10 active:scale-[0.98]"
                                >
                                    <MessageCircle size={18} />
                                    Checkout via WhatsApp
                                </button>
                                <p className="text-[10px] text-center mt-4 text-zinc-400 font-bold uppercase tracking-widest">
                                    Secure conversational commerce
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
