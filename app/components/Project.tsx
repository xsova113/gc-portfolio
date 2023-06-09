"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import { cardVariants } from "@/app/utils/motions";

export default function Project({ project }: any) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:space-x-12 justify-between">
        <div className="mt-8 h-[220px] sm:h-[350px] md:h-auto w-full md:w-1/2 relative shadow-2xl rounded-xl">
          <Link href={project.link} target="_new">
            <Image
              src={project.image}
              alt="project-img"
              fill
              className="rounded-xl transition duration-300 hover:scale-110 hover:opacity-70"
            />
          </Link>
        </div>

        <div className="mt-12 md:w-1/2 align-bottom flex flex-col md:justify-between">
          <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          <div className="flex gap-2 mb-3">
            {project.tags.map((item: { name: string; color: string }) => (
              <span key={item.name} className={`p-1 ${item.color}`}>
                #{item.name}
              </span>
            ))}
          </div>

          <div className="flex flex-row align-bottom space-x-4">
            <Link href={project.github} target="_new">
              <BsGithub
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
            <Link href={project.link} target="_new">
              <BsArrowUpRightSquare
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
