import React from 'react'

const Hero = () => {
  return (
    <div id="heroSection">
      <div className="flex flex-col justify-center h-full px-14">
        <div className=" mb-2">
          <h1 className="text-black text-5xl font-bold mobile:text-center">
            Let’s Build
          </h1>
          <h1 className="text-primary text-5xl font-bold mobile:text-center">
            Your Dream House
          </h1>
        </div>
        <p className=" text-xl text-darkGrey mobile:text-center">
          Design Buildings, Interiors, and Landscapes <br />
          in Just a Few Clicks
        </p>
      </div>
    </div>
  );
}

export default Hero
