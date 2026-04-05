"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

// ================= MOCK DATA =================
const projects = [
  {
    id: "1",
    title: "SaaS Dashboard",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    description: "Dashboard analytics modern dengan realtime data",
    tech: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    id: "2",
    title: "Booking Hotel App",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    description: "Aplikasi booking hotel fullstack",
    tech: ["Next.js", "Express", "PostgreSQL"],
  },
];

// ================= LIST PAGE =================
export function ProjectList() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-10">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ================= DETAIL PAGE =================
export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 to-black text-white">
      {/* HERO IMAGE */}
      <div className="relative h-[50vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 mb-8">{project.description}</p>

        {/* TECH STACK */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECT DETAIL SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* LEFT IMAGE */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT DESCRIPTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              How This Project Was Built
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Project ini dibuat menggunakan pendekatan modern dengan
              memanfaatkan Next.js sebagai framework utama untuk rendering
              cepat dan SEO friendly. Data dikelola menggunakan backend
              terpisah dan diintegrasikan melalui API untuk memastikan
              performa tetap optimal.
              <br /><br />
              UI dirancang menggunakan Tailwind CSS dengan fokus pada
              responsive design dan user experience yang nyaman di semua
              perangkat. Selain itu, fitur realtime dan interaktif
              ditambahkan untuk meningkatkan pengalaman pengguna secara
              keseluruhan.
            </p>
          </div>
        </div>

        {/* BACK BUTTON */}
        <Link href="/projects">
          <button className="mt-6 px-5 py-2 rounded-lg bg-white text-black">
            ← Back to Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
