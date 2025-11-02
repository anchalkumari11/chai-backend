import dotenv from "dotenv";
import connectDB from "./db/join_db.js";
dotenv.config({
  path: './.env'
})

connectDB()
//const PORT = process.env.PORT || 8000;
//console.log(`Server running on: http://localhost:${PORT}`);