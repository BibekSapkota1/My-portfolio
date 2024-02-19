import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import React, { useState } from 'react';
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/Location.svg'
import email from '../assets/icons/Email.svg'


const detail = [
    {
        heading: 'Address',
        description:
            'Akashedhara, Kapan, Kathmandu, Nepal',
        picture: location,
    },
    {
        heading: 'Phone',
        description:
            '+9779863027811',
        picture: phone,
    },
    {
        heading: 'Email',
        description:
            'Sapkotabibek004@gmail.com',
        picture: email,
    },
];



export default function Conatct_details() {

    return (
        <div className='w-full pt-20' >
            <div className="flex justify-center  ">
                <div className="flex items-center">
                    <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
                    <h1 className="text-xl smm:text-2xl flex-shrink-0 font-bold">GET IN TOUCH</h1>
                    <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
                </div>
            </div>
            <p className='w5/12 text-center -text-xl smm:text-xl sm:text-2xl text-custom-gray mt-5 smm:mt-10 font-semibold '>Please fill out the form on this section to contact with me. Or call between
                9:00 a.m. and 8:00 p.m. GMT+5:45 ,Monday through Friday</p>



            {/* 
                smm:bg-yellow-900 sm:bg-green-500 md:bg-red-500 lg:bg-green-500 xl:bg-yellow-300 2xl:bg-blue-800 */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-0 mt-3 lg:mt-10 ">
                {detail.map((detail) => (

                    <div key={detail.heading} className="  shadow-md lg:shadow-none flex flex-col  items-center items-le">
                        <div className="flex flex-row">
                            <div className="flex items-top justify-center ">
                                <img
                                    src={detail.picture}
                                    alt={detail.heading}
                                    className="w-10 lg:w-14 mb-0 "
                                />
                            </div>
                            <div className="lg:grid lg:grid-cols-1 lg:col-span-2 p-2">
                                <h4 className="-text-xl 2xl:text-2xl font-bold text-center lg:text-left ">{detail.heading}</h4>
                                <p className="text-gray-60 2xl:text-xl text-sm ">{detail.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="container max-w-screen-lg mx-auto flex flex-col md:flex-row ">
                <div className="left-div md:w-2/3  p-4 flex flex-col items-center justify-center bg-red-300">
                    <div className=' rounded-2xl overflow-hidden '>

                    </div>
                </div>
                <div className="right-div md:w-1/3  p-4 flex flex-col  bg-blue-500">
                    <h1 className=''>Write me a Message</h1>
                </div>
            </div>

        </div>
    )
} 