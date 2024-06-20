import { sanityClient } from "@codebymedu/sanity/lib/client";
import { notFound } from "next/navigation";
import { BlogArticleTableOfContents } from "@codebymedu/components/blog/article/blogArticleTableOfContents";
import { getHeadingsFromBlocks } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";
import { BlogArticleContent } from "@codebymedu/components/blog/article/blogArticleContent";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { BlogCategoryChip } from "@codebymedu/components/blog/blogCategoryChip";
import { urlForImage } from "@codebymedu/sanity/lib/image";
import { Metadata } from "next";
import { OneTimeEmailSubscriptionModal } from "@codebymedu/components/oneTimeEmailSubscriptionModal";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return {
    title: `${article.title} - Code by Medu`,
    description: article.description,
    openGraph: {
      images: [urlForImage(article.mainImage)],
      type: "article",
      description: article.description,
    },
    twitter: {
      images: [urlForImage(article.mainImage)],
      description: article.description,
    },
    keywords:
      "User feedback, web development, improve usability, user testing, feedback integration, website improvements, web application development",
  };
}

const BlogArticlePage = async ({ params }: Props) => {
  // --- DATA ---

  const article: BlogArticle = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      categories[]->{
        _id,
        title, slug
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

      <OneTimeEmailSubscriptionModal />
    </>
  );
};

export default BlogArticlePage;
