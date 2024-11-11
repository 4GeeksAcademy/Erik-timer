import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

// PrevTime lo usamos para saber el estado anterior del componente y poder actualizarlo con +1 cuando llegue al volr deseado por ejemplo cada 60 segundos añadimos +1 a los minutos

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                let { hours, minutes, seconds } = prevTime;

                seconds += 1;
                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                }
                if (hours === 24) {
                    hours = 0;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        // el ,1000 al final es para ejecutarlo cada 1 segundo


        return () => clearInterval(interval);
    }, []);

    
    // El padStart sirve para poner digitos de 2 numeros (y empezamos en 0)
    const Times = (unit) => {
      return unit.toString().padStart(2, '0');
  };

    return (
        <div className="counter px-5 font-family-monospace">
            <div className="icon border-bottom border-white px-2 font-monospace"><i class="fa-solid fa-clock"></i></div>
            <div className="hour border-bottom border-white px-2 font-monospace">{Times(time.hours)}</div>
            <div className="separator border-bottom border-white font-monospace">:</div>
            <div className="minute border-bottom border-white px-2 font-monospace">{Times(time.minutes)}</div>
            <div className="separator border-bottom border-white font-monospace">:</div>
            <div className="second border-bottom border-white px-2 font-monospace">{Times(time.seconds)}</div>
        </div>
    );
};

export default Timer;