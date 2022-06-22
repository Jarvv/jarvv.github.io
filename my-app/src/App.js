import styles from './styles/global.module.scss'
import './index.css';
import { Routes, Route, BrowserRouter, Navigate, Link, useLocation } from "react-router-dom";
import { a, useSpring, useTransition } from "@react-spring/three"
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { Reflector, CameraShake, OrbitControls, useTexture, Text } from '@react-three/drei'

import Rig from './three/Rig.jsx';
import Bg from './three/Bg.jsx';
import Ground from './three/Ground.jsx';


import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Preloader from './pages/preloader/Preloader';

const ThreeRoutes = () => {
  return (
    <a.group>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Preloader/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/unityar" element={<About/>} />
          <Route exact path="/webar" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </a.group>
  )
}

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Layout>
      <div id={styles.preloader} className={hasStarted ? styles.hidden : ''} >
        <div id={styles.nameWrapper}>
            <div id={styles.name}>James Harvey</div>
            <div id={styles.description}>Augmented Reality Developer</div>
        </div>
        <div id={styles.startWrapper}>
            <div to="/intro" onClick={setHasStarted}> Start </div>
        </div>  
      </div>
      <Suspense fallback={null}>             
        <Canvas className={hasStarted ? '' : styles.hidden} camera={{ fov: 90, position: [0, 0, 5] }}>
            <Bg />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 0, 10]} />
            <Rig>
                <ThreeRoutes />
                <Ground fadeTransition/>
            </Rig>
            <CameraShake yawFrequency={0.05} pitchFrequency={0.05} rollFrequency={0.05} maxYaw={Math.PI/50} maxPitch={Math.PI/50} maxRoll={Math.PI/50}/>           
          </Canvas>
      </Suspense>
      
    </Layout>
  )
}

export default App;
