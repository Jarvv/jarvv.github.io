import { Suspense } from "react";
import {Link} from "react-router-dom";

import styles from './Preloader.module.scss'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { Reflector, CameraShake, OrbitControls, useTexture, Text } from '@react-three/drei'
import { useParams } from 'react-router-dom';

import Pyramid from '../../three/Pyramid.jsx';
import Caption from "../../three/Caption";


const Preloader = () => {
    return (
        <>
            <group position={[-2, 0, 0]}>
                <group position={[0, 0.8, 0]}>
                    <Caption>
                        About
                    </Caption>
                </group>
                <Pyramid  scale={0.5} linkTo="/about" />
            </group>
            
            <group position={[0, 0, 0]}>
                <group position={[0, 0.8, 0]}>
                    <Caption>
                        Unity AR
                    </Caption>
                </group>
                <Pyramid  scale={0.5} linkTo="/unityar" />
            </group>
          
            <group position={[2, 0, 0]}>
                <group position={[0, 0.8, 0]}>
                    <Caption>
                        WebAR
                    </Caption>
                </group>
                <Pyramid  scale={0.5} linkTo="/webar" />
            </group>
        </>
    )
}

export default Preloader;