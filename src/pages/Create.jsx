import { useState } from "react";
import { usePostsStore } from "../store/posts.store";
import { useNavigate } from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const createPost = usePostsStore((s) => s.createPost);
  const navigate = useNavigate();

  const handleCreate = async () => {
    await createPost({ title, summary });
    navigate("/posts");
  };

  return (
    <div>
      <h2>Создать пост</h2>
      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <textarea onChange={(e) => setSummary(e.target.value)} />
      <button onClick={handleCreate}>Создать</button>
    </div>
  );
}