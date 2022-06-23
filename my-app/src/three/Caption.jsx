import React from 'react'
import { useThree } from '@react-three/fiber'
import {Text } from '@react-three/drei'

function Caption({ children }) {
    const { width } = useThree((state) => state.viewport)
    return (
      <Text
        lineHeight={1.2}
        font='./fonts/TitilliumWeb-Regular.ttf'
        fontSize={width / 80}
        material-toneMapped={false}
        textAlign="center"
        anchorX="center"
        anchorY="middle">
        {children}
      </Text>
    )
}

export default Caption;