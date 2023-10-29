import Image from 'next/image'
import { HeroSection } from './ component/HeroSection';
import Navbar from './ component/Navbar';
import AboutSection from './ component/AboutSection';
import { ProjectsSection } from './ component/ProjectsSection';
export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col bg-black  container  ">
<Navbar/>
     <div className=' container  mx-auto py-12 px-4 '> 
   <HeroSection/>
   <AboutSection/>
   <ProjectsSection/>
   </div>
    </main>
  )
}
