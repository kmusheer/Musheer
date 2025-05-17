"use client";
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variant';

const Page = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const result = await res.json();

            if (result.success) {
                setResponse('Message sent successfully!');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setResponse('Failed to send message.');
            }
        } catch (err) {
            console.error(err);
            setResponse('An error occurred.');
        }
        setLoading(false);
    };

    return (
        <div className='h-full bg-primary/30'>
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12'>
                        Let’s <span className='text-accent'>connect</span>
                    </motion.h2>

                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex flex-1 flex-col gap-6 w-full mx-auto'>
                        <div className='flex gap-x-6 w-full'>
                            <input type="text" name="name" placeholder='Name' value={form.name} onChange={handleChange} className='input' required />
                            <input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} className='input normal-case' required />
                        </div>
                        <input type="text" name="subject" placeholder='Subject' value={form.subject} onChange={handleChange} className='input' required />
                        <textarea name="message" placeholder='Your message' value={form.message} onChange={handleChange} className='textarea' required></textarea>
                        <button type="submit" disabled={loading}
                            className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className={`transition-all duration-500 ${loading ? "opacity-0" : "group-hover:-translate-y-[120%] group-hover:opacity-0"}`}>
                                Let’s talk
                            </span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                        </button>
                        {response && <p className="text-sm mt-2 text-center text-white">{response}</p>}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Page;









// "use client"
// import { BsArrowRight } from 'react-icons/bs'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../components/variant'

// const page = () => {
//   return (
//     <div className='h-full bg-primary/30'>
//         <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
//             <div className=" flex flex-col w-full max-w-[700px]">
//                 <motion.h2
//                 variants={fadeIn('up', 0.2)}
//                 initial = 'hidden'
//                 animate= 'show'
//                 exit={'hidden'}                
//                 className='h2 text-center mb-12'>
//                     Let’s <span className=' text-accent'>connect</span> 
//                 </motion.h2>
//                 <motion.form
//                 variants={fadeIn('up', 0.4)}
//                 initial = 'hidden'
//                 animate= 'show'
//                 exit={'hidden'}   
//                  action="" className='flex flex-1 flex-col gap-6 w-full mx-auto'>
//                     <div className='flex gap-x-6 w-full'>
//                         <input type="text" placeholder='name' className='input' />
//                         <input type="email" placeholder='email' className='input' />
//                     </div>
//                         <input type="text" placeholder='subject' className='input' />
//                         <textarea name="" id="" className='textarea'></textarea>
//                         <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
//                             <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                                 Let’s talk
//                             </span>
//                             <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] ' />
//                         </button>
//                 </motion.form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default page