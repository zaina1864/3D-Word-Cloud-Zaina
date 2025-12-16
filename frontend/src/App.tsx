import { useState } from "react"

function App() {
  const [url, setUrl] = useState("https://www.bbc.com/news")
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  async function analyze() {
    setLoading(true)
    setResult(null)

    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })

    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>3D Word Cloud</h1>

      <input
        style={{ width: "400px" }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={analyze} style={{ marginLeft: 10 }}>
        Analyze
      </button>

      {loading && <p>Loading...</p>}

     {result && (
        <ul style={{ marginTop: 20 }}>
          {result.words.map((w: any, i: number) => (
            <li key={i}>
              {w.word} ({w.weight.toFixed(2)})
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default App
