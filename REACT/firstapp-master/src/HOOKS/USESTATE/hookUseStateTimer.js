import { useState } from 'react'
import './hook.css'

const HookUseStateTimer = () => {
    const [time, setTime] = useState(0)


    const handleStartBtnClick = () => {
        window.myTimer = setInterval(() => { setTime((val) => val + 1) }, 1000)
    }
    const handleStopBtnClick = () => {
        clearInterval(window.myTimer)
    }
    const handleResetBtnClick = () => {
        clearInterval(window.myTimer)
        setTime(0)
    }

    return (
        <>
            <header>
                <h1>TIMER</h1>
                <div><span>{Math.trunc(time / 60)} mins</span>: <span>{time % 60} secs</span></div>
            </header >
            <main className="container">
                <button className='flex-item' onClick={handleStartBtnClick}>START</button>
                <button className='flex-item' onClick={handleStopBtnClick}>STOP</button>
                <button className='flex-item' onClick={handleResetBtnClick}>RESET</button>
            </main>
        </>
    )
}

export default HookUseStateTimer