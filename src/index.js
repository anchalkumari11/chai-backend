import dotenv from "dotenv";

dotenv.config({
  path: './.env'
})

import connectDB from "./db/join_db.js";
connectDB()
const PORT = process.env.PORT || 8000;
console.log(`Server running on: http://localhost:${PORT}`);