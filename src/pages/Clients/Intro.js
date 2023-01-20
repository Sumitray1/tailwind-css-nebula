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
          <h1 className="text-7xl z-10 font-bold text-white   mt-24 mb-2 tracking-wider	-ml-24 mob:text-primary mob:ml-auto mob:text-4xl mob:border-secondary mob:pt-28 mob:px-2 mob:leading-snug">
            If you<span className="text-secondary"> don’t care,</span> <br />
            your customer <span className="text-secondary">never will</span>
          </h1>
          <p className="text-[#848181] -ml-24 mt-10 pl-4 mob:ml-0 mob:mt-0 mob:px-2">
            “You’ll never have a product or price advantage again. They can be
            easily duplicated,
            <br /> but a strong customer service culture can’t be copied.”
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
