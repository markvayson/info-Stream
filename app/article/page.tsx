import { notFound } from "next/navigation";
import Link from "next/link";
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
  searchParams?: Article;
};

async function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  let author;
  if (article.author) {
    const authors = article.author.split(",");
    author = authors[0]?.trim() || authors[1]?.trim();
  }

  return (
    <article className="pt-5">
      <section className="px-5 flex items-center justify-center flex-col gap-5 ">
        {article.urlToImage && (
          <img
            className="rounded-xl shadow-md"
            src={article.urlToImage}
            alt={article.title}
          />
        )}
        <div className="flex  flex-col gap-3">
          <h1 className="leading-6 font-medium text-2xl">{article.title}</h1>
          <div className="flex text-xs items-center gap-2 text-gray-600">
            {author && (
              <span className="text-orange-400 dark:text-indigo-500">
                {author}
              </span>
            )}
            <span>
              <LiveTimeStamp time={article.publishedAt} />
            </span>
          </div>
          <p className="dark:text-gray-300 flex-col indent-8 text-justify text-sm text-gray-800">
            {article.description}
          </p>
          <Link
            className="w-1/2 text-center text-sm hover:bg-orange-500 dark:hover:bg-indigo-500 bg-orange-400 p-2 rounded-md shadow-md text-gray-200 dark:bg-indigo-400"
            href={article.url}
          >
            Get more
          </Link>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
