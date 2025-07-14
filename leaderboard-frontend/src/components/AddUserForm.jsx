import { useState } from "react";
import { motion } from "framer-motion";

export default function AddUserForm({ handleAddUser }) {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name) return;
    handleAddUser(name);
    setName("");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onSubmit={submit}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-center gap-2">
      <input
        type="text"
        placeholder="Enter new user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow">
        Add
      </button>
    </motion.form>
  );
}
