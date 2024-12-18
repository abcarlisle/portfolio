import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-midnight-50 sm:text-4xl sm:leading-10 md:text-5xl">
      {children}
    </h1>
  );
}
