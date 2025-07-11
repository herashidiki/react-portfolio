import React, { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStar] = useState([]);
  const [meteros,setMeteros] = useState([])
  useEffect(() => {
    generateStar();
    generatMeteros();

 const handleResize = () =>{
  generateStar();
 }

 window.addEventListener("resize" ,handleResize)

 return () => window.removeEventListener("resize",handleResize)
  }, []);

  const generateStar = () => {
    const numberOfStar = Math.floor(
      (window.innerHeight * window.innerWidth) / 2000
    );

    const newstars = [];
    for (let i = 0; i < numberOfStar; i++) {
      newstars.push({
        id: i,
        size: Math.floor(Math.random()*3)  + 1,
        x: Math.random() * innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.5,
        animation: Math.random() * 4 + 2,
      });
    }

    setStar(newstars);
  };

  const generatMeteros = () => {
    const numberOfMeteros = 4

    const newMeteros = [];
    for (let i = 0; i < numberOfMeteros; i++) {
      newMeteros.push({
        id: i,
        size: Math.floor(Math.random()*3)  + 1,
        x: Math.random() * innerWidth,
        y: Math.random() * 40 ,
        delay: Math.random() * 15,
        animation: Math.random() * 3 + 3,
      });
    }

    setMeteros(newMeteros);
  };




  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{width:"100vw",
      height:"100vh",
      position:"fixed",
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle "
          style={{
            position:"absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            animationDuration:` ${star.animationDuration}s`,
          }}
        />
      ))}

       {meteros.map((meteros) => (
        <div
          key={meteros.id}
          className="meteor animate-meteor "
          style={{
            position:"absolute",
            width: `${meteros.size * 50 }px` ,
            height: `${meteros.size * `1` }px`,
            left: `${meteros.x}px`,
            top: `${meteros.y}px`,
            animationDelay: meteros.delay,
            animationDuration:` ${meteros.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
