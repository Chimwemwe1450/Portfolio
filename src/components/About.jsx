import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20" 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a hard working person who is always looking for new challenges and 
          improving my skills. The languages I have learnt are the following: HTML, CSS, JavaScript, React.js for front end. Python, MongoDB, Node.js, Express.js, Ionic, Angular, TypeScript 
          for backend development.  
        </p>

        <br />

        <p className="text-xl">
         I have worked for 3 companies during my time in the industry. 
         Executive Lis where I worked as a front end developer for 1 year,
         focusing on design briefs and dashboard administration.

         UCpro where I worked as a front end developer for 1 year in an agile development environment, with a team of 5 international developers. I also served as a team leader for 2 months, overseeing the development of a web application. 
         
         Lavalamp Labs where I have worked for 1 year, using technologies such as Ionic, Angular, and TypeScript to build mobile applications. 
        </p>

        
      </div>
    </div>
  );
};

export default About;
