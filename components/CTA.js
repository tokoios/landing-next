"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 py-16 md:py-28 text-center bg-[#f3ece3] min-h-[60vh] flex flex-col justify-center px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold px-2"
        >
          Siap Automasi Bisnis Anda?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 md:mt-4 text-[#666] px-4"
        >
          Konsultasi GRATIS dan mulai automasi bisnis Anda hari ini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 md:mt-10"
        >
          <a
            href="https://wa.me/628133361070"
            className="bg-[#2d2d2d] text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:opacity-90 transition inline-block w-full sm:w-auto"
          >
            Hubungi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  )
}