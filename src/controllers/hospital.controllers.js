import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Hospital } from "../models/hospital.models.js";

// Create a hospital
export const createHospital = asyncHandler(async (req, res) => {
  const hospital = await Hospital.create(req.body);
  res.status(201).json(new ApiResponse(201, hospital, "Hospital created successfully"));
});

// Get all hospitals
export const getAllHospitals = asyncHandler(async (req, res) => {
  const hospitals = await Hospital.find();
  res.status(200).json(new ApiResponse(200, hospitals, "Hospitals fetched successfully"));
});

// Get a hospital by ID
export const getHospitalById = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.params.id);
  if (!hospital) {
    throw new ApiError(404, "Hospital not found");
  }
  res.status(200).json(new ApiResponse(200, hospital, "Hospital fetched successfully"));
});

// Update a hospital
export const updateHospital = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!hospital) {
    throw new ApiError(404, "Hospital not found");
  }
  res.status(200).json(new ApiResponse(200, hospital, "Hospital updated successfully"));
});

// Delete a hospital
export const deleteHospital = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findByIdAndDelete(req.params.id);
  if (!hospital) {
    throw new ApiError(404, "Hospital not found");
  }
  res.status(200).json(new ApiResponse(200, null, "Hospital deleted successfully"));
});
