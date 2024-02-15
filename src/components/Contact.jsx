import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import React, { useState } from 'react';




export default function contact() {




    return (
        <div className='w-full'>
            <div className="flex justify-center mt-16">
                <div className="flex items-center">
                    <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
                    <h1 className="text-xl smm:text-2xl flex-shrink-0 font-bold">GET IN TOUCH</h1>
                    <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
                </div>
            </div>
            <p className='w5/12 text-center text-xl smm:text-2xl text-custom-gray mt-5 smm:mt-10 font-semibold '>Please fill out the form on this section to contact with me. Or call between
                9:00 a.m. and 8:00 p.m. GMT+5:45 ,Monday through Friday</p>



{/* 
                smm:bg-yellow-900 sm:bg-green-500 md:bg-red-500 lg:bg-green-500 xl:bg-yellow-300 2xl:bg-blue-800 */}


        </div>
    )
} 