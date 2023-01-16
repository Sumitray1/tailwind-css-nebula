import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrg from "./MarketingStrg";
function Home() {
  return (
    <Layout>
      <div className=" p-32">
        <Intro />
        <MarketingStrg />
      </div>
    </Layout>
  );
}
export default Home;
