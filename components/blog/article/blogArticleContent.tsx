import { title } from "@codebymedu/components/primitives";
import clsx from "clsx";
import { PortableText, PortableTextProps } from "next-sanity";
import { portableTextComponents } from "@codebymedu/components/blog/article/utils/blogArticleConstants";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";

type BlogArticleContentProps = {
  article: BlogArticle;
};

export const BlogArticleContent = ({ article }: BlogArticleContentProps) => {
  // --- HELPERS ---

  const postDate = new Date(article._createdAt);

  const formattedPostDate = postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // --- RENDER ---

  return (
    <div className="border-b-[1px] border-neutral-200 pb-12 max-w-[800px]">
      <p className="text-xs mb-8">{formattedPostDate}</p>

      <h1 className={clsx(title({ size: "sm" }))}>{article.title}</h1>

      <div className="mt-6">
        <PortableText
          value={article.body}
          components={portableTextComponents}
        />
      </div>
    </div>
  );
};
