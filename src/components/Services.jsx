import React from 'react'
import { FaVectorSquare } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
import { BiSolidDollarCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '../utilits/animate'

const ServicesData = [
    {
        id:1,
        title:'Luxury Facilities',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis!',
        icons:<FaVectorSquare/>,
        link:'#',
        delay:0.2
    },
    {
        id:2,
        title:'Affordable Prices',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis!',
        icons:<FaPenToSquare/>,
        link:'#',
        delay:0.4
    },
    {
        id:3,
        title:'Quality Products',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis!',
        icons:<BiSolidDollarCircle/>,
        link:'#',
        delay:0.6
    }
]
const Services = () => {
  return (
    <>
    <div className="container py-20">
      {/* heading sesction  */}
      <div className=' space-y-2 text-center max-w-[350px] mx-auto mb-8'>
        <motion.h1
        variants={SlideUp(0.2)}
        initial='initial'
        whileInView={'animate'} className=' text-3xl font-bold font-serif'>What we provide</motion.h1>
        <motion.p
        variants={SlideUp(0.4)}
        initial='initial'
        whileInView={'animate'}
         className=' text-gray-500 text-sm'>Bring your dream home to life with one-on-one design help &
           picked products
        </motion.p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card section  */}
          {
            ServicesData.map((item)=>{
                return <motion.div
                variants={SlideUp(item.delay)}
                initial='initial'
                whileInView={'animate'}
                 key={item.id}
                className=' space-y-4 border-[1px] border-black/30
                 p-6 hover:bg-black hover:text-white transition-all
                  duration-500 hover:shadow-2xl'
                >
                    <span className=' inline-block text-xl
                     border-[1px] border-black rounded-full p-3'>{item.icons}</span>
                    <p className=' text-2xl font-bold'>{item.title}</p>
                    <p className=' hover:text-white text-gray-500 text-xs'>{item.desc}</p>
                    <a className=' inline-block border-b border-black' href={item.link}>Learn More</a>
                </motion.div>
            })
          }
        </div>
    </div>
    </>
  )
}

export default Services
