import postsData from "../public/posts/posts.json";

export interface Post {
  slug: string;
  title: string;
  date: Date;
  summary: string;
}
export function getAllPosts(): Post[] {
  const formattedPosts = postsData.map((post) => {
    return { ...post, date: new Date(post.date) };
  });

  return formattedPosts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const post = postsData.find((p) => p.slug === slug);

  if (post) {
    return { ...post, date: new Date(post.date) };
  } else {
    return Promise.reject(new Error(`Post with slug ${slug} not found`));
  }
}
