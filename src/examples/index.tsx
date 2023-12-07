import axios, { AxiosError } from "axios";
import { Posts } from "./types";
import { useQuery } from "@tanstack/react-query";

// Em uma pasta service ou api
const getPosts = async () => {
  const response = await axios.get<Posts[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export const ReactQuery = () => {
  const { data: posts, isLoading, error } = useQuery<
  Posts[], AxiosError>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });



  

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
      {error && <p>Deu erro: {error.message}</p>}
    </>
  );
};