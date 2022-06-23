import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCallback } from 'react';
import { useLocation   } from "wouter";

function Pyramid(props) {
  const [location, setLocation] = useLocation();
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      ref.current.rotation.y += 0.01;
  })
  // Return the view, these are regular Threejs elements expressed in JSX

  const pyramidClick = useCallback((e) => {
    setLocation(props.linkTo);
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={pyramidClick}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <coneGeometry args={[1, 1.5, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Pyramid;