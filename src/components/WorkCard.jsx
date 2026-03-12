import { motion } from "framer-motion";

export default function WorkCard({ title, children, delay = 0 }) {
  return (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{
        duration: 0.3,
        delay,
        type: "spring",
        stiffness: 220,
        damping: 18
      }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}