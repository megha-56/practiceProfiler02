"use client";
import Sidebar from "../../components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-10">

        {/* Header */}
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1">Dashboard</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">My Profile</h1>
        <p className="text-gray-500 mb-8">Your personal details and information.</p>

        {/* Hero card */}
        <div className="bg-white rounded-2xl p-6 flex items-center gap-6 mb-6 shadow-sm border border-gray-100">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-violet-700 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            MP
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Megha Panthi</h2>
            <p className="text-violet-600 font-medium mb-1">@meghapanthi</p>
            <p className="text-gray-500 text-sm mb-2">
              Full-stack developer in the making. Building with React, Next.js & MongoDB.
            </p>
            <p className="text-xs text-gray-400">✦ Member since June 2026</p>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">✉ Email</p>
            <p className="text-gray-800 font-medium">megha@example.com</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">☎ Phone</p>
            <p className="text-gray-800 font-medium">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">◈ Gender</p>
            <p className="text-gray-800 font-medium">Female</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-1">◷ Birthday</p>
            <p className="text-gray-800 font-medium">15 Jan 2003</p>
          </div>

        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Skills</h3>
            <span className="text-xs text-gray-400">7 listed</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "TailwindCSS", "Express.js"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-violet-50 text-violet-700 text-sm font-medium rounded-full border border-violet-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a href="/edit-profile">
            <button type="button" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
              ✦ Edit Profile
            </button>
          </a>
          <a href="/change-password">
            <button type="button" className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
              ⬡ Change Password
            </button>
          </a>
        </div>

      </main>
    </div>
  );
}
