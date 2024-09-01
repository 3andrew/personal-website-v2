'use client'

import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-screen">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
          
        </Canvas>

      </div>
      <div>
        <head>
          <title>Andrew Lin</title>
          <meta name="description" content="personal website" />
          <link rel="icon" href="/favicon.ico" />
        </head>

        <div className="bg-zinc-900 leading-relaxed text-slate-400 antialiased selection:bg-violet-300 selection:text-violet-900">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
