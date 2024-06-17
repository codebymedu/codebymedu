import { sanityClient } from "@codebymedu/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlForImage } from "@codebymedu/sanity/lib/image";
import { notFound } from "next/navigation";
import { title } from "@codebymedu/components/primitives";
import clsx from "clsx";

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

export default async function ({ params }: { params: { slug: string } }) {
  // --- DATA ---

  const post = await sanityClient.fetch(
    `
        *[_type == "post" && slug.current == $slug][0]
      `,
    { slug: params.slug }
  );

  // --- RENDER ---

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full ">
      <h1 className={clsx(title({ size: "sm" }))}>{post.title}</h1>

      <div className="mt-16">
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
