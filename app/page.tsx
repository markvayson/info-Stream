import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news = await fetchNews("everything", "en", "everything");
  return (
    <div className="pt-5">
      <NewsList news={news} />
    </div>
  );
}
