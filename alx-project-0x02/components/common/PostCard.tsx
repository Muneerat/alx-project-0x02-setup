import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div>
      <h4>{userId}</h4>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
