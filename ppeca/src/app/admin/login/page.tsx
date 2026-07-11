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
    <div style={{ maxWidth: 320, margin: "100px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 16 }}>Admin login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8, boxSizing: "border-box" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 8, cursor: "pointer" }}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
        {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}
      </form>
    </div>
  )
}