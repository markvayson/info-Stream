import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { q: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsData = await fetchNews("1", searchParams?.q, true);

  return (
    <div>
      <h1 className="text-lg text-center underline-offset-4 uppercase font-bold tracking-wider underline decoration-4 decoration-orange-500 dark:decoration-indigo-500">
        {searchParams?.q}
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
