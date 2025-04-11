import type { Post } from "./types";

// In-memory storage for posts
export let posts: Post[] = [];

// Helper functions for managing posts
export const getPosts = () => posts;
export const getPostById = (id: string) => posts.find((post) => post.id === id);
export const addPost = (post: Post) => {
  posts.push(post);
  return post;
};
export const updatePost = (id: string, updatedPost: Partial<Post>) => {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], ...updatedPost };
  return posts[index];
};
export const deletePost = (id: string) => {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
};
