
import AboutSection from '@/app/components/AboutSection'
import HeroSection from '@/app/components/HeroSection'
import ProjectSection from '@/app/components/ProjectSection'

export default function Home() {
  return (
    <main className='px-4 sm:px-20 overflow-x-clip'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
