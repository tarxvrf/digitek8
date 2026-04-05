"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
    <div className="absolute w-100 h-100 bg-blue-500 blur-[120px] opacity-20"></div>
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Build Modern <span className="text-blue-500">Web Experience</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Saya membantu bisnis membangun aplikasi scalable & modern
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <button className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition">
          Hire Me
        </button>

        <button className="glass px-6 py-3 rounded-xl hover:scale-105 transition">
          View Work
        </button>
      </motion.div>
    </section>
    </div>
  );
}