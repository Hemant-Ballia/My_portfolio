import mongoose from "mongoose";

const connectDB = async () => {
  // Agar pehle se connected hai toh wapas connect mat karo
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB Connected Successfully! 🚀");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error);
  }
};

// Ye sabse important line thi jo miss ho gayi thi shayad
export default connectDB;