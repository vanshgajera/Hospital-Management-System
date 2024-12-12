import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Patient } from "../models/patient.models.js";

// Create a patient
export const createPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(new ApiResponse(201, patient, "Patient created successfully"));
});

// Get all patients
export const getAllPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find().populate("admittedIn");
  res.status(200).json(new ApiResponse(200, patients, "Patients fetched successfully"));
});

// Get a patient by ID
export const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id).populate("admittedIn");
  if (!patient) {
    throw new ApiError(404, "Patient not found");
  }
  res.status(200).json(new ApiResponse(200, patient, "Patient fetched successfully"));
});

// Update a patient
export const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!patient) {
    throw new ApiError(404, "Patient not found");
  }
  res.status(200).json(new ApiResponse(200, patient, "Patient updated successfully"));
});

// Delete a patient
export const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  if (!patient) {
    throw new ApiError(404, "Patient not found");
  }
  res.status(200).json(new ApiResponse(200, null, "Patient deleted successfully"));
});
