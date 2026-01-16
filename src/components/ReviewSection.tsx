import { Star, CheckCircle, Quote } from 'lucide-react';

const REVIEWS = [
    { id: 1, name: "Prashant S.", date: "Dec 12, 2025", content: "Amazing quality! My son loves the Discovery SUV. The battery last long and the remote control is very responsive.", rating: 5 },
    { id: 2, name: "Anita R.", date: "Dec 5, 2025", content: "Great service and fast delivery to Mumbai. The product was well packaged and easy to assemble.", rating: 5 },
    { id: 3, name: "Vikram M.", date: "Nov 28, 2025", content: "The vintage car looks exactly like the pictures. Very premium feel and lights are super bright at night.", rating: 4 },
    { id: 4, name: "Rohan D.", date: "Jan 10, 2026", content: "Best experience ever. The 4x4 drive is really powerful even on grass.", rating: 5 },
    { id: 5, name: "Sneha K.", date: "Jan 2, 2026", content: "My twins love the 2-seater configuration. Very safe and sturdy.", rating: 5 },
    { id: 6, name: "Amit P.", date: "Dec 20, 2025", content: "Fantastic detail on the police cruiser. The sirens are a hit!", rating: 5 },
];

export default function ReviewSection() {
    return (
        <section className="py-24 bg-cream-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-indigo-950/40 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block underline decoration-orange-300 decoration-4 underline-offset-8">Testimonials</span>
                    <h2 className="text-4xl md:text-7xl font-black text-indigo-950 uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.9]">
                        Let customers speak <br className="hidden md:block" /> for <span className="text-royal-blue-600 italic">our quality</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full border-4 border-cream-50 bg-indigo-950 flex items-center justify-center text-white text-[10px] font-black`}>IM</div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center md:items-start text-indigo-950 uppercase">
                            <div className="flex text-orange-400 mb-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-xs font-black tracking-widest text-indigo-950/60">4.9/5 based on 1159 reviews</span>
                        </div>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="break-inside-avoid bg-white p-10 rounded-[2.5rem] border border-indigo-950/5 shadow-[0_10px_40px_rgba(40,32,88,0.03)] hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 bg-cream-50 rounded-2xl flex items-center justify-center text-royal-blue-600 group-hover:bg-royal-blue-600 group-hover:text-white transition-colors duration-500">
                                    <Quote size={20} />
                                </div>
                                <div className="flex text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                                    ))}
                                </div>
                            </div>

                            <p className="text-indigo-950 text-lg font-medium italic mb-10 leading-relaxed group-hover:text-royal-blue-600 transition-colors">
                                "{review.content}"
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-indigo-950/5">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-indigo-950 flex items-center justify-center text-white text-[10px] font-black mr-3 uppercase tracking-tighter shadow-xl">
                                        {review.name.split(' ')[0][0]}{review.name.split(' ')[1][0]}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-indigo-950 text-sm flex items-center">
                                            {review.name}
                                            <CheckCircle size={14} className="ml-1.5 text-green-500" />
                                        </h4>
                                        <span className="text-[10px] text-indigo-950/30 uppercase font-black tracking-widest">Verified Buyer</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-indigo-950/20 uppercase">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-indigo-950 text-white px-12 py-5 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-indigo-950/20">
                        Read all customer stories
                    </button>
                </div>
            </div>
        </section>
    );
}
