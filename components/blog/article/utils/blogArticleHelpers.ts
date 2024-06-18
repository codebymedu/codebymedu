import { PortableTextBlock } from "next-sanity";

export const getSlugFromText = (text: string) =>
  text.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");

export const getHeadingsFromBlocks = (blocks: PortableTextBlock[]) =>
  blocks
    .filter(
      (block) =>
        block._type === "block" &&
        (block.style === "h1" || block.style === "h2" || block.style === "h3")
    )
    .map((block) => ({
      text: block.children[0].text,
      level: block.style,
      slug: block.children[0].text.toLowerCase().replace(/\s+/g, "-"),
    }));
