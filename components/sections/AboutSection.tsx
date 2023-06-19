"use client";

import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";

export default function AboutSection() {
  return (
    <section id="about" className="mb-24">
      <h1 className="text-center font-bold text-4xl mt-32 mb-20">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-[#3A98B9] border-0 " />
      </h1>
      <div className="my-12 pb-24 flex md:flex-row flex-col-reverse md:items-center">
        <MySkills />
        <AboutMe />
      </div>
    </section>
  );
}
