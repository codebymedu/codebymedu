import { getFormattedDate } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";
import { BlogArticle } from "@codebymedu/components/blog/article/utils/blogArticleTypes";
import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";
import { subtitle, title } from "@codebymedu/components/primitives";
import { sanityClient } from "@codebymedu/sanity/lib/client";
import { urlForImage } from "@codebymedu/sanity/lib/image";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Blog() {
  const articles: BlogArticle[] = await sanityClient.fetch(
    `
    *[_type == "post"]{
      ...,
      categories[]->{
        _id,
        title
      }
    }
    `
  );

  if (!articles || articles.length === 0) {
    return redirect("/coming-soon");
  }

  return (
    <div className="items-center py-8 md:py-10">
      <div className="w-full text-center">
        <h1 className={title()}>
          My
          <span className={title({ color: "violet" })}>
            {" "}
            &#36;&#123;Frontend&#125;
          </span>{" "}
          Blog
        </h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Don&apos;t miss out on my articles about frontend development and
          career advice.
        </h2>
      </div>

      <div className="flex justify-between flex-wrap mt-16 mb-32">
        {articles.map((article) => (
          <div
            key={article.title}
            className="w-full md:w-80 lg:w-96 cursor-pointer"
          >
            <Image
              alt={`${article.title} image`}
              src={urlForImage(article.mainImage)}
              height={400}
              width={600}
              className="object-cover w-full h-52 rounded-xl shadow-xl dark:shadow-neutral-900/30 hover:dark:shadow-neutral-900/90 mb-6"
            />

            <p className="text-xs mb-6">
              {getFormattedDate(new Date(article._createdAt))}
            </p>

            <h1 className="text-xl font-semibold text-wrap">{article.title}</h1>
          </div>
        ))}
      </div>

      <EmailSubscriptionForm />
    </div>
  );
}
