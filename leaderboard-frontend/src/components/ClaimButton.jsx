import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function ClaimButton({ handleClaimPoints }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClaimPoints}
      className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all">
      <FaGift className="text-xl" />
      Claim Points
    </motion.button>
  );
}
