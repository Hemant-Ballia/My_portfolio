import { NextResponse } from "next/server";
import connectDB from "@/utils/db"; 
import Project from "@/models/Project";

// Yahan params ko Promise type diya hai (Next.js 15 Rule)
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Pehle params ko await karke id nikalni hogi
    const { id } = await params; 

    await connectDB();
    
    // Ab 'id' variable ka use karke MongoDB se delete karo
    const deletedProject = await Project.findByIdAndDelete(id);
    
    if (!deletedProject) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, message: "Project deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ success: false, error: "Error deleting project" }, { status: 400 });
  }
}