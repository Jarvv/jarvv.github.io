import React from 'react'
import { motion } from 'framer-motion'

import SectionWrapper from './SectionWrapper'
import { slideIn } from '../utils/motion'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
                    Get in touch
                </p>
                <h3 className='text-pink md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
                    Contact.
                </h3>

                <div className='flex flex-row align-middle justify-between mt-8'>
                    <div className='w-[50%]'>
                        <p className='sm:text-[18px] text-[14px]uppercase tracking-wider'>
                            Email Me At
                        </p>
                        <a href='mailto:james.harvey97@live.com'>
                            <p className='mt-6'>james.harvey97@live.com</p>
                        </a>
                    </div>
                    <div className='w-[50%]'>
                        <p className='sm:text-[18px] text-[14px]uppercase tracking-wider'>
                            Find Me On
                        </p>
                        <div className='flex flex-row gap-4 text-[1.5rem] text-secondary mt-4'>
                            <a href='https://www.linkedin.com/in/jamesdharvey/'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href='https://github.com/Jarvv'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')
