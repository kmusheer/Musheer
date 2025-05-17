
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image';
import { useState } from 'react';

// testimonial data
const testimonialData = [
  {
    image: '/images/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Marketing Manager',
    message:
      'SEO sorcery at its finest. Our online presence flourished, thanks to their strategic optimization techniques.'
  },
  {
    image: '/images/t-avt-4.png',
    name: 'Imran Sheikh',
    position: 'Project Lead, Chrome Infosoft Solutions',
    message:
      'Moshir consistently delivered high-quality UI components for our DocPro platform. His attention to detail and smooth API integrations helped us improve performance and user satisfaction.'
  },
  {
    image: '/images/t-avt-5.png',
    name: 'Asif Khan',
    position: 'Director, Narja Super Steel Pvt. Ltd.',
    message:
      'Moshir developed a custom billing app for us that streamlined invoicing and improved tax compliance. His ability to understand our needs and turn them into working solutions was impressive.'
  },
  {
    image: '/images/t-avt-6.png',
    name: 'Shadab Ansari',
    position: 'Team Manager, Wastely Aqua Pvt. Ltd.',
    message:
      'He played a key role in enhancing our program management system’s interface. His React and Bootstrap skills significantly boosted responsiveness and usability.'
  },
  {
    image: '/images/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Director',
    message:
      'From concept to reality, their development turned our ideas into a seamless digital experience.'
  },
  {
    image: '/images/t-avt-7.png',
    name: 'Srinivas Reddy',
    position: 'Embedded Trainer, Vector India',
    message:
      'Moshir demonstrated strong problem-solving skills and dedication during our Embedded Systems training. His final project integrating IoT with ARM microcontrollers was well-executed and showed great potential.'
  },
  {
    image: '/images/t-avt-8.png',
    name: 'Rahul Mehta',
    position: 'Lab Coordinator, Vector India',
    message:
      'Moshir’s hands-on approach and attention to technical details during lab sessions stood out. His embedded project work showcased a clear understanding of real-time systems and IoT integration.'
  },
  {
    image: '/images/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Founder',
    message:
      'Wordsmiths extraordinaire! Their copywriting transformed our message into compelling narratives that resonate.'
  },
];

const FallbackImage = ({ src, alt, width, height }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc('/images/replica.png')}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='h-[450px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <FallbackImage
                      src={person.image}
                      width={100}
                      height={100}
                      alt='person image'
                    />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h0[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
