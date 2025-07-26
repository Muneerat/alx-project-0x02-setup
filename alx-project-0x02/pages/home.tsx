import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <Card title="Home Page" content="This is the content of the card." />
    </div>
  );
}
