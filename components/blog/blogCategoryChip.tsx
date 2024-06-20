import Link from "next/link";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { Chip } from "@nextui-org/react";

type BlogCategoryChipProps = {
  category: BlogArticle["categories"][number];
  isActive?: boolean;
};

export const BlogCategoryChip = ({
  category,
  isActive = true,
}: BlogCategoryChipProps) => (
  <Link
    key={category.title}
    href={
      category.slug?.current
        ? `/blog?category=${category.slug?.current}`
        : "/blog"
    }
  >
    <Chip color={isActive ? "secondary" : "default"} size="sm" className="mb-4">
      {category.title}
    </Chip>
  </Link>
);
