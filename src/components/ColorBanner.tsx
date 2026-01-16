import Link from 'next/link';

export default function ColorBanner() {
    return (
        <section className="py-32 bg-orange-300 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-indigo-950 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-8 py-2 bg-white/20 inline-block rounded-full">Personalization</span>
                    <h2 className="text-5xl md:text-8xl font-black text-indigo-950 mb-10 uppercase tracking-tighter leading-[0.9]">
                        Pick your <br className="hidden md:block" /> favorite <span className="text-royal-blue-600 italic">hue</span>
                    </h2>
                    <p className="text-indigo-950/70 text-lg md:text-2xl font-bold mb-16 max-w-2xl mx-auto leading-relaxed">
                        From classic racing red to electric neon green, choose a color that matches their personality.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['bg-red-600', 'bg-royal-blue-600', 'bg-indigo-950', 'bg-orange-400', 'bg-pink-500'].map((color, i) => (
                            <div key={i} className={`w-12 h-12 ${color} rounded-2xl shadow-xl transform hover:scale-125 transition-transform duration-500 cursor-pointer border-4 border-white/20`} />
                        ))}
                    </div>
                    <div className="mt-16">
                        <Link
                            href="/collections/all"
                            className="inline-flex items-center bg-indigo-950 text-white px-12 py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-950/20"
                        >
                            Shop All Variations
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
