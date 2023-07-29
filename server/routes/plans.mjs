import express from "express";
import planController from "../controllers/planController.mjs";
const router = express.Router();

router.get("/", (req, res) => {
  return planController.handleGetPlans(req, res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return planController.handleGetPlan(req, res, id);
});

router.post("/", (req, res) => {
  return planController.handleNewPlan(req, res);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  return planController.handleUpdatePlan(req, res, id);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return planController.handleDeletePlan(req, res, id);
});

export default router;
