import axios from "axios";

const API_URL = "https://leaderboard-j73b.onrender.com/api/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addUser = async (name) => {
  const res = await axios.post(API_URL, { name });
  return res.data;
};

export const claimPoints = async (userId) => {
  const res = await axios.post(`${API_URL}/claim`, { userId });
  return res.data;
};

export const getClaimHistory = async () => {
  const res = await fetch(`https://leaderboard-j73b.onrender.com/api/claims`);
  return await res.json();
};
