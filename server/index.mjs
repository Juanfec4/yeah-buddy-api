//Dependencies
import "dotenv/config";
import express from "express";
import ip from "ip";
import mongoose from "mongoose";

//Config
import connectDB from "./config/dbConnection.mjs";

//Middleware
import logger from "./middleware/morganConfig.mjs";

//Routers
import planRouter from "./routes/plans.mjs";
import exerciseRouter from "./routes/exercises.mjs";

const app = express();
const PORT = 3001;

//Connect to MongoDB
connectDB();

//Middleware
app.use(express.json());
app.use("/", logger);

//Routes
app.use("/plans", planRouter);
app.use("/exercises", exerciseRouter);

//Only listen for requests once DB is connected successfully
mongoose.connection.once("open", () => {
  console.log(`Successfully Connected to MongoDB`);
  //Start server
  app.listen(PORT, () => {
    console.log(`Server is listening on http://${ip.address()}:${PORT}`);
  });
});
