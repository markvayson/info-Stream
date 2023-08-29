import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news = await fetchNews("1", "all");
  return <NewsList news={news} />;
}
