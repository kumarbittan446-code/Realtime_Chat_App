// import React from "react";

// export default function AuthImagePattern({ title, subtitle }) {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""}`}
//             ></div>
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function AuthImagePattern({ title, subtitle }) {
  const allImages = Array.from(
    { length: 20 },
    (_, i) => `https://i.pravatar.cc/100?img=${i + 1}`,
  );

  const getRandomImages = () => {
    return [...allImages].sort(() => 0.5 - Math.random()).slice(0, 8);
  };

  const [images, setImages] = useState(getRandomImages());
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setImages(getRandomImages());
        setFade(true); // fade in
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      {/* Inline styles */}
      <style>
        {`
          .fade {
            transition: opacity 0.3s ease-in-out;
          }
          .fade-out {
            opacity: 0;
          }
          .fade-in {
            opacity: 1;
          }
        `}
      </style>

      <div className="max-w-md text-center">
        {/* 8-image box */}
        <div
          className={`grid grid-cols-4 gap-4 mb-8 fade ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="user"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-primary"
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
}
