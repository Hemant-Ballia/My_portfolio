import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

// Ye check karna zaroori hai ki model pehle se toh nahi bana hua
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;