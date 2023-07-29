import express from "express";
import categoriesController from "../controllers/categoryController.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  return categoriesController.handleGetCategories(req, res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return categoriesController.handleNotAuthorized(req, res);
});

router.post("/", (req, res) => {
  return categoriesController.handleNotAuthorized(req, res);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  return categoriesController.handleNotAuthorized(req, res);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return categoriesController.handleNotAuthorized(req, res);
});

export default router;
