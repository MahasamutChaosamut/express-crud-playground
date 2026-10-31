import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, patients!" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Patient ID: ${req.params.id}` });
});
export default router;
