import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      className={`whitespace-nowrap font-medium dark:hover:bg-indigo-400
      hover:bg-orange-400 hover:text-white
      bg-white/40 dark:bg-gray-700 dark:text-white/50 capitalize text-sm rounded-full px-3 text-center py-2 shadow-md
      ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
