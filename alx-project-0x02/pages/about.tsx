import Card from "@/components/common/Card";
import Header from "@/interfaces/layout/Header";
import React from "react";

export default function About() {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <Card
        title="About Title"
        content="This is the content of the about card."
      />
    </div>
  );
}
