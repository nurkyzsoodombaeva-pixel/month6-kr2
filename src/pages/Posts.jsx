import { useEffect } from "react";
import { usePostsStore } from "../store/posts.store";

export function Posts() {
  const { posts, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Посты</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
}