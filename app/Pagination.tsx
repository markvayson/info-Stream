import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

type Props = {
  currentPage: string;
  category: Category;
};

function Pagination({ currentPage, category }: Props) {
  return (
    <div className="py-2  flex items-center justify-center gap-2">
      {
        <Link
          className={`${
            Number(currentPage) === 1 && "opacity-0 pointer-events-none"
          } hover:text-yellow-500 dark:hover:text-blue-500`}
          href={`/news/${Number(currentPage) - 1}/${category}`}
        >
          <ChevronLeftIcon className="w-6 h-6" />{" "}
        </Link>
      }
      {[...new Array(5)].map((_, index) => (
        <Link
          key={`pagination-${index}`}
          className={`${
            Number(currentPage) === index + 1 &&
            "bg-yellow-50 dark:text-blue-500 dark:bg-blue-50 text-yellow-600"
          } hover:bg-gray-200 rounded-md dark:hover:bg-gray-700 dark:hover:text-blue-500 hover:text-yellow-600 px-3 py-1`}
          href={`/news/${Number(index) + 1}/${category}`}
        >
          {index + 1}
        </Link>
      ))}
      {
        <Link
          className={`${
            Number(currentPage) === 5 && "opacity-0 pointer-events-none"
          } hover:text-yellow-500 dark:hover:text-blue-500`}
          href={`/news/${Number(currentPage) + 1}/${category}`}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Link>
      }
    </div>
  );
}

export default Pagination;
