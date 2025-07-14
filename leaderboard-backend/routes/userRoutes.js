import express from "express";
import LeaderBoardUser from "../models/User.js";
import ClaimHistory from "../models/ClaimHistory.js";

const router = express.Router();

// GET all users sorted by totalPoints DESC
router.get("/", async (req, res) => {
  try {
    const users = await LeaderBoardUser.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  POST add a new user
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = new LeaderBoardUser({ name });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  POST claim random points for user & save history
router.post("/claim", async (req, res) => {
  const { userId } = req.body;

  try {
    // Find the user
    const user = await LeaderBoardUser.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate random points (1-10)
    const points = Math.floor(Math.random() * 10) + 1;

    // Update totalPoints
    user.totalPoints += points;
    await user.save();

    // Save to ClaimHistory
    const claim = new ClaimHistory({
      userId: user._id,
      pointsAwarded: points,
    });
    await claim.save();

    res.json({
      message: `Claimed ${points} points for ${user.name}`,
      user: {
        _id: user._id,
        name: user.name,
        totalPoints: user.totalPoints,
      },
      pointsAwarded: points,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
