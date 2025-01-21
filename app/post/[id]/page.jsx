"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { addFavorites } from "@/app/redux/favoritesSlice";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const queryId = useParams().id;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleFavorites = () => {
    if (!isFavorite) {
      dispatch(addFavorites(post));
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    if (!queryId) return;

    const fetchPost = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${queryId}`
      );
      const data = await response.json();
      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [queryId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <div className="flex justify-start items-end">
        <span>
          <IoArrowBackCircleSharp />
        </span>
        <Link href="/posts">Back To Home Page</Link>
      </div>
      <div className="each-post-container">
        <div className="add-favorite-btn" onClick={handleFavorites}>
          <span>{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}</span>
          <span>{isFavorite ? "Added To Favorite" : "Add To Favorite"}</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-700">{post?.body}</p>
      </div>
    </>
  );
};

export default Post;
