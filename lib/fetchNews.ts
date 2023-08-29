import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import { categories } from "@/constants";

const fetchNews = async (q?: string, isDynamic?: boolean) => {
  const query = gql`
    query Everything($apiKey: String, $q: String, $sortBy: String) {
      everything(apiKey: $apiKey, q: $q, sortBy: $sortBy) {
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
      cache: isDynamic ? "no-cache" : "default",
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
        },
      }),
    }
  );
  const newsResponse = await res.json();

  const data = sortNewsByImage(newsResponse.data.everything);

  return data;
};

export default fetchNews;
