import Link from "next/link";

interface PostMetaTitleProps {
  category: string;
  date: string;
  title: string;
  center: boolean;
}

export default function PostMetaTitle({ category, date,
  title, center }: PostMetaTitleProps) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? `text-center` : ``}`}>
        <Link href="/detail">
          {title}
        </Link>
      </h2>
    </>
  )
}