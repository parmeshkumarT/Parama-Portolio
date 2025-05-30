import { AboutMe } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home=()=>{
    return<>
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
{/* theme toggle */}
  <ThemeToggle/>

{/* background effects */}
  <StarBackground/>

{/* Navbar */}
  <Navbar/>

{/*main content*/}
<main>
  <HeroSection/>
  <AboutMe/>
  <SkillsSection/>
  <ProjectSection/>
  <ContactSection/>
</main>
</div>

{/* Footer */}
<Footer/>
</>
}