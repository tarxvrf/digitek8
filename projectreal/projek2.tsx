"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Reusable Parallax Image Component
function ParallaxImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className="overflow-hidden h-52">
      <motion.div
        style={{ y, scale }}
        className="h-full w-full bg-gray-200"
      />
    </div>
  );
}

export default function Projek2() {
  const containerRef = useRef(null);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      ref={containerRef}
      className="font-sans bg-white text-gray-900 overflow-x-hidden"
    >
      {/* HERO */}
      <section className="py-28 bg-linear-to-br from-white to-gray-100">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white shadow-2xl rounded-3xl p-6"
          >
            <div className="h-80 bg-gray-200 rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PARALLAX */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Portfolio Parallax
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <ParallaxImage />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">Project {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Efek parallax pada gambar saat di-scroll.
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
          Siap Upgrade Website Anda?
        </h2>
        <p className="mb-8 text-gray-300">
          Dengan efek smooth + parallax premium.
        </p>
        <a
          href="https://wa.me/"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
        >
          Hubungi Sekarang
        </a>
      </section>
    </main>
  );
}
