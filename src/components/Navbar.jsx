import { motion } from "motion/react";
import { bagIcon } from "../assets/figmaAssets";

const links = ["Men", "Woman", "Kids", "Collection", "Trends"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[150px] py-8"
    >
      <p className="font-black text-[22px] tracking-wide text-navy">FASHION</p>

      <nav className="hidden md:flex items-center gap-10 text-[16px] tracking-[1.84px] uppercase text-navy-deep font-black">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="relative py-1 transition-colors hover:text-navy after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-navy after:transition-all hover:after:w-full"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <svg
          className="w-5 h-5 text-navy-deep"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-navy-deep p-3 rounded-sm"
          aria-label="Bag"
        >
          <img src={bagIcon} alt="" className=" w-[22px] h-[22px]" />
        </motion.button>
      </div>
    </motion.header>
  );
}
