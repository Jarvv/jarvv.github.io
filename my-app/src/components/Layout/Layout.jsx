import React, { useRef, useState, useEffect } from 'react'

import styles from './Layout.module.scss';
import {
    animated,
    useTransition,
    useSpring,
    useChain,
    config
  } from 'react-spring'

import ActiveLink from '../ActiveLink/ActiveLink';

const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'UnityAR', link: '/unityar' },
    { name: 'WebAR', link: '/webar' }
  ]

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  const navRef = useRef()
  const liRef = useRef()

  const springProps = useSpring({
      ref: navRef,
      config: config.default,
      from: {  opacity: 0 },
      to: { opacity: showMenu ? 1 : 0  }
    })

    const liTransitions = useTransition(
      showMenu ? menuItems : [],
      item => item.name,
      {
        ref: liRef,
        trail: 400 / menuItems.length,
        from: { opacity: 0, transform: 'translateY(20px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(20px)' }
      }
    )
  
    // On showMenu, start with nav animationm then nav items
    useChain(showMenu ? [navRef, liRef] : [liRef, navRef], [
      0,
      showMenu ? 0.4 : 0.6
    ])

    return (
        <div id={styles.page}>
            <animated.nav className={styles.menu} style={springProps}>
                <ul className={styles.list}>
                    {liTransitions.map(({ item, key, props }) => (
                        <animated.li key={key} style={props}>
                            <ActiveLink 
                              onClick={toggleMenu}
                              href={item.link}>
                                {item.name}
                            </ActiveLink>
                        </animated.li>
                    ))}
                </ul>
            </animated.nav>
            <div onClick={toggleMenu} id={styles.menuButton}/>            
            {children}       
            <div id={styles.footer}>
            </div>
            <div className={styles.rotate}></div>
        </div>
    )
}



export default Layout;