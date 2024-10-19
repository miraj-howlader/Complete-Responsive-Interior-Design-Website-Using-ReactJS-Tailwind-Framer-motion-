import React from 'react'
import { delay, motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '../utilits/animate'
const testimonaiData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Director',
    img: 'https://picsum.photos/200/200',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, praesentium odio. Voluptatibus optio officiis, modi corporis rem debitis nemo sapiente accusantium beatae ullam illo mollitia.',
     delay:0.2
  },
  {
    id: 2,
    name: 'Alex',
    designation: 'Diginar',
    img: 'https://picsum.photos/400/400',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, praesentium odio. Voluptatibus optio officiis, modi corporis rem debitis nemo sapiente accusantium beatae ullam illo mollitia.',
    delay:0.2
  },
  {
    id: 3,
    name: 'George',
    designation: 'Manager',
    img: 'https://picsum.photos/600/600',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, praesentium odio. Voluptatibus optio officiis, modi corporis rem debitis nemo sapiente accusantium beatae ullam illo mollitia.',
    delay:0.2
  }
]
const Testimonial = () => {
  return (
    <div className=' py-14'>
      {/* Header section  */}
      <div className=' space-y-4 text-center max-w-[550px] mx-auto mb-8'>
        <motion.h1
          variants={SlideLeft(0.2)}
          initial='initial'
          animate='animate'
          className=' text-4xl font-bold font-serif'>Words from our
          customers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.2)}
          initial='initial'
          animate='animate'
          className=' text-gray-500 text-sm max-w-[350px]
         mx-auto'>Bring your dream home to life with one-on-one design help &
          picked products
        </motion.p>
      </div>
      {/* testimonai card  */}
      <div className=' bg-black p-12'>
        <div className=' container grid grid-cols-1 md:grid-cols-3 gap-10'>
          {
            testimonaiData.map((item) => {
              return <motion.div
              variants={SlideLeft(item.delay)}
          initial='initial'
          animate='animate'
               key={item.id} className=' border-[1px]
                 border-gray-500 p-4 text-white group hover:bg-white
                  hover:text-black transition-all duration-500'>
                {/* upper section  */}
                <div className=' flex flex-row items-center gap-5'>
                  <img src={item.img} alt=""
                    className=' w-[100px] rounded-full' />
                  <div>
                    <h1 className=' text-2xl font-bold '>{item.name}</h1>
                    <p className='text-gray-500 text-xs'>{item.designation}</p>
                    <div className=' flex text-xs mt-2'>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* bottom section  */}
                <div className=' mt-5 border-t-2 border-gray-500/25 pt-5'>
                  <p className=' text-sm text-gray-500'>{item.text}</p>
                </div>
              </motion.div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial
