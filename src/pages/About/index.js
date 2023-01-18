import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import OurWork from "./OurWork";
import WhyUs from "./WhyUs";
function About() {
  return (
    <Layout>
      <div className="p-32 mob:px-3">
        {/* <Intro /> */}
        <OurWork />
        <WhyUs />
      </div>
    </Layout>
  );
}
export default About;
