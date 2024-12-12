import express from "express";
import {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
} from "../controllers/hospital.controllers.js";

const router = express.Router();


router.route("/").post(createHospital); // Create a medical record
router.route("/").get (getAllHospitals); // Get all medical records
router.route("/:id").get (getHospitalById); // Get a medical record by ID
router.route("/:id").put (updateHospital); // Update a medical record
router.route("/:id").delete (deleteHospital); // Delete a medical record

export default router;
