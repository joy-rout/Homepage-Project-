import React from "react";
import "./Newsletter.css";
import Footer from "./Images/Newsletter.svg";

const Newsletter = () => {
  return (
    <>
    <div className="newsletter">
      <img className="Footerimg" src={Footer} alt="newsletter" />
      <div className="text-on-image">
        <div className="newsletter-title">Sign up for our newsletter </div>
        <div className="newsletter-text">
          Get latest articles, tips etc related to mental health on your email
          every week because we want to be there for you and celeberate your
          little victories.
        </div>

        <input type="email" id="myEmail" placeholder="Your Email" />
        <button className="submitBtn" onclick="myFunction()">
          Submit
        </button>
      </div>
      
    </div>
    
    <div className="Footer">
        <div className="leftbox">
          <h5>Helpline</h5>
          <br />
          <h6> suicide and crisis helpline</h6>
          <h6>123456789</h6>
        </div>

        <div className="middlebox">
          <h5>Quick Links</h5>
          <br />
          <h6>About Us</h6>
          <h6>FAQ</h6>
          <h6>Contact Us</h6>
        </div>

        <div className="rightbox">
          <h5>Help & Support</h5>
          <br />
          <h6>Write us</h6>
          <h6>terms and condition</h6>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
