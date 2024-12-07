import Link from "next/link";
// import { slug } from 'github-slugger'
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      className="mr-3 text-sm font-medium uppercase text-midnight-400 hover:text-primary-600 dark:hover:text-primary-400"
      href={``}
    >
      {text.split(" ").join("-")}
    </Link>
  );
};

export default Tag;
