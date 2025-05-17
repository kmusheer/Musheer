"use client"
import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaNodeJs, FaMicrochip, FaBootstrap, FaWifi, FaDatabase, FaProjectDiagram, FaCogs, FaPuzzlePiece, FaSitemap, FaMemory, FaRedo } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiCanva, SiCplusplus, SiArduino, SiRaspberrypi, SiGit, SiGithub, SiVisualstudiocode, SiLinux, SiC, SiWindows, SiLoop, SiBootstrap, SiTailwindcss, SiBluetooth, SiInternetarchive, SiVisualstudio, SiArm } from 'react-icons/si';
import Circles from '../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variant';
import CountUp from 'react-countup';
import Avatar1 from '../components/Avatar1';
import { icons } from 'react-icons';

const aboutData = [
  // {
  //   title: 'skills',
  //   info: [
  //     {
  //       title: 'Web Development',
  //       icons: [
  //         <FaHtml5 key={FaHtml5} />,
  //         <FaCss3 key={FaCss3} />,
  //         <FaJs key={FaJs} />,
  //         <FaReact key={FaReact} />,
  //         <FaNodeJs key={FaNodeJs} />,
  //         <FaWordpress key={FaWordpress} />,
  //         <FaBootstrap key={FaBootstrap} />,
  //         <SiTailwindcss key={SiTailwindcss} />

  //       ],
  //     },
  //     {
  //       title: 'UI/UX Design',
  //       icons: [
  //         <SiNextdotjs key={SiNextdotjs} />,
  //         <SiFramer key={SiFramer} />,
  //         <SiAdobexd key={SiAdobexd} />,
  //         <SiAdobephotoshop key={SiAdobephotoshop} />,
  //         <SiCanva key={SiCanva} />
  //       ],
  //     },
  //     {
  //       title: 'Embedded Systems',
  //       icons: [
  //         <SiC key="c-lang" />,
  //         <SiCplusplus key="cpp-lang" />,
  //         // <SiArduino key="arduino" />,
  //         <SiRaspberrypi key="raspberry" />,
  //         <FaMicrochip key="microchip" />
  //         // <SiMbed key="mbed" />
  //       ],
  //     },
  //     {
  //       title: 'Networking & Protocols',
  //       icons: [
  //         <FaWifi key="wifi" />,
  //         <SiBluetooth key="bluetooth" />,
  //         <SiInternetarchive key="tcpip" />  // Representing TCP/IP
  //       ],
  //     },
  //     {
  //       title: 'Tools & Platforms',
  //       icons: [
  //         <SiGit key="git" />,
  //         <SiGithub key="github" />,
  //         <SiVisualstudiocode key="vscode" />,
  //         <SiLinux key="linux" />,
  //         <SiWindows key="windows" />
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { icon: <FaHtml5 key="html5" />, title: "HTML5" },
          { icon: <FaCss3 key="css3" />, title: "CSS3" },
          { icon: <FaJs key="js" />, title: "JavaScript" },
          { icon: <FaReact key="react" />, title: "React.js" },
          { icon: <FaNodeJs key="nodejs" />, title: "Node.js" },
          { icon: <FaWordpress key="wordpress" />, title: "WordPress" },
          { icon: <FaBootstrap key="bootstrap" />, title: "Bootstrap" },
          { icon: <SiTailwindcss key="tailwind" />, title: "Tailwind CSS" },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { icon: <SiNextdotjs key="nextjs" />, title: "Next.js" },
          { icon: <SiFramer key="framer" />, title: "Framer" },
          { icon: <SiAdobexd key="adobexd" />, title: "Adobe XD" },
          { icon: <SiAdobephotoshop key="photoshop" />, title: "Adobe Photoshop" },
          { icon: <SiCanva key="canva" />, title: "Canva" },
        ],
      },
      {
        title: 'Embedded Systems',
        icons: [
          { icon: <SiC key="c-lang" />, title: "C Language" },
          { icon: <SiCplusplus key="cpp-lang" />, title: "C++ Language" },
          // { icon: <SiArduino key="arduino" />, title: "Arduino" }, // optional if you want to uncomment
          // { icon: <SiRaspberrypi key="raspberry" />, title: "Raspberry Pi" },
          { icon: <FaMicrochip key="microchip" />, title: "Microchip" },
          { icon: <SiArm key="ARM" />, title: "ARM" },
          // { icon: <FaMicrochip key="mbed" />, title: "Mbed" }, // fallback or custom SVG recommended
        ],
      },
      {
        title: 'Networking & Protocols',
        icons: [
          { icon: <FaWifi key="wifi" />, title: "Wi-Fi" },
          // { icon: <SiBluetooth key="bluetooth" />, title: "Bluetooth" },
          { icon: <SiInternetarchive key="tcpip" />, title: "TCP/IP" },
        ],
      },
      {
        title: 'Programming Concepts',
        icons: [
          { icon: <FaCogs key="procedural" />, title: "Procedural Programming" },
          { icon: <FaPuzzlePiece key="modular" />, title: "Modular Programming" },
          { icon: <FaSitemap key="structured" />, title: "Structured Programming" },
          { icon: <FaMemory key="pointers" />, title: "Pointers & Memory" },
          { icon: <FaDatabase key="datastructures" />, title: "Data Structures" },
          { icon: <FaRedo key="recursion" />, title: "Recursion" },
          { icon: <FaMicrochip key="bitwise" />, title: "Bit Manipulation" },
          { icon: <FaProjectDiagram key="oop" />, title: "Object-Oriented Programming" }
        ],
      },
      {
        title: 'Tools & Platforms',
        icons: [
          { icon: <SiGit key="git" />, title: "Git" },
          { icon: <SiGithub key="github" />, title: "GitHub" },
          { icon: <SiVisualstudiocode key="vscode" />, title: "VS Code" },
          { icon: <SiVisualstudio key="vstudio" />, title: "Visual studio" },
          { icon: <SiLinux key="linux" />, title: "Linux" },
          { icon: <SiWindows key="windows" />, title: "Windows" },
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
        title: 'Embedded System training  - Vector India Hyderabad',
        stage: '2024 - 2025',
      },
      {
        title: 'Information Technology Web Developer  - Wastely Aqua',
        stage: '2023 - 2024',
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
        title: 'Certified Embedded developer - Vector India, Hyderabad, TS',
        stage: '2025',
      },
      {
        title: 'Certified Effective Prompt Writing - Be10x',
        stage: '2024',
      },
      {
        title: 'Certified AI tools workshop - Be10x',
        stage: '2023',
      },
      {
        title: 'Certified CSS3 SAAS and SCSS mega course - Udemy',
        stage: '2023',
      },
      {
        title: 'Certified React.js Crash course - Udemy',
        stage: '2023',
      },
      {
        title: 'Certified Web Development - NetTech India, Thane, MH',
        stage: '2022',
      },
      {
        title: 'Computer Engineering - JIEMS, AKkalkuwa, MH',
        stage: '2021',
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
          Innovative coding <span className='text-accent'>fosters captivating</span>  designs.
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          Over the past 2 years, I’ve worked professionally as a Front-End Developer, creating responsive, user-focused web interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap. I’ve teleworked, collaborated with startups, and delivered freelance projects that automated billing, improved UI responsiveness, and enhanced user experiences across platforms.
          <br />
          Recently, I completed a comprehensive training program in Embedded Systems at Vector India, where I gained hands-on experience with C, Embedded C, ARM microcontrollers, real-time operating principles, and IoT integration. Through project work, I developed a sensor monitoring system using LPC2148 and ESP01, sparking a deeper interest in embedded technologies.
          <br />
          I’m now looking to combine my strong front-end foundation with my growing embedded skill set to contribute to versatile, end-to-end digital solutions.
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
          {/* {aboutData[index].info.map((item, itemIndex) => {
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
          })} */}

          {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2">
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {item.icons?.map(({ icon, title }, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="relative group text-2xl cursor-default"
                  >
                    {icon}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50">
                      {title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </motion.div>
    </div>
  </div>
};

export default Page;
