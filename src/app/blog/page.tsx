import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data';

export default function BlogListPage() {
    return (
        <div className="bg-zinc-50 min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">Journal</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black text-slate-900 tracking-tighter leading-[0.9] italic">
                        The Automotive <br /> Playroom.
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                    {BLOG_POSTS.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group">
                            <article className="flex flex-col h-full">
                                <div className="relative aspect-[16/9] w-full overflow-hidden mb-10 bg-zinc-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-8 left-8 bg-white text-slate-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Insights
                                    </div>
                                </div>
                                <div className="px-2">
                                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] block mb-4">{post.date}</span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 font-medium leading-[1.8] mb-10 line-clamp-2 md:text-lg">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-indigo-600 font-black uppercase tracking-widest text-[10px] flex items-center group-hover:gap-4 transition-all">
                                        Read the full story <span className="ml-2">→</span>
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

