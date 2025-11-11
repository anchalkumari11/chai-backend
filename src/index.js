import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // ✅ This must come first

import connectDB from "./db/join_db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at port: ${process.env.PORT}`);
      console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
    });
  })
  .catch((err) => {
    console.log("❌ MONGO DB connection failed:", err);
  });
