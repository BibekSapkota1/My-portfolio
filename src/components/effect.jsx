import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";


function Title() {


    return (
        <div className="text-white text-5xl mt-1 lg:mt-4 flex items-center">
            <h3 className="white font-semibold mr-4">a</h3>
            <span id="typedText" className="text-custom-red font-semibold overflow-hidden">
                <Typewriter words={['Developer', 'Designer']} loop={0} />
            </span>
            <span className="text-custom-red ml-2">
                <Cursor cursorStyle='|' />
            </span>
        </div>
    );
}

export default Title;
