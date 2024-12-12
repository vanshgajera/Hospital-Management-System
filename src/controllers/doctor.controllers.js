import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Doctor } from "../models/doctor.models.js";

// Create a new doctor
export const createDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(new ApiResponse(201, doctor, "Doctor created successfully"));
});

// Get all doctors
export const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find().populate("workInHospitals", "name addressLine1");
  res.status(200).json(new ApiResponse(200, doctors, "Doctors fetched successfully"));
});

// Get a specific doctor by ID
export const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).populate("workInHospitals", "name addressLine1");
  if (!doctor) {
    throw new ApiError(404, "Doctor not found");
  }
  res.status(200).json(new ApiResponse(200, doctor, "Doctor fetched successfully"));
});

// Update a doctor
export const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!doctor) {
    throw new ApiError(404, "Doctor not found");
  }
  res.status(200).json(new ApiResponse(200, doctor, "Doctor updated successfully"));
});

// Delete a doctor
export const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  if (!doctor) {
    throw new ApiError(404, "Doctor not found");
  }
  res.status(200).json(new ApiResponse(200, null, "Doctor deleted successfully"));
});
