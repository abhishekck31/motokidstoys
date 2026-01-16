import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
    return (
        <div className="bg-zinc-50 min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="text-center mb-24">
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">Connect</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-slate-900 tracking-tighter leading-[0.9] italic">
                        Let's Talk <br /> Cars.
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 shadow-2xl shadow-slate-900/5">
                            <h2 className="text-3xl font-serif font-black text-slate-900 mb-12">The Flagship Showroom</h2>
                            <div className="space-y-10">
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mr-8 shrink-0 group-hover:rotate-6 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Location</h4>
                                        <p className="text-xl font-bold text-slate-900 leading-tight">
                                            Showroom NO 1, Besides Moosa Opticals, <br /> Nanpura, Surat, Gujarat 395003
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mr-8 shrink-0 group-hover:rotate-6 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Direct Line</h4>
                                        <a href="tel:+919638026901" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                                            +91 9638026901
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mr-8 shrink-0 group-hover:rotate-6 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Electronic Mail</h4>
                                        <a href="mailto:Sales@MotoKidsToys.com" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                                            sales@motokidstoys.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mr-8 shrink-0 group-hover:rotate-6 transition-transform">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Store Hours</h4>
                                        <p className="text-xl font-bold text-slate-900">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-serif font-black mb-6 italic">Customer First.</h3>
                            <p className="text-white/50 font-medium leading-[1.8] text-lg">
                                Our unbridled technical support is ready to assist you pre and post sale. Every vehicle is a commitment to your child's happiness.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-2xl shadow-slate-900/5 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-black text-slate-900 mb-12">Submit an Inquiry</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Full Name</label>
                                        <input type="text" className="w-full bg-zinc-50 border-0 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-600 transition-all font-bold text-slate-900" placeholder="Aarav Sharma" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Email Address</label>
                                        <input type="email" className="w-full bg-zinc-50 border-0 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-600 transition-all font-bold text-slate-900" placeholder="aarav@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Subject</label>
                                    <input type="text" className="w-full bg-zinc-50 border-0 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-600 transition-all font-bold text-slate-900" placeholder="Availability: Lamborghini SVJ" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Detailed Inquiry</label>
                                    <textarea rows={6} className="w-full bg-zinc-50 border-0 rounded-3xl p-6 focus:ring-2 focus:ring-indigo-600 transition-all font-bold text-slate-900" placeholder="Tell us more about what you're looking for..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-6 rounded-full transition-all uppercase tracking-widest text-[10px] shadow-2xl shadow-indigo-900/10 active:scale-[0.98]">
                                    Transmit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

