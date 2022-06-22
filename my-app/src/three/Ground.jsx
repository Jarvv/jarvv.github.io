import * as THREE from 'three'
import { Reflector, useTexture, MeshReflectorMaterial } from '@react-three/drei'
import NormalTexture from './textures/normal.jpg';
import RoughnessTexture from './textures/roughness.jpg';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Ground = (props) => {
    const normal =  useLoader(TextureLoader, NormalTexture)
    const roughness =  useLoader(TextureLoader, RoughnessTexture)


    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#111111"
            metalness={0.1}
 
          />
        </mesh>
    )
}

export default Ground;