import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a  hard working person who is always looking for new challenges and 
          improving my skills. The languages  i have learnt are the following : html ,css,  javascript, react.js for front end. Python, Mongodb , Nodejs , Expressjs 
          for backend development.  
        </p>

        <br />

        <p className="text-xl">
         I have  worked for  2  companies during my time in the industry. 
         Executive Lis  where  i worked as  a front end developer for 1 year.
         where i worked on doing desgin briefs and  dashboard administration.
         and  UCpro where i worked as a  front end developer for  1 year  working 
         in a agile development environment. with a team of 5 international developers where
         by i worked as  a team leader  for 2 months and  oversaw the  development  of  a  web application.
        </p>
      </div>
    </div>
  );
};

export default About;
