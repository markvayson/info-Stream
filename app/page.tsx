import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news = await fetchNews("all");
  return <NewsList news={news} />;
}
