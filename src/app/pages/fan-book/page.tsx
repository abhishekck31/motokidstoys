export default function FanBook() {
    return (
        <div className="bg-slate-900 min-h-screen pt-40 pb-32 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-400 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-24"
                >
                    <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-400 decoration-2 underline-offset-4">Community</span>
                    <h1 className="text-5xl md:text-9xl font-serif font-black text-white mb-10 tracking-tighter leading-[0.8] italic">
                        The Fan <br /> Book.
                    </h1>
                    <p className="text-xl lg:text-3xl text-white/40 max-w-3xl mx-auto font-medium leading-tight">
                        A visual record of unbridled joy. Celebrating our youngest fleet commanders.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden group bg-slate-800"
                        >
                            <img
                                src={`https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600&sig=${i}`}
                                alt="Fan photo"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-left">
                                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Verified Driver</span>
                                <span className="text-white font-serif font-black text-xl italic leading-none">@commander_{i}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-12 lg:p-24 bg-white rounded-[4rem] text-slate-900">
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 italic tracking-tighter">Join the MotoKids Circle.</h2>
                    <p className="text-lg md:text-xl text-slate-500 mb-12 italic max-w-2xl mx-auto">Tag your child's unboxing adventure or their first solo drive with #MotoKidsToys on Instagram to be featured in our official record.</p>
                    <button className="bg-slate-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 transition-all shadow-2xl hover:shadow-indigo-500/20 active:scale-95">
                        Transmit Your Story
                    </button>
                </div>
            </div>
        </div>
    );
}

import { motion } from 'framer-motion';

