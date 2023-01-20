import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen z-0 mob:hidden ">Intro</div>
      <div className="flex justify-around items-center mob:flex-col-reverse">
        <div className="w-1/3 mt-72 pr-10 mob:w-full  mob:mt-14">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_4vyzn06l.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="z-10 ">
          <h1 className="text-8xl z-10 font-bold text-secondary border-b-2 pb-3  mt-24 mb-2 tracking-wider	-ml-24 mob:text-primary mob:ml-auto mob:text-6xl mob:border-secondary mob:pt-28 ">
            Nebula
          </h1>

          <h1 className="z-10 text-white -ml-24 mob:text-secondary mob:ml-auto">
            <span className="border-r-2 pr-2 mob:border-secondary ">
              Trustworthy
            </span>
            <span className="border-r-2 px-2 mob:border-secondary">
              Dedicated
            </span>
            <span className=" pl-2">Budget-friendly</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
