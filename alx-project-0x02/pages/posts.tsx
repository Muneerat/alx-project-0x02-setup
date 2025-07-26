import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";
import React from "react";

interface PostProp {
  posts: PostProps[];
}

export default function posts({ posts }: PostProp) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};
