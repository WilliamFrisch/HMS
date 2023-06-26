import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="nav-title">Centeral HealthCare</h1>

        <section id="mission-statements" className="mission-statements">
          <h2>Mission Statements / About Us</h2>
          <p>
            Our mission as students was to see what we can make with our skills
            we learned in school and show employers our skill set. We wanted to
            create this project in hopes of making something out of the norm.
          </p>
        </section>

        <section id="descripition-of-product" className="description-of-product">
          <h2>Brief Description of Product</h2>
          <p>
            This is a website that allows users to search for doctors Based on
            patients conditions, system will update client with list of
            recommended doctors/ specialists that they may want to see. Patients
            to be set up appointments with doctors that app recommends Patients
            need to be able see doctors prognoses / prescription any notes left
            in general notes on the case as to what doctor found that would lead
            that diagnosis / prescription.
          </p>
        </section>

        {/* <section id="demo video"
          <h2>Demo Video</h2>
          <iframe 
          width="560"
          height="315"
          src=""
          title="Demo Video"
          frameBorder="0"
          allowFullScreen"
        ></iframe> */}

        {/* <section id="request-demo">
        <h2>Request a Demo</h2>
        <p>
            To request a demo of our product, please email us at{' '}
            <a href="mailto:">display of email goes here.</a>
    </p> </section> */}

        <section id="sign-in-up" className="sign-in-up">
          <h2>Sign In/ Sign Up</h2>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
