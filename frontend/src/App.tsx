import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { WordCloud3D } from "./components/WordCloud3D"

function App() {
  const [url, setUrl] = useState("https://www.bbc.com/news")
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function analyze() {
    setLoading(true)
    setWords([])

    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })

    const data = await res.json()
    setWords(data.words)
    setLoading(false)
  }

  return (
    <div
      style={{
        width: "100vw",   // full viewport width
        height: "100vh",  // full viewport height
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
        >
          Analyze
        </button>
        {loading && <span style={{ marginLeft: 10 }}>Loading...</span>}
      </div>

      {/* 3D Word Cloud */}
      <div
        style={{
          flex: 1,
          width: "100%",           // take full width
          display: "flex",
          justifyContent: "center", // center horizontally
          alignItems: "center",     // center vertically
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8] }}
          style={{ width: "100%", height: "100%" }} // fill the div
        >
          {words.length > 0 && <WordCloud3D words={words} />}
        </Canvas>
      </div>
    </div>
  )
}

export default App
