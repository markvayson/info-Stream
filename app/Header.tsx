import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 justify-center items-center bg-gray-100  border-b border-gray-200 dark:border-gray-700  dark:bg-gray-800  flex flex-col">
      <div className="flex md:px-48 justify-between  w-full gap-2 py-2 items-center px-4">
        <Link
          href="/news/all"
          prefetch={false}
          className="underline decoration-orange-400 dark:decoration-indigo-500 text-font-serif tracking-wider dark:text-gray-200 font-medium text-xl text-center"
        >
          InfoStream
        </Link>
        <SearchBox />
        <DarkMode />
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
