"use client";

import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-zinc-100 flex items-center justify-center h-8 z-[100] relative">
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
      >
        Free Shipping on all orders above <span className="text-slate-900">₹7,499</span>
      </motion.p>
    </div>
  );
}
