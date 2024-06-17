"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@codebymedu/components/projectSwiper/utils/projectSwiperConstants";
import { ProjectSwiperComingSoonSlide } from "@codebymedu/components/projectSwiper/components/projectSwiperComingSoonSlide";
import { ProjectSwiperProjectSlide } from "@codebymedu/components/projectSwiper/components/projectSwiperProjectSlide";

export const ProjectSwiper = () => (
  <Swiper
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation]}
  >
    {projects.map((project) => (
      <SwiperSlide key={project.title}>
        <ProjectSwiperProjectSlide project={project} />
      </SwiperSlide>
    ))}

    <SwiperSlide>
      <ProjectSwiperComingSoonSlide />
    </SwiperSlide>
  </Swiper>
);
