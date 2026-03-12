import { motion } from "framer-motion";
import { ReactNode } from "react";

type WorkCardProps = {
  title: string;
  children: ReactNode;
  delay?: number;
};

export default function WorkCard({ title, children, delay = 0 }: WorkCardProps) {
  return (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}