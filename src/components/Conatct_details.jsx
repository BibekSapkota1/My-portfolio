import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import React, { useState } from 'react';
import phone from '../assets/icons/phone.svg'
import location from '../assets/icons/Location.svg'
import email from '../assets/icons/Email.svg'
import send from '../assets/images/message.png'


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
        <div className='w-full pt-24 dark:bg-custom-dark' >
            <div className="flex justify-center  ">
                <div className="flex items-center">
                    <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
                    <h1 className="text-xl smm:text-2xl dark:text-white flex-shrink-0 font-bold">GET IN TOUCH</h1>
                    <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
                </div>
            </div>
            <p className='w5/12 text-center -text-xl smm:text-xl sm:text-2xl text-custom-gray dark:text-custom-dark-text mt-5 smm:mt-10 font-semibold '>Please fill out the form on this section to contact with me. Or call between
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
                                <h4 className="-text-xl 2xl:text-2xl dark:text-white font-bold text-center lg:text-left ">{detail.heading}</h4>
                                <p className="text-gray-60 2xl:text-xl dark:text-custom-dark-text text-sm ">{detail.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div>
                <div class="flex justify-center items-center" id="contact">
                    <div class="max-w mx-auto">
                        <div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-4">
                                <div class="flex-col mr-2 p-4 flex-shrink-0 flex justify-center">
                                    <img src={send} class="aspect-square h-3/4 object-cover rounded-xl" />
                                </div>

                                <form action="https://getform.io/f/QdJO0oeO" method="POST" class="p-8 flex flex-col justify-center -mt-12 md:mt-0">
                                    <div class=" p-4 rounded-lg overflow-y-auto">
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <input type="name" name="name" id="name" placeholder="First Name" class="w-full mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                                            </div>

                                            <div class="flex flex-col">
                                                <input type="last name" name=" last name" id=" last name" placeholder="Last Name" class="w-full mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                                            </div>
                                        </div>

                                        <div class="flex flex-col mt-2">
                                            <input type="email" name="email" id="email" placeholder="Email" class="w-full mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                                        </div>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div class="flex flex-col mt-2">
                                                <input type="phone" name="phone" id="number" placeholder="Phone" class="w-full mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                                            </div>

                                            <div class="flex flex-col mt-2">
                                                <input type="subject" name="subject" id="subject" placeholder="Subject" class="w-full mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                                            </div>
                                        </div>

                                        <div class="flex flex-col mt-2">
                                            <textarea name="message" id="message" placeholder="Your Message" class="w-full mt-2 p-3 min-h-40 rounded-lg bg-gray-800 border-gray-700 text-white"></textarea>
                                        </div>

                                        <button type="submit" class=" py-2 px-3  mt-3 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
} 