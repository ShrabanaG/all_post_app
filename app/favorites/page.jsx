"use client";

import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { removeFavorites } from "../redux/favoritesSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <p>No favorites yet</p>;
  }

  const handleRemoveFavorite = (post) => {
    dispatch(removeFavorites(post));
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Favorites</h1>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-4 gap-3">
        {favorites.map((post) => (
          <div key={post.id} className="favorite-post">
            <h2 className="text-lg font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700 text-sm">{post.body}</p>
            <div
              className="remove-favorite-btn"
              onClick={() => handleRemoveFavorite(post)}
            >
              <span>
                <MdDeleteOutline />
              </span>
              <span>Remove from Favorite</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
