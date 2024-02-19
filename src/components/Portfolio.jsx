import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import website from '../assets/icons/FaLaptopCode.svg'
import App from '../assets/icons/FaMobileAlt.svg'
import Design from '../assets/icons/Web.svg'

import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Coffee House',
        type: 'Website',
        description:
            'Coffee House  is a  platform where we ensuring bean-to-cup excellence in every cup...',
        imageUrl: website,
        projectUrl: 'https://bibeksapkota123.netlify.app/',
    },
    {
        id: 2,
        title: 'Plant-App',
        type: 'App Development',
        description:
            ' This will be a plant buying app where you don’t have to go to nursery to buy plants. You can order them by just sitting at your home..',
        imageUrl: App,
        projectUrl: '',
    },

    {
        id: 3,
        title: 'Fitness App Ux/Ui Design',
        type: 'Ui/Ux Design',
        description:
            'Our fitness app is designed to provide users with a seamless and motivating experience to help them achieve their health and fitness goals...',
        imageUrl: Design,
        projectUrl: '',
    },
    {
        id: 4,
        title: 'Travel-App ux/ui Design ',
        type: 'Ui/Ux Design',
        description:
            'A travel planning app is an application for booking travel reservations, tracking loyalty points, and browsing travel packages. A travel planning ...',
        imageUrl: Design,
        projectUrl: '',
    },
    {
        id: 5,
        title: 'Nilkanth Medical Store',
        type: 'App Development',
        description:
            'NMS is a platform for buying medicine, Stationaries, cosmetics and other Herbal products at reasonable price from your Home...',
        imageUrl: App,
        projectUrl: '',
    },
    {
        id: 6,
        title: 'Guardian wheels',
        type: 'Ui/Ux Design',
        description:
            'Guardian Wheel is a platform for parents that helps ensure their childrens safety...',
        imageUrl: Design,
        projectUrl: 'https://www.figma.com/proto/tjb3uPS3MgrPmpiHyVSQ4G/Guardian-wheels?type=design&node-id=71-25&t=rCTgVA7zFM9MzQm7-0&scaling=scale-down&page-id=0%3A1',
    },
];




const categories = ['All', 'Website', 'Ui/Ux Design', 'App Development'];


export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All'); // Defined selectedCategory here

    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'All') return true;
        return project.type === selectedCategory;
    });


    return (
        <div id='portfolio' >
            <section>
                <div className="flex justify-center mt-5">
                    <div className="flex items-center">
                        <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
                        <h1 className="text-xl smm:text-2xl flex-shrink-0 font-bold">PORTFOLIO</h1>
                        <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
                    </div>
                </div>
                <p className='w5/12 text-center text-xl smm:text-2xl text-custom-gray mt-5 smm:mt-10 font-semibold '>Explore some of the projects I have worked on.</p>


                <div className="container mx-auto px-4 mt-10">
                    <div className="flex flex-row justify-center mb-4 ">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`mx-1 py-1 px-2 text-sm font-medium rounded-md   sm:mx-2 smm:py-2 smm:px-4 sm:px-6 ${selectedCategory === category
                                    ? 'bg-custom-red text-white'
                                    : 'text-gray-700 border border-gray-300 hover:bg-gray-200'
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "> {filteredProjects.map((project) => (
                        <div key={project.id} className="group shadow-md hover:shadow-lg">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-26 h-20 p-4  object-cover rounded-md transition duration-200 ease-in-out "
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <h4 className='-text-xl font-bold text-gray-700 mb-2'>Project-Type: {project.type}</h4>
                                <p className="text-sm font-semibold text-gray-700 mb-4">{project.description}</p>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-2 text-sm font-semibold rounded-md text-custom-red hover:bg-red-200"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>





        </div>
    )
}