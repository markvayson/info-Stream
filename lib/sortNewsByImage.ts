export default function sortNewsByImage(news: NewsData) {
  const newsWithImage = news.articles.filter(
    (item) => item.urlToImage !== null
  );
  const newsWithoutImage = news.articles.filter(
    (item) => item.urlToImage === null
  );

  const sortedNewsResponse = {
    articles: [...newsWithImage, ...newsWithoutImage],
    status: news.status,
    totalResults: news.totalResults,
  };

  return sortedNewsResponse;
}
