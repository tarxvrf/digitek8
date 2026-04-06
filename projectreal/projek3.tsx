"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Parallax Image Component
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
      <motion.div style={{ y, scale }} className="h-full w-full bg-gray-200" />
    </div>
  );
}

export default function Home() {
  const ref = useRef(null);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Storytelling Scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const text1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const text2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const text3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <main ref={ref} className="bg-white text-black overflow-x-hidden">
      {/* HERO */}
      <section className="py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Premium Web Experience 🚀
        </h1>
      </section>

      {/* STORYTELLING + PARALLAX */}
      <section className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* TEXTS */}
          <motion.div style={{ opacity: text1 }} className="absolute">
            <h2 className="text-4xl font-bold text-center">
              Website Biasa Itu Membosankan
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text2 }} className="absolute">
            <h2 className="text-4xl font-bold text-center">
              User Butuh Experience
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text3 }} className="absolute">
            <h2 className="text-4xl font-bold text-center">
              Inilah Website Premium 🔥
            </h2>
          </motion.div>

          {/* IMAGE 3D */}
          <motion.div
            style={{ scale: imageScale, rotate: imageRotate }}
            className="absolute w-[300px] h-[300px] bg-gray-200 rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* PARALLAX PORTFOLIO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <ParallaxImage />
                <div className="p-6">
                  <h3 className="font-semibold">Project {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Parallax + animation effect
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Siap Upgrade Website Anda?
        </h2>
        <a
          href="https://wa.me/"
          className="bg-white text-black px-8 py-4 rounded-2xl"
        >
          Hubungi Sekarang
        </a>
      </section>
    </main>
  );
}