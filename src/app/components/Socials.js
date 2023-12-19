import Link from "next/link";
import { RiYoutubeLine, RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine, RiDownload2Line } from "react-icons/ri"

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg ">
    <Link href={'/Mohd Moshir.pdf'} title="CV Download" className="hover:text-accent transition-all duration-300 animate-pulse hover:text-xl" >
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <RiDownload2Line />
      </button>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300" ><RiYoutubeLine /></Link>
    <Link href={'https://www.facebook.com/musheer.khan.9081?mibextid=ZbWKwL'} target="blank" className=" hover:text-accent transition-all duration-300" > <RiFacebookLine /> </Link>
    <Link href={'https://www.instagram.com/mu.sheer_k/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'} target="blank" className=" hover:text-accent transition-all duration-300" > <RiInstagramLine /> </Link>
    <Link href={'https://www.linkedin.com/in/moshir-khan/'} target="blank" className=" hover:text-accent transition-all duration-300" > <RiLinkedinLine /> </Link>
    <Link href={'https://twitter.com/musheer_k?t=ycg-bL9rmVzeWmP_9xMGIg&s=09'} target="blank"  className=" hover:text-accent transition-all duration-300" > <RiTwitterLine /> </Link>
  </div>;
};

export default Socials;
