import React from "react";
import { Col, Row, Divider } from "antd";
import { useNavigate } from "react-router-dom";
function Footer() {
const navigate = useNavigate();
  function handleClick(z){
  if (z==="Home")navigate('/')
    else if(z==="Shop")navigate('/Shop')
     else if(z==="About")navigate('/About')
       else if(z==="Contact")navigate('/Contact')
  }

  return (
    <>
      <div className="footer">
        <Divider />
        <Row >
          <Col span={8}>
            <div className="footer-1">
              <Row>
                <Col className='spanFurn' span={24} >
                  <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                    Furniro.
                  </span>
                </Col>
                <Col style={{ color: "#9F9F9F", fontSize: "1rem" }}>
                  <p>400 University Drive Suite 200 Coral </p>
                  <p>Gables,</p>
                  <p>FL 33134 USA</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={16}>
            <div className="footer-2">
              <div className="f2-a">
                <ul style={{ listStyle: "none" }}>
                  <li style={{cursor:"default"}}>Links</li>
                  <li onClick={() => handleClick("Home")}>Home</li>
                  <li onClick={() => handleClick("Shop")}>Shop</li>
                  <li onClick={() => handleClick("About")}>About</li>
                  <li onClick={() => handleClick("Contact")}>Contact</li>
                </ul>
              </div>

              <div className="f2-b">
                <ul style={{ listStyle: "none" }}>
                  <li>Help</li>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>

              <div className="f2-c">
                <ul style={{ listStyle: "none" }}>
                  <li>Newsletter</li>
                  <li><input type="email" placeholder="Enter Your Email Address"></input>
                    <button type="button">SUBSCRIBE</button>
                  </li>
                </ul>


              </div>
            </div>
          </Col>
        </Row>
        <Divider />
        <footer>2023 furino. All rights reserved</footer>
      </div>

    </>
  );
}

export default Footer;
