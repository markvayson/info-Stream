import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      className={`whitespace-nowrap 
       hover:text-orange-400
       dark:text-gray-300 dark:hover:text-white capitalize text-xs rounded-full px-3 text-center py-2 
      ${
        isActive &&
        "underline dark:decoration-indigo-500 dark:text-white decoration-orange-400 underline-offset-4 "
      }`}
      href={`/news/1/${category}`}
    >
      {category}
    </Link>
  );
}

export default NavLink;
