import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="flex flex-col space-y-8 ">
        <h1 className=" text-primary text-6xl font-semibold">
          The Best <b className="text-secondary">marketing</b>
        </h1>
        <h1 className=" text-primary text-4xl font-semibold">
          is telling a story people
        </h1>

        <h1 className="text-secondary text-4xl font-semibold">want to hear</h1>
        <button className="px-28 py-3 bg-secondary text-white max-w-max rounded">
          Get Started
        </button>
      </div>
      <div className="">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_01jwptn4.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
export default Intro;
