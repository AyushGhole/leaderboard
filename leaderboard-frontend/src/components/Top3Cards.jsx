import { motion } from "framer-motion";

export default function Top3Cards({ topThree }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
      {topThree.map((user, index) => (
        <motion.div
          key={user._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex flex-col items-center bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-xl p-4 shadow-xl ring-2 ring-yellow-400 w-40`}>
          <img
            src={user.avatarUrl || "/iconboy.jpg"}
            alt={user.name}
            className="w-16 h-16 rounded-full border-4 border-white mb-2 object-cover"
          />
          <h3 className="font-bold text-lg text-center">{user.name}</h3>
          <p className="text-yellow-800 font-extrabold text-xl">
            {String(user.totalPoints).slice(0, 1)}
            {String(user.totalPoints).slice(-1)}
          </p>
          <img
            src={`/trophy.jpg`}
            alt={`Rank ${index + 1}`}
            className="w-8 h-8 mt-2"
          />
        </motion.div>
      ))}
    </div>
  );
}
