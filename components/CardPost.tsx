import Link from "next/link";
import InfoPost from "@components/InfoPost"

interface CardPostProps {
  thumbnail: string;
  category: string;
  date: string;
  title: string;
  shortDescription: string;
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}

export default function CardPost({
  thumbnail,
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}: CardPostProps) {
  return (
    <article>
      <Link href="/detail">
        <img src={thumbnail} className="w-full rounded mb-4" />
      </Link>
      <InfoPost
        category={category}
        date={date}
        title={title}
        shortDescription={shortDescription}
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </article>
  )
}