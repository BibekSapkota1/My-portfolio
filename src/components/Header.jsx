import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Dark from './Dark';



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
                top: item.offsetTop - 60,
                behavior: "auto"
            })
        }
    }
    return (
        // 
        <div className='shadow-md  w-full fixed bg-gray-900 z-10 '>
            <div className='lg:flex items-center justify-between bg-white dark:bg-custom-2-dark lg:dark:bg-gray-900 lg:bg-transparent py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-regular font-Greatvibe  text-2xl cursor-pointer flex text-black dark:text-white lg:text-white  items-center gap-1'>{/* font-bold is a tailwind class for making the text bold */}
                    Bibek
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 z-index:10 dark:text-white cursor-pointer lg:hidden w-7 h-7'>{/* md:hidden is a tailwind class for hiding the element on medium-sized screens and larger */}
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* linke items */}
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 font-poppins  lg:mr-20 absolute lg:static bg-white dark:bg-custom-2-dark lg:dark:bg-transparent lg:bg-transparent   lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li className='lg:ml-8 lg:my-0 my-7 font-semibold'>{/* font-semibold is a tailwind class for making the text semi-bold */}
                            <Link onClick={() => { handleScroll(link.link.slice(1)) }} className='text-gray-800  dark:text-white   lg:text-white text-xl hover:text-red-500 duration-500' to={`/${link.link}`}>{link.name}</Link>
                        </li>
                    ))}
                    <Link className='lg:ml-8 lg:my-0 my-7 font-semibold text-gray-800 dark:text-white lg:text-white text-xl hover:text-red-500 duration-500' to="/contact">Contact</Link>


                    <div className='lg:ml-8 lg:my-0 my-7'>
                        <Dark />
                    </div>
                </ul>
                {/* button */}
            </div>
        </div>

    )
}


export default Header;