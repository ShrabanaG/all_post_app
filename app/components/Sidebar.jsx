import { MdNewspaper, MdStar } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">My Posts</h2>
      <div className="space-y-4">
        <nav>
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
              <Link
                href="/favorites"
                className="flex justify-start items-center"
              >
                <span className="mr-3">
                  <MdStar />
                </span>
                <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
