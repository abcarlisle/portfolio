import postsData from "../public/post/posts.json";

export interface Post {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  skills: string[];
}
export function getAllPosts(): { projects: Post[]; work: Post[]; about: Post } {
  const projects = postsData["projects"];
  const work = postsData["work"];
  const about = postsData["about"];

  const formatedProjects = projects.map((post) => {
    return { ...post, date: new Date(post.date) };
  });

  const formatedWork = work.map((post) => {
    return { ...post, date: new Date(post.date) };
  });

  const formatedAbout = { ...about, date: new Date(about.date) };

  return {
    projects: formatedProjects,
    work: formatedWork,
    about: formatedAbout,
  };
}

export async function getPostBySlug(slug: string): Promise<Post> {
  let post = postsData["projects"].find((p) => p.slug === slug);

  if (!post) {
    post = postsData["work"].find((p) => p.slug === slug);
  }

  if (post) {
    console.log(post.date);

    return { ...post, date: new Date(post.date) };
  } else {
    return Promise.reject(new Error(`Post with slug ${slug} not found`));
  }
}

async function getPostOffsetSub(
  data: (typeof postsData)["projects"] | (typeof postsData)["work"],
  slug: string,
  offset: number,
): Promise<Post> {
  let index = data.findIndex((p) => p.slug === slug);

  if (index !== -1) {
    const post = data[index + offset];

    return { ...post, date: new Date(post.date) };
  } else {
    return Promise.reject(new Error(`Post with slug ${slug} not found`));
  }
}

export async function getPostOffset(
  slug: string,
  offset: number,
): Promise<Post> {
  return getPostOffsetSub(postsData["projects"], slug, offset)
    .then((post) => post)
    .catch(() =>
      getPostOffsetSub(postsData["work"], slug, offset).then((post) => post),
    );
}
