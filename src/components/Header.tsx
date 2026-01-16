"use client";

import Link from 'next/link';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const MENU_ITEMS = [
    { name: "Ride on Cars", href: "/collections/ride-on-cars" },
    { name: "Ride on Bikes", href: "/collections/ride-on-bikes" },
    { name: "Dirt Bike", href: "/collections/dirt-bike" },
    { name: "Contact", href: "/pages/contact-us" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart, setIsCartOpen } = useCart();

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-8 left-0 right-0 z-[90] transition-all duration-700 px-6 md:px-12 ${isScrolled ? 'top-4' : 'top-8'
                    }`}
            >
                <div className={`container mx-auto flex items-center justify-between py-6 px-4 md:px-10 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.03)] rounded-full py-4' : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <Link href="/" className="font-serif text-2xl font-black tracking-tighter group flex items-center">
                        <span className={`transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>M</span>
                        <span className={`transition-colors duration-500 group-hover:opacity-100 hidden sm:block ${isScrolled ? 'text-slate-900' : 'text-white'}`}>OTOKIDS</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {MENU_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${isScrolled
                                        ? 'text-slate-900/40 hover:text-slate-900'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <button className={`transition-colors duration-500 ${isScrolled ? 'text-slate-900/40 hover:text-slate-900' : 'text-white/60 hover:text-white'}`}>
                            <Search size={20} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className={`group relative flex items-center pl-5 pr-2 py-2 rounded-full transition-all duration-500 shadow-xl active:scale-95 ${isScrolled
                                    ? 'bg-slate-900 text-white shadow-slate-900/10 hover:bg-indigo-600'
                                    : 'bg-white text-slate-900 shadow-white/10 hover:bg-slate-100'
                                }`}
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest mr-4 hidden md:block">Cart</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${isScrolled ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
                                }`}>
                                <motion.span
                                    key={cartCount}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className="text-[11px] font-black"
                                >
                                    {cartCount}
                                </motion.span>
                            </div>
                        </button>
                        <button
                            className={`lg:hidden transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-[100] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="font-serif text-2xl font-black">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-8">
                            {MENU_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-serif font-black hover:text-indigo-600 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col space-y-4">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Support</p>
                            <a href="tel:+919638026901" className="text-xl font-bold font-serif">+91 9638026901</a>
                            <a href="mailto:Sales@MotoKidsToys.com" className="text-xl font-bold font-serif">sales@motokidstoys.com</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CartDrawer />
        </>
    );
}
