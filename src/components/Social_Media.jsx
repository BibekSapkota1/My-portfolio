import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"

export default function Social_Media() {
    return (
        <div className='flex lg:w-3/12 mx-auto lg:mx-2 justify-between items-center mt-0  '>
            <a href="https://www.facebook.com/bibek.sapkota.9083477" target='_blank' rel="noreferrer">
                <FaFacebook className='text-white  lg:p-2 text-4xl lg:text-5xl transition-transform duration-300 transform hover:scale-110 hover:text-Facebook-color' />
            </a>
            <a href="https://www.instagram.com/bibek___sapkota/" target='_blank' rel="noreferrer">
                <FaInstagram className='text-white   lg:p-2 text-4xl lg:text-5xl transition-transform duration-300 transform hover:scale-110 hover:text-red-600 ' />
            </a>
            <a href="https://www.linkedin.com/in/bibeksapkota1/" target='_blank' rel="noreferrer">
                <FaLinkedin className='text-white   lg:p-2 text-4xl lg:text-5xl transition-transform duration-300 transform hover:scale-110 hover:text-linkdine-color' />
            </a>
            <a href="https://github.com/BibekSapkota1" target='_blank' rel="noreferrer">
                <FaGithub className='text-white  lg:p-2 text-4xl lg:text-5xl transition-transform duration-300 transform hover:scale-110 hover:text-Github-color ' />
            </a>
        </div>

    )
}