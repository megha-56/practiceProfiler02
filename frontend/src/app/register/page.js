"use client";

export default function RegisterPage() {
  
  return (
    <div className="min-h-screen flex">

      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-violet-700 flex-col justify-between p-12">
        <div className="text-white text-2xl font-bold tracking-tight">⬡ Profiler</div>
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-4">
            Join the<br /><em className="not-italic text-violet-200">network</em><br />of builders.
          </h1>
          <p className="text-violet-200 text-lg">
            Create your profile, showcase your skills, and connect with opportunities.
          </p>
        </div>
        <p className="text-violet-300 text-sm">© 2026 Profiler</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Create account.</h2>
          <p className="text-gray-500 mb-8">Takes less than a minute.</p>

          {/* Success message slot */}
          {/* <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">
            ✓ Account created! Redirecting to login…
          </div> */}

          {/* Error message slot */}
          {/* <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
            ⚠ Username already taken.
          </div> */}

          <div className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Megha Panthi"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="meghapanthi"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Min. 8 characters"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>

            <button
              type="button"
              className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Create account →
            </button>

          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-violet-700 font-medium hover:underline">
              Sign in
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}
