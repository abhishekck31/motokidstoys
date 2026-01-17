"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "./CartDrawer";

const MENU_ITEMS = [
    { name: "Ride on Cars", href: "/collections/ride-on-cars" },
    { name: "Ride on Bikes", href: "/collections/ride-on-bikes" },
    { name: "Licensed Kids Cars", href: "/collections/licensed-kids-cars" },
    { name: "Dirt Bike", href: "/collections/dirt-bike" },
    { name: "Kids wardrobe", href: "/collections/kids-wardrobe" },
    { name: "Contact Us", href: "/pages/contact-us" },
    { name: "Help", href: "/pages/help" },
];

export default function Navbar() {
    const { cart, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <div className="w-full flex flex-col font-sans">
                {/* Top Utility Bar */}
                <div className="bg-[#1a1a1a] text-white py-2 px-4 md:px-8 lg:px-12 flex justify-between items-center text-xs md:text-sm">
                    {/* Left: Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors">
                            <Facebook size={16} fill="white" className="stroke-none" />
                        </Link>
                        <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                            <Instagram size={16} />
                        </Link>
                        <Link href="https://youtube.com" className="hover:text-gray-300 transition-colors">
                            <Youtube size={16} fill="white" className="stroke-none" />
                        </Link>
                    </div>

                    {/* Center: Promo Text */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 font-medium tracking-wide">
                        Easy EMI | Cash On Delivery Available | <span className="font-bold">SHOP NOW</span>
                    </div>

                    {/* Right: Spacer/Balance (Hidden on mobile) */}
                    <div className="hidden md:block w-[100px]"></div>
                </div>

                {/* Main Navbar Section */}
                <nav className="bg-white py-4 px-4 md:px-8 lg:px-12 border-b border-gray-100 relative">
                    <div className="container mx-auto flex flex-col items-center">


                        <div className="w-full flex justify-between items-center md:hidden mb-4">
                            <button onClick={() => setIsMobileMenuOpen(true)}>
                                <Menu size={24} className="text-slate-900" />
                            </button>
                            <Link href="/" className="font-serif text-2xl font-black tracking-tighter text-slate-900">
                                MOTOKIDS
                            </Link>
                            <button onClick={() => setIsCartOpen(true)} className="relative">
                                <ShoppingCart size={24} className="text-slate-900" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Desktop Brand Logo */}
                        <div className="hidden md:block mb-6">
                            <Link href="/" className="flex flex-col items-center group">
                                {/* Using text logo to match existing branding but styled similarly to common ecommerce */}
                                <span className="font-serif text-3xl font-black tracking-tighter text-slate-900">MOTOKIDS</span>
                                {/* Visual separator or tagline could go here if in reference, but keeping clean */}
                            </Link>
                        </div>

                        {/* Desktop Navigation & Actions Row */}
                        <div className="hidden md:flex w-full items-center justify-between relative">

                            {/* Search Icon (Absolute Left of this row or just aligned? 
                   Reference description: "Right-side Action Icons". 
                   "Navigation Menu (Centered, Below Logo)".
                   Usually in this layout: 
                   Row 1: Logo
                   Row 2: Nav Menu
                   It seems icons are on the right. Search is an action icon.
               */}

                            {/* Spacer to balance icons if Nav is truly centered relative to container */}
                            <div className="w-1/4 flex justify-start">
                                <button className="hover:opacity-70 transition-opacity">
                                    <Search size={22} className="text-slate-900" strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Centered Navigation Menu */}
                            <div className="flex-1 flex justify-center gap-8">
                                {MENU_ITEMS.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-[13px] font-bold uppercase tracking-wide text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Right Side Actions */}
                            <div className="w-1/4 flex justify-end items-center gap-6">

                                <Link href="/wishlist" className="hover:opacity-70 transition-opacity">
                                    <Heart size={22} className="text-slate-900" strokeWidth={1.5} />
                                </Link>
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="hover:opacity-70 transition-opacity relative"
                                >
                                    <ShoppingCart size={22} className="text-slate-900" strokeWidth={1.5} />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        className="fixed inset-0 z-[150] bg-white flex flex-col p-6 w-[80%] max-w-sm shadow-2xl md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-serif text-xl font-black">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6">
                            {MENU_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-slate-900 hover:text-indigo-600 uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        {/* Mobile Actions in Menu */}
                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">

                            <Link href="/wishlist" className="flex items-center gap-3 font-medium">
                                <Heart size={20} /> Wishlist
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Dark overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-[140] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            <CartDrawer />
        </>
    );
}
