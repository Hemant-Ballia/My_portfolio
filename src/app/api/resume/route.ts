import { NextResponse } from "next/server";
import connectDB from "@/utils/db"; 
import Resume from "@/models/Resume";

export const dynamic = "force-dynamic";

// Resume Fetch karna
export async function GET() {
  try {
    await connectDB();
    const resume = await Resume.findOne().sort({ createdAt: -1 }); 
    return NextResponse.json({ success: true, data: resume }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error fetching resume" }, { status: 500 });
  }
}

// Naya Resume Add karna (Purana automatically hat jayega)
export async function POST(request: Request) {
  try {
    await connectDB();
    const { link } = await request.json(); 
    
    await Resume.deleteMany({}); // Purana delete karo
    const newResume = await Resume.create({ link }); // Naya save karo
    
    return NextResponse.json({ success: true, data: newResume }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error updating resume" }, { status: 400 });
  }
}

// Resume Delete karna
export async function DELETE() {
  try {
    await connectDB();
    await Resume.deleteMany({});
    return NextResponse.json({ success: true, message: "Resume deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error deleting resume" }, { status: 400 });
  }
}