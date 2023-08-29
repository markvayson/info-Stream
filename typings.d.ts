type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
};

interface Source {
  id: string;
  name: string;
}

interface NewsData {
  articles: Article[];
  status: string;
  totalResults: number;
}

interface NewsVariables {
  apiKey: string;
  q: string;
}

type Categories = {
  business;
  entertainment;
  general;
  health;
  science;
  sports;
  technology;
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
