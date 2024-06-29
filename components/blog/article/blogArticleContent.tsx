import { title } from "@codebymedu/components/primitives";
import clsx from "clsx";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@codebymedu/components/blog/article/utils/blogArticleConstants";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { getFormattedDate } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";
import Image from "next/image";
import { urlForImage } from "@codebymedu/sanity/lib/image";

type BlogArticleContentProps = {
  article: BlogArticle;
};

export const BlogArticleContent = ({ article }: BlogArticleContentProps) => {
  // --- HELPERS ---

  const postDate = new Date(article._createdAt);

  // --- RENDER ---

  return (
    <div className="border-b-[1px] border-neutral-200 pb-12 min-w-[800px] max-w-[800px]">
      <Image
        alt={`${article.title} image`}
        src={urlForImage(article.mainImage)}
        height={1000}
        width={1600}
        className="object-cover w-full h-[500px] rounded-xl shadow-xl dark:shadow-neutral-900/30 hover:dark:shadow-neutral-900/90 mb-6"
      />

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
