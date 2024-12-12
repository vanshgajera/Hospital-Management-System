import express from "express"
import cors from "cors"
// import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,  // Allow only this specific domain   CORS_ORIGIN = *
    credentials: true // Allow cookies/auth tokens to be sent with requests
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) // this is static to work to now this data is public inner to temp to now
// app.use(cookieParser())

//routes import
import hospitalRoutes from "./routes/hospital.routes.js";
import  PatientRoutes  from "./routes/patient.routes.js";
import  MedicalRecord  from "./routes/medical.routes.js";
import  DoctorRecord  from "./routes/doctor.routes.js";



//routes declaration
app.use("/api/v1/hospitals", hospitalRoutes);
app.use("/api/v1/patients", PatientRoutes);
app.use("/api/v1/MedicalRecord", MedicalRecord);
app.use("/api/v1/DoctorRecord", DoctorRecord);


// http://localhost:8000/api/v1/users/register

export {app} 