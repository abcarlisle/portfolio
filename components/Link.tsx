import Link from "next/link";

type Props = {
  href: string;
  title: string;
};
export default function MyLink({ href, title }: Props) {
  return (
    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
      <Link href={href}>{title}</Link>
    </div>
  );
}
