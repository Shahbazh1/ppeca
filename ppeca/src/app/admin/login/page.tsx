// app/admin/login/page.tsx
"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await signIn("credentials", {
      password,
      redirect: false,
    })

    setLoading(false)

    if (res?.error) {
      setError("Wrong password")
    } else {
      router.push("/admin")
      router.refresh()
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Admin Login
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Enter your password to access the admin dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          {error && (
            <div className="rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}