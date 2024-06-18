import { sanityClient } from "@codebymedu/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlForImage } from "@codebymedu/sanity/lib/image";
import { notFound } from "next/navigation";
import { title } from "@codebymedu/components/primitives";
import clsx from "clsx";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const components = {
  types: {
    image: (props: any) => (
      <div className="my-4">
        <img
          src={urlForImage(props.value)}
          alt={props.value.alt || "Image"}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mb-4">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="text-base mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
};

const extractHeadings = (blocks: any) => {
  return blocks
    .filter(
      (block: any) =>
        block._type === "block" &&
        (block.style === "h1" || block.style === "h2" || block.style === "h3")
    )
    .map((block: any) => ({
      text: block.children[0].text,
      level: block.style,
      slug: block.children[0].text.toLowerCase().replace(/\s+/g, "-"),
    }));
};

const TableOfContents = ({ headings }: any) => {
  return (
    <div className="sticky top-24 mb-8">
      <h2 className="mb-2 text-sm">Jump to</h2>

      <ul className="border-l-1 border-neutral-300">
        {headings.map((heading: any, index: any) => (
          <li
            key={index}
            className={
              heading.level === "h1"
                ? "ml-0"
                : heading.level === "h2"
                  ? "ml-4"
                  : "ml-8" + " text-sm mb-2"
            }
          >
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default async function ({ params }: { params: { slug: string } }) {
  // --- DATA ---

  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      categories[]->{
        _id,
        title
        // Add other fields you need from the category document
      }
    }
      `,
    { slug: params.slug }
  );

  // --- RENDER ---

  if (!post) {
    return notFound();
  }

  // --- HELPERS ---

  const postDate = new Date(post._createdAt);

  const formattedPostDate = postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const headings = extractHeadings(post.body);

  console.log({ post: post.categories });

  // --- RENDER 2 ---

  return (
    <div className="w-full relative">
      <div className="flex gap-32 relative">
        <div className=" max-w-[800px]">
          <p className="text-xs mb-8">{formattedPostDate}</p>

          <h1 className={clsx(title({ size: "sm" }))}>{post.title}</h1>

          <div className="mt-16">
            <PortableText value={post.body} components={components} />
          </div>
        </div>

        <div className="h-auto relative ">
          <div className="flex flex-wrap gap-2 sticky top-16">
            {post.categories.map((category: any) => (
              <Link key={category._id} href={`/blog/category/${category._id}`}>
                <Chip color="secondary" size="sm" className="mb-4">
                  {category.title}
                </Chip>
              </Link>
            ))}
          </div>

          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}
