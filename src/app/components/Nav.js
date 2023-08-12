"use client"
// icons
"use cient"
import { HiHome, HiUser, HiRectangleGroup, HiViewColumns, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';

//  link
const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    icon: <HiChatBubbleBottomCenterText />,
    nam: 'testimonials',
    path: '/testimonials',
  },
  {
    icon: <HiEnvelope />,
    nam: 'contact',
    path: '/contact',
  },
];

import Link from "next/link";
import { useRouter } from 'next/navigation'
import Transition from './Transition';


const Nav = () => {
  const router = useRouter()
  const pathName = router.pathname;

  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full  '>
      {navData.map((link, index) => {
        return <Link className={`${link.path === pathName && 'text-accent'} relative flex items-center hover:text-accent transition-all duration-300`} href={link.path} key={index}>
          
          {/* tooltip */}
          <div className="absolute pr-14 right-0 hidden group-hover:flex">
            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] ">
              <div className="text-[12px] leading-none font-semibold capitalize">
                {link.name}
              </div>
              {/* <div className='border-solid border-l-white boredr-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div> */}
            </div>
          </div>
          {/* Icons */}
          <div>
            {link.icon}
          </div>
        </Link>
      })}
    </div>
  </nav>;
};

export default Nav;
