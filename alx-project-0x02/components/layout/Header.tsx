import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="bg-red-300">
      <ul className="flex justify-between">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
