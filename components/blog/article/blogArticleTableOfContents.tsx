import Link from "next/link";

type BlogArticleTableOfContentsProps = {
  headings: { level?: string; slug: string; text: string }[];
};

export const BlogArticleTableOfContents = ({
  headings,
}: BlogArticleTableOfContentsProps) => (
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
          <Link href={`#${heading.slug}`}>{heading.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);
