import { PostsDTO } from "../types/PostsDTO";
import { CardPost } from "./cardPost";

interface ListOfPostsProps {
  posts: PostsDTO[];
}

export function ListOfPosts({ posts }: ListOfPostsProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center max-w-6xl mx-auto">
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ListOfPosts;
