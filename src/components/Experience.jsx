import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import ionic from "../assets/ionic.png";
import typescript from "../assets/Typescript.png";
import android from "../assets/Android.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: ionic,
      title: "Ionic",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: android,
      title: "Android",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="mt-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div className="p-4">
          <p className="mb-4">Links to projects I have worked on GitHub:</p>
          <a href="https://github.com/Chimwemwe1450/Vault-Market" className="block mb-4">Vault Market</a>
          <a href="https://github.com/Chimwemwe1450/Ubuntu-Invest" className="block">Ubuntu Invest</a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
