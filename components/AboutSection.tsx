import Image from 'next/image'
import React from 'react'

const skills = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'JavaScript' },
    { skill: 'TypeScript' },
    { skill: 'React' },
    { skill: 'Next.js' },
    { skill: 'Node.js' },
    { skill: 'Express' },
    { skill: 'MongoDB' },
    { skill: 'Tailwind CSS' },
    { skill: 'Bootstrap' },
    { skill: 'JQuery' },
    { skill: 'Git' },
]

export default function AboutSection() {
    return (
        <section id='about'>
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>About Me
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 ' />
                </h1>
                <div className='flex flex-col space-y-10 items-stretch align-top justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>

                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to Know Me!</h1>
                        <p>
                            Hi, my name is <span className='text-teal-500 font-bold'>George</span> and I am a&nbsp;
                            <span className='font-bold'>highly ambitious</span>
                            <span className='font-bold'>&nbsp;self-motivated</span>, and
                            <span className='font-bold'>&nbsp;driven</span> web developer based in Richmond, BC.
                        </p>
                        <br />
                        <p>
                            With 2 years of experience in the industry, I have honed my skills in front-end development, back-end development, and everything in between.
                        </p>
                        <br />
                        <p>
                            My mission as a web developer is to create digital experiences that are not only visually stunning but also user-friendly and accessible to everyone. I believe that a website should be a reflection of a brand&apos;s personality, values, and goals, and I strive to achieve that in every project I undertake.
                        </p>
                        <br />
                        <p>
                            In this portfolio, you will find a selection of my most recent and notable projects, showcasing my <span className='font-bold text-teal-500'>expertise</span>  in various programming languages, frameworks, and tools. Whether you&apos;re a small business owner looking to establish an online presence or a large corporation seeking to revamp your website, I am confident that I have the
                            <span className='font-bold text-teal-500'>&nbsp;skills and creativity&nbsp;</span>
                            to deliver a solution that exceeds your expectations.
                        </p>
                    </div>

                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((skill, id) => (
                                <p key={id} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>{skill.skill}</p>
                            ))}
                        </div>
                        <Image src={"/html.gif"} alt="html-img" className='mx-auto md:block md:relative md:top-3 rounded-3xl' width={325} height={325} />
                    </div>

                </div>
            </div>
        </section>
    )
}
