
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'


export default function Project({ project }: any) {
    return (
        <SlideUp offset='-300px 0px -300px 0px'>
            <div className='flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12'>
                <div className='mt-8 md:w-1/2'>
                    <Link href={project.link} target='_new'>
                        <Image src={project.image} alt='project-img' width={1000} height={1000}
                            className='rounded-xl shadow-xl hover:opacity-70' />
                    </Link>
                </div>

                <div className='mt-12 md:w-1/2 align-bottom'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>

                    <div className='flex flex-row align-bottom space-x-4'>
                        <Link href={project.github} target="_new">
                            <BsGithub size={30}
                                className='hover:-translate-y-1 transition-transform cursor-pointer' />
                        </Link>
                        <Link href={project.link} target="_new">
                            <BsArrowUpRightSquare size={30}
                                className='hover:-translate-y-1 transition-transform cursor-pointer' />
                        </Link>
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}
