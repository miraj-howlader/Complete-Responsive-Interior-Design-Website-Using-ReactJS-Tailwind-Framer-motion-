import React from 'react'

import Logo from '../assets/logo.png'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '../utilits/animate'

const Footer = () => {
  return (
    <motion.footer
    variants={SlideLeft(0.4)}
    initial='initial'
    animate='animate'
    >
        <div className="container py-11">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info section  */}
                <div>
                    <div className=' flex items-center space-x-3'>
                        <img src={Logo} alt="" className=' w-10'/>
                        <p className=' text-2xl font-semibold'>Interior</p>
                      
                    </div>
                    <p className=' text-gray-500 mt-3'>Raybazar Mohammadpur Dhaka, Bangladesh</p>
                    <p className=' text-gray-500 mt-3'>@ 2024 ICT All righs reserved</p>
                </div>
                {/* Footer link */}
                <div className=' grid grid-cols-2 gap-3'>
                    <div className=' space-y-4'>
                        <h1 className=' text-xl font-semibold'>About us</h1>
                       <ul className=' text-sm font-semibold cursor-pointer space-y-4'>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Designer</a></li>
                        <li><a href="#">Craftmanship</a></li>
                        <li><a href="#">Sustainability</a></li>
                       </ul>
                    </div>
                    <div className=' space-y-4'>
                        <h1 className=' text-xl font-semibold'>Support</h1>
                       <ul className='font-semibold cursor-pointer text-sm space-y-4'>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Care Guide</a></li>
                        <li><a href="#">Guaranty</a></li>
                       </ul>
                    </div>
                   
                  

                </div>
                {/* Contact section  */}
                <div className=' space-y-4'>
                        <h1 className=' text-xl font-semibold'>Contact us</h1>
                       <ul className=' text-sm space-y-4'>
                        <li className=' flex items-center space-x-3'>
                            <span><FaPhone/></span>
                            <a href="#">+4595 9394 934</a></li>
                        <li className=' flex items-center space-x-3'>
                            <span><FaEnvelope/></span>
                            <a href="#">mirajhowlader9999@gmail.com</a></li>
                        
                      
                       </ul>
                    </div>

            </div>

           <div className=' mt-4'>
           <p className=' text-center text-sm font-semibold mt-6 pt-4
            
            border-t-2'>&copy; 2024 All Rights Reserved.</p>
           </div>

        </div>
      
    </motion.footer>
  )
}

export default Footer
