import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    let Links = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Portfolio", link: "#portfolio" },
        { name: "Service", link: "#service" }
    ];
    const [open, setOpen] = useState(false);
    const handleScroll = (id) => {
        const item = document.getElementById(id);
        if (item) {
            window.scrollTo({
                top: item.offsetTop,
                behavior: "auto"
            })
        }
    }
    return (
        <div className='shadow-md w-full '>
            <div className='lg:flex items-center justify-between bg-white lg:bg-transparent py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex  items-center gap-1'>{/* font-bold is a tailwind class for making the text bold */}
                    Bibek
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 z-index:10 cursor-pointer lg:hidden w-7 h-7'>{/* md:hidden is a tailwind class for hiding the element on medium-sized screens and larger */}
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* linke items */}
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 lg:mr-20 absolute lg:static bg-white lg:bg-transparent   lg:z-auto z-[1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li className='lg:ml-8 lg:my-0 my-7 font-semibold'>{/* font-semibold is a tailwind class for making the text semi-bold */}
                            <Link onClick={() => { handleScroll(link.link.slice(1)) }} className='text-gray-800 lg:text-white text-xl hover:custom-red duration-500' to={`/${link.link}`}>{link.name}</Link>
                        </li>
                    ))}
                    <Link className='lg:ml-8 lg:my-0 my-7 font-semibold text-gray-800 lg:text-white text-xl hover:custom-red duration-500' to="/contact">Contact</Link>
                </ul>
                {/* button */}
            </div>
        </div>

    )
}









// return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//             {/* logo section */}
//             <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>{/* font-bold is a tailwind class for making the text bold */}
//                 Hello
//             </div>
//             {/* Menu icon */}
//             <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>{/* md:hidden is a tailwind class for hiding the element on medium-sized screens and larger */}
//                 {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//             </div>
//             {/* linke items */}
//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//                 {Links.map((link) => (
//                     <li className='md:ml-8 md:my-0 my-7 font-semibold'>{/* font-semibold is a tailwind class for making the text semi-bold */}
//                         <a href={link.link} className='text-gray-800 hover:custom-red duration-500'>{link.name}</a>
//                     </li>
//                 ))}
//                 <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
//             </ul>
//             {/* button */}
//         </div>
//     </div>
// )


export default Header;