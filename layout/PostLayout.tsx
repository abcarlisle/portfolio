import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function PostLayout({ children }: LayoutProps) {
  return (
    <article className="">
      <div>{children}</div>
    </article>
  );
}
