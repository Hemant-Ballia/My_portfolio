import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const Resume = mongoose.models.Resume || mongoose.model("Resume", resumeSchema);

export default Resume;