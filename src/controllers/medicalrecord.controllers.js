import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { MedicalRecord } from "../models/medical_record.models.js";

// Create a new medical record
export const createMedicalRecord = asyncHandler(async (req, res) => {
  const medicalRecord = await MedicalRecord.create(req.body);
  res.status(201).json(new ApiResponse(201, medicalRecord, "Medical record created successfully"));
});

// Get all medical records
export const getAllMedicalRecords = asyncHandler(async (req, res) => {
  const medicalRecords = await MedicalRecord.find()
    .populate("doctor", "name")
    .populate("patient", "name age");
  res.status(200).json(new ApiResponse(200, medicalRecords, "Medical records fetched successfully"));
});

// Get a specific medical record by ID
export const getMedicalRecordById = asyncHandler(async (req, res) => {
  const medicalRecord = await MedicalRecord.findById(req.params.id)
    .populate("doctor", "name")
    .populate("patient", "name age");
  if (!medicalRecord) {
    throw new ApiError(404, "Medical record not found");
  }
  res.status(200).json(new ApiResponse(200, medicalRecord, "Medical record fetched successfully"));
});

// Update a medical record
export const updateMedicalRecord = asyncHandler(async (req, res) => {
  const medicalRecord = await MedicalRecord.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!medicalRecord) {
    throw new ApiError(404, "Medical record not found");
  }
  res.status(200).json(new ApiResponse(200, medicalRecord, "Medical record updated successfully"));
});

// Delete a medical record
export const deleteMedicalRecord = asyncHandler(async (req, res) => {
  const medicalRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
  if (!medicalRecord) {
    throw new ApiError(404, "Medical record not found");
  }
  res.status(200).json(new ApiResponse(200, null, "Medical record deleted successfully"));
});
