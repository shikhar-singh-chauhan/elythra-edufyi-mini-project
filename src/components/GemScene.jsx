import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { useRef } from 'react'

function Card() {
  const ref = useRef()

  useFrame((state) => {
    const { x, y } = state.pointer
    ref.current.rotation.y += (x * 0.8 - ref.current.rotation.y) * 0.05
    ref.current.rotation.x += (-y * 0.5 - ref.current.rotation.x) * 0.05
  })

  return (
    <Float speed={2} floatIntensity={1}>
      <group ref={ref} rotation={[0, 0, 0.6]}>
        <mesh>
          <boxGeometry args={[2.2, 3.2, 0.12]} />
          <meshPhysicalMaterial color="#0f8f63" metalness={0.9} roughness={0.12} clearcoat={1} />
        </mesh>
        <mesh position={[-0.6, 0.4, 0.08]}>
          <boxGeometry args={[0.5, 0.4, 0.04]} />
          <meshStandardMaterial color="#d9c27a" metalness={1} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function Gem({ position, scale = 1 }) {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <octahedronGeometry args={[0.35]} />
        <meshPhysicalMaterial color="#1fd48a" metalness={0.6} roughness={0.05} clearcoat={1} />
      </mesh>
    </Float>
  )
}

export default function GemScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Canvas
      camera={{ position: [0, 0, isMobile ? 9 : 6], fov: 45 }}
      style={{ touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <Card />
      <Gem position={[-2.2, 1, 0]} />
      <Gem position={[2.3, 1.4, -0.5]} scale={0.8} />
      <Gem position={[-1.8, -1.5, 0.5]} scale={1.2} />
      <Gem position={[2, -1.2, 0]} scale={0.9} />
      <Environment preset="city" />
    </Canvas>
  )
}