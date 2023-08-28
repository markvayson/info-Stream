import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkMode from "./DarkMode";

function Header() {
  return (
    <header className=" flex border-b dark:border-gray-700 flex-col gap-5 pb-5">
      <div className="flex justify-between p-5">
        <Link href="/" prefetch={false}>
          <h1 className="dark:text-white font-serif font-medium text-2xl text-center">
            The{" "}
            <span className="underline decoration-6 dark:decoration-indigo-400 decoration-orange-400">
              InfoStream
            </span>
          </h1>
        </Link>
        <DarkMode />
        <Bars3Icon className="h-8 w-8 dark:text-white cursor-pointer" />
      </div>
      <SearchBox />
      <NavLinks />
    </header>
  );
}

export default Header;
