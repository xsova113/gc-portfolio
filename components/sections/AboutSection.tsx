"use client";

import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16">
        <AboutMe />
        <MySkills />
      </div>
    </section>
  );
}
