import Image from "next/image";


const projects = [
  {
    title: "Booking App",
    desc: "Sistem booking penginapan",
    img: "https://media.istockphoto.com/id/2186780950/photo/software-engineers-collaborating-on-a-project-analyzing-code-on-computer-monitors-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JvSdMT4MBBhWUzNiP2hJbB_Bm5KN-sNv0HQbAUnMPbU=",
    tech: "React, Express, Supabase",
    link: "/projects/1",
  },
  {
    title: "Company Profile",
    desc: "Website perusahaan modern",
    img: "https://images.pexels.com/photos/33572895/pexels-photo-33572895.jpeg",
    tech: "Vite, Tailwind",
    link: "projects/2",
  },
  {
    title: "Admin Dashboard",
    desc: "Dashboard management",
    img: "https://plus.unsplash.com/premium_photo-1674338456775-0085eccd7654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGl0JTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
    tech: "React, Chart",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                width={1000} height={1000} loading="eager"
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

              {/* TECH */}
              <p className="text-blue-400 text-xs mt-2">
                {p.tech}
              </p>

              {/* BUTTON */}
              <a
                href={p.link}
                className="inline-block mt-4 text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}