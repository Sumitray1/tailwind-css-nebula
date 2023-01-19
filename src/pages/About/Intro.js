import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen z-0">Intro</div>;
      <div className="flex justify-around items-center">
        <div className="w-1/3 mt-72 pr-10 ">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_4vyzn06l.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="z-10">
          <h1 className="text-8xl z-10 font-bold text-white border-b-2 pb-3  mt-24 mb-2 tracking-wider	-ml-24">
            Nebula
          </h1>

          <h1 className="z-10 text-white -ml-24">
            <span className="border-r-2 px-3">Trustworthy</span>
            <span className="border-r-2 px-3">Dedicated</span>
            <span className=" px-3">Budget-friendly</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
