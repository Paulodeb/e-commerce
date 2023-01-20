import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'Feburary, 20, 2023';

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setSeconds(Math.floor((time / 1000) % 60));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));

    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);

    }, []);

  return (
    <div className='timer'>
        <div className='timer-container'>
            <div className='timer-item'>
                <h1>{hours}:{minutes}:{seconds}</h1>
            </div>
        </div>
    </div>
  )
}

export default Timer