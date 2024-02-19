import React, { useState, useEffect } from 'react'

function Title() {
    const [text, setText] = useState('')
    const [words, setWords] = useState(['Designer', 'Developer'])
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (letterIndex < words[currentWordIndex].length) {
                // Add next letter
                setText(prevText => prevText + words[currentWordIndex][letterIndex]) 
                setLetterIndex(letterIndex + 1)
            } else {
                // Move to next word or restart (circularly)
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
                // Clear text before displaying next word
                setText('')
                // Reset letter index for the next word
                setLetterIndex(0)
            }
        }, 500); // Slower typing speed of 50 milliseconds

        return () => clearInterval(intervalId)
    }, [currentWordIndex, letterIndex, words])

    return (
        <h3 className="text-white text-5xl mt-1 lg:mt-4 flex items-center">
            <span className="white font-semibold mr-4">a</span>
            <span id="typedText" class="text-custom-red font-semibold overflow-hidden"
            >{text}</span>
            <span className="text-custom-red ml-7">|</span>
        </h3>
    )
}

export default Title
