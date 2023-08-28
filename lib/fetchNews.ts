import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  end: endpoint,
  language?: string,
  q?: string,
  isDynamic?: boolean
) => {
  let query;
  if (end === "everything") {
    query = gql`
      query Everything(
        $apiKey: String
        $language: String
        $q: String
        $sortBy: String
      ) {
        everything(
          apiKey: $apiKey
          language: $language
          q: $q
          sortBy: $sortBy
        ) {
          articles {
            author
            content
            description
            publishedAt
            title
            url
            urlToImage
            source {
              id
              name
            }
          }
          status
          totalResults
        }
      }
    `;
  } else if (end === "topHeadlines") {
    query = gql`
      query TopHeadlines($apiKey: String, $category: String, $country: String) {
        topHeadlines(apiKey: $apiKey, category: $category, country: $country) {
          articles {
            author
            content
            description
            publishedAt
            source {
              id
              name
            }
            title
            url
            urlToImage
          }
          status
          totalResults
        }
      }
    `;
  }

  const res = await fetch(
    "https://puertopiritu.stepzen.net/api/morbid-platypus/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables:
          end === "everything"
            ? {
                apiKey: process.env.NEWS_API_KEY,
                q,
                sortBy: "publishedAt",
                language,
              }
            : {
                apiKey: process.env.NEWS_API_KEY,
                category: q,
                country: "us",
              },
      }),
    }
  );
  const newsResponse = await res.json();

  const data = sortNewsByImage(newsResponse.data[end]);

  return data;
};

export default fetchNews;
