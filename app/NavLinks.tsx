"use client";

import { categories } from "@/constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="md:justify-center w-full md:gap-10 flex px-2 pb-2 gap-4 overflow-x-auto">
      {categories.map((category) => (
        <NavLink
          isActive={isActive(category)}
          key={category}
          category={category}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
