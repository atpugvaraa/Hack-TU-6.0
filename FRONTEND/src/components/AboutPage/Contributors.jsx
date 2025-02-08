"use client";
import React from 'react'
import { useState, useEffect } from "react";

export default function ExecutiveBoard() {
  const [executives, setExecutives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const Data =  [
      {
        "name": "Member 1",
        "role": "Role",
        "image": "/images.png"
      },
      {
        "name": "Member 2",
        "role": "Role",
        "image": "/images.jpg"
      },
      {
        "name": "Member 3",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 4",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 5",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 6",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 7",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 8",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 9",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 10",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 11",
        "role": "MEMBER",
        "image": "/images.jpg"
      },
      {
        "name": "Member 12",
        "role": "MEMBER",
        "image": "/images.jpg"
      }
  ];
    setExecutives(Data);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + executives.length) % executives.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % executives.length);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-16 z-20 relative">
          CONTRIBUTORS
        </h2>
        <div className="relative flex justify-center items-center z-0">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div
            className="relative w-full h-[300px] flex items-center justify-center"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: `rotateY(${currentIndex * -30}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {executives.map((executive, index) => {
                const angle = index * (360 / executives.length);
                return (
                  <div
                    key={index}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(480px)`,
                    }}
                  >
                    <div className="w-64 bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-4 text-center shadow-lg">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={executive.image}
                          alt={executive.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-bold">{executive.name}</h3>
                      <p className="text-gray-300">{executive.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

