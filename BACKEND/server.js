import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./src/config/db.js";
import { app } from "./src/app.js";

// Set default port
const PORT = process.env.PORT || 7000;

// Connect to database and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('MONGODB connection failed error: ', error);
    process.exit(1);
  });
