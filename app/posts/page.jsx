"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 5;
  const language = "en";

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}&locale="en"`
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
      localStorage.setItem("posts", JSON.stringify(data));
    };

    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded">
              <h2 className="text-lg font-semibold">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
