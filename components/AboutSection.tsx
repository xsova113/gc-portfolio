"use client";
import { skills } from "@/app/libs/constants";
import ComputerCanvas from "./canvas/Computer";
import { motion } from "framer-motion";
// import { zoomIn } from "@/app/utils/motions";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16">
        <h1 className="text-center font-bold text-4xl mb-10">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 " />
        </h1>

        <motion.div
          // variants={zoomIn(0, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className={`wflex flex-col justify-center transition text-white dark:text-stone-800 bg-gradient-to-br from-stone-800 to-slate-500 dark:from-[#F5EFE7] dark:to-slate-300 dark:bg-gradient-to-br py-24 -mx-52 px-52`}
        >
          <h1 className="mx-auto text-2xl font-bold mb-6 md:text-left">
            Get to Know Me!
          </h1>
          <p>
            Hi, my name is&nbsp;
            <span className="text-teal-500 font-bold">George</span> and I am
            a&nbsp;
            <span className="font-bold">highly ambitious</span>
            <span className="font-bold">&nbsp;self-motivated</span>, and
            <span className="font-bold">&nbsp;driven</span> web developer based
            in Richmond, BC.
          </p>
          <br />
          <p>
            My mission as a web developer is to create digital experiences that
            are not only visually stunning but also user-friendly and accessible
            to everyone. I believe that a website should be a reflection of a
            brand&apos;s personality, values, and goals, and I strive to achieve
            that in every project I undertake.
          </p>
          <br />
          <p>
            In this portfolio, you will find a selection of my most recent and
            notable projects, showcasing my&nbsp;
            <span className="font-bold text-teal-500">expertise</span> in
            various programming languages, frameworks, and tools. Whether
            you&apos;re a small business owner looking to establish an online
            presence or a large corporation seeking to revamp your website, I am
            confident that I have the
            <span className="font-bold text-teal-500">
              &nbsp;skills and creativity&nbsp;
            </span>
            to deliver a solution that exceeds your expectations.
          </p>
        </motion.div>

        <div className="flex flex-col items-center pt-20">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            My Skills
          </h1>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, id) => (
              <p
                key={id}
                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold cursor-default"
              >
                {skill.skill}
              </p>
            ))}
          </div>

          <div className="w-full h-[380px] mt-10 gap-4 flex flex-col items-center justify-center rounded-3xl">
            <ComputerCanvas />
          </div>
        </div>
      </div>
      <div className="pb-32 flex justify-center gap-6">
        <div className="w-[.625rem] h-[.625rem] rounded-full bg-teal-500" />
        <div className="w-[.625rem] h-[.625rem] rounded-full bg-teal-500" />
        <div className="w-[.625rem] h-[.625rem] rounded-full bg-teal-500" />
        <div className="w-[.625rem] h-[.625rem] rounded-full bg-teal-500" />
      </div>
    </section>
  );
}
