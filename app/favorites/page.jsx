"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return <p>No favorites yet</p>;
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Favorites</h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-4 gap-3">
        {favorites.map((post) => (
          <div key={post.id} className="favorite-post">
            <h2 className="text-lg font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
