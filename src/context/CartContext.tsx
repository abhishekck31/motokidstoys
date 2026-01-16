"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
    shippingCostPerItem: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
    clearCart: () => void;
    totalSubtotal: number;
    totalShipping: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    handleWhatsAppCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

import { getCartWhatsAppLink } from '@/lib/whatsapp';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Persistence
    useEffect(() => {
        const savedCart = localStorage.getItem('motokids_cart');
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('motokids_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, qty: number) => {
        if (qty < 1) return removeFromCart(id);
        setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity: qty } : i));
    };

    const clearCart = () => setCart([]);

    const totalSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalShipping = totalSubtotal >= 7499
        ? 0
        : cart.reduce((acc, item) => acc + (item.shippingCostPerItem || 0) * item.quantity, 0);

    const handleWhatsAppCheckout = () => {
        const link = getCartWhatsAppLink(cart, totalSubtotal, totalShipping);
        window.open(link, '_blank');
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalSubtotal,
            totalShipping,
            isCartOpen,
            setIsCartOpen,
            handleWhatsAppCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
