import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '../projects/page'
import Services from '../services/page'
import Contact from '../contact/page'
import Techstack from '@/components/ui/techstack'

function Dashboard() {
  return (
   <>
   <Hero/>
   <About/>
   <Techstack/>
   <Projects/>
   <Services/>
   <Contact/>
   </>
  )
}

export default Dashboard