import React from 'react'
import Group from '../assets/images/Group 6.png'
import Backgroun2 from '../assets/images/background-2.png'
import lines from '../assets/icons/blog-element.svg'

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

const categories = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },
  { name: 'React', value: 60 },
  { name: 'UI/UX Design', value: 90 },
];


export default function About() {
  return (
    <div>

      <section>
        <div class="w-100% bg-custom-blue">
          <div class="items-center">
            <div class="flex flex-wrap xl:container  xl:mx-auto  ">
              <div class="w-full lg:w-2/5 bg-red h-3/4 mt-3 flex items-center justify-center lg:order-0 smm:mt-5 sm:mt-9">
                <img src={Group} alt="Group" class="p-3" />
              </div>
              <div className='md:container md:mx-auto lg:w-3/5 '>
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
        <div
          className="bg-cover bg-no-repeat h-2/3 w-full"
          style={{ backgroundImage: `url(${Backgroun2})` }} >
          <div className="container mx-auto flex flex-col lg:flex-row p-2">
            <div className=" w-full h-100 mt-7 md:order-first md:flex-grow mb-4 md:mb-10">
              <h1 className='text-xl font-bold text-custom-red sm:text-3xl md:text-4xl '>MY SKILLS</h1>
              <h2 className='text-2xl mt-2 font-semibold text-white sm:text-5xl  md:mt-7 lg:text-5xl 2xl:text-6xl'>I'm Great In What I Do And I'm Loving It</h2>
              <p className='-text-xl sm:text-xl md:text-xl md:mt-7 mt-2 text-white lg:text-xl'>We learn wisdom from failure much more than from success;
                we often discover what will do by finding out what will not do;
                and probably he who never makes a mistake never made a
                discovery.</p>
            </div>
            <div className="w-full h-64 mx-auto mt-8 md:order-last lg:flex-grow md:mt-10">
              <div className="container mx-auto px-4 flex flex-col items-center justify-center ">
                {categories.map((category, index) => (
                  <div key={index} className="mb-4 flex flex-col">  {/* Left-aligned text using Tailwind CSS */}
                    <h3 className="text-white font-bold text-lg text-left">{category.name}</h3>  {/* Progress bar container below the text */}
                    <div className="mt-2 flex items-center">    {/* Long progress bar with left-aligned text */}
                      <div className="w-64 sm:w-96  bg-gray-200 rounded-full overflow-hidden h-2">
                        <div
                          className={`bg-custom-red h-full rounded-full transition-all text-left text-gray-700  font-semibold`}
                          style={{ width: `${category.value}%` }}
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}