import { title } from "@codebymedu/components/primitives";
import clsx from "clsx";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@codebymedu/components/blog/article/utils/blogArticleConstants";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { getFormattedDate } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";

type BlogArticleContentProps = {
  article: BlogArticle;
};

export const BlogArticleContent = ({ article }: BlogArticleContentProps) => {
  // --- HELPERS ---

  const postDate = new Date(article._createdAt);

  // --- RENDER ---

  return (
    <div className="border-b-[1px] border-neutral-200 pb-12 min-w-[800px] max-w-[800px]">
      <p className="text-xs mb-8">{getFormattedDate(postDate)}</p>

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
