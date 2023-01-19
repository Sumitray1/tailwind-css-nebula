import React from "react";

function LocationInfo() {
  const socailmediaIcon = [
    {
      icon: "ri-facebook-fill",
      link: "https://www.facebook.com/profile.php?id=100004349836670",
    },
    {
      icon: "ri-instagram-line",
      link:"https://www.instagram.com/ray_sumit_/"

    },
    { icon: "ri-twitter-line" },
    {
      icon: "ri-linkedin-box-fill",
      link:"https://www.linkedin.com/in/sumit-ray-0b992b215/"
    },
    {
      icon: " ri-github-fill",
    link:"https://github.com/Sumitray1"},
  ];
  const addressDetails = [
    {
      title: "Visit Us : ",
      details: "Tinkune, Kathmandu, Nepal ",
      icon: "ri-map-pin-2-fill",
    },
    {
      title: " Mail Us :",
      details: "sumitray206@gmail.com",
      icon: "ri-mail-line",
    },
    {
      title: "Call Us : ",
      details: " +977-9804838340",
      icon: "ri-phone-fill",
    },
  ];
  return (
    <div className="bg-primary rounded-l-lg flex flex-col gap-y-10  p-20 text-white  mob:px-4 mob:py-10 mob:rounded-none">
      <h1 className="font-semibold text-4xl ">Reach Out To Us</h1>
      <p className="">
        We at Team Nebula create mobile apps, develop websites, design graphics
        and create user interfaces and user experience designs.
      </p>
      <div className=" flex flex-col items-left gap-y-16">
        {addressDetails.map((address) => {
          return (
            <div className="flex gap-x-10 item-center ">
              <div className="text-secondary text-2xl bg-[#302e2e]  rounded w-16 text-center py-2 shadow  ">
                <i class={address.icon} ></i>
              </div>
              <div className="flex flex-col">
                <h1>{address.title}</h1>
                <p>{address.details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className=" border-b-2 border-white px-3 pb-8 mt-3">
        Stay connected with us on social media
      </h1>
      <div className="mt-2 flex items-center justify-between px-2">
        {socailmediaIcon.map((icon) => {
          return (
            <div className="text-3xl  text-secondary  bg-[#302e2e] h-16 w-16 text-center  rounded-full flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mob:h-11 mob:w-11 mob:pt-1">
              <a href={ icon.link}  >
              <i class={icon.icon}></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationInfo;
