import React, { useEffect, useState } from 'react'
const initialMinute = +(localStorage.getItem('minutes3')) || 3
const initialSecond = +(localStorage.getItem('seconds3')) || 0
const Timer = () => {
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSecond);

    useEffect(() => {
    localStorage.setItem('minutes3', minutes)
    localStorage.setItem('seconds3', seconds)
        let interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval)
                    alert('You missed the last rocket to mars!')
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    });

    const resetTimer = () => {
        setMinutes(3)
        setSeconds(0)
    }



    return (
        <div className="timer">
            <div>
                <h2>
                    Countdown to lift off
                </h2>
            </div>
            <div>
                <div className="time">
                    <p className="minutes">{minutes}</p>
                    <span>:</span>
                    <p className="seconds">{seconds}</p>

                </div>
            </div>
            <button className="cta-btn3" onClick={resetTimer}>Reset timer</button>
        </div>
    )
}
export default Timer