import UserCard from "@/components/common/UserCard";
import { UserCardProps } from "@/interfaces";
import React from "react";

const Users = ({ users }: UserCardProps) => {
  console.log(users, "ff");
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
