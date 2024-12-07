import PostPage from ".";

import { getAllPosts, Post } from "@/lib/api";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const pages: Post[] = [...posts.projects, ...posts.work];

  const slugs = await Promise.all(
    pages.map(async (post) => ({
      slug: post.slug,
      // markdown: await getMardownContent(post.slug),
    })),
  );

  return slugs;
}

export default function Page({
  params,
}: {
  params: { slug: string; markdown: string };
}) {
  return <PostPage params={params} />;
}
