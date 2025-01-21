"use client";

export default function TabItem({ label, icon: Icon, isActive, onClick }) {
  return (
    <div
      className={`px-5 py-2 cursor-pointer ${
        isActive ? "text-activeColor font-bold" : "text-inActiveColor"
      } text-sm flex justify-start items-center`}
      onClick={onClick}
    >
      {/* Icon */}
      <span className="mr-2">
        <Icon />
      </span>

      {/* Label with Underline */}
      <span className="relative">
        {label}
        <span
          className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-activeColor transform ${
            isActive ? "scale-x-100" : "scale-x-0"
          } transition-transform duration-300 ease-out`}
        />
      </span>
    </div>
  );
}
