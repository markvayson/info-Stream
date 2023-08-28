"use client";

import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { languages } from "@/constants";

function SearchBox() {
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<Language>("EN");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?q=${input}&language=${lang}`);
  };
  return (
    <form onSubmit={handleSearch} className=" gap-2  items-center flex p-2">
      <div className="flex pl-4 rounded-full items-center  text-gray-500 border dark:border-gray-700  flex-1">
        <MagnifyingGlassIcon className="w-4 h-4" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          className="pl-2 tracking-wider flex-1 w-full h-10 text-sm  placeholder-gray-500 outline-none bg-transparent dark:text-indigo-400 "
        />
        <button
          type="submit"
          disabled={!input}
          className="bg-orange-400 hover:animate-spin dark:hover:bg-indigo-600 dark:bg-indigo-400 hover:bg-orange-600 cursor-pointer  transition-all duration-500 shadow-md rounded-full  p-2"
        >
          <PaperAirplaneIcon className="text-white/80  w-4 h-4 -rotate-45" />
        </button>
      </div>
      <div>
        <select
          className="bg-transparent outline-none border border-gray-200 py-2 pl-2 "
          value={lang}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setLang(e.target.value as Language)
          }
          name="language"
          id="lanaguge"
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchBox;
