import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
    
    diagnosis: { 
        type: String, 
        required: true 
    },
    treatment: { 
        type: String, 
        required: true 
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", 
        required: true 
    },
    patient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient", 
        required: true 
    }

}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)


