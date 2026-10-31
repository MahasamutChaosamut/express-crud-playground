import express from "express";
import * as controller from "../controllers/patient.controller.js";

const router = express.Router();

router.get("/", controller.getAllPatientsController);
router.get("/:id", controller.getByIdPatientController);
router.post("/", controller.createPatientController);
router.patch("/:id", controller.updatePatientController);
router.delete("/:id", controller.deletePatientController);
export default router;
