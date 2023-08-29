import NewsList from "@/app/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsData = await fetchNews(category);

  return (
    <div>
      <h1>
        Search Results for:
        {category}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
