import { useCallback, useEffect, useState } from "react";
import { PostsDTO } from "../types/PostsDTO";
import { api } from "../server/api";
import { Loading } from "../components/loading";
import { useNavigate, useParams } from "react-router-dom";

export function PostPage() {
  const [post, setPost] = useState<PostsDTO>({} as PostsDTO);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const getPosts = useCallback(() => {
    setIsLoading(true);

    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        navigate("/404");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, navigate]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col max-w-6xl mx-auto py-4">
      <h1 className="text-xl font-bold py-4 uppercase">{post.title}</h1>
      <p className=" font-medium text-lg text-gray-400 ">{post.body}</p>
    </div>
  );
}

export default PostPage;
