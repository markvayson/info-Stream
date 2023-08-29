"use client";

import { useRouter } from "next/navigation";
import LiveTimeStamp from "./LiveTimeStamp";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  const router = useRouter();

  let author;
  if (article.author) {
    const authors = article.author.split(",");
    author = authors[0]?.trim() || authors[1]?.trim();
  }
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <article
      onClick={handleClick}
      className="cursor-pointer  hover:bg-white/50 rounded-lg hover:shadow-md dark:hover:bg-gray-700 flex  dark:text-white"
    >
      {article.urlToImage && (
        <img
          className="w-34 h-full rounded-lg object-cover shadow-md  "
          src={article.urlToImage}
          alt={article.title}
          width="140"
          height="140"
        />
      )}
      <div className="flex-1 flex p-5 flex-col gap-1 justify-center">
        <h1 className="font-medium normal-case dark:text-gray-300">
          {article.title}
        </h1>
        <div className="flex flex-col gap-2">
          <div className=" flex gap-2 items-start text-xs text-gray-500">
            <div className="flex flex-col gap-2 text-gray-100">
              {author && (
                <span className="text-orange-400 dark:text-indigo-500">
                  {author}
                </span>
              )}
            </div>
            <span className="ml-auto">{article.source.name}</span>
          </div>
          <span className="text-xs text-gray-500 ml-auto whitespace-nowrap">
            <LiveTimeStamp time={article.publishedAt} />
          </span>
          <div className="text-sm text-gray-600 dark:text-gray-400"></div>
        </div>
      </div>
    </article>
  );
}

export default Article;
