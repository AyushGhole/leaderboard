import LeaderBoardUser from "../models/User.js"; // ✅ IMPORTANT
import express from "express";
import ClaimHistory from "../models/ClaimHistory.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const claims = await ClaimHistory.find()
      .sort({ claimedAt: -1 })
      .limit(10)
      .populate("userId", "name"); // This now works because "User" is registered!
    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
