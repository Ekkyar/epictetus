import Head from "next/head"
import Layout from "@components/Layout"
import Container from "@components/Container"
import CardPost from "@components/CardPost"
import SectionHeader from "@components/SectionHeader"
import mockPost from "../utils/posts.json"

import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState(mockPost)
  return (
    <Layout>
      <Head>
        <title>Category - Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {posts.length < 1 ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 w-full md:w-6/12 mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            {posts.map(post => (
              <div key={post.id} className="w-full md:w-4/12 px-4 py-8">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  )
}