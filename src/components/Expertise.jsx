import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import {fadeIn , textVariant} from '../utils/motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { technologies } from '../constants'

const TechnologyCard = ({index,name ,icon}) =>{
    return (
        <Tilt className="xs:w-[180px] w-full">
        <motion.div
            variants={fadeIn("left","spring",0.5*index,0.75)}
            className="w-full violet-gradient p-[1px] rounded-[20px] "
        >
            <div 
            options={{
                max:25,
                scale:1,
                speed:550,

            }}
            className=' bg-black rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col '
            >
            <img src={icon} alt={name} className=" w-16 h-16 object-contain"/>
            <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
            </div>
        </motion.div>
        </Tilt>
    )
}

const Expertise = () => {

  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Expertise</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <div className='mt-20 flex flex-wrap gap-10'>
            {technologies.map((technology, index)=>(
            <TechnologyCard key={technology.title} index={index} {...technology}/>
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Expertise,'')
