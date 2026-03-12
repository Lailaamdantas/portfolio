"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CaseCardProps = {
  title: string;
  image: string;
  delay?: number;
};

export default function CaseCard({ title, image, delay = 0 }: CaseCardProps) {
  return (
    <motion.div
      className="case-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="case-image"
      />

      <div className="case-overlay">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}