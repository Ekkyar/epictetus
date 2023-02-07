import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";

interface InfoPostProps {
  category: string;
  date: string;
  title: string;
  shortDescription: string;
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}: InfoPostProps) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} center={false} />
      <p className="text-white/60 w-10/12 mt-5">{shortDescription}</p>
      <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />
    </>
  );
}
