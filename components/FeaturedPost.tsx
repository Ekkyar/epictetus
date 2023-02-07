import Link from "next/link";
import InfoPost from "@components/InfoPost"

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex flex-wrap -mx-4 items-start lg:items-center">
        <div className="w-full lg:w-8/12 px-4">
          <Link href="/detail">
            <img src="/featured-thumbnail.png" className="rounded-xl w-full mb-4 lg:mb-0" />
          </Link>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <InfoPost
            category={"UI Design"}
            date={"July 2, 2021"}
            title={"Understanding color theory: the color wheel and finding complementary colors"}
            shortDescription={"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "}
            authorAvatar={"/author-1.png"}
            authorName={"Leslie Alexander"}
            authorJob={"UI Designer"}
          />
        </div>
      </div>
      <hr className="block lg:hidden border-white/10 mt-10" />
    </article>
  )
}