// src/app/admin/page.tsx
"use client"

import { useState } from "react"

export default function AdminDashboard() {
  const [newsTitle, setNewsTitle] = useState("")
  const [newsDescription, setNewsDescription] = useState("")
  const [category, setCategory] = useState("")
  const [newsUrl, setNewsUrl] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("newsTitle", newsTitle)
    formData.append("newsDescription", newsDescription)
    formData.append("category", category)
    formData.append("newsUrl", newsUrl)
    if (imageFile) formData.append("image", imageFile)

    const res = await fetch("/api/admin/news", {
      method: "POST",
      body: formData,
    })

    setLoading(false)

    if (res.ok) {
      setMessage("News published successfully.")
      setNewsTitle("")
      setNewsDescription("")
      setCategory("")
      setNewsUrl("")
      setImageFile(null)
    } else {
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: "60px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 24 }}>Add news</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="News title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          required
          style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
        />
        <textarea
          placeholder="News description"
          value={newsDescription}
          onChange={(e) => setNewsDescription(e.target.value)}
          required
          rows={8}
          style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
        />
        <input
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
        />
        <input
          placeholder="Source URL (optional)"
          value={newsUrl}
          onChange={(e) => setNewsUrl(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 12, boxSizing: "border-box" }}
        />

        <label style={{ display: "block", marginBottom: 8 }}>
          News image (optional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          style={{ marginBottom: 16 }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 10, cursor: "pointer" }}
        >
          {loading ? "Publishing..." : "Publish news"}
        </button>
        {message && <p style={{ marginTop: 12 }}>{message}</p>}
      </form>
    </div>
  )
}