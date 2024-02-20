import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import sun from '../assets/icons/Sun.svg'
import Moon from '../assets/icons/Moon.svg'


export default function Dark({ data }) {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    };


    return (
        <div>
            <div className={`  ${darkMode ? 'dark' : ''} ${darkMode ? 'bg-20242d text-white' : 'bg-white text-black '}`} >


                <div className='dark:bg-20242d dark:text-white'>
                    <button onClick={toggleMode} className="absolute md:right-3 z-10  right-3 top-3 dark:text-white text-white px-4 py-2 md:px-5 md:py-2 rounded-full hover:bg-custom-gray transition duration-300 ease-in-out">
                        <span className="inline-flex items-center">
                            {darkMode ? (
                                <span className="mr-1 font-semibold " role="img" aria-label="Moon">🌞 Light  </span>
                            ) : (
                                <span className="mr-1 font-semibold text-black lg:text-white " role="img" aria-label="Sun">🌜Dark </span>
                            )}
                        </span>
                    </button>
                </div>

            </div>
        </div>

    )
}