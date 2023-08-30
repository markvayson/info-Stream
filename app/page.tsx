import Image from "next/image";
import header from "@/public/header.png";
import {
  ArrowRightCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center md:flex-row py-2 gap-2 md:gap-20 ">
        <div className="basis-2/3 flex flex-col gap-2 mr-1/2">
          <span className=" flex items-center decoration-2 underline dark:decoration-indigo-500  decoration-orange-500 text-sm ">
            <GlobeAltIcon className="w-4 h-4 text-orange-600 dark:text-indigo-400" />
            stay.ahead.of.news.with
          </span>
          <h1 className="text-4xl mr-4 md:text-5xl">
            Latest Articles for Informed News
          </h1>

          <p className="text-xs md:text-base">
            Your gateway to global updates! Dive into InfoStream&apos;s curated
            news for insights into strategies, trends, tools, and worldwide
            events.
          </p>
          <Link
            href="/news/1/all"
            className="my-5 text-xl w-fit hover:bg-orange-600 rounded-sm dark:hover:bg-indigo-500 p-1 gap-2 shadow-md   text-gray-200 flex items-center bg-orange-500 dark:bg-indigo-500"
          >
            Get News
            <ArrowRightCircleIcon className="w-6 h-6" />
          </Link>
        </div>
        <Image
          className="rounded-md shadow-md object-contain w-full"
          width={500}
          height={200}
          alt="main-bg"
          src={header}
          priority
        />
      </div>
    </div>
  );
}
