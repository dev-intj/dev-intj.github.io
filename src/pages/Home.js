import { hot } from 'react-hot-loader/root'
import Skeleton from 'react-loading-skeleton'
import Layout from '../components/layout'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { WaveMaterial } from '../utils/WaveMaterial'

function ShaderPlane() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1, 16, 16]} />
      {/* We use the materials module 🔑 to allow HMR replace */}
      <waveMaterial ref={ref} key={WaveMaterial.key} colorStart="pink" colorEnd="white" />
    </mesh>
  )
}

export default function Home() {
  return (
    <Layout>
      <Canvas dpr={[1, 2]}>
        <ShaderPlane />
      </Canvas>
    </Layout>
  )
}
