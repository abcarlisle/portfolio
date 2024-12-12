import postsData from "../public/post/posts.json";

export interface Post {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  skills: string[];
  github?: string;
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


export async function getPostOffset(
  slug: string,
  offset: number,
): Promise<Post> {
  const data = postsData["work"].concat(postsData["projects"]);

  let index = data.findIndex((p) => p.slug === slug);

  if (index !== -1) {
    if (index + offset < 0 || index + offset >= data.length) {
      return Promise.reject(new Error(`Post with slug ${slug} not found`));
    }
    const post = data[index + offset];

    return { ...post, date: new Date(post.date) };
  } else {
    return Promise.reject(new Error(`Post with slug ${slug} not found`));
  }
}
