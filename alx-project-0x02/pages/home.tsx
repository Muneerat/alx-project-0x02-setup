import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <Card title="Home Page" content="Munirat page content goes here." />
      <PostModal title="New Post" content="New post" />
    </div>
  );
}
