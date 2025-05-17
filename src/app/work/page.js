"use client"
import WorkSlider from "../components/WorkSlider";
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variant";

const Services = () => {
  return <div className=" h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
            className="h2 xl:mt-12">
            My Works<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
            className=" mb-4 sm:max-w-[850%] xl:max-w-[400px] mx-auto lg:mx-0">
            {/* Proven Front-End Developer adept at translating designs into captivating web experiences, combining HTML, CSS, and JavaScript expertise with React, Next.js, Node.js, MongoDB, and GitHub proficiency. Committed to user-centric design, I consistently deliver exceptional interfaces, poised to enhance your company's growth */}
            Proven Front-End Developer with 2+ years of experience crafting responsive and user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, and React.js, with additional exposure to Bootstrap and GitHub. I’ve delivered real-world solutions for startups and businesses—ranging from document management systems to custom billing applications—focused on performance, usability, and clean design.
            <br />
            In addition, I’ve recently trained in Embedded Systems and IoT development, working on academic projects using C, Embedded C, ARM microcontrollers, and platforms like ThingSpeak. I’m excited to bring this expanding knowledge into future tech-driven projects that blend intuitive interfaces with smart hardware integration.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className=" w-full xl:max-w-[65%] lg:max-w-[80%]">
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;