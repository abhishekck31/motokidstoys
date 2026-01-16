import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const BUDGET_ITEMS = [
    { id: 1, range: "Under ₹ 10k", subtitle: "Great Starters", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400" },
    { id: 2, range: "₹ 10k - ₹ 15k", subtitle: "Mid Range", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400" },
    { id: 3, range: "₹ 15k - ₹ 20k", subtitle: "Premium Choice", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400" },
    { id: 4, range: "Above ₹ 20k", subtitle: "Luxury Performance", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400" },
];

export default function BudgetList() {
    return (
        <section className="py-24 bg-indigo-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <span className="text-orange-300 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Smart Pricing</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                            Budget Friendly <span className="text-orange-300">Rides</span>
                        </h2>
                    </div>
                    <p className="text-white/40 font-bold text-sm mt-6 md:mt-0 max-w-xs">
                        Premium quality options for every price range. Quality and safety guaranteed.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BUDGET_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            href={`/collections/all?price_range=${item.range}`}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 bg-orange-300 rounded-2xl flex items-center justify-center text-indigo-950 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-500">
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-hover:text-indigo-950/30 transition-colors">
                                        {item.subtitle}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black text-white transition-colors group-hover:text-indigo-950 mb-4 tracking-tighter">
                                    {item.range}
                                </h3>
                                <p className="text-sm font-bold text-white/60 group-hover:text-indigo-950/60 transition-colors">
                                    Browse the best collection in this segment.
                                </p>
                            </div>

                            {/* Background Abstract Image */}
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-700 pointer-events-none">
                                <Image
                                    src={item.image}
                                    alt={item.range}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
