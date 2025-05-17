import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx'

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Front-End Development',
    description: 'Modern, scalable web interfaces using HTML, CSS, JavaScript, and React.js.',
  },
  {
    icon: <RxRocket />,
    title: 'Embedded Project Prototyping',
    description: 'Basic IoT and microcontroller-based system demos using LPC2148 and ESP01.',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Basic visual identity support for startups and personal projects.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI Design',
    description: 'Clean, responsive layouts focused on usability and performance.',
  },
  {
    icon: <RxReader />,
    title: 'Freelance Solutions',
    description: 'Custom-built web tools and billing systems tailored to client needs.',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className='h-[200px] sm:h-[320px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
             flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


export default ServiceSlider;
