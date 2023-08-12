"use client"
import React from 'react'
import TestimonialSlider from '../components/TestimonialSlider'
import { motion } from 'framer-motion'
import { fadeIn } from '../components/variant'


const page = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
            <motion.h2
            variants={fadeIn('up', 0.3)}
            initial = 'hidden'
            animate = 'show'
            exit={'hidden'}
             className='h2 mb-8 xl:mb-0'>
                What clients <span className=' text-accent'>say.</span>
            </motion.h2>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial = 'hidden'
            animate = 'show'
            exit={'hidden'}
            >
                <TestimonialSlider />
            </motion.div>
        </div>
    </div>
  )
}

export default page