import Head from "next/head"
import Layout from "@components/Layout"
import Container from "@components/Container"
import FeaturedPost from "@components/FeaturedPost"
import CardPost from "@components/CardPost"
import mockPost from "../utils/posts.json"

import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(mockPost)
  return (
    <Layout>
      <Head>
        <title>Home - Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4">
          {posts.map(post => (
            <div key={post.id} className="w-full md:w-4/12 px-4 py-8">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};
