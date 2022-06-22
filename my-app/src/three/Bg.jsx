import * as THREE from 'three'
import { LayerMaterial, Depth, Noise } from 'lamina'

const Bg = () => {
    return (
        <mesh scale={100} position={[0, 0, 40]}>
            <boxGeometry args={[1, 1, 1]} />
            <LayerMaterial color="#f0aed2" side={THREE.BackSide}>
                <Depth colorB="#ff8e8a" colorA="#0264d1" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
                <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
            </LayerMaterial>
        </mesh>
    )
}

export default Bg;