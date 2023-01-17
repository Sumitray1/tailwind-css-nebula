import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import OurWork from "./OurWork";
import WhyUs from "./WhyUs";
function About() {
  return (
    <Layout>
      {/* <div>
        <Intro />
      </div> */}
      <div className="p-32">
        <OurWork />
        <WhyUs />
      </div>
    </Layout>
  );
}
export default About;
