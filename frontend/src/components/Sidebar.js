"use client";

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-950 flex flex-col">

      {/* Brand */}
      <div className="px-6 py-6 border-b border-gray-800">
        <span className="text-white text-xl font-bold tracking-tight">⬡ Profiler</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">

        <a href="/profile"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-violet-700 text-white text-sm font-medium">
          <span>◈</span> Profile
        </a>

        <a href="/edit-profile"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition-colors">
          <span>✦</span> Edit Profile
        </a>

        <a href="/change-password"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition-colors">
          <span>⬡</span> Change Password
        </a>

      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-800">
        <button
          type="button"
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition-colors"
        >
          <span>→</span> Sign out
        </button>
      </div>

    </aside>
  );
}
