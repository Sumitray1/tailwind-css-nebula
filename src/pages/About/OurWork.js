import React from "react";

function OurWork() {
  const work = [
    {
      title: "Web Development",
      src: "https://assets8.lottiefiles.com/packages/lf20_0whtym8p.json",

      description:
        "Web development is the process of creating and maintaining websites. It involves a combination of client-side and server-side programming, as well as the design and layout of the website",
    },
    {
      title: "Mobile App Development",
      src: "https://assets2.lottiefiles.com/packages/lf20_UbRRWYzGyy.json",
      description:
        "App development refers to the process of creating software applications that run on mobile devices, such as smartphones and tablets. This process typically involves designing, coding, testing, and deploying the app.",
    },
    {
      title: "UI/UX  Design",
      src: "https://assets8.lottiefiles.com/packages/lf20_CWJuurYyXv.json",
      description:
      "UI/UX design refers to the process of designing the user interface and user experience of a product, such as a website or mobile app. ",
    },
    
    {
      title: "Graphic Design",
      src: "https://assets4.lottiefiles.com/packages/lf20_w5hernhv.json",
      description:
        "Graphic design is the process of visual communication and problem-solving through the use of typography, photography, and illustration.",
    },
  ];
  return (
    <div>
      <h1 className="text-7xl font-semibold text-primary mb-20 mob:text-5xl mob:leading-snug">
        Our Team <span className="text-secondary">Specilization</span>
      </h1>
      <div className="grid grid-cols-4 gap-x-12 mob:grid-cols-1  ">
        {work.map((work) => {
          return (
            <div className=" rounded p-6 boxshadow mb-20">
              <h1 className="text-semibold text-center text-2xl mb-8">
                {work.title}
              </h1>
              <div className="h-36 mb-12 ">
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
      <h1 className=" text-7xl font-semibold text-primary mb-20 mob:text-5xl mob:leading-snug">
        What makes us <spain className="text-secondary"> different?</spain>
      </h1>
    </div>
  );
}

export default OurWork;
