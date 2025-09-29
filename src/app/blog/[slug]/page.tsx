import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-6 font-nunito">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-grotesk">
        { post.title }
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-montserrat">
        { post.date }
      </p>

      { post.image && (
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={ post.image }
            alt={ post.title }
            width={ 800 }
            height={ 400 }
            className="object-cover rounded-lg"
            priority
          />
        </div>
      ) }

      <article className="prose dark:prose-invert max-w-none font-poppins">
        { post.content }
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
