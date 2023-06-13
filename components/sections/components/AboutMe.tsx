import { container, items } from "@/app/utils/motions";
import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold text-4xl mb-10">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-[#3A98B9] border-0 " />
      </h1>

      <motion.div
        variants={container("left", "tween")}
        initial="hidden"
        whileInView={"show"}
        className={`flex flex-col justify-center transition text-white/80 bg-gradient-to-br from-red-500 to-orange-500 py-32 px-40 -mx-40 md:px-40`}
      >
        <motion.div variants={items} className="flex flex-col">
          <h1 className="mx-auto text-white text-2xl font-bold mb-6 md:text-left">
            Get to Know Me!
          </h1>
          <p>
            Hi, my name is&nbsp;
            <span className="text-[#3A98B9] font-bold">George</span> and I am
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
            <span className="font-bold text-[#3A98B9]">expertise</span> in
            various programming languages, frameworks, and tools. Whether
            you&apos;re a small business owner looking to establish an online
            presence or a large corporation seeking to revamp your website, I am
            confident that I have the
            <span className="font-bold text-[#3A98B9]">
              &nbsp;skills and creativity&nbsp;
            </span>
            to deliver a solution that exceeds your expectations.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
