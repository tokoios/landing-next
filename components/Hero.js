"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 py-32 px-6 bg-[#fdfaf6] min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6 px-4 py-1 text-sm bg-[#f3ece3] text-[#7a6a4f] rounded-full"
        >
          Solusi Automasi n8n untuk UMKM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Automasi Bisnis <br /> Tanpa Ribet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-[#666] max-w-2xl mx-auto"
        >
          Bangun sistem otomatis dengan n8n untuk WhatsApp, leads, dan operasional bisnis.
          Kurangi kerja manual, fokus ke pertumbuhan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#cta"
            className="bg-[#c6a969] text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
          >
            Mulai Sekarang
          </a>
          <a
            href="#features"
            className="px-8 py-3 rounded-full text-sm border border-[#ddd] hover:bg-[#f3ece3] transition"
          >
            Lihat Fitur
          </a>
        </motion.div>
      </div>
    </section>
  )
}