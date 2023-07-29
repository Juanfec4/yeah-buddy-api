import express from "express";
import bodyPartsController from "../controllers/bodyPartController.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  return bodyPartsController.handleGetBodyParts(req, res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return bodyPartsController.handleNotAuthorized(req, res);
});

router.post("/", (req, res) => {
  return bodyPartsController.handleNotAuthorized(req, res);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  return bodyPartsController.handleNotAuthorized(req, res);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return bodyPartsController.handleNotAuthorized(req, res);
});

export default router;
