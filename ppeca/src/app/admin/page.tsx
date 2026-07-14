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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Add News
        </h1>
        <p className="text-gray-500 mb-8">
          Publish a new news article to your website.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              News Title
            </label>
            <input
              placeholder="Enter news title"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              News Description
            </label>
            <textarea
              placeholder="Write the news description..."
              value={newsDescription}
              onChange={(e) => setNewsDescription(e.target.value)}
              required
              rows={8}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              placeholder="Technology, Business, Sports..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Source URL
            </label>
            <input
              placeholder="https://example.com/news"
              value={newsUrl}
              onChange={(e) => setNewsUrl(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              News Image (optional)
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-blue-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? "Publishing..." : "Publish News"}
          </button>

          {message && (
            <div
              className={`rounded-lg p-4 text-sm font-medium ${
                message.includes("success")
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}