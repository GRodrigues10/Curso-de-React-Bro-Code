import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }
        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <>
            <div className='stopwatch'>
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button className='start-button' onClick={start}>Start</button>
                    <button className='reset-button' onClick={reset}>Reset</button>
                    <button className='stop-button' onClick={stop}>Stop</button>
                </div>
            </div>
        </>
    );
}

export default Stopwatch;