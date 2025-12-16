import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { WordCloud3D } from "./components/WordCloud3D"

function App() {
  const [url, setUrl] = useState("https://www.bbc.com/news")
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function analyze() {
    setLoading(true)

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
    <div style={{ height: "100vh" }}>
      <div style={{ padding: 10 }}>
        <input
          style={{ width: 400 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={analyze} style={{ marginLeft: 10 }}>
          Analyze
        </button>
        {loading && <span style={{ marginLeft: 10 }}>Loading...</span>}
      </div>

      <Canvas camera={{ position: [0, 0, 8] }}>
        {words.length > 0 && <WordCloud3D words={words} />}
      </Canvas>
    </div>
  )
}

export default App
