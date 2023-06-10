"use client";

import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
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
      <div className="flex flex-col-reverse md:flex-row max-md:gap-20 text-center items-center justify-between py-16 sm:py-32  md:text-left md:pb-32 md:mt-[150px]">
        <motion.div
          variants={slideIn("left", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className={`md:mt-2 flex flex-1`}
          viewport={{ once: true }}
        >
          <Image
            className="rounded-full shadow-2xl max-md:w-[270px]"
            src="/geo.jpeg"
            alt="headshot-img"
            width={400}
            height={400}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.3, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className={`md:mt-2 md:w-3/5 flex flex-col gap-4 max-md:items-center flex-1`}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&apos;m a
            <br />
            <span className="text-orange-500">{textArray[index]}</span>!
          </h1>
          <p className="text-lg text-stone-600/80 dark:text-stone-300 mt-4 mb-6 md:text-2xl">
            I&apos;m a&nbsp;
            <span className="font-semibold text-teal-600">
              Web Developer&nbsp;
            </span>
            based in Richmond, BC with a passion for creating beautiful and
            functional websites.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 w-[120px] font-semibold text-center transition py-3 bg-orange-500 rounded shadow hover:bg-orange-700 cursor-pointer"
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
