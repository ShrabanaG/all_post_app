"use client";

import { useSelector } from "react-redux";
import { MdNewspaper, MdStar } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">My Posts</h2>
      <nav className="flex-grow">
        <ul>
          <li className="p-2">
            <Link href="/posts" className="flex justify-start items-center">
              <span className="mr-3">
                <MdNewspaper />
              </span>
              <span>All Posts</span>
            </Link>
          </li>
          <li className="p-2">
            <Link href="/favorites" className="flex justify-start items-center">
              <span className="mr-3">
                <MdStar />
              </span>
              <span>Favorites({favorites.length})</span>
            </Link>
          </li>
        </ul>
      </nav>
      {session?.user && (
        <div className="flex justify-start items-center">
          <span>
            <img
              src={session.user.image}
              alt="Image"
              className="w-[40px] h-[40px] rounded-full p-2"
            />
          </span>
          <span>{session.user.name}</span>
        </div>
      )}
      {session?.user ? (
        <div className="mt-auto flex items-center space-x-2">
          <span>
            <FaSignOutAlt />
          </span>
          <span>
            <button onClick={() => signOut()}>Sign Out</button>
          </span>
        </div>
      ) : (
        <div className="mt-auto flex items-center space-x-2">
          <span>
            <FaSignInAlt />
          </span>
          <span>
            <button onClick={() => signIn()}>Sign In</button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
