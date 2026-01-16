import { PRODUCTS, COLLECTIONS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

export default async function CollectionPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    if (id === 'all') {
        return (
            <div className="bg-zinc-50 min-h-screen pt-40 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 mb-16 tracking-tighter text-center italic">The Full Fleet.</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const collection = COLLECTIONS.find(c => c.id === id);
    // Flexible filtering to find products that match the collection ID or category
    const products = PRODUCTS.filter(p =>
        id.includes(p.category.toLowerCase()) ||
        p.name.toLowerCase().includes(id.split('-').pop() || '')
    );

    if (!collection && products.length === 0) notFound();

    return (
        <div className="bg-zinc-50 min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-indigo-600 decoration-2 underline-offset-4">Collections</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-slate-900 tracking-tighter italic">
                        {collection?.name || id.replace(/-/g, ' ')}.
                    </h1>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mt-8">Discover {products.length} models</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="text-slate-300 font-serif text-2xl italic">No models found in this category yet. Our 2026 fleet is expanding soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

