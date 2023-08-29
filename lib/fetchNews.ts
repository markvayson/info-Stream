import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import { categories } from "@/constants";

const fetchNews = async (page: string, q?: string, isDynamic?: boolean) => {
  const query = gql`
    query Everything(
      $apiKey: String
      $page: String
      $q: String
      $sortBy: String
    ) {
      everything(apiKey: $apiKey, page: $page, q: $q, sortBy: $sortBy) {
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

  const res = await fetch(
    "https://puertopiritu.stepzen.net/api/morbid-platypus/__graphql",
    {
      method: "POST",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          apiKey: process.env.NEWS_API_KEY,
          q,
          sortBy: "publishedAt",
          page,
        },
      }),
    }
  );
  const newsResponse = await res.json();

  const data = sortNewsByImage(newsResponse.data.everything);

  return data;
};

export default fetchNews;
