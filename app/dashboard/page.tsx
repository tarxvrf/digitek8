"use client"
import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '../projects/page'
import Services from '../services/page'
import Contact from '../contact/page'
import Techstack from '@/components/ui/techstack'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { motion } from 'framer-motion'

function Dashboard() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      
      <About />
      <Techstack />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}

export default Dashboard