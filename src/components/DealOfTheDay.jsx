import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { dealModel } from "../assets/figmaAssets";

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((diff / (1000 * 60)) % 60);
  return { day, hour, minute };
}

export default function DealOfTheDay() {
  const [target] = useState(() => Date.now() + (3 * 24 + 8) * 60 * 60 * 1000 + 9 * 60 * 1000);
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000 * 30);
    return () => clearInterval(id);
  }, [target]);

  const blocks = [
    { value: time.day, label: "Day" },
    { value: time.hour, label: "Hour" },
    { value: time.minute, label: "Minute" },
  ];

  return (
    <section className="relative bg-sky overflow-hidden py-24">
      <div className="px-6 md:px-[150px] max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-navy text-[34px] md:text-[50px]">
            Deal Of The Day
          </h2>
          <p className="mt-6 text-navy-deep text-[17px] leading-[1.7] max-w-[440px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </p>

          <div className="mt-10 flex gap-6">
            {blocks.map((b) => (
              <div
                key={b.label}
                className="bg-navy-deep text-white w-[100px] h-[100px] flex flex-col items-center justify-center"
              >
                <motion.p
                  key={b.value}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-display font-bold text-[26px]"
                >
                  {String(b.value).padStart(2, "0")}
                </motion.p>
                <p className="text-[16px] mt-1">{b.label}</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 bg-navy-deep text-white font-black uppercase tracking-wide text-[18px] px-10 py-5"
          >
            Shop Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={dealModel}
            alt="Deal of the day model"
            className="w-full max-w-[420px] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
