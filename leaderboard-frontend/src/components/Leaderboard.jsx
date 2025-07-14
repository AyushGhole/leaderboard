import Top3Cards from "./Top3Cards";
import RemainingRanks from "./RemainingRanks";

export default function Leaderboard({ users }) {
  const topThree = users.slice(0, 3);
  const otherUsers = users.slice(3);

  return (
    <div className="relative max-w-xl mx-auto p-4 bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-800">
        🌟Leaderboard
      </h2>

      {/* Rewards Badge */}
      <img
        src="/trophy.jpg"
        alt="Rewards"
        className="absolute top-4 right-4 w-8 h-8 animate-bounce"
      />

      <Top3Cards topThree={topThree} />
      <RemainingRanks otherUsers={otherUsers} />

      <p className="text-center text-xs text-gray-500 mt-4">
        Settlement time: 14 days 01:45:47
      </p>
    </div>
  );
}
