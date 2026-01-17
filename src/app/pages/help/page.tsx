import Link from "next/link";
import { HelpCircle, MessageCircle, Truck, RefreshCcw } from "lucide-react";

export default function HelpPage() {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden min-h-[60vh]">
            <div className="container mx-auto px-6 py-24 md:px-12">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Support Center</span>
                    <h1 className="text-4xl md:text-6xl font-sans font-black text-slate-900 tracking-tight mb-6">
                        How can we help?
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Find answers to common questions or get in touch with our team for assistance with your MotoKids vehicle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* FAQ Card */}
                    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <HelpCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">FAQs</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Answers to the most frequently asked questions about assembly, batteries, and shipping.
                        </p>
                        <Link href="/pages/faqs" className="text-indigo-600 font-bold text-sm uppercase tracking-wider hover:underline">
                            View FAQs →
                        </Link>
                    </div>

                    {/* Returns Card */}
                    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <RefreshCcw size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Returns & Refunds</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Read our policy on cancellations, returns, and warranty claims.
                        </p>
                        <Link href="/pages/cancellation-refund-policy" className="text-indigo-600 font-bold text-sm uppercase tracking-wider hover:underline">
                            Read Policy →
                        </Link>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Support</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Need personalized help? Our team is available via email and phone.
                        </p>
                        <Link href="/pages/contact-us" className="text-indigo-600 font-bold text-sm uppercase tracking-wider hover:underline">
                            Contact Us →
                        </Link>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="relative z-10 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Still need help?</h2>
                        <p className="text-slate-400 mb-8">Our support team is available Mon-Sat, 9am - 6pm EST.</p>
                        <a href="mailto:support@motokidstoys.com" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-zinc-200 transition-colors">
                            Email Support
                        </a>
                    </div>
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
}
