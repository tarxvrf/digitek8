"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-900">
      {/* HERO */}
      <section className="py-24 bg-linear-to-br from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bangun Website Premium untuk Bisnis Anda 🚀
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Website cepat, modern, dan SEO-friendly untuk meningkatkan
              kredibilitas dan penjualan bisnis Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-black text-white px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
              >
                Konsultasi Gratis
              </a>
              <a
                href="#portfolio"
                className="border px-8 py-3 rounded-2xl hover:bg-gray-100 transition"
              >
                Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-2xl rounded-3xl p-6"
          >
            <div className="h-75 bg-gray-200 rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {["20+ Project", "100% Client Puas", "Fast & SEO"].map(
            (item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Layanan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Company Profile",
                desc: "Tingkatkan kredibilitas bisnis dengan website profesional.",
              },
              {
                title: "Landing Page",
                desc: "Optimasi penjualan dengan halaman yang fokus conversion.",
              },
              {
                title: "Booking System",
                desc: "Sistem reservasi otomatis untuk bisnis Anda.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl shadow hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
              >
                <div className="h-48 bg-gray-200 group-hover:scale-105 transition" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">Project {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Website modern untuk meningkatkan bisnis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Testimoni</h2>
          <div className="p-8 bg-white rounded-3xl shadow-lg">
            <p className="text-gray-600 text-lg mb-4">
              "Website sangat cepat dan membantu meningkatkan bisnis kami!"
            </p>
            <span className="font-semibold">- Client</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 bg-black text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Siap Meningkatkan Bisnis Anda?
        </h2>
        <p className="mb-8 text-gray-300">
          Konsultasikan kebutuhan website Anda sekarang juga.
        </p>
        <a
          href="https://wa.me/"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Hubungi via WhatsApp
        </a>
      </section>
    </main>
  );
}