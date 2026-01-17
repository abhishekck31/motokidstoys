"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    { name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    { name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Porsche_logo.svg" },
    { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
    { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
    { name: "Ferrari", logo: "https://upload.wikimedia.org/wikipedia/de/c/c0/Scuderia_Ferrari_Logo.svg" },
    { name: "Lamborghini", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg" },
    { name: "Bugatti", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Bugatti_logo.svg" },
    { name: "Land Rover", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Land_Rover_logo_black.svg" },
];

export default function BrandMarquee() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background Decor: Faded/Grayscale Row (Simulating the depth in reference) */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full opacity-5 blur-[1px] scale-110 pointer-events-none grayscale">
                <div className="flex space-x-24 w-max">
                    {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                        <div key={`bg-${i}`} className="w-32 h-32 relative flex items-center justify-center">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={100}
                                height={100}
                                className="object-contain opacity-50"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Tilted Strip */}
            <div className="relative rotate-[-2deg] scale-105 z-10 py-8 bg-[#f0f8ff]/90 border-y border-indigo-100 shadow-xl backdrop-blur-sm">
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex space-x-12 md:space-x-24 w-max px-12"
                    >
                        {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                            <div key={i} className="flex items-center justify-center filter drop-shadow-lg group">
                                {/* Logo Circle Container */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={60}
                                        height={60}
                                        className="object-contain max-w-[60%] max-h-[60%]"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
