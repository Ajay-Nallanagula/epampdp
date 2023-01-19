import { useState, useEffect } from "react";

const WordByWord = () => {
    const [input, setInput] = useState()
    const [text, setText] = useState([])
    const [isError, setError] = useState(false)
    const [word, setWord] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault()
        const wordArray = input.split(" ")
        if (!wordArray?.length || wordArray.length === 1) {
            setError(true)
        } else {
            setText(wordArray)
            setWord(1)
            setInput('')
            setError(false)
        }

    }

    useEffect(() => {
        const timedOut = setTimeout(() => setWord(word + 1), 500)
        return () => clearTimeout(timedOut)
    }, [word, text])


    return (
        <form onSubmit={onSubmit}>
            {isError && <div>
                <ol>
                    <li>Correct text</li>
                    <li>Text should not be emptyn</li>
                    <li>text should have more than 2 words</li>
                </ol>
            </div>}
            <div>
                <input type='text'
                    placeholder="enter text here"
                    onChange={(e) => setInput(e.target.value)} />
            </div>
            <div>
                <button>Submit</button>
            </div>
            {!isError && <div>
                {text.slice(0, word).map(item => {
                    return <span>{`${item} `}</span>
                })}
            </div>}
        </form>
    )
}

export default WordByWord
