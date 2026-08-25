import { motion } from "motion/react";
import { brandImage } from "../assets/figmaAssets";

const stats = [
  { value: "250+", label: "Store Branches", outline: true },
  { value: "7000+", label: "Product Sold", outline: false },
  { value: "3900+", label: "5 Star Reviews", outline: true },
];

export default function BrandStats() {
  return (
    <section className="relative bg-sky overflow-hidden py-24">
      <div className="px-6 md:px-[150px] max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={brandImage}
            alt="Model showcasing the best fashion brand"
            className="w-full max-w-[430px] object-cover shadow-xl"
          />
          <button className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white text-navy-deep font-black uppercase text-[16px] px-8 py-4 shadow-lg whitespace-nowrap">
            Explore Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="font-display font-bold text-navy text-[36px] md:text-[48px] capitalize">
            Best Fashion Brand
          </h2>
          <p className="mt-4 text-navy-deep text-[18px] leading-[1.8] max-w-[440px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry, adopted since the 1500s.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-[440px]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={
                  "flex flex-col items-center justify-center gap-2 aspect-square " +
                  (s.outline
                    ? "border-2 border-navy-deep text-navy-deep"
                    : "bg-navy-deep text-white")
                }
              >
                <p className="font-display font-bold text-[32px] capitalize">
                  {s.value}
                </p>
                <p className="text-[15px] text-center capitalize">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
