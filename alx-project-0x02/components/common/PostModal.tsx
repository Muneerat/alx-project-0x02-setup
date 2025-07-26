import { CardProps } from "@/interfaces";
import React from "react";

export default function PostModal({ title, content }: CardProps) {
  return (
    <div>
      <h2>Create a New Post</h2>
      <form>
        <div>
          <label htmlFor="title">{title}</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">{content}</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
