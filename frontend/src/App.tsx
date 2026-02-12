import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { WordCloud3D } from "./components/WordCloud3D"

function App() {
  const [url, setUrl] = useState("https://www.bbc.com/news")
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // Vite uses import.meta.env to access variables. 
  // We use the variable if it exists, otherwise fall back to localhost for local testing.
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  async function analyze() {
    setLoading(true)
    setWords([])

    try {
      // Updated fetch to use the API_BASE_URL variable
      const res = await fetch(`${API_BASE_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      const data = await res.json()
      setWords(data.words)
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Title */}
      <h1 style={{ marginTop: 20, fontFamily: "Arial", color: "#333" }}>
        3D News Word Cloud
      </h1>

      {/* Input and button */}
      <div style={{ marginTop: 10, marginBottom: 20 }}>
        <input
          style={{
            width: 400,
            padding: 8,
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={analyze}
          style={{
            marginLeft: 10,
            padding: "8px 16px",
            fontSize: 16,
            borderRadius: 5,
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* 3D Word Cloud */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8] }}
          style={{ width: "100%", height: "100%" }}
        >
          {words.length > 0 && <WordCloud3D words={words} />}
        </Canvas>
      </div>
    </div>
  )
}

export default App
