import React from 'react'

const MobileNav = ({isOpen}) => {
  return isOpen && (
    <div className='  bg-orange-700 text-white font-semibold space-y-7 py-6 '>
        <div className=' lg:hidden flex flex-col justify-center gap-6 items-center'>
            <ul className=' space-y-8'>
                <li className=' cursor-pointer gap-5 hover:text-gray-500 transition-all duration-300'>Home</li> 
                <li className=' cursor-pointer gap-5 hover:text-gray-500 transition-all duration-300'>About</li> 
                <li className=' cursor-pointer gap-5 hover:text-gray-500 transition-all duration-300'>Services</li> 
                <li className=' cursor-pointer gap-5 hover:text-gray-500 transition-all duration-300'>Blog</li>
                <li className=' cursor-pointer gap-5 hover:text-gray-500 transition-all duration-300'>Contact</li>          
            </ul>
        </div>
    </div>
  )
}

export default MobileNav
