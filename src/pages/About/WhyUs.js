import React from "react";

function WhyUs() {
  const motive = [
    {
      title: "Innovative and Passionate",
      src: "https://assets10.lottiefiles.com/packages/lf20_bph802nj.json",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      src: "https://assets10.lottiefiles.com/packages/lf20_rMIWDc0fSB.json",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      src: "https://assets10.lottiefiles.com/packages/lf20_1lw2izrp.json",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-12 ">
        {motive.map((work) => {
          return (
            <div className=" rounded p-6 ourwork-boxshadow mb-20">
              <h1 className="text-semibold text-center text-2xl mb-8">
                {work.title}
              </h1>
              <div className="h-72 mb-12 ">
                <lottie-player
                  src={work.src}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p>{work.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyUs;
