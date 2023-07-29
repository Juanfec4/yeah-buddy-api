//Dependencies
import "dotenv/config";
import express from "express";
import ip from "ip";
import mongoose from "mongoose";

//CORS
import CORS from "./middleware/corsConfig.mjs";

//Config
import connectDB from "./config/dbConnection.mjs";

//Middleware
import logger from "./middleware/morganConfig.mjs";
import rateLimiter from "./middleware/rateLimitConfig.mjs";
import errorHandler from "./middleware/errorHandler.mjs";

//Routers
import planRouter from "./routes/plans.mjs";
import exerciseRouter from "./routes/exercises.mjs";
import categoryRouter from "./routes/categories.mjs";
import bodyPartRouter from "./routes/bodyParts.mjs";

const app = express();
const PORT = 3001;

//Connect to MongoDB
connectDB();

//Middleware
app.use(CORS);
app.use(express.json());
app.use("/", logger);
app.use("/api", rateLimiter);

//Routes
app.use("/api/plans", planRouter);
app.use("/api/exercises", exerciseRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/body-parts", bodyPartRouter);

//404 & 500
app.use(errorHandler);

//Only listen for requests once DB is connected successfully
mongoose.connection.once("open", () => {
  console.log(`Successfully Connected to MongoDB`);
  //Start server
  app.listen(PORT, () => {
    console.log(`Server is listening on http://${ip.address()}:${PORT}`);
  });
});
