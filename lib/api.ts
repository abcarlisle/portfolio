import postsData from "../public/post/posts.json";

export interface Post {
  slug: string;
  title: string;
  company: string;
  date_start: Date;
  date_stop?: Date;
  summary: string;
  skills: string[];
  github?: string;
}

function formatPost(jsonPost: any): Post {
  // console.log("PRE", jsonPost);
  let post: Post;

  if (jsonPost.date_stop) {
    post = {
      slug: jsonPost.slug,
      title: jsonPost.title,
      company: jsonPost.company,
      date_start: new Date(jsonPost.date_start),
      date_stop: new Date(jsonPost.date_stop),
      summary: jsonPost.summary,
      skills: jsonPost.skills,
      github: jsonPost.github,
    };
  } else {
    post = {
      slug: jsonPost.slug,
      title: jsonPost.title,
      company: jsonPost.company,
      date_start: new Date(jsonPost.date_start),
      date_stop: undefined,
      summary: jsonPost.summary,
      skills: jsonPost.skills,
      github: jsonPost.github,
    };
  }

  // console.log("POST", post);

  return post;
}
export function getAllPosts(): { projects: Post[]; work: Post[]; about: Post } {
  const projects = postsData["projects"];
  const work = postsData["work"];
  const about = postsData["about"];

  const formatedProjects = projects.map((post) => formatPost(post));

  const formatedWork = work.map((post) => formatPost(post));

  const formatedAbout = formatPost(about);

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
    return formatPost(post);
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

    return formatPost(post);
  } else {
    return Promise.reject(new Error(`Post with slug ${slug} not found`));
  }
}
