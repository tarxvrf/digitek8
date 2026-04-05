"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectDetailPage() {
  const project = {
    title: "SaaS Dashboard Analytics",
    description:
      "A modern analytics dashboard platform built with Next.js, providing real-time insights, data visualization, and seamless user experience.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    features: [
      "Real-time data updates",
      "Authentication & Role Management",
      "Interactive Charts",
      "Responsive UI Design",
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="eager"
          className="object-cover opacity-40 scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl text-gray-300"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
              >
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in this project?
          </h2>
          <p className="text-gray-400 mb-6">
            Feel free to explore more or contact me for collaboration.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
              Live Demo
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Source Code
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
