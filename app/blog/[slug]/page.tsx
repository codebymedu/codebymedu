import { sanityClient } from "@codebymedu/sanity/lib/client";
import { notFound } from "next/navigation";
import { BlogArticleTableOfContents } from "@codebymedu/components/blog/article/blogArticleTableOfContents";
import { getHeadingsFromBlocks } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";
import { BlogArticleContent } from "@codebymedu/components/blog/article/blogArticleContent";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { BlogCategoryChip } from "@codebymedu/components/blog/blogCategoryChip";
import { Head } from "next/document";
import { urlForImage } from "@codebymedu/sanity/lib/image";

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
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={urlForImage(article.mainImage)} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="w-full relative">
        <div className="flex gap-32 relative ">
          <BlogArticleContent article={article} />

          <div className="h-auto relative ">
            <div className="flex flex-wrap gap-2 sticky top-16">
              {article.categories.map((category) => (
                <BlogCategoryChip key={category._id} category={category} />
              ))}
            </div>

            <BlogArticleTableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticlePage;
