import React from 'react'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '../utilits/animate'
const NewsLetter = () => {
  return (
    <div className=' max-w-[500px] mx-auto space-y-5 py-14 '>
        <motion.h1
         variants={SlideLeft(0.2)}
         initial='initial'
         animate='animate'
         className=' text-3xl font-bold font-serif text-center'>Subscribe to our Newsletter</motion.h1>
      <motion.p
       variants={SlideLeft(0.2)}
       initial='initial'
       animate='animate'
        className=' max-w-[300px] mx-auto text-gray-500 text-sm text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam odit sapiente provident!</motion.p>
    <motion.form
      variants={SlideUp(0.2)}
      initial='initial'
      animate='animate'
    >
        <div className=' !mt-10 flex justify-center'>
        <input type="text" placeholder=' Enter your email'
        className='px-4 py-4 ring-1 ring-gray-300'
        />
        <button className='bg-black text-white px-4 py-4 uppercase'>Subscribe</button>
        </div>
    </motion.form>
    </div>
  )
}

export default NewsLetter
