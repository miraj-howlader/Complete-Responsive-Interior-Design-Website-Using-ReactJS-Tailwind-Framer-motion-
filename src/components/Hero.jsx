import React from 'react'

import HeroImg from '../assets/hero.png'
import { motion } from 'framer-motion'
import { SlideUp } from '../utilits/animate'
const Hero = () => {
  return (
    <>
    <div className="container">
        <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 md:min-h-[450px]">
            {/* Texts section  */}
            <div className='flex flex-col justify-center gap-5
             md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0'>
                <motion.h1
                variants={SlideUp(0.5)}
                initial='initial'
                animate='animate'
                 className=' text-3xl font-bold'>SKETCH LUXURY <br /> INTERIOR DESIGN</motion.h1>
                <motion.p
                 variants={SlideUp(0.5)}
                 initial='initial'
                 animate='animate'
                 className=' text-sm text-gray-500'>Bring your dream to life with one-on-one desing 
                    help & hand picked products tailored to your style, space and budget
                </motion.p>
                <div className=' space-x-6'>
                    <motion.button
                     variants={SlideUp(0.8)}
                     initial='initial'
                     animate='animate'
                     className=' primary-btn  '>Get Started</motion.button>
                    <motion.button
                     variants={SlideUp(1.1)}
                     initial='initial'
                     animate='animate'
                     className=' primary-btn  hover:bg-blue-600 '>Contact us</motion.button>
                </div>
            </div>
            {/* Image section  */}
            <div className=' flex flex-col justify-center items-center'>
                <motion.img
                initial={{x:100, opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5, delay:0.5}}
                 src={HeroImg} alt="" className='object-cover md:scale-125
                  w-[80%] md:w-[400px] lg:w-[85%]
                 '/>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Hero
