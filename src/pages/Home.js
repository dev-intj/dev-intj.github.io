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
    <mesh scale={[width, height, 1]} position={[0,0,5]}>
      <planeGeometry args={[1, 1, 8, 8]} />
      {/* We use the materials module 🔑 to allow HMR replace */}
      <waveMaterial ref={ref} key={WaveMaterial.key} colorStart="#3AAFA9" colorEnd="#2A3166" />
    </mesh>
  )
}

function ShaderPlane2() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]} position={[0,0,2]}>
      <planeGeometry args={[1, 1, 16, 16]} />
      {/* We use the materials module 🔑 to allow HMR replace */}
      <waveMaterial ref={ref} key={WaveMaterial.key} colorStart="red" colorEnd="#2A3166" />
    </mesh>
  )
}

export default function Home() {
  return (
    <Layout>
      <div className="homepage">
        
      </div>
      <div className="wrapper-background-1">
        <Canvas dpr={[1, 2]}>
          <ShaderPlane2/>
        </Canvas>
      </div>
      <div className="wrapper-background-2">
        <Canvas dpr={[1, 2]}>
          <ShaderPlane/>
        </Canvas>
      </div>
    </Layout>
  )
}
