import LeftRectangle from '../assets/icons/Rectangle 3.svg';
import RightRectangle from '../assets/icons/Rectangle 2.svg';
import Mobile from '../assets/icons/FaMobileAlt.svg';
import Web from '../assets/icons/MdOutlineDesktopMac.svg';
import Graphics from '../assets/icons/RiImageEditFill.svg';
import Ui from '../assets/icons/RiPagesLine.svg';
import Halfcircle from '../assets/icons/service-element-3 1.svg'
import features from '../assets/images/feature.png'
import support from '../assets/icons/support.svg'
import coding from '../assets/icons/coding.svg'
import update from '../assets/icons/updates.svg'
import line from '../assets/icons/Test line.svg'


const boxesData = [
    {
        id: 1,
        image: Mobile,
        title: 'Mobile Apps',
        paragraph: 'Offered services in Mobile app developement with robust attributes and eye catching graphics...',
    },
    {
        id: 2,
        image: Web,
        title: 'Web Development',
        paragraph: 'Our web developers can create custom website/store solutions for your business needs to boost your online presence...',
    },
    {
        id: 3,
        image: Graphics,
        title: 'Graphics Design',
        paragraph: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and... ',
    },
    {
        id: 4,
        image: Ui,
        title: 'Ux/Ui Design',
        paragraph: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, ...',
    },

]

const reasons = [
    {
        heading: 'Lifetime Support',
        description:
            'Lifetime Support is our unwavering commitment to being your trusted partner throughout your journey. With our Lifetime Support service, you can count on us to be there every step of the way.',
        picture: support,
    },
    {
        heading: 'No Coding Required',
        description:
            'With a focus on simplifying your tech-related needs and providing hassle-free solutions, working with me means you can leave the coding to the experts and focus on what you do best.',
        picture: coding,
    },
    {
        heading: 'Regular Updates',
        description:
            'In my commitment to providing exceptional service and ensuring a successful collaboration, I prioritize clear and consistent communication through regular updates.',
        picture: update,
    },
];




export default function Service() {

    return (
        <div id='service'>

            <section>
                <div className=' bg-custom-2-gray h-full'>
                    <div className="flex justify-center mt-5">
                        <div className="flex items-center mt-10">
                            <img src={LeftRectangle} alt="Left Rectangle" className="mr-1 smm:mr-3" />
                            <h1 className="text-xl smm:text-2xl flex-shrink-0 text-white font-bold">SERVICE</h1>
                            <img src={RightRectangle} alt="Right Rectangle" className="ml-1 smm:ml-3" />
                        </div>
                    </div>
                    <p className='w-full lg:px-10 text-center text-sm sm:text-2xl text-white mt-5 smm:mt-10 font-semibold '>Customer service is hard work. Some days are rewarding and energizing. Others are
                        challenging, making it difficult to feel like what you do is important. </p>
                    <div className="container mx-auto py-12  px-2  lg:px-20  xl:px-40  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {boxesData.map((data) => (
                            <div key={data.id} className="group xl:gap-8 opacity-60 rounded-3xl border border-solid border-gray-200 hover:shadow-2xl bg-custom-3-gray hover:opacity-100  transition duration-200  lg:hover:-translate-y-10  ">
                                <div className="flex items-center justify-center relative mt-20">
                                    {/* Add a blue circle as background */}
                                    <div className="absolute  w-20 h-20 rounded-full bg-custom-4-gray opacity-80 z-10"></div>

                                    {/* Image with centered and fixed size */}
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="mx-auto w-14 h-14  object-cover z-20"
                                    />

                                </div>
                                <div className="p-4 ">
                                    <h3 className="text-xl text-center text-white font-bold mb-2">{data.title}</h3>
                                    <p className="text-sm text-white text-center mb-4">{data.paragraph}</p>
                                    <a
                                        href="#" // Replace with your "Read More" link
                                        className="inline-block px-3  py-2 text-sm float-right mb-10  font-semibold rounded-md text-white  border-b-2 border-red-500 opacity-50 hover:border-b-4 hover:opacity-100 transition duration-200"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={Halfcircle} alt="Right Rectangle" className=" -mt-12 " />
                </div>
            </section>


            <section>
                <div class="w-100% bg-custom-blue ">
                    <div class="items-center">
                        <div class="flex flex-wrap xl:container  xl:mx-auto  ">
                            <div class="w-full lg:w-2/5 bg-red   flex items-center justify-center lg:order-0">
                                <img src={features} alt="features" class="lg:w-full p-4 mt-10 lg:mb-10" />
                            </div>

                            <div className=" sm:container lg:w-3/5 items-center justify-center mx-auto p-2 lg:mt-5">
                                <h2 className="-text-xl smm:text-xl md:text-3xl lg:text-xl xl:text-2xl font-semibold text-left text-custom-red mt-7">WHY WORK WITH ME</h2>
                                <h3 className="text-2xl smm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold text-left ">Best Result With Top User Experience</h3>
                                <p className="text-sm  smm:text-xl md:text-2xl lg:text-xl 2xl:text-2xl text-left text-custom-grap lg:mb-0 mb-7">In a world filled with choices, what sets me apart? Here are a few compelling reasons why you should consider working with me:</p>
                                <div className="grid grid-cols-1 gap-4 lg:gap-0">
                                    {reasons.map((reason) => (

                                        <div key={reason.heading} className="  shadow-md lg:shadow-none flex flex-col  items-center">
                                            <div className="lg:flex lg:flex-row">
                                                <div className="flex items-top justify-center ">
                                                    <img
                                                        src={reason.picture}
                                                        alt={reason.heading}
                                                        className="w-24 h-24 mb-0 "
                                                    />
                                                </div>
                                                <div className="lg:grid lg:grid-cols-1 lg:col-span-2 p-2">
                                                    <h4 className="text-xl 2xl:text-2xl font-bold text-center lg:text-left ">{reason.heading}</h4>
                                                    <p className="text-gray-60 2xl:text-xl ">{reason.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <img src={line} alt="Right Rectangle" className="w-0 lg:w-14 lg:-mt-10 " />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}