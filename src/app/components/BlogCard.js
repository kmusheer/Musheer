"use client"
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variant";
import AV from '../../../public/images/AV.png'
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ singleData, randomBlogs }) => {

    return <div className=" h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-x-8">
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    animate='show'
                    exit={'hidden'}
                    className=" w-full xl:max-w-[65%]">
                    <div className="min-h-screen flex flex-col justify-center items-center">
                        <div className=" max-w-full bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700">{singleData.title}</h2>
                            <Image src={singleData.image} alt={singleData.title} width={400} height={300} className="mb-4 rounded-lg shadow-md w-full max-h-[300px]" />
                            {/* <p className="text-gray-700">{singleData.content}</p> */}
                            <p className="text-gray-700 mb-4">{singleData.content}</p>
                            {singleData.mediumUrl && (
                                <a
                                    href={singleData.mediumUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Read Full Blog on Medium
                                </a>
                            )}

                        </div>
                    </div>
                </motion.div>
                <div className="text-center flex items-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit={'hidden'}
                        className="h2 xl:mt-8 my-4">
                        My Blogs<span className="text-accent">.</span>
                    </motion.h2>
                    {randomBlogs.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, easeInOut: [0.17, 0.67, 0.83, 0.67] }}

                            key={item.id} className="mb-6 bg-white rounded-lg shadow-md p-6">
                            <Link href={`/blogs/${item.id}`} passHref className="cursor-pointer">
                                <h2 className="text-xl font-semibold my-2 mb-4 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                                    {item.title.length >= 25 ? item.title.slice(0, 25) + "..." : item.title}
                                </h2>
                            </Link>
                            <div className=' flex-row flex-shrink sm:flex'>
                                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat mb-2 sm:mx-3">
                                    {item.image && (
                                        <Image src={item.image} height={200} width={300}
                                            className="transition duration-300 ease-in-out hover:scale-110  flex-1 max-w-full h-[200px]"
                                            alt="Louvre" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        <Bulb />
    </div>;
};

export default BlogCard;