import { useEffect, useState } from "react";
import { getClaimHistory } from "../api/api";
import { motion } from "framer-motion";
import { MdHistory } from "react-icons/md";

export default function ClaimHistory() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const data = await getClaimHistory();
    setHistory(data);
  };

  useEffect(() => {
    fetchHistory();
    const interval = setInterval(fetchHistory, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-xl p-6 mt-10 w-full max-w-md mx-auto">
      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-yellow-700">
        <MdHistory className="text-2xl" /> Recent Claims
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-500 italic">No claims yet!</p>
      ) : (
        <div className="space-y-3">
          {history.map((claim) => (
            <div
              key={claim._id}
              className="flex justify-between items-center bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center font-bold text-yellow-800">
                  {claim.userId?.name?.charAt(0).toUpperCase() || "+"}
                </div>
              </div>
              <div className="text-right">
                <span className="text-yellow-700 font-bold text-lg">
                  +{claim.pointsAwarded}
                </span>
                <div className="text-xs text-gray-400">23rd July, 2025</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
