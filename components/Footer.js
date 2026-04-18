export default function Footer() {
  return (
    <footer className="py-8 md:py-12 text-center text-xs md:text-sm text-[#888] border-t border-[#eee] px-4">
      © {new Date().getFullYear()} TOKOIOS — All rights reserved
    </footer>
  )
}