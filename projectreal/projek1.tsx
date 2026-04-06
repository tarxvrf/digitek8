"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const ref = useRef(null);

  // Smooth scroll (Apple-like)
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel:true,
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <main ref={ref} className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="py-28 bg-linear-to-br from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Website Premium yang Terasa Seperti Produk Apple 🍎
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Smooth, cepat, dan modern. Dibuat untuk meningkatkan
              kredibilitas dan penjualan bisnis Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-black text-white px-8 py-3 rounded-2xl shadow-xl hover:scale-105 transition"
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

          {/* 3D PARALLAX CARD */}
          <motion.div
            style={{ y, rotate, scale }}
            className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-3xl p-6 perspective-1000"
          >
            <div className="h-80 bg-linear-to-br from-gray-200 to-gray-300 rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Layanan Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {["Company Profile", "Landing Page", "Booking System"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
                  className="p-8 bg-white rounded-3xl shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold mb-3">{item}</h3>
                  <p className="text-gray-600">
                    Solusi website modern dan powerful untuk bisnis Anda.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-52 bg-gray-200" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">Project {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Website modern untuk meningkatkan bisnis.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-28 bg-black text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Siap Naik Level?
        </h2>
        <p className="mb-8 text-gray-300">
          Website Anda bisa terasa seperti produk premium.
        </p>
        <a
          href="https://wa.me/"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Hubungi Sekarang
        </a>
      </section>
    </main>
  );
}