"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Gamepad2, Bluetooth, Battery, Cpu } from 'lucide-react';

const FEATURES = [
    {
        icon: Zap,
        title: "High-Torque Motors",
        desc: "Equipped with up to 6 high-output motors for unbridled 4x4 off-road performance."
    },
    {
        icon: Gamepad2,
        title: "Parental Priority",
        desc: "Integrated 2.4G remote control with priority override and emergency stop functions."
    },
    {
        icon: Cpu,
        title: "Soft Start Logic",
        desc: "Advanced electronic acceleration to prevent jerky starts and ensure child neck safety."
    },
    {
        icon: Bluetooth,
        title: "Immersive Audio",
        desc: "Digital dashboards with Bluetooth, MP3, and FM connectivity for a full sensory journey."
    },
    {
        icon: Battery,
        title: "Extended Endurance",
        desc: "High-capacity deep-cycle batteries for up to 90 minutes of continuous exploration."
    },
    {
        icon: ShieldCheck,
        title: "Safety Standard",
        desc: "All vehicles meet stringent 2026 safety standards with multi-point harness systems."
    }
];

export default function TechShowcase() {
    return (
        <section className="py-32 bg-slate-900 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block underline decoration-indigo-400 decoration-2 underline-offset-4">Engineering Excellence</span>
                    <h2 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-[0.85] italic">
                        Built Like <br /> The Real Deal.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-indigo-400 mb-8 blur-none group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-black text-white mb-4 italic group-hover:text-indigo-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
