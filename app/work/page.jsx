"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "project 1",
    description: "It is a social media app like instagram threads app where user can create post, comment on post, likes post, and key features of this project is that user can do live chat",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb1.png",
    live: "https://sonu-threads.onrender.com",
    github: "https://github.com/sonuchahar7351/instagram-Threads",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "project 2",
    description: "It is an e-commerce. In this project, all the functionality of an e-commerce are put like buy products, add to cart items, and payment gateway and order summary",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    live: "https://chahar-electronic.onrender.com",
    github: "https://github.com/sonuchahar7351/CE-Shop",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "project 3",
    description: "This is fully responsive e-commerce web application. I used MERN technology for developing this projects. currently working, on this project to add payment gateway and order summary",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb3.png",
    live: "https://e-commerce-digital-dazzle-store-frontend.onrender.com",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "project 4",
    description: "This is fully responsive clone of Instagram in which all common featurs are added like post create, like/unlike post, comment on post, user-Profile page, etc.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb4.png",
    live: "https://instagram-cpns.onrender.com",
    github: "",
  }
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group:hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 items-center">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live projcet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div></div>

                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-scale-down aspect-video" alt=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
