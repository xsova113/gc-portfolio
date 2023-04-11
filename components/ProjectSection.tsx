import React from 'react'
import Project from './Project'

const projects = [
  {
    name: "Tin-dog",
    description: "A simple project that showcase the landing page of Tin-Dog app.",
    image: "/1.png",
    github: "https://github.com/xsova113/TinDog-Start",
    link: "https://tindog-lo1x.onrender.com/"
  },
  {
    name: "Simon-Game",
    description: "Simple Simon-Game app using Javascript.",
    image: "/2.png",
    github: "https://github.com/xsova113/simon-game",
    link: "https://simon-game-xsova113.vercel.app/"
  },
  {
    name: "Workout-Buddy",
    description: "Simple Workout-Buddy app for tracking workouts built with react.",
    image: "/3.png",
    github: "https://github.com/xsova113/WorkoutBuddy",
    link: "https://workout-buddy-rosy.vercel.app/login"
  }
]

export default function ProjectSection() {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 ' />
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, index) => (
          <div key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
