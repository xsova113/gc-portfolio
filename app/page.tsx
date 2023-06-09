
import AboutSection from '@/app/components/AboutSection'
import HeroSection from '@/app/components/HeroSection'
import ProjectSection from '@/app/components/ProjectSection'

export default function Home() {
  return (
    <main className='overflow-x-hidden px-4 sm:px-20'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
