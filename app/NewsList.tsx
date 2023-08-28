import Article from "./Article";

type Props = {
  news: NewsData;
};

function NewsList({ news }: Props) {
  return (
    <main className="p-2 grid grid-cols-1 gap-2 md:grid-cols-3">
      {news.articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
