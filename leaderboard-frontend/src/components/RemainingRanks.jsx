export default function RemainingRanks({ otherUsers }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {otherUsers.map((user, index) => (
        <div
          key={user._id}
          className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-yellow-50 transition">
          <div className="flex items-center gap-2">
            <img
              src={user.avatarUrl || "/icongirls.jpg"}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{user.name}</span>
          </div>
          <span className="text-yellow-700 font-bold">
            {String(user.totalPoints).slice(0, 1)}
            {String(user.totalPoints).slice(-1)}
          </span>
        </div>
      ))}
    </div>
  );
}
