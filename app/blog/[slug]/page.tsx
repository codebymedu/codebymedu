import { sanityClient } from "@codebymedu/sanity/lib/client";
import { notFound } from "next/navigation";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { BlogArticleTableOfContents } from "@codebymedu/components/blog/article/blogArticleTableOfContents";
import { getHeadingsFromBlocks } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";
import { BlogArticleContent } from "@codebymedu/components/blog/article/blogArticleContent";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";

const BlogArticlePage = async ({ params }: { params: { slug: string } }) => {
  // --- DATA ---

  const article: BlogArticle = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      categories[]->{
        _id,
        title
      }
    }
      `,
    { slug: params.slug }
  );

  // --- RENDER ---

  if (!article) {
    return notFound();
  }

  // --- HELPERS ---

  const headings = getHeadingsFromBlocks(article.body);

  // --- RENDER 2 ---

  return (
    <div className="w-full relative">
      <div className="flex gap-32 relative">
        <BlogArticleContent article={article} />

        <div className="h-auto relative ">
          <div className="flex flex-wrap gap-2 sticky top-16">
            {article.categories.map((category) => (
              <Link key={category._id} href={`/blog/category/${category._id}`}>
                <Chip color="secondary" size="sm" className="mb-4">
                  {category.title}
                </Chip>
              </Link>
            ))}
          </div>

          <BlogArticleTableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;
