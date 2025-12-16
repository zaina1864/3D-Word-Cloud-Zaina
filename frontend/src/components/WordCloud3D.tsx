import { Text, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

type Word = {
  word: string
  weight: number
}

export function WordCloud3D({ words }: { words: Word[] }) {
  const groupRef = useRef<THREE.Group>(null)

  // Slow rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <>
      <OrbitControls />
      <group ref={groupRef}>
        {words.map((w, i) => (
          <Text
            key={i}
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
            ]}
            fontSize={0.2 + w.weight * 1.5}
            color={`hsl(${w.weight * 200}, 70%, 60%)`}
          >
            {w.word}
          </Text>
        ))}
      </group>
    </>
  )
}
