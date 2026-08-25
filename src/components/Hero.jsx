import { motion } from "motion/react";
import { heroModel, decorHeroDots, decorHeroDotsRight, arrowDown } from "../assets/figmaAssets";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative bg-sky overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <img
        src="src/assets/images/Vector.png"
        alt=""
        className="hidden md:block absolute left-6 top-40 w-[90px] opacity-70"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-6 md:px-[150px] max-w-[1440px] mx-auto"
      >
        <div>
          <motion.h1
            variants={item}
            className="font-display font-bold text-navy text-[42px] md:text-[64px] leading-[1.1] capitalize"
          >
            Make Your Style Looks Perfect
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-navy-deep text-[17px] md:text-[20px] leading-[1.8] max-w-[440px]"
          >
            Our collection will help your fashion looks better and we will
            provide the best product for you.
          </motion.p>
          <motion.button
            variants={item}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-navy-deep text-white font-black uppercase tracking-wide text-[16px] md:text-[18px] px-10 py-5"
          >
            Shop Now
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* dote here */}
          <img
            src="src/assets/images/Vector.png" 
            alt=""
            className="hidden md:block absolute -top-10 left-12 w-[90px] opacity-70"
          />
          <img
            src="src\assets\images\image 531.png"
            alt="Model wearing the featured collection"
            className="w-full max-w-[430px] rounded-sm object-cover shadow-xl"
          />
          <motion.a
            href="#collections"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute -bottom-6 right-0 bg-navy-deep  p-6 shadow-lg"
            aria-label="Scroll to collections"
          >
            <img src="src\assets\images\ArrowHero.png" alt="Arrow" className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
