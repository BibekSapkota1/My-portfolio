
import React, { useState, useEffect } from 'react';
import Background from '../assets/images/background.png';
import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import FaReact from '../assets/icons/FaReact.svg'
import Rocket from '../assets/icons/IoMdRocket.svg'
import Gem from '../assets/icons/FaGem.svg'
import rimage from '../assets/icons/r-element.svg'
import circlearrow from '../assets/icons/Conatctbelow.svg'
import Profile from '../assets/images/Main.png'
import Title from './effect';
import Navbar from './Navbar'
import Social_Media from './Social_Media';


const CARD_IMAGE_HEIGHT = '190px ';

const cardData = [
  {
    title: 'Creativity',
    text: 'Creativity is merely a plus name for regular activity. Any activity becomes creative when the doer cares about doing it right, or better.',
    image: FaReact,
  },
  {
    title: 'Dedication',
    text: 'If you believe in yourself and have dedication and pride - and never quit, you\'ll be a winner. The price of victory is high but so are the rewards.',
    image: Gem,
  },
  {
    title: 'Hard Work',
    text: 'I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near.',
    image: Rocket,
  },
];

// function Title() {
//   const [text, setText] = useState('Designer');
//   const [isAnimating, setIsAnimating] = useState(false);


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIsAnimating(true);
//       const nextText = text === 'Designer' ? 'Developer' : 'Designer';
//       setText(nextText);
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 1000); // Adjust timing as needed
//     }, 2000); // Adjust interval as needed

//     return () => clearInterval(intervalId);
//   }, []);








export default function Landing() {
  return (
    <div>

      <div className="bg-no-repeat bg-cover bg-center h-screen w-100%"
        style={{ backgroundImage: `url(${Background})` }} >
        <Navbar />

        <div class="container mx-auto flex flex-col lg:flex-row h-screen">
          <div class="w-full lg:w-1/2 h-1/3 lg:h-full order-1 lg:order-2 pb-5 lg:pb-0">
            <img src={Profile} alt="Profile pic" class="mx-auto lg:flex  item-center justify-center h-full lg:h-2/3 lg:mt-20" />

          </div>

          <div class="w-full h-2/3 lg:h-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center justify-center  mt-0  ">
            <h4 class="text-white text-3xl smm:text-4xl  font-bold">Hello, I'm</h4>
            <h2 class="text-white text-6xl smm:text-7xl lg:text-8xl font-bold">Bibek</h2>
            <h1 class="text-custom-red text-6xl smm:text-7xl lg:text-8xl font-bold">Sapkota</h1>
            <Title />
            
            <p class="text-white text-2xl  smm:text-3xl md:pl-20 lg:pl-0 lg:text-4xl   font-semibold p-3">A fresher UX/Ui & Frontend Developer from Kathmandu, Nepal!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-0   ">

              <div className='order:1 sm:order-2 items-center lg:mt-3'>
                <Social_Media />
              </div>
              <div className=' order:2 sm:order-1 text-center'>
                <button class="btn bg-custom-red hover:bg-red-700 text-white font-bold py-3 px-10 rounded shadow mt-3 ">
                  Contact me
                </button>
                <img src={circlearrow} alt="loading.." class="px-3 -mt-3  " />

              </div>
            </div>





          </div>
        </div>





      </div>

























      <section >
        <div class="bg-top-left bg-no-repeat">
          <img src={rimage} alt="loading.." class="px-3   object-cover" />
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex items-center">
            <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
            <h1 className="text-xl smm:text-2xl flex-shrink-0 font-bold">WELCOME TO MY WORLD</h1>
            <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
          </div>
        </div>
        <p className='w5/12 text-center text-xl smm:text-2xl text-custom-gray mt-5 smm:mt-10 font-semibold '>I'm A Young Tech Enthasist And Entrepreneur Who Love To Take Risk.</p>

        <div className="container mx-auto px-4 flex flex-col items-center mt-16 mb-20">
          <div className="flex flex-wrap gap-4 justify-center">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-gray shadow-xl rounded-lg overflow-hidden w-full max-w-md p-1 smm:p-8 flex flex-col items-center"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className=" rounded-t-lg"
                  style={{ height: CARD_IMAGE_HEIGHT }}
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-center">{card.title}</h2>
                  <p className="text-gray-700 text-center ">{card.text}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div >


  )
}



