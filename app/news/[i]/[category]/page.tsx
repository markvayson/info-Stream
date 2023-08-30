import NewsList from "@/app/NewsList";
import Pagination from "@/app/Pagination";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {
  params: { i: string; category: Category };
};

async function NewsCategory({ params: { i, category } }: Props) {
  const news: NewsData = await fetchNews(i, category);
  const totalPages = Math.ceil(news.totalResults / 100);

  return (
    <div className="pb-5">
      <h1 className="text-lg text-center underline-offset-4 uppercase font-bold tracking-wider underline decoration-4 decoration-orange-500 dark:decoration-indigo-500">
        {category}
      </h1>
      <Pagination currentPage={i} category={category} />
      <NewsList news={news} />
      <Pagination currentPage={i} category={category} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
