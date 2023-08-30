"use client";

import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?q=${input}&page=1`);
    setInput("");
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" gap-2 md:flex-none md:w-2/3 flex-1 items-center flex "
    >
      <div className="flex pl-2 pr-1 rounded-lg items-center dark:text-gray-300 text-gray-500 border-none bg-gray-200 dark:bg-gray-700  flex-1">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          aria-label="Search"
          className="pl-2 tracking-wider flex-1 w-full h-10 text-xs  dark:placeholder-gray-300 placeholder-gray-500 outline-none bg-transparent dark:text-indigo-400 "
        />
        <button
          type="submit"
          disabled={!input}
          className="bg-orange-400 dark:disabled:bg-gray-500 disabled:bg-gray-300 dark:hover:bg-indigo-600  dark:bg-indigo-500 hover:bg-orange-600 cursor-pointer  transition-all duration-500 shadow-md rounded-lg  p-2"
        >
          <PaperAirplaneIcon className="text-white/80  hover:animate-spin  w-4 h-4 " />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
