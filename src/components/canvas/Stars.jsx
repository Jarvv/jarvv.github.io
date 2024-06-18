import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import React from 'react'

const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(3500), { radius: 1 }))

    useFrame((state, delta) => {
        if (!ref.current) return

        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        <group>
            <Points ref={ref} positions={sphere} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#ffa0e0'
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className='w-full h-full top-0 left-0 fixed inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
