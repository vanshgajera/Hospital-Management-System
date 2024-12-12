import express from "express";
import {
  createMedicalRecord,
  getAllMedicalRecords,
  getMedicalRecordById,
  updateMedicalRecord,
  deleteMedicalRecord,
} from "../controllers/medicalrecord.controllers.js";

const router = express.Router();

// Define routes
router.route("/").post(createMedicalRecord); // Create a medical record
router.route("/").get (getAllMedicalRecords); // Get all medical records
router.route("/:id").get (getMedicalRecordById); // Get a medical record by ID
router.route("/:id").put (updateMedicalRecord); // Update a medical record
router.route("/:id").delete (deleteMedicalRecord); // Delete a medical record

export default router;
