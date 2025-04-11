import React, { useState } from "react";
import Link from "next/link";

const RestApiRoute = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      alert("Error fetching posts: " + error);
    }
  };

  const createPost = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({ title: "", content: "" });
    } catch (error) {
      alert("Error creating post: " + error);
    }
  };

  const updatePost = async () => {
    if (!selectedPost) return;
    try {
      const response = await fetch(`/api/posts/${selectedPost.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPost),
      });
      const data = await response.json();
      setPosts(posts.map((post) => (post.id === data.id ? data : post)));
      setSelectedPost(null);
    } catch (error) {
      alert("Error updating post: " + error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      alert("Error deleting post: " + error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">RESTful API Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a complete RESTful API implementation with
          support for multiple HTTP methods (GET, POST, PUT, DELETE).
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Create Post</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
              />
              <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
              />
              <button
                onClick={createPost}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Create Post
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Posts</h2>
              <button
                onClick={fetchPosts}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Refresh Posts
              </button>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded p-4 flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-gray-600">{post.content}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedPost && (
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Edit Post</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={selectedPost.title}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, title: e.target.value })
                  }
                  className="w-full border rounded px-2 py-1"
                />
                <textarea
                  value={selectedPost.content}
                  onChange={(e) =>
                    setSelectedPost({
                      ...selectedPost,
                      content: e.target.value,
                    })
                  }
                  className="w-full border rounded px-2 py-1"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={updatePost}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>
              RESTful APIs use different HTTP methods for different operations
            </li>
            <li>GET for retrieving resources</li>
            <li>POST for creating new resources</li>
            <li>PUT for updating existing resources</li>
            <li>DELETE for removing resources</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/solution"
          className="text-blue-600 hover:underline"
        >
          Back to API Routes
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RestApiRoute;
