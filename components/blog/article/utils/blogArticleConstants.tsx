import { urlForImage } from "@codebymedu/sanity/lib/image";
import { PortableTextComponents } from "next-sanity";
import { getSlugFromText } from "@codebymedu/components/blog/article/utils/blogArticleHelpers";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: (props) => (
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
    link: ({ children, value }) => (
      <a href={value.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children, value }) => (
      <h1
        id={getSlugFromText(value.children[0].text)}
        className="text-4xl font-bold my-4"
      >
        {children}
      </h1>
    ),
    h2: ({ children, value }) => (
      <h2
        id={getSlugFromText(value.children[0].text)}
        className="text-3xl font-bold my-4"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={getSlugFromText(value.children[0].text)}
        className="text-2xl font-bold my-4"
      >
        {children}
      </h3>
    ),
    h4: ({ children, value }) => (
      <h4 id={getSlugFromText(value.children[0].text)} className="text-xl mb-4">
        {children}
      </h4>
    ),
    normal: ({ children }) => <p className="text-base mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};
