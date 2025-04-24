interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
}

// Simulated database of blog posts
const posts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'First Post',
    content: 'This is the content of my first blog post.',
    date: '2023-01-01',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    content: 'This is another blog post with different content.',
    date: '2023-01-02',
  },
];

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return posts.find((post) => post.slug === slug);
}

export async function getAllPostSlugs(): Promise<string[]> {
  return posts.map((post) => post.slug);
}
