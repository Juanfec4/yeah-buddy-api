import express from "express";
import cors from "cors";

const middleware = new express.Router();

middleware.use(
  cors({
    origin: process.env.FRONT_END_ORIGIN,
  })
);

export default middleware;
