import React from "react";
import { projects } from "@/app/libs/constants";
import Project from "./components/Project";

export default function ProjectSection() {
  return (
    <section id="projects" className="mb-40 snap-center">
      <h1 className="text-center font-bold text-4xl">
        Featured Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => (
          <div key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
