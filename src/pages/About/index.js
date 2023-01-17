import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import OurWork from "./OurWork";
function About() {
  return (
    <Layout>
      {/* <div>
        <Intro />
      </div> */}
      <div>
        <OurWork />
      </div>
      <div className="flex">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_bph802nj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_1lw2izrp.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>

        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_rMIWDc0fSB.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </Layout>
  );
}
export default About;
