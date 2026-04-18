import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fdfaf6] text-[#2d2d2d]">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}