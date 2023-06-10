"use client";
import { skills } from "@/app/libs/constants";
import ShibaCanvas from "../canvas/Shiba";
import { motion } from "framer-motion";
import { container, items, slideIn } from "@/app/utils/motions";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16">
        <h1 className="text-center font-bold text-4xl mb-10">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 " />
        </h1>

        <motion.div
          variants={container("left", "tween")}
          initial="hidden"
          whileInView={"show"}
          className={`flex flex-col justify-center transition text-white/80 bg-gradient-to-br from-red-500 to-orange-500 py-24 px-40 -mx-40 md:px-40`}
        >
          <motion.div variants={items} className="flex flex-col">
            <h1 className="mx-auto text-white text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h1>
            <p>
              Hi, my name is&nbsp;
              <span className="text-teal-500 font-bold">George</span> and I am
              a&nbsp;
              <span className="font-bold">highly ambitious</span>
              <span className="font-bold">&nbsp;self-motivated</span>, and
              <span className="font-bold">&nbsp;driven</span> web developer
              based in Richmond, BC.
            </p>
            <br />
            <p>
              My mission as a web developer is to create digital experiences
              that are not only visually stunning but also user-friendly and
              accessible to everyone. I believe that a website should be a
              reflection of a brand&apos;s personality, values, and goals, and I
              strive to achieve that in every project I undertake.
            </p>
            <br />
            <p>
              In this portfolio, you will find a selection of my most recent and
              notable projects, showcasing my&nbsp;
              <span className="font-bold text-teal-500">expertise</span> in
              various programming languages, frameworks, and tools. Whether
              you&apos;re a small business owner looking to establish an online
              presence or a large corporation seeking to revamp your website, I
              am confident that I have the
              <span className="font-bold text-teal-500">
                &nbsp;skills and creativity&nbsp;
              </span>
              to deliver a solution that exceeds your expectations.
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            variants={slideIn("left", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col h-1/2 md:w-1/2"
          >
            <h1 className="text-center text-2xl font-bold mb-6 max-md:pt-14 md:text-left">
              My Skills
            </h1>
            <div className="grid grid-cols-3 justify-center">
              {skills.map((item, index) => (
                <p
                  key={index}
                  className="bg-gradient-to-r from-stone-300 to-orange-500 flex justify-center px-4 py-2 mr-2 mt-2 text-gray-600 hover:text-neutral-100 transition hover:scale-110 rounded font-semibold cursor-default"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideIn("right", "spring", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            className="w-full md:w-1/2 h-[350px] md:h-[540px] mt-10 gap-4 flex flex-col items-center justify-center rounded-3xl"
          >
            <ShibaCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
