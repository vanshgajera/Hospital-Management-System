import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controllers.js";

const router = express.Router();


router.route("/").post(createDoctor); // Create a medical record
router.route("/").get (getAllDoctors); // Get all medical records
router.route("/:id").get (getDoctorById); // Get a medical record by ID
router.route("/:id").put (updateDoctor); // Update a medical record
router.route("/:id").delete (deleteDoctor); // Delete a medical record

export default router;
