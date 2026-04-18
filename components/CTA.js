"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 py-28 text-center bg-[#f3ece3] min-h-[60vh] flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Siap Automasi Bisnis Anda?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-[#666]"
        >
          Konsultasi GRATIS dan mulai automasi bisnis Anda hari ini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/"
            className="bg-[#2d2d2d] text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
          >
            Hubungi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  )
}