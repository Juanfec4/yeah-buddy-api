import express from "express";
import exerciseController from "../controllers/exerciseController.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  return exerciseController.handleGetExercises(req, res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return exerciseController.handleGetExercise(req, res, id);
});

router.post("/", (req, res) => {
  return exerciseController.handleNewExercise(req, res);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  return exerciseController.handleUpdateExercise(req, res, id);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return exerciseController.handleDeleteExercise(req, res, id);
});

export default router;
