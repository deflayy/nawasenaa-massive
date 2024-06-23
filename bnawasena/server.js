import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());

// Test database connection
db.getConnection()
  .then((connection) => {
    console.log("Database connected!");
    // Release the connection after confirming it's successful
    connection.release();
  })
  .catch((err) => {
    console.error("Database connection failed: ", err.message);
    process.exit(1); // Exit the application if database connection fails
  });

// Routes
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
