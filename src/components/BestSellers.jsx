import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  bestSeller1,
  bestSeller2,
  bestSeller3,
  bestSeller4,
  bestSeller5,
  bestSeller6,
} from "../assets/figmaAssets";

const categories = ["All", "Tops", "Tshirts", "Pants", "Shoes"];

const products = [
  { image: bestSeller3, name: "Lorem Ipsum", price: "$200", tag: "Tops" },
  { image: bestSeller1, name: "Lorem Ipsum", price: "$150", tag: "Tshirts" },
  { image: bestSeller4, name: "Lorem Ipsum", price: "$250", tag: "Pants" },
  { image: bestSeller5, name: "Lorem Ipsum", price: "$100", tag: "Shoes" },
  { image: bestSeller2, name: "Lorem Ipsum", price: "$250", tag: "Tops" },
  { image: bestSeller6, name: "Lorem Ipsum", price: "$300", tag: "Shoes" },
];

export default function BestSellers() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? products : products.filter((p) => p.tag === active);

  return (
    <section className="px-6 md:px-[150px] py-28 max-w-[1440px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-navy text-[36px] md:text-[64px] text-center capitalize mb-10"
      >
        Our best sellers
      </motion.h2>

      <div className="flex justify-center flex-wrap gap-8 md:gap-11 mb-16 text-[15px] tracking-[1.7px] uppercase text-navy-deep">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative pb-1 font-medium transition-colors ${
              active === cat ? "font-black" : "opacity-70 hover:opacity-100"
            }`}
          >
            {cat}
            {active === cat && (
              <motion.span
                layoutId="category-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-navy-deep"
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.name + p.image}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
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
              <p className="mt-6 font-bold text-navy-deep text-[20px]">
                {p.name}
              </p>
              <p className="mt-2 font-black text-navy text-[28px]">
                {p.price}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
