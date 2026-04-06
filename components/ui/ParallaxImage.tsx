"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ParallaxOverlay({children}:{children:React.ReactNode}) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Parallax gerakan
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Overlay abu-abu (0 → 0.5 opacity)
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5])

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl">
      
      {/* IMAGE */}
      <motion.div style={{ y }}>
      {children}
      </motion.div>

      {/* OVERLAY ABU-ABU */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gray-950"
      />
    </div>
  )
}