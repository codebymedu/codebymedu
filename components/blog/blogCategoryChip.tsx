import Link from "next/link";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { Chip } from "@nextui-org/react";

type BlogCategoryChipProps = { category: BlogArticle["categories"][number] };

export const BlogCategoryChip = ({ category }: BlogCategoryChipProps) => (
  <Link key={category._id} href={`/blog/category/${category._id}`}>
    <Chip color="secondary" size="sm" className="mb-4">
      {category.title}
    </Chip>
  </Link>
);
