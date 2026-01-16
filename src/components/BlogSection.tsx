import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function BlogSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-20">
                    <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block underline decoration-indigo-950 decoration-4 underline-offset-8">Journal</span>
                    <h2 className="text-4xl md:text-7xl font-black text-indigo-950 uppercase tracking-tighter leading-[0.9]">
                        The Automotive <br /> <span className="text-royal-blue-600 italic">Playroom</span> Journal
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="group flex flex-col h-full bg-cream-50 p-4 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-950/5">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] mb-8">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 flex space-x-2">
                                    <div className="bg-white/90 backdrop-blur-md text-indigo-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center">
                                        <Clock size={12} className="mr-2" /> 5 Min Read
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 pb-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-extrabold text-indigo-950 mb-6 group-hover:text-royal-blue-600 transition-colors leading-snug tracking-tight">
                                    {post.title}
                                </h3>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-indigo-950/5">
                                    <span className="text-[10px] font-black text-indigo-950/30 uppercase tracking-[0.2em]">{post.date}</span>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="w-10 h-10 bg-indigo-950 text-white rounded-xl flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
