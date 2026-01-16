"use client";

import { motion } from 'framer-motion';

export default function CancellationRefundPolicy() {
    return (
        <div className="bg-zinc-50 min-h-screen pt-40 pb-32">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">Terms</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-slate-900 mb-20 tracking-tighter leading-[0.9] italic">
                        Policy <br /> Framework.
                    </h1>
                </motion.div>

                <div className="space-y-24">
                    <section>
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8 border-l-4 border-indigo-600 pl-6">01. Cancellation Logic</h2>
                        <p className="text-slate-600 font-medium leading-[1.8] text-xl mb-10">At MotoKids Toys, our logistics engine processes orders with high velocity. However, we maintain a fair cancellation framework for our clients.</p>
                        <ul className="space-y-6">
                            <li className="flex items-center space-x-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-xl shadow-slate-900/5">
                                <div className="text-red-500 font-black text-3xl font-serif">5%</div>
                                <div className="text-slate-600 font-medium">Instant refund deduction (Processing & bank gateway charges).</div>
                            </li>
                            <li className="flex items-center space-x-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-xl shadow-slate-900/5">
                                <div className="text-red-500 font-black text-3xl font-serif">15%</div>
                                <div className="text-slate-600 font-medium">Deduction if cancelled after dispatch (Includes logistics and handling).</div>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8 border-l-4 border-indigo-600 pl-6">02. Return & Replacement</h2>
                        <p className="text-slate-600 font-medium leading-[1.8] text-xl mb-10">We stand behind the engineering of our fleet. In case of manufacturing defects, the following replacement windows apply:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
                                <h3 className="font-serif font-black text-3xl italic mb-2">Ride-on Toys</h3>
                                <div className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-8">Premium Fleet</div>
                                <p className="text-5xl font-serif font-black text-white leading-none mb-2">10 Days</p>
                                <p className="text-[10px] uppercase font-black tracking-widest text-white/40">Replacement Window</p>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] border border-zinc-200">
                                <h3 className="font-serif font-black text-3xl italic mb-2">RC Series</h3>
                                <div className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-8">Performance Toys</div>
                                <p className="text-5xl font-serif font-black text-slate-900 leading-none mb-2">6 Days</p>
                                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Replacement Window</p>
                            </div>
                        </div>
                        <div className="bg-red-50 text-red-600 p-8 rounded-[2rem] font-black text-center uppercase tracking-widest text-xs border border-red-100 shadow-2xl shadow-red-500/10">
                            CRITICAL: Digital unboxing documentation is mandatory for all claims.
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8 border-l-4 border-indigo-600 pl-6">03. Refund Sequence</h2>
                        <p className="text-slate-600 font-medium leading-[1.8] text-xl">Upon receipt and technical inspection of your return, we will transmit a notification of approval. Validated refunds are processed to the original payment source within 7-10 working cycles.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

