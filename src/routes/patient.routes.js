import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patient.controllers.js";

const router = express.Router();

router.route("/").post(createPatient); // Create a medical record
router.route("/").get (getAllPatients); // Get all medical records
router.route("/:id").get (getPatientById); // Get a medical record by ID
router.route("/:id").put (updatePatient); // Update a medical record
router.route("/:id").delete (deletePatient); // Delete a medical record

export default router;
