import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { q: string; language: Language };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsData = await fetchNews(
    "everything",
    searchParams?.language.toLowerCase(),
    searchParams?.q,
    true
  );

  return (
    <div>
      <h1>Search Results for: {searchParams?.q}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
