import { motion } from "framer-motion";

export default function LeaderboardCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all">
      {children}
    </motion.div>
  );
}
