import React, { useEffect, useState } from "react";
import { getUsers, addUser, claimPoints } from "./api/api";
import UserSelector from "./components/UserSelector";
import AddUserForm from "./components/AddUserForm";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import LeaderboardCard from "./components/LeaderboardCard";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ClaimHistory from "./components/ClaimHistory";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAddUser = async (name) => {
    try {
      await addUser(name);
      toast.success(`✅ User "${name}" added!`);
      fetchUsers();
    } catch (err) {
      toast.error(`❌ Failed to add user: ${err.message}`);
    }
  };

  const handleClaimPoints = async () => {
    if (!selectedUserId) return toast.error("⚠️ Please select a user first!");
    try {
      const res = await claimPoints(selectedUserId);
      toast.success(
        `🎉 Claimed ${res.pointsAwarded} points for ${res.user.name}!`
      );
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      fetchUsers();
    } catch (err) {
      toast.error(`❌ Failed to claim points: ${err.message}`);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl space-y-8 md:space-y-10">
          <h1 className="text-4xl text-center font-extrabold text-gray-800">
            🏆 Leaderboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LeaderboardCard>
              <UserSelector
                users={users}
                selectedUserId={selectedUserId}
                setSelectedUserId={setSelectedUserId}
              />
            </LeaderboardCard>

            <LeaderboardCard>
              <AddUserForm handleAddUser={handleAddUser} />
            </LeaderboardCard>
          </div>

          <LeaderboardCard>
            <ClaimButton handleClaimPoints={handleClaimPoints} />
          </LeaderboardCard>

          <LeaderboardCard>
            <Leaderboard users={users} />
          </LeaderboardCard>

          <LeaderboardCard>
            <ClaimHistory />
          </LeaderboardCard>
        </div>
      </motion.div>
    </>
  );
}
