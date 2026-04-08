import { motion } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";
import Image from "next/image";
import Title from "./ui/Tittle";


export default function About() {
  return (
    <section id="about" className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto bg-linear-to-br from-blue  to-gray-950">
      <ParallaxImage>
        {/* IMAGE */}
        <Image alt="backend" loading="eager" width={1000} height={1000}
          src={"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg"}
          className="rounded-2xl shadow-xl"
        />
      </ParallaxImage>
      {/* TEXT */}
      <div> <ParallaxImage>
       <Title nama={"About"} />
          <p className=" text-gray-400 text-justify sm:text-left md:text-lg leading-relaxed">
            Sebagai <span className="text-2xl text-blue-800">Fullstack Web Developer</span>, saya mengkhususkan diri dalam membangun website dan aplikasi berbasis Next.js dengan standar modern dan performa tinggi. Saya berpengalaman dalam mengembangkan sistem end-to-end, mulai dari desain arsitektur hingga implementasi dan optimasi.

            Saya menggabungkan teknologi seperti React, TypeScript, dan Tailwind CSS untuk menciptakan antarmuka yang cepat dan intuitif, serta backend yang solid menggunakan Express.js dan Supabase untuk memastikan skalabilitas dan efisiensi data.

            Fokus utama saya adalah menghasilkan produk digital yang tidak hanya terlihat menarik, tetapi juga memiliki performa tinggi, SEO yang optimal, dan pengalaman pengguna yang seamless. Setiap project saya bangun dengan pendekatan problem-solving, memastikan solusi yang tepat sesuai kebutuhan bisnis
          </p></ParallaxImage>
      </div>

    </section>
  );
}