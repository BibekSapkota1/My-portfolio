import React from 'react'
import Group from '../assets/images/Group 6.png'

const Details = [
  {
    title: 'NAME :',
    text: 'Bibek Sapkota'
  },
  {
    title: 'AGE :',
    text: '20 Years'
  },
  {
    title: 'Email :',
    text: 'Sapkotabibek004@gmail.com'
  },
  {
    title: 'Education :',
    text: 'Bachelor in  Computer and Data Science'
  },
  {
    title: 'Phone :',
    text: '+9779863027811'
  },
  {
    title: 'Freelancer :',
    text: 'Available'
  }
]

export default function About() {
  return (
    <div>

      <section>
        <div class="w-100% bg-blue-50 sm:bg-green-500 md:bg-red-500 lg:bg-green-500 xl:bg-yellow-300 2xl:bg-blue-800">
          <div class="items-center">
            <div class="flex flex-wrap xl:container  xl:mx-auto  ">
              <div class="w-full lg:w-2/5 bg-red h-3/4 mt-3 flex items-center justify-center lg:order-0 smm:mt-5 sm:mt-9">
                <img src={Group} alt="Group" class="p-3" />
              </div>
              <div className='md:container md:mx-auto lg:bg-green-200  lg:w-3/5 '>
                <div class="w-full bg-blue h-3/4 mt-1 flex flex-wrap  p-3 smm:mt-5 sm:mt-7 sm:p-5  ">
                  <h2 class="text-xl font-bold text-custom-red smm:text-2xl sm:text-4xl">ABOUT ME</h2>
                  <h1 class="text-xl font-bold mt-2 smm:text-2xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mt-6">Fresher UX/Ui & Frontend Developer From Nepal</h1>
                  <p class="-text-xl font-normal text-justify mt-2 smm:mt-5 sm:text-xl xl:mt-6">
                    UX/Ui & Frontend developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations. <br />
                    Visual design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
                  </p>
                  <div class="grid grid-cols-2 gap-4 w-full mt-2 smm:mt-3 sm:mt-5 xl:mt-7">
                    {Details.map((detail, index) => (
                      <div key={index} class="flex flex-col">
                        <div class="text-black-500 font-bold -text-xl sm:text-xl uppercase">{detail.title}</div>
                        <div class="text-gray-700 -text-xl sm:text-xl xl:mt-1">{detail.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>


      </section>

    </div>






  )
}