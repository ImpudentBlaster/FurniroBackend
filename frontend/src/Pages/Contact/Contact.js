import React from "react";
import img1 from "../../Assets/Images/HomeFur1.png";
import img2 from "../../Assets/Images/HomeFur2.png";
import img3 from "../../Assets/Images/HomeFur3.png";
import img4 from "../../Assets/Images/HomeFur4.png";
import img5 from "../../Assets/Images/HomeFur5.png";
import img6 from "../../Assets/Images/HomeFur6.png";
import img7 from "../../Assets/Images/HomeFur7.png";
import img8 from "../../Assets/Images/HomeFur8.png";
import img9 from "../../Assets/Images/HomeFur9.png";
import { FaLocationDot } from "react-icons/fa6";
import PageIndicator from "../../Components/PageIndicator";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import Details from "../../Components/Details";
function Contact() {
  return (
    <>
      <PageIndicator page="Contact" />
      <div className="contact-content container">
        <div className="contact-text">
          <p>Get In Touch With Us</p>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="contact-form">
          <div className="contact-address">
            <div className="contact-address-1">
              
              <span><FaLocationDot style={{fontSize:"1.75rem"}}/>Address</span>
              <p>236 5th SE Avenue, </p>
              <p>New York NY10000,</p>
              <p> United States</p>
            </div>
            <div className="contact-address-2">
              
              <span><FaPhoneAlt style={{fontSize:"1.75rem"}}/>Phone</span>
              <p>Mobile: +(84) 546-6789 </p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div className="contact-address-3">
              
              <span><BsClockFill style={{fontSize:"1.75rem"}}/>Working Time</span>
              <p>Monday-Friday: 9:00 - 22:00 </p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="contact-input-bar">
            <span>Your Name</span>
            <input placeholder="Abc" type="text" />
            <span>Email Address</span>
            <input placeholder="Abc@gmail.com" type="email" />
            <span>Subject</span>
            <input type="text" placeholder="This is an optional"/>
          </div>
        </div>
<div className='contact-submit-button'>
      <button className="contact-submit-button">Submit</button>
      </div>
      </div>

      <Details/>
    </>
  );
}

export default Contact;
