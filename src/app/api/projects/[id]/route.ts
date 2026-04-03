import { NextResponse } from "next/server";
import connectDB from "@/utils/db"; 
import Project from "@/models/Project";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const deletedProject = await Project.findByIdAndDelete(params.id);
    
    if (!deletedProject) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, message: "Project deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Error deleting project" }, { status: 400 });
  }
}