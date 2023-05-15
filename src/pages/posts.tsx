import { useEffect, useState } from "react";
import { PostsDTO } from "../types/PostsDTO";
import { api } from "../server/api";
import { ListOfPosts } from "../components";
import { Loading } from "../components/loading";

export function PostsPage() {
  const [posts, setPosts] = useState<PostsDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function getPosts() {
    setIsLoading(true);

    api()
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-4">
      <h1 className="text-xl text-center py-4 font-bold uppercase">Posts</h1>
      {posts.map((post) => (
        <ListOfPosts key={post.id} posts={posts} />
      ))}
    </div>
  );
}

export default PostsPage;
