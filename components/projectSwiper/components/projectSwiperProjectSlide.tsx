import { tagColors } from "@codebymedu/components/projectSwiper/utils/projectSwiperConstants";
import { Button, Card, CardFooter, Chip, Link } from "@nextui-org/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

type ProjectSwiperProjectSlideProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    repo: string;
    demo: string;
  };
};

export const ProjectSwiperProjectSlide = ({
  project,
}: ProjectSwiperProjectSlideProps) => (
  <div className="flex flex-col gap-4 lg:flex-row justify-between w-10/12 mx-auto mb-16">
    <div className="">
      <h3 className="font-light text-xl mb-4">{project.title}</h3>

      <div className="mb-8 gap-4 flex flex-wrap">
        {project.tags.map((tag, index) => (
          <Chip
            key={tag}
            color={tagColors[index] || "default"}
            variant="flat"
            className=""
          >
            {tag}
          </Chip>
        ))}
      </div>

      <p className="w-72 md:w-80 lg:w-96 mb-4">{project.description}</p>

      <Button as={Link} href={project.repo} target="_blank" color="default">
        Repository <ArrowUpRightIcon height={20} width={20} />
      </Button>
    </div>

    <div className="hidden lg:flex">
      <Card isFooterBlurred radius="lg" className="border-none h-[180px]">
        <Image
          alt={project.repo}
          className="object-cover"
          height={300}
          src={project.image}
          width={300}
        />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Button
            as={Link}
            href={project.demo}
            target="_blank"
            className="text-tiny w-full text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Live Demo <ArrowUpRightIcon height={20} width={20} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);
