import React from 'react'
import BannerImg2 from '../assets/banner2.png'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '../utilits/animate'
const Banner2 = () => {
  return (
    <div>
        <div className="container py-14">
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
               
                {/* text section  */}
                <div className=' space-y-5 flex justify-center flex-col'>
                    <motion.h1
                      variants={SlideUp(0.2)}
                      initial='initial'
                      whileInView='animate'
                     className='  text-3xl font-bold'> 
                        Simplay way to make stylish living room
                    </motion.h1>
                    <motion.p
                      variants={SlideLeft(0.2)}
                      initial='initial'
                      whileInView='animate'
                     className='   text-gray-500 text-sm leading-6'>dolor sit amet, consectetur adipisicing elit. Atque suscipit ipsa impedit corporis ullam asperiores, ratione voluptates inventore! Laborum, iure.
                    Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit ipsa impedit corporis ullam asperiores, ratione voluptates inventore! Laborum, iure.</motion.p>
                  <div className=' flex gap-3'>
                    <motion.div
                      variants={SlideUp(0.2)}
                      initial='initial'
                      whileInView='animate'
                     className=' max-w-[100px] space-y-2'>
                        <p className=' text-3xl font-bold font-serif'>15</p>
                        <p className=' text-gray-500'>Years of Experience</p>
                    </motion.div>
                    <motion.div
                      variants={SlideUp(0.2)}
                      initial='initial'
                      whileInView='animate'
                     className=' max-w-[100px] space-y-2'>
                        <p className=' text-3xl font-bold font-serif'>350</p>
                        <p className=' text-gray-500'>Happy Clients</p>
                    </motion.div>
                    <motion.div
                      variants={SlideUp(0.2)}
                      initial='initial'
                      whileInView='animate'
                     className=' max-w-[100px] space-y-2'>
                        <p className=' text-3xl font-bold font-serif'>34</p>
                        <p className=' text-gray-500'>Award Gained</p>
                    </motion.div>
                  </div>
                  <div className=' '>
                  <motion.button
                    variants={SlideLeft(0.2)}
                    initial='initial'
                    whileInView='animate'
                   className=' flex flex-col items-center justify-center primary-btn w-[170px] '>Contact Us</motion.button>

                  </div>
                </div>
                 {/* Image section  */}
                 <div  className=' flex flex-col justify-center items-center'>
                    <motion.img
                      initial={{x:100, opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:0.5, delay:0.5}}
                     src={BannerImg2} alt=""
                    className=' w-[95%] md:w-full mx-auto' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Banner2
