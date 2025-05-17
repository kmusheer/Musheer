"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import AV from '../../../public/images/AV.png'
import { motion } from 'framer-motion';
import { fadeIn } from "./variant";

const BlogCards = ({ data }) => {

    // Guard clause for undefined/null/empty data
    if (!data || !Array.isArray(data) || data.length === 0) {
        return (
            <div className="h-full bg-primary/30 py-36 flex items-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl text-gray-600">No blogs found.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <div className="container mx-auto">
                <div className="flex gap-x-8">
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit={'hidden'}
                        className="w-full xl:max-w-[65%]"
                    >
                        {data.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: [0.17, 0.67, 0.83, 0.67] }}
                                className="mb-6 bg-white rounded-lg shadow-md p-6"
                            >
                                <Link href={`/blogs/${item.id}`} passHref>
                                    <h2 className="text-xl font-semibold my-2 mb-4 text-gray-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                                        {item.title}
                                    </h2>
                                </Link>
                                <div className='flex-row flex-shrink sm:flex'>
                                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat mb-2 sm:mx-3">
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                width={300}
                                                height={200}
                                                className="transition duration-300 ease-in-out hover:scale-110 rounded-md hover:rounded-lg flex-1 max-w-full h-[200px]"
                                                alt="Blog image"
                                            />
                                        )}
                                    </div>
                                    <p className="text-gray-700 flex-1">
                                        {item.content.length >= 225
                                            ? item.content.slice(0, 200) + "..."
                                            : item.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;



// const BlogCards = ({ data }) => {

//     return (
//         <>
//             <div className=" h-full bg-primary/30 py-36 flex items-center">
//                 <div className="container mx-auto">
//                     <div className="flex  gap-x-8">
//                         <motion.div
//                             variants={fadeIn('down', 0.2)}
//                             initial='hidden'
//                             animate='show'
//                             exit={'hidden'}
//                             className=" w-full xl:max-w-[65%]">

//                             {data.map((item) => (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.2, easeInOut: [0.17, 0.67, 0.83, 0.67] }}

//                                     key={item.id} className="mb-6 bg-white rounded-lg shadow-md p-6">
//                                     <Link href={`/blogs/${item.id}`} passHref className="cursor-pointer">
//                                         <h2 className="text-xl font-semibold my-2 mb-4 text-gray-500 hover:text-blue-500 transition-colors duration-300">
//                                             {item.title}
//                                         </h2>
//                                     </Link>
//                                     <div className=' flex-row flex-shrink sm:flex'>
//                                         <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat mb-2 sm:mx-3">
//                                         {item.image && (
//                                             <Image src={item.image} width={300} height={200}
//                                                 className="transition duration-300 ease-in-out hover:scale-110 rounded-md hover:rounded-lg flex-1 max-w-full h-[200px]"
//                                                 alt="Louvre" />
//                                                 )}
//                                         </div>
//                                         <p className="text-gray-700 flex-1">{item.content.length >= 225 ? item.content.slice(0, 200) + "..." : item.content}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogCards;

