"use client"
import ServiceSlider from "../components/ServiceSlider";
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
                        className="h2 xl:mt-8">
                        My Services<span className="text-accent">.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit={'hidden'}
                        className=" mb-4 max-w-[400px] mx-auto lg:mx-0">
                        {/* My portfolio offers a comprehensive range of services, including strategic branding, meticulous development, compelling copyrighting, impactful SEO, and visionary design. I specialize in crafting holistic digital solutions that elevate brands and drive meaningful online engagement. Let's collaborate to transform your vision into a dynamic online reality. */}
                        With a strong foundation in front-end development and a growing interest in embedded systems, I offer a focused range of services to help businesses create functional and engaging digital experiences. From crafting responsive web interfaces to consulting on UI enhancements and basic branding, my approach merges technical precision with thoughtful design. Whether you’re a startup looking for sleek front-end development or a team needing intuitive UI components, I bring practical, results-driven solutions to the table.
                        <br />
                        Let’s collaborate to bring your digital ideas to life with clean code, smooth design, and a user-first mindset.
                    </motion.p>
                </div>
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    animate='show'
                    exit={'hidden'}
                    className=" w-full xl:max-w-[65%]">
                    <ServiceSlider />
                </motion.div>
            </div>
        </div>
        <Bulb />
    </div>;
};

export default Services;