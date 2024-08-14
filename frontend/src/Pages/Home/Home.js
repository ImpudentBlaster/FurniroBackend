import React from "react";
import imga from "../../Assets/Images/home-sec-2-1.png";
import imgb from "../../Assets/Images/home-sec-2-2.png";
import imgc from "../../Assets/Images/home-sec-2-3.png";
import img1 from '../../Assets/Images/HomeFur1.png'
import img2 from '../../Assets/Images/HomeFur2.png'
import img3 from '../../Assets/Images/HomeFur3.png'
import img4 from '../../Assets/Images/HomeFur4.png'
import img5 from '../../Assets/Images/HomeFur5.png'
import img6 from '../../Assets/Images/HomeFur6.png'
import img7 from '../../Assets/Images/HomeFur7.png'
import img8 from '../../Assets/Images/HomeFur8.png'
import img9 from '../../Assets/Images/HomeFur9.png'
import HomeProducts from "./HomeProducts";
function Home() {
  return (
    <>
      <div className="home-section-1 ">
        <div className="home-image">
          <div className="image-text">
            <div className="col-3 p-0 img-text-1" style={{ fontWeight: "600" }}>
              New Arrival
            </div>
            <div
              className="col-9 p-0 img-text-2"
              style={{
                color: "#B88E2F",
                fontSize: "3.25rem",
                fontWeight: "700",
              }}
            >
              Discover Our New Collection
            </div>
            <div className="col-9 p-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <button
              className="img-text-button"
              
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <div className="home-section-2 container my-5 ">
        <div className="row mb-5">
          <div
            className="col-12 text-center"
            style={{ color: "#333333", fontWeight: "700", fontSize: "2rem" }}
          >
            Browse The Range
          </div>
          <div
            className="col-12 text-center"
            style={{ color: "#666666", fontSize: "1.25rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="row ">
          <div className="col-4 p-3 ">
            <img className="img-fluid" src={imgc} />
            <p
              className="text-center mt-4"
              style={{ fontWeight: "600", color: "#333333" }}
            >
              Dining
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img className="img-fluid" src={imgb} />
            <p
              className="text-center mt-4"
              style={{ fontWeight: "600", color: "#333333" }}
            >
              Living
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img className="img-fluid" src={imga} />
            <p
              className="text-center mt-4"
              style={{ fontWeight: "600", color: "#333333" }}
            >
              Bedroom
            </p>
          </div>
        </div>
      </div>

      <div className="home-section-3 mb-5 container p-0">
        <div className="row mb-5">
          <div
            className="text-center col"
            style={{ fontSize: "2rem", fontWeight: "700" }}
          >
            Our Products
          </div>
        </div>
        <div className="card-container ">
          <HomeProducts />
        </div>
        <div className="text-center mt-4">
          <button>Show More</button>
        </div>
      </div>

      {/* <div className="home-section-4 container-fluid mb-5">
        <div className="section-4-text">
          <div className="row">
            <div className="col-12 title">50+ Beautiful rooms inspiration</div>
            <div className="col-12 subtitle">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </div>
          </div>
          <button >Explore More</button>
        </div>
      </div> */}

<div className="home-section-5 ">
  <div className="section-5-text">
    <p>Share your setup with</p>
    <p>#FuniroFurniture</p>
  

</div>
      <div className='img-container container-fluid p-0'>
   <div className='img-sec-1 '>
    <div className='sec-1-1'>
      <img src={img1}/>
      <img src={img3}/>
    </div>
    <div className='sec-1-2'>
      <img src={img2}/>
      <img src={img4}/>
    </div>
   </div>
   <div className='img-sec-2'>
    <img src={img5}/>
   </div>
   <div className='img-sec-3'>
    <div className='sec-3-1'>
      <img src={img7}/>
      <img src={img9}/>
    </div>
    <div className='sec-3-2'>
      <img src={img6}/>
      <img src={img8}/>
    </div>
   </div>
 </div>
 </div>
    </>
  );
}

export default Home;
