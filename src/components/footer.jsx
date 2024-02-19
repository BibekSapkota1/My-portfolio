import Social_Media from "./Social_Media";


export default function Footer() {
    return (
        <div className="bg-blue-400">
            <div class=" mt-0 flex flex-col items-center ">
                <div class="p-4 w-full lg:w-1/2 container ">
                    <h1 class="text-5xl font-bold text-center mt-10">Bibek</h1>
                    <p class="text-center  -text-xl sm:text-xl lg:text-3xl mt-4 font-semibold text-custom-gray">Kilaboris do not come out unless some of it is useful for the purpose of the person's desire.</p>
                    <div className="flex flex-col items-center mt-4">
                        <Social_Media />
                    </div>

                </div>
            </div>
            <div class="flex flex-col md:flex-row lg:mt-6 md:mt-4">
                <h3 className="w-3/2 ml-3 sm:ml-0 sm:p-4   text-white text-sm sm:-text-xl md:text-xl lg:text-xl mt-4 md:mt-0 p-0 lg:mt-4 flex items-center lg:p-10  flex-1 ">
                    <span className="white font-semibold mr-2">Developed with love by © 2024</span>
                    <span class="text-custom-red font-semibold overflow-hidden">Bibek Sapkota</span>
                </h3>
                <h3 className="  text-white -text-xl md:text-xl   lg:text-xl mt-0 lg:mt-4 p-4 sm:p-2  text-center md:text-right flex-1 lg:p-10  font-semibold ">Terms & Condition Privacy Policy</h3>
            </div>

        </div>
    )
}