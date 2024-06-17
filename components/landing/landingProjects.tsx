"use client";

import clsx from "clsx";
import { title } from "@codebymedu/components/primitives";
import { Link, Button, Chip, Card, CardFooter } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";

const projects = [
  {
    title: "Influencer Portfolio Creator",
    description:
      "A platform to help creators build their portfolios quickly. Features like adding gigs and interacting with brands are coming soon.",
    tags: [
      "Work in Progress",
      "Next.js 14",
      "React",
      "Supabase",
      "TailwindCSS",
      "Full-Stack",
    ],
    image: "/portfolio-creator.png",
    repo: "https://github.com/codebymedu/creator-portfolio-manager",
    demo: "https://creator-portfolio-manager-yz9f.vercel.app/",
  },
  {
    title: "Taskboard",
    description:
      "A simple website to manage tasks. You can create, edit, delete tasks, and share your board with others.",
    tags: [
      "Next.js 14",
      "React 18",
      "Responsive Design",
      "Web Development",
      "Task Management",
    ],
    image: "/task-board.png",
    repo: "https://github.com/codebymedu/task-board?tab=readme-ov-file",
    demo: "https://task-board-kappa.vercel.app/",
  },
];

const tagColors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export const LandingProjects = () => {
  return (
    <div className="my-32 w-full flex flex-col items-center">
      <h2
        className={clsx(
          title({ size: "sm", className: "font-light" }),
          "mx-auto mb-24 flex gap-3 items-center"
        )}
      >
        See For Yourself
      </h2>

      <div className="w-full">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
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

                  <p className="w-72 md:w-80 lg:w-96 mb-4">
                    {project.description}
                  </p>

                  <Button
                    as={Link}
                    href={project.repo}
                    target="_blank"
                    color="default"
                  >
                    Repository <ArrowUpRightIcon height={20} width={20} />
                  </Button>
                </div>

                <div className="hidden lg:flex">
                  <Card isFooterBlurred radius="lg" className="border-none">
                    <Image
                      alt={project.repo}
                      className="object-fit"
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
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div className="flex items-center flex-col w-10/12 mx-auto">
              <h3 className="font-light text-xl mb-4">
                You Haven&apos;t Seen Anything Yet
              </h3>

              <div className="">
                More innovative projects are on the way. Don’t miss out!
              </div>

              <EmailSubscriptionForm />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
