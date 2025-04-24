import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.content.slice(0, 100),
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      <p>{post.content}</p>
    </article>
  );
}
