import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MotoKids Toys",
  description: "The Ultimate Drive. Modern Ride-ons for the Next Generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-zinc-100/50 text-slate-900 selection:bg-indigo-600/10`}
      >
        <WishlistProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <Footer />
            </div>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}



