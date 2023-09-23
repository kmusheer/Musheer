"use client"
import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress , FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiCanva } from 'react-icons/si';
import Circles from '../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variant';
import CountUp from 'react-countup';
import Avatar1 from '../components/Avatar1';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={FaHtml5} />,
          <FaCss3 key={FaCss3} />,
          <FaJs key={FaJs} />,
          <FaReact key={FaReact} />,
          <FaNodeJs key={FaNodeJs} />,
          <FaWordpress key={FaWordpress} />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiNextdotjs key={SiNextdotjs} />,
        <SiFramer key={SiFramer} />,
        <SiAdobexd key={SiAdobexd} />,
        <SiAdobephotoshop key={SiAdobephotoshop} />,
        <SiCanva key={SiCanva} />
      ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2015 - 2016',
      },
    ],
  },
  {
    title: 'experience',
    info: [  
      {
        title: 'Information Technology Web Developer  - Wastely Aqua',
        stage: '2023 - present',
      },
      {
        title: 'Front-end web developer - Chrome Infosoft',
        stage: '2022 - 2023',
      },
      {
        title: 'Web developer - Narja Super steel (Free lancing)',
        stage: '2022-2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Certified Web Development - NetTech India, Thane, MH',
        stage: '2022',
      },
      {
        title: 'Computer Engineering - JIEMS, AKkalkuwa, MH',
        stage: '2020',
      },
      {
        title: 'Diploma in Computer Science - Jamia Polytechnice, Akkalkuwa MH',
        stage: '2017',
      },
    ],
  },
];

const Page = () => {
  const [index, setIndex] = useState(0)

  return <div className=' h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit={'hidden'}
      className="hidden xl:flex absolute bottom-0 -left-[300px] hover:-left-[150px] transition-all ease-in-out duration-500 rounded-full overflow-hidden animate-pulse hover:animate-none ">
      <Avatar1 />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className=' flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className='h2'
        >
          Innovative coding <span className='text-accent'>fosters captivating</span>  designs in web development.
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          2 years ago, I began as a web developer and also worked on some freelance projects. I have teleworked, consulted startups and collaborated on digital products for companies and consumers.
        </motion.p>

        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className=' flex md:flex md:max-w-full xl:max-w-none xl:mx-0 mb-12'>
          <div className=' flex flex-1 xl:gap-x-6'>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={2} duration={5} />+
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                Years of experince
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={3} duration={5} />
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                Satisfied Clients
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={4} duration={5} />+
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                Finished Projects
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={" "} end={""} duration={5} />
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.2] max-w-[100px]">
                {/* Finished Projects */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
             className='flex flex-col w-full xl:max-w-[48%] max-h-[480px] xl:h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => (
            <div key={itemIndex}
              className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
              onClick={() => setIndex(itemIndex)}>
              {item.title}
            </div>
          ))}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className=' flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => {
                    return (
                      <div key={iconIndex} className=' text-2xl'>
                        {icon}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

        </div>
      </motion.div>
    </div>
  </div>
};

export default Page;
