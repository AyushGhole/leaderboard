import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function UserSelector({
  users,
  selectedUserId,
  setSelectedUserId,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4">
      <label className="block mb-1 text-sm font-medium text-yellow-800">
        Select User:
      </label>
      <div className="relative">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="w-full appearance-none border border-yellow-300 rounded-lg px-4 py-2 pr-10 bg-yellow-50 text-yellow-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option value="">-- Select User --</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <FaUserCircle className="absolute right-3 top-3 text-yellow-700 pointer-events-none" />
      </div>
    </motion.div>
  );
}
