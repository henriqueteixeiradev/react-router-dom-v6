import { MAX_LENGTH_BODY_POST } from "../consts/maxLengthBodyPost";
import { PostsDTO } from "../types/PostsDTO";
import { Link } from "react-router-dom";

interface CardPostProps {
  post: PostsDTO;
}

export function CardPost({ post }: CardPostProps) {
  const bodyText =
    post.body.length > MAX_LENGTH_BODY_POST
      ? `${post.body.substring(0, MAX_LENGTH_BODY_POST)}...`
      : post.body;

  return (
    <Link
      to={String(post.id)}
      className="flex flex-col w-80 border border-gray-500"
    >
      <h2 className="text-gray-600 text-xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-400">{bodyText}</p>
    </Link>
  );
}
