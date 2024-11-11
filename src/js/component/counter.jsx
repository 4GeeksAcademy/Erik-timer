//Imports
import React, { useEffect, useState } from 'react';



const Timer = () => {

  const [time, setTime] = useState({
    fifth: 9,
    fourth: 9,
    third: 9,
    second: 9,
    first:0
  });

  // PrevTime lo usamos para saber el estado anterior del componente y poder actualizarlo con +1 cuando llegue al volr deseado por ejemplo cada 60 segundos añadimos +1 a los minutos

useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        let { fifth, fourth, third, second, first,  } = prevTime;

        first += 1;
        if (first === 10) {
          first = 0;
          second += 1;
        }
        if (second === 10) {
          second = 0;
          third += 1;
        }
        if (third === 10) {
          third = 0;
          fourth += 1;
        }
        if (fourth === 10) {
          fourth = 0;
          fifth += 1;
        }
        if (fifth === 10) {
          fifth = 0;
       }


        return { first, second, third,fourth,fifth };
      });
    }, 1000);
// el ,1000 al final es para ejecutarlo cada 1 segundo


return () => clearInterval(interval);
  }, []);


  // El padStart sirve para poner digitos de 1,2,3... unidades etz (en este caso 1)
  const Times = (time) => {
    return time.toString().padStart(1, '0');

  };

    
  return (
    <div className="counter px-5 font-family-monospace">
      <div className="icon border-bottom border-white px-2 font-monospace"><i class="fa-solid fa-clock"></i></div>
      <div className="hour border-bottom border-white px-2 font-monospace">{Times(time.fifth)}</div>
      <div className="minute border-bottom border-white px-2 font-monospace">{Times(time.fourth)}</div>
      <div className="second border-bottom border-white px-2 font-monospace">{Times(time.third)}</div>
      <div className="second border-bottom border-white px-2 font-monospace">{Times(time.second)}</div>
      <div className="second border-bottom border-white px-2 font-monospace">{Times(time.first)}</div>
    </div>
  );
};

export default Timer;