import { create } from "zustand";
import { api } from "../api/instance";

export const usePostsStore = create((set) => ({
  posts: [],

  fetchPosts: async () => {
    const { data } = await api.get("/posts");
    set({ posts: data });
  },

  createPost: async (post) => {
    await api.post("/posts", post);
  },
}));