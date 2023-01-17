import React from "react";
import Layout from "../../components/Layout";
import LocationInfo from "./LocationInfo";
import ContactFomr from "./ContactFomr";
function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-2 px-32 mt-24 h-screen ">
        <LocationInfo />
        <ContactFomr />
      </div>
    </Layout>
  );
}
export default Contact;
