import { ThemeButton } from "../components/Themetoggle"
import { StarBackground } from "../components/Star"
import { Navbar } from "../components/navbar"
import { HeroSection } from "../components/HeroSection"
import{AboutSection} from "../components/Aboutme"
import { SkillSection } from "../components/SkillsSection"
import { Project } from "../components/ProjectSection"
import { Contact } from "../components/ContactSection"
export  const Home =() =>{
  return(
    <>
 <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
  < ThemeButton />

  < StarBackground />

  <Navbar />
  <main>

<HeroSection />
<AboutSection />
<SkillSection />
<Project />
<Contact />
  </main>
 </div>
    </>
  )
}