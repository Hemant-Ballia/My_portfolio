"use client"; 

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [pinError, setPinError] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [projectsList, setProjectsList] = useState<any[]>([]);
  
  // Resume States
  const [resumeLinkInput, setResumeLinkInput] = useState("");
  const [currentResume, setCurrentResume] = useState<string | null>(null);
  const [resumeMessage, setResumeMessage] = useState("");
  
  const [formData, setFormData] = useState({
    title: "", description: "", techStack: "", imageUrl: "", githubUrl: "", liveUrl: "",
  });

  useEffect(() => {
    if (isUnlocked) {
      fetchExistingProjects();
      fetchCurrentResume();
    }
  }, [isUnlocked]);

  const fetchExistingProjects = async () => {
    try {
      const res = await fetch(`/api/projects?t=${new Date().getTime()}`);
      const result = await res.json();
      if (result.success) setProjectsList(result.data);
    } catch (error) { console.error(error); }
  };

  const fetchCurrentResume = async () => {
    try {
      const res = await fetch(`/api/resume?t=${new Date().getTime()}`);
      const result = await res.json();
      if (result.success && result.data) {
        setCurrentResume(result.data.link);
      } else {
        setCurrentResume(null);
      }
    } catch (error) { console.error(error); }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode === "H!09140801430bh") { 
      setIsUnlocked(true); setPinError("");
    } else {
      setPinError("❌ Wrong Password! Try again.");
    }
  };

  // Projects logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setMessage("");
    const techArray = formData.techStack.split(",").map((tech) => tech.trim());
    const projectData = { ...formData, techStack: techArray };

    try {
      const res = await fetch("/api/projects", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(projectData),
      });
      if (res.ok) {
        setMessage("✅ Project Added Successfully!");
        setFormData({ title: "", description: "", techStack: "", imageUrl: "", githubUrl: "", liveUrl: "" });
        fetchExistingProjects();
      } else { setMessage("❌ Error adding project."); }
    } catch (error) { setMessage("❌ Something went wrong."); } 
    finally { setLoading(false); }
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) { fetchExistingProjects(); } 
      else { alert("❌ Failed to delete project."); }
    } catch (error) { alert("❌ Error deleting project."); }
  };

  // Resume logic
  const handleSaveResume = async (e: React.FormEvent) => {
    e.preventDefault();
    setResumeMessage("");
    try {
      const res = await fetch("/api/resume", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ link: resumeLinkInput }),
      });
      if (res.ok) {
        setResumeMessage("✅ Resume Updated!");
        setResumeLinkInput("");
        fetchCurrentResume();
      } else { setResumeMessage("❌ Error saving resume."); }
    } catch (error) { setResumeMessage("❌ Error."); }
  };

  const handleDeleteResume = async () => {
    if (!window.confirm("Are you sure you want to delete your resume?")) return;
    try {
      const res = await fetch(`/api/resume`, { method: "DELETE" });
      if (res.ok) { fetchCurrentResume(); setResumeMessage("🗑️ Resume Deleted!"); }
    } catch (error) { alert("Error deleting resume."); }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">🔒 Admin Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="password" placeholder="Enter Password" value={pinCode} onChange={(e) => setPinCode(e.target.value)} className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-center focus:border-blue-500 outline-none" />
            {pinError && <p className="text-red-400 text-sm text-center">{pinError}</p>}
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">Unlock Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT SIDE: ADD PROJECT & RESUME */}
        <div className="space-y-8">
          
          {/* 1. Manage Resume (Sabse upar rakha hai) */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
            <h1 className="text-2xl font-bold mb-4 text-purple-500">📄 Manage Resume</h1>
            {resumeMessage && <div className="p-2 mb-3 text-sm bg-gray-800 rounded-md text-center text-green-400">{resumeMessage}</div>}
            
            {currentResume ? (
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-3">
                <p className="text-sm text-gray-400">Current Resume Link Active ✅</p>
                <div className="flex gap-2">
                  <a href={currentResume} target="_blank" rel="noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm">View Resume</a>
                  <button onClick={handleDeleteResume} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold">Delete</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveResume} className="flex gap-2">
                <input type="url" placeholder="Paste Google Drive/PDF link here" value={resumeLinkInput} onChange={(e) => setResumeLinkInput(e.target.value)} required className="flex-1 p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500" />
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 rounded-lg">Save</button>
              </form>
            )}
          </div>

          {/* 2. Add Project */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
            <h1 className="text-2xl font-bold mb-6 text-blue-500">➕ Add New Project</h1>
            {message && <div className={`p-3 mb-4 rounded-lg font-medium text-sm ${message.includes("✅") ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{message}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required rows={3} className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              <input type="text" name="techStack" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={handleChange} required className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              <div className="flex gap-2">
                <input type="text" name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} onChange={handleChange} className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
                <input type="text" name="liveUrl" placeholder="Live URL" value={formData.liveUrl} onChange={handleChange} className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg mt-2">{loading ? "Adding..." : "Save Project"}</button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE: DELETE PROJECTS LIST */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
          <h1 className="text-2xl font-bold mb-6 text-red-500">🗑️ Manage Projects</h1>
          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {projectsList.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">No projects found.</p>
            ) : (
              projectsList.map((proj) => (
                <div key={proj._id} className="bg-gray-800 p-3 rounded-lg flex justify-between items-center border border-gray-700">
                  <div>
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                    <p className="text-xs text-gray-400 truncate w-40">{proj.techStack.join(", ")}</p>
                  </div>
                  <button onClick={() => handleDeleteProject(proj._id)} className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors">Delete</button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}