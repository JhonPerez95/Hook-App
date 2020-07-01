import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(' :D ');
      const coors = { x: e.x, y: e.y };
      setCoors(coors);
    };

    console.log('Componente Montado');

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('Componente Desmontado');
    };
  }, []);

  return (
    <>
      <h1> Prueba del Mensaje</h1>
      <p> x: {x}</p>
      <p> y:{y} </p>
    </>
  );
};

export default Message;
