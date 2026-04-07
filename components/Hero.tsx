"use client"
import { motion } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";
import Image from "next/image";
import Glowbackground from "./ui/Glowbackground";
import Easein from "./ui/Easein";



export default function Projek2() {

  return (
    <>

    <main

      className="font-sans  text-white overflow-x-hidden"
    >
      <Glowbackground />
      {/* HERO */}
      <section className="py-28 bg-linear-to-br from-blue  to-gray-950">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Easein>
              <h1 className="sm:text-6xl text-3xl font-bold text-center sm:text-left leading-tight mb-6">
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
          </Easein>
          <Easein>
            <Image alt="backend" loading="eager" width={1000} height={1000}
              src={"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg"}
              className="rounded-2xl shadow-xl"
            />
          </Easein>

        </div>

      </section>
    </main>
        </>
  )


}
