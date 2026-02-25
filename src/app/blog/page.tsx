import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, Tag } from 'lucide-react';
import { blogs } from '@/lib/blog-data';
import { CtaStrip } from '@/components/home/CtaStrip';

export const metadata = {
  title: 'Blog - James Bond Cleaning',
  description: 'Read the latest cleaning tips, guides, and news from James Bond Cleaning.',
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-card pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
            Our <span className="text-primary block sm:inline">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Get the latest cleaning tips, guides, and useful information to help you maintain a spotless home.
          </p>

          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {blogs.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-900/5 group text-left flex flex-col h-full hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.slug}`} className="block relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </Link>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                        <Tag className="w-3.5 h-3.5" />
                        {post.category}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-slate-600 mb-8 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
              <p className="text-xl font-medium">No blog posts found.</p>
              <p className="mt-2">Check back soon for updates!</p>
            </div>
          )}
        </div>
      </div>
      <CtaStrip />
    </>
  );
}
