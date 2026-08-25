import { motion } from "motion/react";

const columns = [
  {
    title: "Company",
    links: ["About us", "Career", "Blog", "FAQs"],
  },
  {
    title: "Need Help?",
    links: ["Contact Us", "Shipping Services", "Payment options", "Returns & Exchanges", "Unsubscribe"],
  },
  {
    title: "Follow us",
    links: ["Instagram", "Facebook", "Twitter", "Pinterest", "Snapchat"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-8">
      <div className="px-6 md:px-[150px] max-w-[1440px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-bold text-[26px] tracking-tight mb-4">FASHION</p>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-[230px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </motion.div>

        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
          >
            <p className="font-medium text-[17px] mb-5">{col.title}</p>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-[16px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 px-6">
        <p className="text-center text-white/70 text-[16px] tracking-tight">
          Copyright @ Fashion 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
