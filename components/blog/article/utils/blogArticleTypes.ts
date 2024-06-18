import { PortableTextBlock } from "next-sanity";

/**
 * More data comes from backend, this is only the values I need/use.
 */
export type BlogArticle = {
  _createdAt: string;
  title: string;
  body: PortableTextBlock[];
  categories: { _id: string; title: string }[];
};
