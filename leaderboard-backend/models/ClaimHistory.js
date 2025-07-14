import mongoose from "mongoose";

const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeaderBoardUser",
    required: true,
  },
  pointsAwarded: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("ClaimHistory", claimHistorySchema);
