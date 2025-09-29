import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 font-nunito">
      {/* Title */ }
      <h1 className="text-4xl font-bold font-grotesk text-gray-900 dark:text-white mb-4">
        { post.title }
      </h1>

      {/* Meta */ }
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-montserrat flex flex-wrap gap-4">
        <span>{ post.date }</span>
        { post.readTime && <span>{ post.readTime }</span> }
        { post.category && (
          <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold">
            { post.category }
          </span>
        ) }
        { post.author && <span>By { post.author }</span> }
      </div>

      {/* Image */ }
      { post.image && (
        <div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
          <Image
            src={ post.image }
            alt={ post.title }
            fill
            className="object-cover"
            priority
          />
        </div>
      ) }

      {/* Content */ }
      <div className="prose prose-lg dark:prose-invert max-w-none font-poppins">
        { post.content }
      </div>
    </article>
  );
}
