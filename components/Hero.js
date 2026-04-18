"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 py-16 md:py-32 px-4 md:px-6 bg-[#fdfaf6] min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1 text-xs md:text-sm bg-[#f3ece3] text-[#7a6a4f] rounded-full"
        >
          Solusi Automasi n8n untuk UMKM
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Automasi Bisnis <br className="hidden md:block" /> Tanpa Ribet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 md:mt-6 text-sm md:text-lg text-[#666] max-w-2xl mx-auto px-2"
        >
          Bangun sistem otomatis dengan n8n untuk WhatsApp, leads, dan operasional bisnis.
          Kurangi kerja manual, fokus ke pertumbuhan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap px-2"
        >
          <a
            href="#cta"
            className="bg-[#c6a969] text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:opacity-90 transition w-full sm:w-auto text-center"
          >
            Mulai Sekarang
          </a>
          <a
            href="#features"
            className="px-6 md:px-8 py-3 rounded-full text-sm md:text-base border border-[#ddd] hover:bg-[#f3ece3] transition w-full sm:w-auto text-center"
          >
            Lihat Fitur
          </a>
        </motion.div>
      </div>
    </section>
  )
}