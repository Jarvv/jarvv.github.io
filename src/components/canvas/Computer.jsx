import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'

const Computer = ({ open, hinge, ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('./glb/mac-draco.glb')

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-6 + Math.sin(t)) / 2.5 : -4, 0.1)
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
                </group>
            </three.group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    )
}

const ComputerCanvas = () => {
    const [open, setOpen] = useState(true)

    const props = useSpring({ open: Number(open) })

    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
            <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
            <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
                    <Computer open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
                </group>
                <Environment preset="city" />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

  export default ComputerCanvas