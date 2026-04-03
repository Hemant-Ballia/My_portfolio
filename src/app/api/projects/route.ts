import { NextResponse } from "next/server";
import connectDB from "@/utils/db"; 
import Project from "@/models/Project";

// 🚀 Ye line sabse important hai: Ye Next.js ko cache karne se rokti hai
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }); 
    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Error fetching projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json(); 
    const newProject = await Project.create(body);
    
    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Error creating project" }, { status: 400 });
  }
}