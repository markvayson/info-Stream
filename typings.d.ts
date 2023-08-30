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
  all;
  business;
  entertainment;
  general;
  health;
  science;
  sports;
  technology;
};

type Attributions = {
  name: Attribution;
  url: string;
};

type Attribution =
  | "nextjs"
  | "vercel"
  | "tailwindcss"
  | "heroicons"
  | "newsapi"
  | "stepzen";

type Category =
  | "all"
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
