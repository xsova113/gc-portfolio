"use client";

import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import Shiba from "./canvas/Shiba";
import { motion } from "framer-motion";
import { slideIn } from "@/app/utils/motions";
import { useEffect, useState } from "react";

const textArray = ["Developer", "Coder", "Programmer"];

export default function HeroSection() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex((prev) => ++prev);
      }
    }, 2000);
  }, [index]);

  return (
    <section className="max-md:mt-20" id="home">
      {/* <div
        className={` animate-bounce transition relative flex -top-[30px] md:-top-[60px] right-8 w-full h-[350px] md:h-[800px] items-center`}
      >
        <Shiba />
      </div> */}

      <div className="flex flex-col max-md:gap-10 text-center items-center justify-between py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:pb-32 md:mt-[150px]">
        <motion.div
          variants={slideIn("left", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className={`md:mt-2 flex flex-1`}
          viewport={{ once: true}}
        >
          <Image
            className="rounded-full shadow-2xl"
            src="/geo.jpeg"
            alt="headshot-img"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className={`md:mt-2 md:w-3/5 flex flex-col max-md:items-center flex-1`}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&apos;m a
            <br />
            <span className="text-orange-500">{textArray[index]}</span>!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m a&nbsp;
            <span className="font-semibold text-teal-600">
              Web Developer &nbsp;
            </span>
            based in Richmond, BC with a passion for creating beautiful and
            functional websites.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 w-[120px] font-semibold text-center transition py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={50} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
