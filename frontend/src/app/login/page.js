"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">

      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-violet-700 flex-col justify-between p-12">
        <div className="text-white text-2xl font-bold tracking-tight">⬡ Profiler</div>
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            Your profile,<br /><em className="not-italic text-violet-200">beautifully</em><br />organised.
          </h1>
          <p className="text-violet-200 text-lg">
            Manage your identity, skills, and account settings — all in one place.
          </p>
        </div>
        <p className="text-violet-300 text-sm">© 2026 Profiler</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm">

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome back.</h2>
          <p className="text-gray-500 mb-8">Sign in to continue to your profile.</p>

          {/* Error message slot — show/hide as needed */}
          {/* <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
            ⚠ Invalid username or password.
          </div> */}

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                placeholder="your_username"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <button
              type="button"
              className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Sign in →
            </button>

          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            No account?{" "}
            <a href="/register" className="text-violet-700 font-medium hover:underline">
              Create one
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}
