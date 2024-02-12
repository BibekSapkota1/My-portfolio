import React from 'react';

import Background from '../assets/images/background.png';
import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import FaReact from '../assets/icons/FaReact.svg'
import Rocket from '../assets/icons/IoMdRocket.svg'
import Gem from '../assets/icons/FaGem.svg'
import rimage from '../assets/icons/r-element.svg'


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

export default function Home() {
  return (

    <div >
      <div class="bg-top-left bg-no-repeat">
        <img src={rimage} alt="loading.." class="px-3 -mt-3  object-cover" />
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex items-center">
          <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
          <h1 className="text-xl smm:text-2xl flex-shrink-0 font-bold">WELCOME TO MY WORLD</h1>
          <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:,ml-3" />
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
    </div>


  )
}



