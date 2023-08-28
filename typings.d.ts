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

type endpoint = "everything" | "topHeadlines";

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

type Language =
  | "AR"
  | "DE"
  | "EN"
  | "ES"
  | "FR"
  | "HE"
  | "IT"
  | "NL"
  | "NO"
  | "PT"
  | "RU"
  | "SV"
  | "UD"
  | "ZH";
