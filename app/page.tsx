
import AboutSection from '@/app/components/AboutSection'
import HeroSection from '@/app/components/HeroSection'
import ProjectSection from '@/app/components/ProjectSection'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
