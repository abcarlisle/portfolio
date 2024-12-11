import { ReactNode } from "react";

import { Post } from "@/lib/api";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
};

interface LayoutProps {
  date: Date;
  title: string;
  githubUrl: string;
  tags: string[];
  next?: Post;
  prev?: Post;
  children: ReactNode;
}

export default function PostLayout({
  date,
  title,
  githubUrl,
  tags,
  next,
  prev,
  children,
}: LayoutProps) {
  return (
    <article className="">
      <div>{children}</div>
    </article>
  );
}
