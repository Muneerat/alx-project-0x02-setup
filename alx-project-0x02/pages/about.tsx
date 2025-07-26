import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
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
      <div className=" space-x-2 flex">
        <Button title="Small" styles="rounded-sm" />
        <Button title="Medium" styles="rounded-md" />
        <Button title="Large" styles="rounded-full" />
      </div>
    </div>
  );
}
