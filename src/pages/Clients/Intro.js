import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen z-0 mob:hidden ">Intro</div>
      <div className="flex justify-around items-center mob:flex-col-reverse">
        <div className="w-1/3 mt-72 pr-10 mob:w-full  mob:mt-14">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_7x1n4mcg.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="z-10">
          <h1 className="text-7xl z-10 font-bold text-white   mt-24 mb-2 tracking-wider	-ml-24 mob:text-primary mob:ml-auto mob:text-6xl mob:border-secondary">
            If you<span className="text-secondary">don’t care,</span> <br />
            your customer never will
          </h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
