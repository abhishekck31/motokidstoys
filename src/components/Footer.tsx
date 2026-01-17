import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white pt-32 pb-16 border-t border-zinc-100 rounded-[2.5rem] shadow-sm overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    {/* Brand Column */}
                    <div className="space-y-12">
                        <Link href="/" className="font-serif text-3xl font-black tracking-tighter group flex items-center">
                            <span className="text-slate-900 group-hover:text-indigo-600 transition-colors">M</span>
                            <span className="text-slate-900 group-hover:text-indigo-600 transition-colors hidden sm:block">OTOKIDS</span>
                        </Link>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xs">
                            Defining the future of play through meticulous engineering and luxury design. MotoKids is the flagship for the next generation.
                        </p>
                        <div className="flex space-x-6">
                            {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="text-slate-300 hover:text-indigo-600 transition-all transform hover:-translate-y-2">
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.4em] mb-12 underline decoration-indigo-600 decoration-2 underline-offset-8">Navigation</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'The Showroom', href: '/' },
                                { name: 'Full Fleet', href: '/collections/all' },
                                { name: 'The Journal', href: '/blog' },
                                { name: 'Fan Book', href: '/pages/fan-book' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-slate-900 text-sm font-black uppercase tracking-widest flex items-center group transition-colors">
                                        <ChevronRight size={14} className="mr-4 text-indigo-600 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.4em] mb-12 underline decoration-indigo-600 decoration-2 underline-offset-8">Information</h4>
                        <ul className="space-y-6">
                            {[
                                { name: 'Refund Policy', href: '/pages/cancellation-refund-policy' },
                                { name: 'Disclaimer', href: '/pages/disclaimer-policy' },
                                { name: 'Contact Protocol', href: '/pages/contact-us' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-slate-900 text-sm font-black uppercase tracking-widest flex items-center group transition-colors">
                                        <ChevronRight size={14} className="mr-4 text-indigo-600 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Showroom Details */}
                    <div>
                        <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.4em] mb-12 underline decoration-indigo-600 decoration-2 underline-offset-8">The Showroom</h4>
                        <ul className="space-y-10">
                            <li className="flex items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-slate-300 mr-6 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                                    Showroom NO 1, Besides Moosa Opticals, <br /> Nanpura, Surat, Gujarat 395003
                                </p>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-slate-300 mr-6 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:+919638026901" className="text-slate-500 hover:text-slate-900 text-sm font-bold transition-colors">
                                    +91 9638026901
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-slate-300 mr-6 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:Sales@MotoKidsToys.com" className="text-slate-500 hover:text-slate-900 text-sm font-bold transition-colors">
                                    sales@motokidstoys.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                        © 2026 MotoKids Automotive Toys. Engineering Memories.
                    </p>
                    <div className="flex items-center space-x-12grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
                        {/* Placeholder for payment methods */}
                        <div className="h-6 w-10 bg-zinc-200 rounded"></div>
                        <div className="h-6 w-10 bg-zinc-200 rounded"></div>
                        <div className="h-6 w-10 bg-zinc-200 rounded"></div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                        Designed in <span className="text-slate-900">Antigravity</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
