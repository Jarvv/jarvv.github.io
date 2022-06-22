import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'

const Rig = ({ children }) => {
    const ref = useRef()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 0.5, 3.5), 0.05)
      ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    })
    return <group ref={ref}>{children}</group>
}

export default Rig;
