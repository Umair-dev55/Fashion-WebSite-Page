import { motion } from "motion/react";
import { featured1, featured2, featured3, arrowLeft, arrowRight } from "../assets/figmaAssets";

const products = [
  { image: featured1, name: "Frilled Sleeves Midi Dress", price: "$200" },
  { image: featured2, name: "Round Neck Solid Top", price: "$150" },
  { image: featured3, name: "White Rayon Short Blouson Crop Top", price: "$250" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function FeaturedCollections() {
  return (
    <section id="collections" className="relative px-6 md:px-[150px] py-28 max-w-[1440px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-navy text-[36px] md:text-[64px] text-center capitalize mb-16"
      >
        Our featured collections
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.name}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[385px] object-cover"
              />
            </div>
            <p className="mt-6 font-bold text-navy-deep text-[20px] capitalize">
              {p.name}
            </p>
            <p className="mt-2 font-black text-navy text-[28px]">{p.price}</p>

            {i === 0 && (
              <button
                aria-label="Previous"
                className="absolute left-3 top-[42%] -translate-y-1/2 bg-white/80 rounded-full p-3 shadow"
              >
                <img src={arrowLeft} alt="" className="w-5 h-5 rotate-180" />
              </button>
            )}
            {i === products.length - 1 && (
              <button
                aria-label="Next"
                className="absolute right-3 top-[42%] -translate-y-1/2 bg-white/80 rounded-full p-3 shadow"
              >
                <img src={arrowRight} alt="" className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
