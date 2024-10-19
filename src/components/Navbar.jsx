import React, { useState } from 'react'

import Logo from '../assets/logo.png'

import { MdMenu } from 'react-icons/md'
import MobileNav from './MobileNav'
import { motion } from 'framer-motion'
import { SlideUp } from '../utilits/animate'
const NavLink = [
    {
        id:1,
        title:'Home',
        link:'#'
    },
    {
        id:2,
        title:'About',
        link:'#'
    },
    {
        id:3,
        title:'Services',
        link:'#'
    },
    {
        id:4,
        title:'Blog',
        link:'#'
    },
    {
        id:5,
        title:'Contact',
        link:'#'
    },
]
const Navbar = () => {
    const [isOpen,setIsOpen]= useState(false)
  return (
    <>
    <motion.div
    initial={{y:-100}}
    animate={{y:0}}
    transition={{duration:0.5}}
     className="container py-3 flex justify-between items-center">
        {/* Logo section  */}
        <div  className=' flex items-center gap-3'>
        <img src={Logo} className=' w-10' alt="" />
         <span className=' text-2xl font-bold'>Interior</span>
        </div>
        {/* Link section  */}
        <div className='hidden lg:flex
          '>
           <ul className='gap-5 flex flex-col sm:flex-row'>
           {
                NavLink.map((item)=>{
                    return <div
                     key={item.id}>
                        <a
                        className=' hover:text-orange-500 transition-all duration-300'
                         href={item.link}>{item.title}</a>
                    </div>
                })
            }
           </ul>
        </div>
        {/* Button section  */}
       <div className='flex gap-4'>
       <div className='primary-btn  '>
            <button>Sign In</button>
        </div>
        <div className=' primary-btn  hover:bg-blue-700 '>
            <button>Register</button>
        </div>
       </div>
        {/* mobile menu  */}
        <div className=' lg:hidden cursor-pointer'
        onClick={()=>setIsOpen(!isOpen)}>
            <MdMenu className=' text-3xl'/>
        </div>
    </motion.div>
      <MobileNav isOpen={isOpen}/>
    </>
  )
}

export default Navbar
