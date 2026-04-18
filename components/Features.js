"use client";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "WhatsApp Automation",
      desc: "Kirim & balas pesan otomatis dengan integrasi WhatsApp"
    },
    {
      title: "Lead Auto Follow Up",
      desc: "Data dari form langsung masuk ke CRM & follow up otomatis"
    },
    {
      title: "Social Media Automation",
      desc: "Posting & respon otomatis untuk meningkatkan engagement"
    },
    {
      title: "Email Notifikasi",
      desc: "Notifikasi otomatis ke tim & customer tanpa delay"
    },
    {
      title: "Custom Workflow",
      desc: "Workflow disesuaikan dengan kebutuhan bisnis Anda"
    },
    {
      title: "Scalable System",
      desc: "Siap digunakan dari UMKM hingga bisnis berkembang"
    }
  ];

  return (
    <section
      id="features"
      className="scroll-mt-20 py-16 md:py-24 bg-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-16"
        >
          Fitur Automasi
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 border border-[#eee] rounded-2xl bg-[#fdfaf6] hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">{item.title}</h4>
              <p className="text-sm text-[#666]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}