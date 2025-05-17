
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'I MOVIE',
          path: '/images/thumb1.jpg',
          link: 'https://github.com/kmusheer/iMovie',
        },
        {
          title: 'Bank Managment System (C++)',
          path: '/images/BankAccountManagementSystem(C++).png',
          link: 'https://github.com/kmusheer/multi-project-repo-cpp/tree/main/BankManagementSystem',
        },
        {
          title: 'Student Database (C)',
          path: '/images/StudentDatabaseManagementSystem.png',
          link: 'https://github.com/kmusheer/multi-project-repo/tree/main/studentDatabase',
        },
        {
          title: 'Text Editor',
          path: '/images/thumb4.jpg',
          link: 'https://github.com/kmusheer/textEditor',
        },
      ],
    },
    {
      images: [
        {
          title: 'Library Managment (C)',
          path: '/images/LibraryManagementSystem.png',
          link: 'https://github.com/kmusheer/multi-project-repo/tree/main/libraryManagment',
        },
        {
          title: 'Rest API',
          path: '/images/thumb2.jpg',
          link: 'https://github.com/kmusheer/REST-API',
        },
        {
          title: 'I Flix',
          path: '/images/thumb3.jpg',
          link: 'https://github.com/kmusheer/iflix-next',
        },
        {
          title: 'Book Shop Managment (C++)',
          path: '/images/BookshopManagementSystem(C++).png',
          link: 'https://github.com/kmusheer/multi-project-repo-cpp/tree/main/BookshopManagementSystem',
        },
      ],
    },
    {
      images: [
        {
          title: 'Narja BIll',
          path: '/images/thumb4.jpg',
          link: 'https://github.com/kmusheer/Bill-Narja-super-steel',
        },
        {
          title: 'Text Utilse',
          path: '/images/thumb1.jpg',
          link: 'https://github.com/kmusheer/textutilse',
        },
        {
          title: 'Front end Mentor',
          path: '/images/thumb2.jpg',
          link: 'https://github.com/kmusheer/frontendmentor',
        },
        {
          title: 'Form Validation',
          path: '/images/thumb3.jpg',
          link: 'https://github.com/kmusheer/useformik',
        },
      ],
    },
  ],
};











const workSlidesSm = {
  slides: [
    {
      images: [
        {
          title: 'Bank Managment System (C++)',
          path: '/images/BankAccountManagementSystem(C++).png',
          link: 'https://github.com/kmusheer/multi-project-repo-cpp/tree/main/BankManagementSystem',
        },
        {
          title: 'Rest API',
          path: '/images/thumb2.jpg',
          link: 'https://github.com/kmusheer/REST-API',
        },
      ],
    },
    {
      images: [
        {
          title: 'I MOVIE',
          path: '/images/thumb1.jpg',
          link: 'https://github.com/kmusheer/iMovie',
        },
        {
          title: 'Student Database (C)',
          path: '/images/StudentDatabaseManagementSystem.png',
          link: 'https://github.com/kmusheer/multi-project-repo/tree/main/studentDatabase',
        },
      ],
    },
    {
      images: [
        {
          title: 'I Flix',
          path: '/images/thumb3.jpg',
          link: 'https://github.com/kmusheer/iflix-next',
        },
        {
          title: 'Text Editor',
          path: '/images/thumb4.jpg',
          link: 'https://github.com/kmusheer/textEditor',
        },
      ],
    },
    {
      images: [
        {
          title: 'Narja BIll',
          path: '/images/thumb4.jpg',
          link: 'https://github.com/kmusheer/Bill-Narja-super-steel',
        },
        {
          title: 'Text Utilse',
          path: '/images/thumb1.jpg',
          link: 'https://github.com/kmusheer/textutilse',
        },
      ],
    },
    {
      images: [
        {
          title: 'Library Managment (C)',
          path: '/images/LibraryManagementSystem.png',
          link: 'https://github.com/kmusheer/multi-project-repo/tree/main/libraryManagment',
        },
        {
          title: 'Form Validation',
          path: '/images/thumb3.jpg',
          link: 'https://github.com/kmusheer/useformik',
        },
      ],
    },
    {
      images: [
        {
          title: 'Front end Mentor',
          path: '/images/thumb2.jpg',
          link: 'https://github.com/kmusheer/frontendmentor',
        },
        {
          title: 'Book Shop Managment (C++)',
          path: '/images/BookshopManagementSystem(C++).png',
          link: 'https://github.com/kmusheer/multi-project-repo-cpp/tree/main/BookshopManagementSystem',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      {/* Desktop Swiper */}
      <div className="hidden xl:block">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]} // ✅ Include Autoplay module
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className='h-[280px] sm:h-[480px]'
        >
          {workSlides.slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                {slide.images.map((image, index) => (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      <Image src={image.path} width={500} height={300} alt='' className='h-auto max-w-full' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-10 translate-y-full group-hover:-translate-y-20 transition-all duration-300'>
                        {image.title}
                        <Link href={image.link} target='blank'  rel="noopener noreferrer" className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] cursor-pointer hover:text-accent hover:animate-pulse ease-in'>
                          <div className='delay-100'>LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Swiper */}
      <div className="xl:hidden">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]} // ✅ Include Autoplay module
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className='h-[180px] sm:h-[280px] xl:h-[480px]'
        >
          {workSlidesSm.slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-1 gap-4'>
                {slide.images.map((image, index) => (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      <Image src={image.path} width={500} height={300} alt='' className='h-auto max-w-full' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute -bottom-10 sm:bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300'>
                        {image.title}
                        <Link href={image.link} target='blank' rel="noopener noreferrer" className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] cursor-pointer hover:text-accent hover:animate-pulse ease-in'>
                          <div className='delay-100'>LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default WorkSlider;
