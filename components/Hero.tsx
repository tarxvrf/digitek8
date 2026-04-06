"use client"
import { motion } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";
import Image from "next/image";
import Glowbackground from "./ui/Glowbackground";
 
 
 
 export default function Projek2() {
  
   return (
     <main
  
      className="font-sans  text-white overflow-x-hidden"
    >
      <Glowbackground/>
      {/* HERO */}
      <section className="py-28 bg-linear-to-br from-blue  to-gray-950">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Website Premium dengan Parallax Experience 🚀
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Smooth scrolling + efek parallax modern untuk pengalaman user
              yang lebih hidup.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-black text-white px-8 py-3 rounded-2xl shadow-xl"
              >
                Konsultasi Gratis
              </a>
              <a
                href="#portfolio"
                className="border px-8 py-3 rounded-2xl"
              >
                Portfolio
              </a>
            </div>
          </motion.div>
          <ParallaxImage>
            <Image alt="backend" loading="eager" width={1000} height={1000}
                     src={"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg"}
                     className="rounded-2xl shadow-xl"
                   />
          </ParallaxImage>
        
        </div>

      </section>
      </main>
   )
  
  
  }
  