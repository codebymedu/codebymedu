import { PortableTextBlock } from "next-sanity";

/**
 * More data comes from backend, this is only the values I need/use.
 */
export type BlogArticle = {
  _createdAt: string;
  title: string;
  body: PortableTextBlock[];
  keywords: string;
  categories: {
    title: string;
    slug?: { current: string };
  }[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: { current: string };
  description: string;
};
