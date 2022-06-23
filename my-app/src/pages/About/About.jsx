import React from 'react'


import Pyramid from '../../three/Pyramid.jsx';
import Ground from '../../three/Ground.jsx';
import Caption from '../../three/Caption.jsx';


const About = () => {
    return (
        <>
            <group position={[0, 3, 0]}>
                <Caption>
                    {
                    `
                    Hi I’m James Harvey, an Augmented Reality Developer.
                    \n
                    I love programming for frameworks such as Unity and 8thWall, 
                    seamlessly blending real and virtual environments connecting 
                    people to thier world around them through the use of AR. As well as
                    creating engaing WebGL experiences within websites using Three.js. 
                    This site is built with React and React-three-fibre.
                    \n
                    Feel free to contact me using the links below.
                    `
                    }
                </Caption>
            </group>
            <Pyramid position={[0, 0, 0]} scale={0.5} linkTo={"/"} />
        </>
    )
}

export default About;