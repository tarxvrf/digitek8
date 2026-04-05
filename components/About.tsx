

export default function About() {
  return (
    <section id="about" className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

      {/* IMAGE */}
      <img
        src={"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg"}
        className="rounded-2xl shadow-xl"
      />

      {/* TEXT */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>

        <p className=" text-gray-400 text-justify sm:text-left md:text-lg leading-relaxed">
          Sebagai <span className="text-2xl text-blue-800">Fullstack Web Developer</span>, saya mengkhususkan diri dalam membangun website dan aplikasi berbasis Next.js dengan standar modern dan performa tinggi. Saya berpengalaman dalam mengembangkan sistem end-to-end, mulai dari desain arsitektur hingga implementasi dan optimasi.

          Saya menggabungkan teknologi seperti React, TypeScript, dan Tailwind CSS untuk menciptakan antarmuka yang cepat dan intuitif, serta backend yang solid menggunakan Express.js dan Supabase untuk memastikan skalabilitas dan efisiensi data.

          Fokus utama saya adalah menghasilkan produk digital yang tidak hanya terlihat menarik, tetapi juga memiliki performa tinggi, SEO yang optimal, dan pengalaman pengguna yang seamless. Setiap project saya bangun dengan pendekatan problem-solving, memastikan solusi yang tepat sesuai kebutuhan bisnis
        </p>
      </div>

    </section>
  );
}