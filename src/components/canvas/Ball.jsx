import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Decal, Float, Preload, useTexture, Environment } from '@react-three/drei'
import { Physics, useSphere } from '@react-three/cannon'

import CanvasLoader from '../Loader'

const rfs = THREE.MathUtils.randFloatSpread

const Ball = ({ position, imgUrl }) => {
    const vec = new THREE.Vector3()
    const [decal] = useTexture([imgUrl])
    const [ref, api] = useSphere(() => ({
        args: [2],
        mass: 1,
        angularDamping: 0.1,
        linearDamping: 0.65,
        position: [rfs(5), rfs(5), rfs(0)],
    }))

    useFrame((state) => {
        api.applyForce(
            vec.setFromMatrixPosition(ref.current.matrix).normalize().multiplyScalar(-40).toArray(),
            [0, 0, 0],
        )
    })

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={ref} castShadow receiveShadow scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
                <Decal
                    position={[0, 0, -1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = () => {
    return (
        <div className='h-96'>
            <Canvas
                frameloop='demand'
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ position: [0, 0, -30], fov: 35 }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.25} />
                    <directionalLight position={[0, 0, 0.05]} />
                    <Physics gravity={[0, 2, 0]} iterations={10}>
                        <Pointer />
                        <Ball imgUrl={'./textures/tech/c_sharp.png'} />
                        <Ball imgUrl={'./textures/tech/git.png'} />
                        <Ball imgUrl={'./textures/tech/reactjs.png'} />
                        <Ball imgUrl={'./textures/tech/nodejs.png'} />
                        <Ball imgUrl={'./textures/tech/tailwind.png'} />
                        <Ball imgUrl={'./textures/tech/typescript.png'} />
                        <Ball imgUrl={'./textures/tech/nextjs.png'} />
                    </Physics>
                    <Environment preset='city' />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

const Pointer = () => {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({ type: 'Kinematic', args: [2], position: [0, 0, 0] }))
    return useFrame((state) =>
        api.position.set(
            (state.mouse.x * viewport.width) / 2,
            (state.mouse.y * viewport.height) / 2,
            0,
        ),
    )
}

export default BallCanvas
