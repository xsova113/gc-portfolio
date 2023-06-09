"use client";
import { skills } from "@/app/libs/constants";
import ComputerCanvas from "./canvas/Computer";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16">
        <h1 className="text-center font-bold text-4xl mb-10">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 " />
        </h1>

        <div
          className={`flex flex-col justify-center transition text-white/80 bg-gradient-to-br from-red-500 to-orange-500 py-24 w-screen -ml-4 px-10  md:-ml-40 md:px-52`}
        >
          
          <h1 className="mx-auto text-white text-2xl font-bold mb-6 md:text-left">
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
        </div>

        <div className="flex flex-col md:flex-row items-center pt-20">
          <div className="flex flex-col h-1/2 md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
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
          </div>

          <div className="w-1/2 h-[380px] mt-10 gap-4 flex flex-col items-center justify-center rounded-3xl">
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
