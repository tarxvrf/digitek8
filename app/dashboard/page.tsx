import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '../projects/page'
import Services from '../services/page'
import Contact from '../contact/page'

function Dashboard() {
  return (
   <>
   <Hero/>
   <About/>
   <Projects/>
   <Services/>
   <Contact/>
   </>
  )
}

export default Dashboard