import { Text, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

type Word = {
  word: string
  weight: number
}

// Helper: generate a random position in a sphere
function randomPosition(radius: number) {
  const phi = Math.acos(2 * Math.random() - 1)
  const theta = 2 * Math.PI * Math.random()
  const r = radius * (0.85 + 0.15 * Math.random()) // slightly varied distance
  const x = r * Math.sin(phi) * Math.cos(theta)
  const y = r * Math.sin(phi) * Math.sin(theta)
  const z = r * Math.cos(phi)
  return [x, y, z]
}

export function WordCloud3D({ words }: { words: Word[] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x += 0.001
    }
  })

  // Adjusted radius for moderate spacing
  const baseRadius = 4.5

  return (
    <>
      <OrbitControls />
      <group ref={groupRef}>
        {words.map((w, i) => {
          const [x, y, z] = randomPosition(baseRadius + w.weight)
          const hue = (w.weight * 200 + Math.random() * 60) % 360
          const fontSize = 0.3 + w.weight * 2

          return (
            <Text
              key={i}
              position={[x, y, z]}
              fontSize={fontSize}
              color={`hsl(${hue}, 80%, 55%)`}
              anchorX="center"
              anchorY="middle"
            >
              {w.word}
            </Text>
          )
        })}
      </group>
    </>
  )
}
