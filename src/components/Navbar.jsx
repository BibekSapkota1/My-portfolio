import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';




export function Navbar()  {
    return (
        <header className='w-full pt-5 pb-5 text-white '>
            <div className='container pt-4 pb-4 mx-auto flex justify-between'>
                <div className='font-serif leading-none text-2xl'>Logo</div>
                <div className='flex justify-between w-6/12 text-xl '>
                    <Link className='' to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </header>
    )
}

