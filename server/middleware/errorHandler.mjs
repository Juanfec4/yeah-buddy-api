import express from "express";

const middleware = new express.Router();

middleware.get("*", (req, res) => {
  res.status(404).json({
    message: `404: Resource Not found.`,
    image: `https://http.cat/404.jpg`,
  });
});

middleware.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: `500: Server error.`, image: `https://http.cat/500.jpg` });
});

export default middleware;
